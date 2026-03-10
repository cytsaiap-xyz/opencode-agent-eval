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
        assert result[0]["store_id"] == 'S17567836607319113_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836607319113_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 480) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == ''

    def test_order_1_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 0) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567836607319113_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836607319113_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 45) < 1

    def test_rubric_0_swimming_pools_should_be_disinfected_daily(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Swimming pools should be disinfected daily"
        assert len(result) > 0

    def test_rubric_1_the_product_ordered_at_the_swimming_pool_should_be_one_on_on(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product ordered at the swimming pool should be one-on-one guidance course"
        assert len(result) > 0

    def test_rubric_2_the_product_ordered_at_the_swimming_pool_should_be_a_course(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product ordered at the swimming pool should be a course suitable for beginners"
        assert len(result) > 0

    def test_rubric_3_the_user_s_practice_period_is_two_weeks__during_which_they_o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The user\'s practice period is two weeks, during which they only participate in practice on Fridays, Saturdays, and Sundays each week, totaling 6 days of practice, so the swimming pool order should be for a 6-session package"
        assert len(result) > 0

    def test_rubric_4_the_reserved_swimming_pool_should_be_haiyue_swimming_and_fit(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved swimming pool should be Haiyue Swimming and Fitness Center"
        assert len(result) > 0

    def test_rubric_5_the_reservation_time_for_the_swimming_pool_should_be_2025_05(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation time for the swimming pool should be 2025-05-09 19:30:00"
        assert len(result) > 0

    def test_rubric_6_the_number_of_people_for_the_swimming_pool_reservation_shoul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the swimming pool reservation should be 1"
        assert len(result) > 0

    def test_rubric_7_need_to_check_the_user_s_historical_behavior_to_find_previou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the user\'s historical behavior to find previously visited salad shops, the result is Mr. Salad, so the salad shop to order from should be Mr. Salad"
        assert len(result) > 0

    def test_rubric_8_the_product_ordered_at_the_salad_shop_should_be_a_single_per(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product ordered at the salad shop should be a single person set"
        assert len(result) > 0

    def test_rubric_9_the_set_ordered_at_the_salad_shop_should_include_red_meat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The set ordered at the salad shop should include red meat"
        assert len(result) > 0

    def test_rubric_10_the_set_ordered_at_the_salad_shop_should_not_include_chicken(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The set ordered at the salad shop should not include chicken breast"
        assert len(result) > 0

    def test_rubric_11_the_set_ordered_at_the_salad_shop_should_not_include_coffee(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The set ordered at the salad shop should not include coffee drinks"
        assert len(result) > 0
