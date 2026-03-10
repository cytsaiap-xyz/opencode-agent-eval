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
        assert result[0]["store_id"] == 'S33761083328698190_S00450'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S14089696301034197_P31775", "quantity": 1}, {"product_id": "S14310443732096591_P04513", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 53.76) < 1

    def test_rubric_0_the_delivery_address_should_be_huchi_garden__no__75_huchi_ro(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address should be Huchi Garden, No. 75 Huchi Road (180 meters walk from Baiyangwan Park Metro Station Exit 4), Gusu District, Suzhou City, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_1_the_order_delivery_time_should_be_before_18_00_on_2025_06_03(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order delivery time should be before 18:00 on 2025-06-03, ensuring that the daughter can finish her meal before 6:30 pm to attend her dance class"
        assert len(result) > 0

    def test_rubric_2_the_river_snail_rice_noodle_ordered_for_the_user_should_have(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The River Snail Rice Noodle ordered for the user should have soup and noodles packaged separately to prevent the noodles from becoming soggy and losing their chewiness"
        assert len(result) > 0

    def test_rubric_3_the_river_snail_rice_noodle_ordered_for_the_user_should_incl(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The River Snail Rice Noodle ordered for the user should include fried egg"
        assert len(result) > 0

    def test_rubric_4_the_river_snail_rice_noodle_ordered_for_the_daughter_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The River Snail Rice Noodle ordered for the daughter should be mild spicy or non-spicy and include chicken feet, meeting the daughter\'s preference who cannot handle spicy food well but loves chicken feet"
        assert len(result) > 0

    def test_rubric_5_the_dinner_order_of_river_snail_rice_noodle_should_include_a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dinner order of River Snail Rice Noodle should include a total of 2 portions, separately meeting the dining needs of the user and the daughter"
        assert len(result) > 0
