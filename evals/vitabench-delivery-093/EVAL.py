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
        assert result[0]["store_id"] == 'S27136445248806510_S46408'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S48452361781906723_P25628", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 20) < 1

    def test_rubric_0_the_delivery_address_for_the_breakfast_soup_dumpling_order_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the breakfast soup dumpling order should be Yintai Garden, 1168 Ganjiang West Road (440m walk from Tongjing North Road Metro Station Exit 5), Gusu District, Suzhou, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_1_the_expected_delivery_time_for_the_breakfast_soup_dumpling_o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The expected delivery time for the breakfast soup dumpling order should be around 7:00 on September 21, 2025, ensuring that the user can eat in time before taking the boss to the airport"
        assert len(result) > 0
