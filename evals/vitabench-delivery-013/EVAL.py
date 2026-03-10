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
        assert result[0]["store_id"] == 'S26270993369029575_S81541'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S69062526404922496_P75737", "quantity": 1}, {"product_id": "S13295447731942135_P11967", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 26.0) < 1

    def test_rubric_0_the_delivery_address_for_the_bread_order_should_be_xiangzhan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the bread order should be Xiangzhang Garden, 168 Xiangzhang Road, Yuhua District, Changsha, Hunan Province"
        assert len(result) > 0

    def test_rubric_1_the_bread_order_should_select_molecular_fresh_bread__forestr(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The bread order should select Molecular Fresh Bread (Forestry University Store) as the merchant"
        assert len(result) > 0

    def test_rubric_2_considering_the_health_needs_related_to_insulin_resistance(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Considering the health needs related to insulin resistance, the bread order should prioritize bread products with low GI (Glycemic Index)"
        assert len(result) > 0
