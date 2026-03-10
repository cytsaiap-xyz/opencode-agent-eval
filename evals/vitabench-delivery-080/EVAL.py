import json
import os
import pytest

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)
with open(os.path.join(_dir, "answer.json")) as _f:
    result = json.load(_f)

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
        assert result[0]["store_id"] == 'S22484608426597067_S56693'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S12558460048992987_P18134", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 25.68) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S22484608426597067_S56693'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S12558460048992987_P18134", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 25.68) < 1

    def test_rubric_0_order_the_product_from_order_g0721005o01_again(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Order the product from order G0721005O01 again"
        assert len(result) > 0
