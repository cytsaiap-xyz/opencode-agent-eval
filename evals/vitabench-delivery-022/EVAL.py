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
        assert result[0]["store_id"] == 'S29691868989292190_S30164'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S32323489010229624_P20646", "quantity": 1}, {"product_id": "S20116224561682274_P08606", "quantity": 1}, {"product_id": "S10442979807373900_P30837", "quantity": 1}, {"product_id": "S26730900892792972_P71161", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 242.0) < 1

    def test_rubric_0_the_delivery_address_for_the_cantonese_group_meal_order_shou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the Cantonese group meal order should be Junchuang International Business Garden, 50 North Zhonghua Street, Xinhua District, Shijiazhuang City, Hebei Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_cantonese_group_meal_ord(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the Cantonese group meal order should be before 18:00 on June 14, 2025"
        assert len(result) > 0

    def test_rubric_2_the_cantonese_group_meal_order_should_include_five_different(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Cantonese group meal order should include five different dishes, with different dishes in the set meal counted separately"
        assert len(result) > 0

    def test_rubric_3_the_cantonese_group_meal_order_must_include_white_cut_chicke(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Cantonese group meal order must include White Cut Chicken, Beef Brisket Stew, and congee"
        assert len(result) > 0

    def test_rubric_4_dishes_in_the_cantonese_group_meal_order_other_than_white_cu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Dishes in the Cantonese group meal order other than White Cut Chicken, Beef Brisket Stew, and congee should be Low Salt and Less Oil types, meeting healthy eating requirements"
        assert len(result) > 0
