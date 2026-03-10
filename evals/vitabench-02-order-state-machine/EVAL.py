import pytest
from datetime import datetime
from order import create_order, transition_order, get_order_total, get_order_lifecycle, get_order_stats

sample_items = [
    {"product_id": "p1", "name": "Widget", "quantity": 2, "unit_price": 10},
    {"product_id": "p2", "name": "Gadget", "quantity": 1, "unit_price": 25},
]


class TestCreateOrder:
    def test_creates_order_with_correct_initial_state(self):
        order = create_order(sample_items)
        assert order["status"] == "created"
        assert order["items"] == sample_items
        assert order["history"] == []
        assert order["id"]
        assert isinstance(order["created_at"], datetime)

    def test_each_order_gets_unique_id(self):
        o1 = create_order(sample_items)
        o2 = create_order(sample_items)
        assert o1["id"] != o2["id"]


class TestTransitionOrderHappyPath:
    def test_created_to_confirmed_with_payment(self):
        order = create_order(sample_items)
        updated = transition_order(order, "confirmed", {
            "payment_info": {"method": "card", "amount": 45}
        })
        assert updated["status"] == "confirmed"
        assert updated["payment_info"] == {"method": "card", "amount": 45}
        assert len(updated["history"]) == 1
        assert updated["history"][0]["from"] == "created"
        assert updated["history"][0]["to"] == "confirmed"

    def test_confirmed_to_preparing_with_stock(self):
        order = create_order(sample_items)
        order = transition_order(order, "confirmed", {
            "payment_info": {"method": "card", "amount": 45}
        })
        order = transition_order(order, "preparing", {"items_in_stock": True})
        assert order["status"] == "preparing"
        assert len(order["history"]) == 2

    def test_preparing_to_delivering_with_driver(self):
        order = create_order(sample_items)
        order = transition_order(order, "confirmed", {
            "payment_info": {"method": "card", "amount": 45}
        })
        order = transition_order(order, "preparing", {"items_in_stock": True})
        order = transition_order(order, "delivering", {"driver_id": "driver-42"})
        assert order["status"] == "delivering"
        assert order["driver_id"] == "driver-42"

    def test_delivering_to_delivered(self):
        order = create_order(sample_items)
        order = transition_order(order, "confirmed", {
            "payment_info": {"method": "card", "amount": 45}
        })
        order = transition_order(order, "preparing", {"items_in_stock": True})
        order = transition_order(order, "delivering", {"driver_id": "driver-42"})
        order = transition_order(order, "delivered")
        assert order["status"] == "delivered"
        assert isinstance(order["delivered_at"], datetime)

    def test_delivered_to_refunded_within_window(self):
        order = create_order(sample_items)
        order = transition_order(order, "confirmed", {
            "payment_info": {"method": "card", "amount": 45}
        })
        order = transition_order(order, "preparing", {"items_in_stock": True})
        order = transition_order(order, "delivering", {"driver_id": "driver-42"})
        delivered_time = datetime(2025, 1, 1, 10, 0, 0)
        order = transition_order(order, "delivered", {"delivered_at": delivered_time})
        # Refund 2 hours later - within 24h window
        refund_time = datetime(2025, 1, 1, 12, 0, 0)
        order = transition_order(order, "refunded", {"current_time": refund_time})
        assert order["status"] == "refunded"


class TestTransitionOrderCancellation:
    def test_cancel_from_created(self):
        order = create_order(sample_items)
        order = transition_order(order, "cancelled", {"reason": "changed mind"})
        assert order["status"] == "cancelled"
        assert order["history"][0]["reason"] == "changed mind"

    def test_cancel_from_confirmed(self):
        order = create_order(sample_items)
        order = transition_order(order, "confirmed", {
            "payment_info": {"method": "card", "amount": 45}
        })
        order = transition_order(order, "cancelled")
        assert order["status"] == "cancelled"

    def test_cancel_from_preparing(self):
        order = create_order(sample_items)
        order = transition_order(order, "confirmed", {
            "payment_info": {"method": "card", "amount": 45}
        })
        order = transition_order(order, "preparing", {"items_in_stock": True})
        order = transition_order(order, "cancelled")
        assert order["status"] == "cancelled"


