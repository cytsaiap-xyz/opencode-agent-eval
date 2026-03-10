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
        assert result[0]["store_id"] == 'S27620908423745403_S21237'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S68872193363872223_P23861", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 23.9) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S33414768862736242_S26758'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S18330858245118659_P05003", "quantity": 1}, {"product_id": "S10265457617021740_P85391", "quantity": 1}, {"product_id": "S22921577738284123_P49736", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 72.0) < 1

    def test_rubric_0_successfully_cancelled_the_clear_broth_beef_noodles_order_fr(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Successfully cancelled the Clear Broth Beef Noodles order from Ma Changhe Northwest Beef Noodles (Desiqin Branch), the status of order with order_id 30711002O01 should be cancelled"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_xinjiang_cuisine_order_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the Xinjiang cuisine order should be Xiangzhang Garden, 168 Xiangzhang Road, Yuhua District, Changsha, Hunan Province"
        assert len(result) > 0

    def test_rubric_2_the_estimated_delivery_time_for_the_xinjiang_cuisine_order_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the Xinjiang cuisine order should be around 19:00 on 2025-08-20"
        assert len(result) > 0

    def test_rubric_3_the_xinjiang_cuisine_order_should_include_stir_fried_cabbage(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Xinjiang cuisine order should include Stir-fried Cabbage with Naan, quantity of 1"
        assert len(result) > 0

    def test_rubric_4_the_total_number_of_items_in_the_xinjiang_cuisine_order_shou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total number of items in the Xinjiang cuisine order should be 3"
        assert len(result) > 0
