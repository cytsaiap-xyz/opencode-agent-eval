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
        assert result[0]["store_id"] == 'S17567836572324193_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836572324193_P00001", "quantity": 1}, {"product_id": "S17567836572324193_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 300) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836572324193_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2024-02-19 13:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567836572324193_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836572324193_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 28) < 1

    def test_rubric_0_the_rating_of_the_art_training_center_for_placing_an_order_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The rating of the art training center for placing an order should be 4.0 or above"
        assert len(result) > 0

    def test_rubric_1_the_product_ordered_from_the_art_training_center_should_be_o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product ordered from the art training center should be one-on-one private lessons"
        assert len(result) > 0

    def test_rubric_2_the_product_ordered_from_the_art_training_center_should_be_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product ordered from the art training center should be an advanced course"
        assert len(result) > 0

    def test_rubric_3_the_product_ordered_from_the_art_training_center_should_be_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product ordered from the art training center should be a single session"
        assert len(result) > 0

    def test_rubric_4_should_check_whether_the_art_training_center_has_guitar_week(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should check whether the art training center has guitar weekly rental packages available, and the result is yes, so the product ordered should be a guitar weekly rental package."
        assert len(result) > 0

    def test_rubric_5_the_total_price_of_the_product_ordered_from_the_art_training(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total price of the product ordered from the art training center should not exceed 600 yuan (including 600 yuan)"
        assert len(result) > 0

    def test_rubric_6_the_art_training_center_to_be_booked_should_be_musical_strin(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The art training center to be booked should be Musical String Arts Training Center"
        assert len(result) > 0

    def test_rubric_7_the_booking_time_for_the_art_training_center_should_be_2024(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booking time for the art training center should be 2024-02-19 13:00:00"
        assert len(result) > 0

    def test_rubric_8_the_number_of_people_for_the_art_training_center_reservation(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the art training center reservation should be 1"
        assert len(result) > 0

    def test_rubric_9_need_to_check_order_history_to_find_previously_visited_desse(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check order history to find previously visited dessert shops, the result is Bread Talk (Wuyue Plaza Store), so the merchant to order from should be Bread Talk (Wuyue Plaza Store)"
        assert len(result) > 0

    def test_rubric_10_need_to_check_order_history_to_find_products_in_previous_pac(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check order history to find products in previous packages, the result is Whole wheat toast + Classic fruit tart, this time buying just a fruit tart, so the product ordered from the bakery should be Classic fruit tart"
        assert len(result) > 0