class TestTransitionOrderInvalid:
    def test_cannot_cancel_from_delivering(self):
        order = create_order(sample_items)
        order = transition_order(order, "confirmed", {
            "payment_info": {"method": "card", "amount": 45}
        })
        order = transition_order(order, "preparing", {"items_in_stock": True})
        order = transition_order(order, "delivering", {"driver_id": "driver-1"})
        with pytest.raises(Exception):
            transition_order(order, "cancelled")

    def test_cannot_cancel_from_delivered(self):
        order = create_order(sample_items)
        order = transition_order(order, "confirmed", {
            "payment_info": {"method": "card", "amount": 45}
        })
        order = transition_order(order, "preparing", {"items_in_stock": True})
        order = transition_order(order, "delivering", {"driver_id": "driver-1"})
        order = transition_order(order, "delivered")
        with pytest.raises(Exception):
            transition_order(order, "cancelled")

    def test_cannot_confirm_without_payment(self):
        order = create_order(sample_items)
        with pytest.raises(Exception):
            transition_order(order, "confirmed")

    def test_cannot_prepare_without_stock(self):
        order = create_order(sample_items)
        order = transition_order(order, "confirmed", {
            "payment_info": {"method": "card", "amount": 45}
        })
        with pytest.raises(Exception):
            transition_order(order, "preparing", {"items_in_stock": False})

    def test_cannot_deliver_without_driver(self):
        order = create_order(sample_items)
        order = transition_order(order, "confirmed", {
            "payment_info": {"method": "card", "amount": 45}
        })
        order = transition_order(order, "preparing", {"items_in_stock": True})
        with pytest.raises(Exception):
            transition_order(order, "delivering")

    def test_cannot_refund_outside_window(self):
        order = create_order(sample_items)
        order = transition_order(order, "confirmed", {
            "payment_info": {"method": "card", "amount": 45}
        })
        order = transition_order(order, "preparing", {"items_in_stock": True})
        order = transition_order(order, "delivering", {"driver_id": "driver-1"})
        delivered_time = datetime(2025, 1, 1, 10, 0, 0)
        order = transition_order(order, "delivered", {"delivered_at": delivered_time})
        # Try to refund 48 hours later
        late_refund = datetime(2025, 1, 3, 10, 0, 0)
        with pytest.raises(Exception):
            transition_order(order, "refunded", {"current_time": late_refund})

    def test_cannot_skip_states_created_to_delivering(self):
        order = create_order(sample_items)
        with pytest.raises(Exception):
            transition_order(order, "delivering")

    def test_cannot_go_backwards_confirmed_to_created(self):
        order = create_order(sample_items)
        order = transition_order(order, "confirmed", {
            "payment_info": {"method": "card", "amount": 45}
        })
        with pytest.raises(Exception):
            transition_order(order, "created")


class TestGetOrderTotal:
    def test_calculates_correct_total(self):
        order = create_order(sample_items)
        assert get_order_total(order) == 45  # 2*10 + 1*25

    def test_handles_single_item(self):
        order = create_order([{"product_id": "p1", "name": "X", "quantity": 3, "unit_price": 7}])
        assert get_order_total(order) == 21


class TestGetOrderLifecycle:
    def test_shows_full_lifecycle(self):
        order = create_order(sample_items)
        order = transition_order(order, "confirmed", {
            "payment_info": {"method": "card", "amount": 45}
        })
        order = transition_order(order, "preparing", {"items_in_stock": True})
        order = transition_order(order, "delivering", {"driver_id": "driver-1"})
        order = transition_order(order, "delivered")
        lifecycle = get_order_lifecycle(order)
        assert lifecycle == "created -> confirmed -> preparing -> delivering -> delivered"

    def test_shows_cancelled_lifecycle(self):
        order = create_order(sample_items)
        order = transition_order(order, "confirmed", {
            "payment_info": {"method": "card", "amount": 45}
        })
        order = transition_order(order, "cancelled")
        lifecycle = get_order_lifecycle(order)
        assert lifecycle == "created -> confirmed -> cancelled"

    def test_shows_just_status_if_no_transitions(self):
        order = create_order(sample_items)
        assert get_order_lifecycle(order) == "created"


class TestGetOrderStats:
    def test_counts_orders_by_status(self):
        orders = []
        orders.append(create_order(sample_items))  # created

        o2 = create_order(sample_items)
        o2 = transition_order(o2, "confirmed", {
            "payment_info": {"method": "card", "amount": 45}
        })
        orders.append(o2)  # confirmed

        orders.append(create_order(sample_items))  # created

        o4 = create_order(sample_items)
        o4 = transition_order(o4, "cancelled")
        orders.append(o4)  # cancelled

        stats = get_order_stats(orders)
        assert stats["created"] == 2
        assert stats["confirmed"] == 1
        assert stats["cancelled"] == 1
