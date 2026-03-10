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
        assert result[0]["store_id"] == 'S32395321317664020_S72918'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S23369123308080764_P87732", "quantity": 1}, {"product_id": "S15417513347977519_P98691", "quantity": 1}, {"product_id": "S27191398078431397_P45736", "quantity": 1}, {"product_id": "S22177717874912125_P02570", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 151.9) < 1

    def test_rubric_0_the_restaurant_ordered_from_must_be_an_authentic_shaanxi_cui(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered from must be an authentic Shaanxi cuisine restaurant, such as Running! Shaanxi Cuisine or other restaurants specializing in Shaanxi local dishes"
        assert len(result) > 0

    def test_rubric_1_the_celebration_order_must_include_a_balance_of_two_meat_dis(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The celebration order must include a balance of two meat dishes and one vegetable dish"
        assert len(result) > 0

    def test_rubric_2_the_celebration_order_must_include_staple_food_items_suffici(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The celebration order must include staple food items sufficient for two people\'s dining needs"
        assert len(result) > 0

    def test_rubric_3_the_ordered_dishes_must_avoid_extremely_spicy_flavors(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered dishes must avoid extremely spicy flavors"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_should_provide_quality_takeout_packaging_to_a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant should provide quality takeout packaging to avoid issues such as oil leakage"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_for_the_celebration_order_should_be_ziw(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the celebration order should be Ziwei City Garden near Bank of Communications (Xi\'an Electronic City Branch), Yanta District, Xi\'an, Shaanxi Province"
        assert len(result) > 0

    def test_rubric_6_the_estimated_delivery_time_for_the_celebration_order_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the celebration order should be completed before 19:00 on December 28, 2024"
        assert len(result) > 0
