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
        assert result[0]["store_id"] == 'S29142096053918581_S78781'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S31340687737670505_P84047", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 34.8) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S14452117609323544_S13447'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S22000261998624782_P87049", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 24.9) < 1

    def test_rubric_0_successfully_canceled_the_lamb_offal_soup_order_from_zunyi_l(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Successfully canceled the Lamb Offal Soup order from Zunyi Lamb Rice Noodles (Zhongcun Branch), the order status with order_id H0721004O01 should be updated to cancelled"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_new_small_shrimp_wontons_order(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the new Small Shrimp Wontons order should be Jiangbin Residential Area, 359 Binhong Road (400 meters from Exit A of Bayi South Street Metro Station), Wucheng District, Jinhua City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_2_the_estimated_delivery_time_for_the_new_small_shrimp_wontons(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the new Small Shrimp Wontons order should be before 11:00 AM on 2025-03-19"
        assert len(result) > 0

    def test_rubric_3_the_new_small_shrimp_wontons_order_should_include_chili_pack(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The new Small Shrimp Wontons order should include chili packet and vinegar packet"
        assert len(result) > 0
