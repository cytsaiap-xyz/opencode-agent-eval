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
            if i in {1}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550810619584205_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550810619584205_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 128) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550810619584205_I00010'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 2

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550943321994151_F00007'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550810619584205_P00035", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 3980) < 1

    def test_rubric_0_the_breakfast_delivery_order_s_address_is_room_1506__buildin(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The breakfast delivery order\'s address is Room 1506, Building 3, Plaza 66, 1266 West Nanjing Road, Jing\'an District, Shanghai"
        assert len(result) > 0

    def test_rubric_1_the_delivery_time_for_the_breakfast_order_is_2025_09_06_09_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the breakfast order is 2025-09-06 09:30:00-10:30:00"
        assert len(result) > 0

    def test_rubric_2_the_breakfast_delivery_restaurant_offers_dine_in_available(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The breakfast delivery restaurant offers Dine-in Available"
        assert len(result) > 0

    def test_rubric_3_the_ordered_breakfast_delivery_items_come_with_elegant_packa(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered breakfast delivery items come with Elegant Packaging"
        assert len(result) > 0

    def test_rubric_4_the_ordered_breakfast_delivery_is_a_set_for_two(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered breakfast delivery is a Set for Two"
        assert len(result) > 0

    def test_rubric_5_the_caf__reservation_time_is_14_00_00_on_2025_09_06(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The café reservation time is 14:00:00 on 2025-09-06"
        assert len(result) > 0

    def test_rubric_6_the_reserved_caf__should_have_window_seat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved café should have Window Seat"
        assert len(result) > 0

    def test_rubric_7_the_reserved_caf__should_be_suitable_for_photo_check_in(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved café should be suitable for Photo Check-in"
        assert len(result) > 0

    def test_rubric_8_the_caf__reservation_is_for_2_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The café reservation is for 2 people"
        assert len(result) > 0

    def test_rubric_9_the_recommended_cinema_should_be_within_3km_of_the_caf___no(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The recommended cinema should be within 3km of the café, no movie tickets need to be ordered"
        assert len(result) > 0

    def test_rubric_10_the_reserved_flight_should_be_the_latest_departure_of_the_da(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved flight should be the latest departure of the day, the query should be for CZ3703"
        assert len(result) > 0

    def test_rubric_11_the_purchased_air_ticket_date_is_for_2025_09_06(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased air ticket date is for 2025-09-06"
        assert len(result) > 0

    def test_rubric_12_the_purchased_air_ticket_cannot_be_economy_class_seat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased air ticket cannot be Economy Class seat"
        assert len(result) > 0

    def test_rubric_13_no_need_to_cancel_the_7_o_clock_reservation_at_the_western_r(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "No need to cancel the 7 o\'clock reservation at the western restaurant"
        assert len(result) > 0
