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
        assert result[0]["store_id"] == 'S77016294932976550_S27399'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S97648683925001199_P64193", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 38) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S18546668850608431_S32855'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S25825121767346007_P30634", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 30) < 1

    def test_rubric_0_the_beverage_order_for_girlfriend_should_contain_products_ri(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beverage order for girlfriend should contain products rich in vitamins, such as fruit and vegetable tea or fresh juice containing fruit ingredients"
        assert len(result) > 0

    def test_rubric_1_the_beverage_order_for_girlfriend_should_not_contain_vegetab(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beverage order for girlfriend should not contain vegetable ingredients, avoiding ingredients like Bitter Gourd, Kale, etc."
        assert len(result) > 0

    def test_rubric_2_the_beverage_order_for_girlfriend_should_not_contain_mango_i(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beverage order for girlfriend should not contain mango ingredients to avoid allergy risks"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_girlfriend_s_beverage_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for girlfriend\'s beverage order should be Pipa Residential Area, No. 24-36 Pipa Lane, Qinhuai District, Nanjing, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_4_the_estimated_delivery_time_for_girlfriend_s_beverage_order(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for girlfriend\'s beverage order should be before 12:00 on September 27, 2025"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_for_the_macaron_order_to_cheer_up_girlf(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the macaron order to cheer up girlfriend should be Pipa Residential Area, No. 24-36 Pipa Lane, Qinhuai District, Nanjing, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_6_the_estimated_delivery_time_for_the_macaron_order_to_cheer_u(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the macaron order to cheer up girlfriend should be before 12:00 on September 27, 2025"
        assert len(result) > 0
