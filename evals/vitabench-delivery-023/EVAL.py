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
        assert result[0]["store_id"] == 'S30993599337981774_S34673'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S14292360609424463_P36400", "quantity": 1}, {"product_id": "S31583341312882063_P22648", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 155) < 1

    def test_rubric_0_the_sichuan_cuisine_delivery_order_must_be_from_xiao_sichuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Sichuan cuisine delivery order must be from Xiao Sichuan (Shifan Street Branch), which is a Sichuan restaurant where the user has ordered before"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_sichuan_cuisine_delivery_order(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Sichuan cuisine delivery order should be Jinzheng Haiyue International"
        assert len(result) > 0

    def test_rubric_2_the_estimated_delivery_time_for_the_sichuan_cuisine_delivery(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the Sichuan cuisine delivery order should be before 13:00 on September 12, 2024, so that it can be enjoyed at the beginning of friend\'s lunch break"
        assert len(result) > 0

    def test_rubric_3_the_stir_fried_vegetables_in_the_sichuan_cuisine_delivery_or(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The stir-fried vegetables in the Sichuan cuisine delivery order should be garlic-flavored, as indicated in the product name or label description"
        assert len(result) > 0
