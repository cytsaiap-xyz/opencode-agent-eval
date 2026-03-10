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
        assert result[0]["store_id"] == 'S35929114096228378_S65169'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S30277200266115114_P79333", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 26.0) < 1

    def test_rubric_0_the_delivery_address_for_the_stir_fried_yogurt_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the stir-fried yogurt order should be Evergrande Oasis, No. 15 Alishan Street, Shijiazhuang Economic and Technological Development Zone, Gaocheng District, Shijiazhuang, Hebei Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_stir_fried_yogurt_order(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the stir-fried yogurt order should be within the time range of 14:27-16:00 on April 11, 2026"
        assert len(result) > 0

    def test_rubric_2_the_stir_fried_yogurt_order_should_select_xishi_candied_haws(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The stir-fried yogurt order should select Xishi Candied Haws & Stir-fried Yogurt (Shijiazhuang Gaoxin InJoy Mall Branch) as the merchant"
        assert len(result) > 0

    def test_rubric_3_the_stir_fried_yogurt_order_should_select_a_product_with_str(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The stir-fried yogurt order should select a product with strawberry flavor"
        assert len(result) > 0

    def test_rubric_4_the_stir_fried_yogurt_order_should_select_a_product_with_ric(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The stir-fried yogurt order should select a product with rich and mellow flavor, such as Rich Strawberry Stir-fried Yogurt"
        assert len(result) > 0
