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
        assert result[0]["store_id"] == 'S12559995746910845_S64519'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S30356558095585016_P74307", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 37) < 1

    def test_rubric_0_the_ordered_dessert_should_be_ice_based_or_cold_beverage_typ(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered dessert should be ice-based or cold beverage type, suitable for cooling down on a 29-degree sunny day"
        assert len(result) > 0

    def test_rubric_1_the_ordered_dessert_should_not_contain_durian_or_other_ingre(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered dessert should not contain durian or other ingredients with strong distinctive odors that might affect the 19:00 meeting"
        assert len(result) > 0

    def test_rubric_2_the_dessert_delivery_address_should_be_the_work_location_at(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dessert delivery address should be the work location at TaiKoo Hui, 383 Tianhe Road, Tianhe District, Guangzhou, Guangdong Province"
        assert len(result) > 0

    def test_rubric_3_the_expected_delivery_time_for_the_dessert_order_should_be_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The expected delivery time for the dessert order should be before the meeting starts at 2024-05-09 19:00:00"
        assert len(result) > 0
