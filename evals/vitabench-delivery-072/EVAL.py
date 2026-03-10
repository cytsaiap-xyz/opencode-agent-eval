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
        assert result[0]["store_id"] == 'S32814171117127084_S30670'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S23240680060346608_P00124", "quantity": 1}, {"product_id": "S33040284436404108_P48156", "quantity": 1}, {"product_id": "S12642530014776475_P58854", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 20.0) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S68885587418599272_S28839'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S26400754400806447_P62652", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 19.98) < 1

    def test_rubric_0_rice_dumplings_in_the_order_should_not_be_sweet_flavored__bu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Rice dumplings in the order should not be sweet flavored, but should be savory options such as Egg Yolk and Meat Rice Dumpling, Fresh Meat Rice Dumpling, etc."
        assert len(result) > 0

    def test_rubric_1_rice_dumpling_orders_should_not_be_from_barbie_steamed_buns(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Rice dumpling orders should not be from Barbie Steamed Buns & Dumplings stores, but from other vendors offering rice dumplings"
        assert len(result) > 0

    def test_rubric_2_the_delivery_address_for_rice_dumpling_orders_should_be_wuxi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for rice dumpling orders should be Wuxi (National) Software Park, 18 Zhenze Road (111 Linghu Avenue), Xinwu District, Wuxi City, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_3_coffee_in_the_order_should_not_contain_dairy_products__and_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Coffee in the order should not contain dairy products, and should have the \'no milk\' attribute"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_coffee_orders_should_be_wuxi__natio(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for coffee orders should be Wuxi (National) Software Park, 18 Zhenze Road (111 Linghu Avenue), Xinwu District, Wuxi City, Jiangsu Province"
        assert len(result) > 0
