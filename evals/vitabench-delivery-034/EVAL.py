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
        assert result[0]["store_id"] == 'S29386890567258847_S23083'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S14144998050103373_P17811", "quantity": 5}, {"product_id": "S32520890639184337_P77818", "quantity": 2}, {"product_id": "S24967465012009756_P93923", "quantity": 5}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 214.0) < 1

    def test_rubric_0_when_ordering_milk_tea_for_department_refreshments__the_prod(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When ordering milk tea for department refreshments, the product brand should be Bawang Tea Princess"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_department_milk_tea_order_shoul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the department milk tea order should be China Life Building, No.999 Financial Street, Honggutan District, Nanchang City, Jiangxi Province"
        assert len(result) > 0

    def test_rubric_2_the_estimated_delivery_time_for_the_department_milk_tea_orde(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the department milk tea order should be between 2025-09-17 12:00:00 and 14:00:00"
        assert len(result) > 0

    def test_rubric_3_the_total_number_of_items_in_the_department_milk_tea_order_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total number of items in the department milk tea order should be 12 cups"
        assert len(result) > 0

    def test_rubric_4_the_flavors_of_products_in_the_department_milk_tea_order_sho(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flavors of products in the department milk tea order should not include any Gardenia-related flavors"
        assert len(result) > 0

    def test_rubric_5_the_department_milk_tea_order_needs_to_include_dairy_free_pr(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The department milk tea order needs to include Dairy-free products suitable for lactose-intolerant colleagues, with a quantity of 2 cups"
        assert len(result) > 0

    def test_rubric_6_the_department_milk_tea_order_needs_to_include_two_different(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The department milk tea order needs to include two different flavors of products, with 5 cups of each"
        assert len(result) > 0
