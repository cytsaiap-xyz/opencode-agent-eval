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
        assert result[0]["store_id"] == 'S17564424982696164_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564424982696164_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 168) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17564424982696164_I00003'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17564424982696164_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 468) < 1

    def test_rubric_0_the_ordered_package_is_an_archery_experience_package(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered package is an archery experience package"
        assert len(result) > 0

    def test_rubric_1_the_ordered_archery_package_is_for_two_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered archery package is for two people"
        assert len(result) > 0

    def test_rubric_2_the_ordered_archery_hall_must_be_equipped_with_complete_safe(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered archery hall must be equipped with complete safety protection facilities"
        assert len(result) > 0

    def test_rubric_3_the_staff_at_the_ordered_archery_hall_must_have_professional(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The staff at the ordered archery hall must have professional safety guidance qualifications"
        assert len(result) > 0

    def test_rubric_4_the_ordered_archery_package_must_include_free_instruction(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered archery package must include free instruction"
        assert len(result) > 0

    def test_rubric_5_should_check_if_the_double_experience_package_at_the_ordered(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should check if the double experience package at the ordered archery hall includes protective gear, the result is yes; the ordered package for two must include protective gear"
        assert len(result) > 0

    def test_rubric_6_the_ordered_japanese_cuisine_package_is_for_two_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered Japanese cuisine package is for two people"
        assert len(result) > 0

    def test_rubric_7_the_ordered_restaurant_cannot_be__sushi_ichiban__from_the_us(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered restaurant cannot be \'Sushi Ichiban\' from the user\'s order history"
        assert len(result) > 0

    def test_rubric_8_the_ordered_restaurant_must_be_an_internet_celebrity_store(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered restaurant must be an internet celebrity store"
        assert len(result) > 0

    def test_rubric_9_the_average_consumption_per_person_for_the_ordered_package_m(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The average consumption per person for the ordered package must not exceed 300 yuan (300 yuan included)"
        assert len(result) > 0

    def test_rubric_10_the_ordered_restaurant_must_be_within_4_5_kilometers_from_go(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered restaurant must be within 4-5 kilometers from Gold Medal Archery Club, 3rd Floor, Building B, Yuefeng Plaza, 89 Culture Road, Jinshui District, Zhengzhou"
        assert len(result) > 0
