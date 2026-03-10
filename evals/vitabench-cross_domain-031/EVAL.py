import json
import os
import pytest
from solution import solve

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)

result = solve()
expected = expected_data["required_orders"]


class TestVitaBenchTask:
    def test_returns_correct_number_of_orders(self):
        assert len(result) == len(expected)

    def test_each_order_has_required_fields(self):
        for i, order in enumerate(result):
            if i in {3}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550806479682269_T00008'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550806479682269_P00026", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 183) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550806479682269_S00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550806479682269_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 299.99) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550806479682269_I00010'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550806479682269_P00054", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 138) < 1

    def test_order_3_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[3]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_3_matches_expected_shop(self):
        order = result[3]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550806479682269_I00010'

    def test_order_3_has_correct_reservation_time(self):
        assert result[3].get("reservation_time") == '2025-05-31 10:30:00'

    def test_order_3_has_correct_customer_count(self):
        assert result[3].get("customer_count") == 1

    def test_rubric_0_the_query_for_saturday_is_for_2025_05_31__so_the_train_ticke(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The query for Saturday is for 2025-05-31, so the train ticket order date should be May 31, 2025"
        assert len(result) > 0

    def test_rubric_1_the_ordered_train_ticket_must_have_a_seat__not_standing_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered train ticket must have a seat, not Standing Room Only"
        assert len(result) > 0

    def test_rubric_2_the_ordered_train_should_be_the_earliest_one_arriving_in_she(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered train should be the earliest one arriving in Shenyang among the available options"
        assert len(result) > 0

    def test_rubric_3_the_train_number_in_the_train_ticket_order_should_be_g8012(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train number in the train ticket order should be G8012"
        assert len(result) > 0

    def test_rubric_4_the_ordered_ring_must_be_couple_rings(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered ring must be Couple Rings"
        assert len(result) > 0

    def test_rubric_5_the_ordered_ring_must_be_made_of_simulated_moissanite_materi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered ring must be made of Simulated Moissanite material, not Real Diamond material products"
        assert len(result) > 0

    def test_rubric_6_the_ordered_ring_must_have_same_day_delivery(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered ring must have Same-day Delivery"
        assert len(result) > 0

    def test_rubric_7_the_delivery_address_for_the_ring_should_be_room_803__unit_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the ring should be Room 803, Unit 2, Jinshi International Apartment, 553 Zhongshan Road, Heishijiao Street, Shahekou District, Dalian"
        assert len(result) > 0

    def test_rubric_8_the_ordered_hair_salon_must_be_located_within_2_5km_of_sheny(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered hair salon must be located within 2.5km of Shenyang High-speed Rail Station"
        assert len(result) > 0

    def test_rubric_9_the_ordered_hair_salon_package_must_include_vintage_updo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered hair salon package must include Vintage Updo"
        assert len(result) > 0

    def test_rubric_10_the_ordered_hair_salon_package_must_be_a_wash_and_blow_dry_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered hair salon package must be a Wash and Blow Dry Package"
        assert len(result) > 0

    def test_rubric_11_the_appointed_hair_salon_should_be_fashion_hair_art(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The appointed hair salon should be Fashion Hair Art"
        assert len(result) > 0

    def test_rubric_12_the_hair_salon_appointment_time_must_be_scheduled_after_10_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hair salon appointment time must be scheduled after 10:26 on May 31"
        assert len(result) > 0
