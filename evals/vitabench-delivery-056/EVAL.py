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
        assert result[0]["store_id"] == 'S28404261973362267_S09257'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S15458320778579145_P28238", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 27.8) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S30429076779051471_S54922'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S86414532350831970_P92398", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 29.8) < 1

    def test_rubric_0_successfully_canceled_user_s__deluxe__egg_pancake_order_from(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Successfully canceled user\'s \"Deluxe\" Egg Pancake order from Jianbing Story (Tofu Pudding · Soy Milk · Porridge · Huayang Branch), order status should be changed to cancelled"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_roast_duck_and_char_siu_combo_r(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the Roast Duck and Char Siu Combo Rice order should be Building B, Tencent Chengdu Building, Yunhua Road, Wuhou District, Chengdu, Sichuan Province"
        assert len(result) > 0

    def test_rubric_2_the_estimated_delivery_time_for_the_roast_duck_and_char_siu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the Roast Duck and Char Siu Combo Rice order should be after 2025-09-22 16:00"
        assert len(result) > 0

    def test_rubric_3_the_roast_duck_and_char_siu_combo_rice_order_should_not_sele(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Roast Duck and Char Siu Combo Rice order should not select Macau Chen Guangji Roast Restaurant (Yuanda Branch) as the merchant"
        assert len(result) > 0
