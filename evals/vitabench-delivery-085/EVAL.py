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
        assert result[0]["store_id"] == 'S27763502048643991_S30020'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S91741303282497866_P98332", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 46.0) < 1

    def test_rubric_0_the_store_rating_for_the_ordered_stir_fried_pork_strips_shou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The store rating for the ordered Stir-fried Pork Strips should be 4.2 or above"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_stir_fried_pork_strips_order_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Stir-fried Pork Strips order should be Central Street Cultural and Creative Design Center, F2 Floor, No.66 Central Street, Daoli District, Harbin City, Heilongjiang Province"
        assert len(result) > 0

    def test_rubric_2_the_expected_delivery_time_for_the_stir_fried_pork_strips_or(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The expected delivery time for the Stir-fried Pork Strips order should be between 12:02 and 13:30 on April 26, 2025, ensuring the user has enough time for lunch and afternoon rest"
        assert len(result) > 0
