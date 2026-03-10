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
        assert result[0]["store_id"] == 'S17564425623716834_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564425623716834_P00001", "quantity": 1}]
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
        assert result[1]["store_id"] == 'S17564425623716834_I00004'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17564425623716834_P00014", "quantity": 1}, {"product_id": "S17564425623716834_P00015", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 188) < 1

    def test_rubric_0_the_hot_pot_restaurant_should_be_within_2km__inclusive__of_c(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hot pot restaurant should be within 2km (inclusive) of Chengdu Wuhou District South Railway Station"
        assert len(result) > 0

    def test_rubric_1_the_hot_pot_set_ordered_should_be_for_four_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hot pot set ordered should be for four people"
        assert len(result) > 0

    def test_rubric_2_the_hot_pot_set_ordered_should_have_a_butter_base(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hot pot set ordered should have a butter base"
        assert len(result) > 0

    def test_rubric_3_the_hot_pot_set_ordered_should_be_within_200_yuan__inclusive(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hot pot set ordered should be within 200 yuan (inclusive)"
        assert len(result) > 0

    def test_rubric_4_the_hot_pot_restaurant_ordered_from_should_be_a_chengdu_loca(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hot pot restaurant ordered from should be a Chengdu local hot pot restaurant"
        assert len(result) > 0

    def test_rubric_5_the_bar_must_have_live_music_performance(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The bar must have live music performance"
        assert len(result) > 0

    def test_rubric_6_the_bar_should_be_a_top_selling_merchant(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The bar should be a top-selling merchant"
        assert len(result) > 0

    def test_rubric_7_agent_should_check_if_there_are_sets_for_two_with_different(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Agent should check if there are sets for two with different cocktails, and finding none; thus the bar order should be two single meals"
        assert len(result) > 0

    def test_rubric_8_since_travel_is_needed_tomorrow__the_cocktail_set_ordered_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Since travel is needed tomorrow, the cocktail set ordered should be low alcohol content"
        assert len(result) > 0

    def test_rubric_9_the_cocktail_set_ordered_should_not_contain_high_sugar_conte(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The cocktail set ordered should not contain high sugar content"
        assert len(result) > 0

    def test_rubric_10_the_bar_order_should_include_two_different_cocktails(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The bar order should include two different cocktails"
        assert len(result) > 0
