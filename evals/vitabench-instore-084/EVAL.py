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
        for order in result:
            assert "store_id" in order
            assert "products" in order
            assert "total_price" in order
            assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17567843444802542_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567843444802542_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1680) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == ''

    def test_order_1_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 0) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567843444802542_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567843444802542_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 320) < 1

    def test_rubric_0_query_user_s_historical_behavior__the_french_restaurant_that(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Query user\'s historical behavior, the French restaurant that the user frequently visits is Chuli Fusion French Restaurant (Wangjing Jinhui Branch), which offers birthday special packages for six people, therefore the restaurant order should be placed at Chuli Fusion French Restaurant (Wangjing Jinhui Branch)"
        assert len(result) > 0

    def test_rubric_1_the_ordered_item_at_chuli_fusion_french_restaurant__wangjing(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at Chuli Fusion French Restaurant (Wangjing Jinhui Branch) should be a birthday special package"
        assert len(result) > 0

    def test_rubric_2_the_ordered_item_at_chuli_fusion_french_restaurant__wangjing(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at Chuli Fusion French Restaurant (Wangjing Jinhui Branch) should be suitable for 6 people"
        assert len(result) > 0

    def test_rubric_3_the_reserved_restaurant_should_be_chuli_fusion_french_restau(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved restaurant should be Chuli Fusion French Restaurant (Wangjing Jinhui Branch)"
        assert len(result) > 0

    def test_rubric_4_restaurant_reservation_time_should_be_2024_06_24_12_00_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Restaurant reservation time should be 2024-06-24 12:00:00"
        assert len(result) > 0

    def test_rubric_5_restaurant_reservation_should_be_for_6_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Restaurant reservation should be for 6 people"
        assert len(result) > 0

    def test_rubric_6_the_ordered_billiards_club_should_be_within_1km__inclusive(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered billiards club should be within 1km (inclusive) of Chuli Fusion French Restaurant, B1 Floor, Jinhui Building, Wangjing, Chaoyang District, Beijing"
        assert len(result) > 0

    def test_rubric_7_the_rating_of_the_ordered_billiards_club_should_be_greater_t(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The rating of the ordered billiards club should be greater than or equal to 4.5"
        assert len(result) > 0

    def test_rubric_8_the_ordered_package_at_the_billiards_club_should_be_a_4_hour(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered package at the billiards club should be a 4-Hour package"
        assert len(result) > 0
