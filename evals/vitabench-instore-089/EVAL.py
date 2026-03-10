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
        assert result[0]["store_id"] == 'S17567845424848621_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567845424848621_P00004", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 328) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17567845424848621_I00009'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17567845424848621_P00073", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 380) < 1

    def test_rubric_0_the_restaurant_ordered_should_have_chinese_courtyard_style_d(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered should have Chinese Courtyard Style decoration"
        assert len(result) > 0

    def test_rubric_1_the_products_ordered_from_the_restaurant_should_be_a_package(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The products ordered from the restaurant should be a package for two people"
        assert len(result) > 0

    def test_rubric_2_the_products_ordered_from_the_restaurant_should_have_a_healt(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The products ordered from the restaurant should have a health cultivation theme"
        assert len(result) > 0

    def test_rubric_3_based_on_inquiries__packages_containing_celery_with_lily_bul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Based on inquiries, packages containing Celery with Lily Bulbs are sold out at eligible restaurants, so the package ordered should include Astragalus Beef"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_package_ordered_cannot_contain_both_celery_wi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant package ordered cannot contain both Celery with Lily Bulbs and Astragalus Beef"
        assert len(result) > 0

    def test_rubric_5_the_meditation_center_should_be_within_2_5_kilometers__inclu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The meditation center should be within 2.5 kilometers (inclusive) from Xinghai Square Commercial Area, Shahekou District, Dalian"
        assert len(result) > 0

    def test_rubric_6_the_product_ordered_from_the_meditation_center_should_be_a_o(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The product ordered from the meditation center should be a one-to-two course package"
        assert len(result) > 0

    def test_rubric_7_the_total_price_of_products_from_the_meditation_center_shoul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total price of products from the meditation center should be less than or equal to 400 yuan"
        assert len(result) > 0
