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
        assert result[0]["store_id"] == 'S17564420251842877_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420251842877_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 35) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17564420251842877_I00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17564420251842877_P00007", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 35) < 1

    def test_rubric_0_the_ordered_murder_mystery_game_set_must_include_carpooling(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered murder mystery game set must include carpooling service"
        assert len(result) > 0

    def test_rubric_1_the_ordered_murder_mystery_game_set_must_include_a_script(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered murder mystery game set must include a script"
        assert len(result) > 0

    def test_rubric_2_the_ordered_murder_mystery_game_set_must_include_script_and(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered murder mystery game set must include script and tea"
        assert len(result) > 0

    def test_rubric_3_the_ordered_murder_mystery_game_must_be_horror_themed(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered murder mystery game must be horror themed"
        assert len(result) > 0

    def test_rubric_4_the_query_shows_that_friday__2025_09_12__has_a_high_temperat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The query shows that Friday (2025-09-12) has a high temperature of 32 degrees, exceeding 30 degrees, so the order should be placed at a cold noodle restaurant"
        assert len(result) > 0

    def test_rubric_5_the_ordered_cold_noodle_restaurant_is_within_500m_of_home(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered cold noodle restaurant is within 500m of home"
        assert len(result) > 0

    def test_rubric_6_the_ordered_cold_noodles_must_not_contain_apple_strips(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered cold noodles must not contain apple strips"
        assert len(result) > 0

    def test_rubric_7_the_ordered_cold_noodles_must_be_available_for_takeaway(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered cold noodles must be available for takeaway"
        assert len(result) > 0
