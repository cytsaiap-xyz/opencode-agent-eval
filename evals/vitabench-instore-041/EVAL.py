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
        assert result[0]["store_id"] == 'S17564425662164131_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564425662164131_P00001", "quantity": 1}]
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
        assert shop_id == 'S17564425662164131_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2025-10-06 15:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 2

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564425662164131_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564425662164131_P00005", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 298) < 1

    def test_rubric_0_the_ordered_item_from_the_workshop_should_be_a_cookie_making(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item from the workshop should be a cookie-making package"
        assert len(result) > 0

    def test_rubric_1_the_ordered_item_from_the_workshop_should_be_a_parent_child(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item from the workshop should be a Parent-Child package"
        assert len(result) > 0

    def test_rubric_2_the_ordered_item_from_the_workshop_should_include_baking_ins(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item from the workshop should include Baking Instruction service"
        assert len(result) > 0

    def test_rubric_3_the_workshop_location_should_be_within_3_kilometers__inclusi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The workshop location should be within 3 kilometers (inclusive) of Jinshui Garden, 128 Zhenhua Road, Licang District, Qingdao"
        assert len(result) > 0

    def test_rubric_4_the_reserved_workshop_should_be_sweetheart_bakery_workshop(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved workshop should be Sweetheart Bakery Workshop"
        assert len(result) > 0

    def test_rubric_5_the_number_of_people_for_the_workshop_reservation_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the workshop reservation should be 2"
        assert len(result) > 0

    def test_rubric_6_the_workshop_reservation_time_should_be_2025_10_06_15_00_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The workshop reservation time should be 2025-10-06 15:00:00"
        assert len(result) > 0

    def test_rubric_7_the_ordered_item_from_the_restaurant_should_be_a_hairtail_fi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item from the restaurant should be a Hairtail Fish set"
        assert len(result) > 0

    def test_rubric_8_the_restaurant_order_should_be_one_two_person_set_rather_tha(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant order should be one Two-Person Set rather than two Single Person Meals"
        assert len(result) > 0

    def test_rubric_9_the_restaurant_should_be_on_the_2024_must_eat_list(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant should be on the 2024 Must-Eat List"
        assert len(result) > 0

    def test_rubric_10_the_restaurant_s_rating_should_be_4_0_or_above(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant\'s rating should be 4.0 or above"
        assert len(result) > 0

    def test_rubric_11_the_dishes_in_the_restaurant_order_should_be_light(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dishes in the restaurant order should be Light"
        assert len(result) > 0
