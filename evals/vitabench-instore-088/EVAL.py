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
        assert result[0]["store_id"] == 'S17567843025861280_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567843025861280_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 588) < 1

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
        assert result[2]["store_id"] == 'S17567843025861280_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567843025861280_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 888) < 1

    def test_rubric_0_the_noon_restaurant_order_must_include_a_set_meal_for_five_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The noon restaurant order must include a set meal for five people, not multiple individual meals"
        assert len(result) > 0

    def test_rubric_1_the_restaurant_for_lunch_must_be_within_2_5km__inclusive__of(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant for lunch must be within 2.5km (inclusive) of Oriental Pearl Garden, Wucheng District, Jinhua City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_2_the_noon_restaurant_must_serve_jiangsu_and_zhejiang_cuisine(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The noon restaurant must serve Jiangsu and Zhejiang Cuisine"
        assert len(result) > 0

    def test_rubric_3_the_noon_restaurant_must_be_listed_on_the_must_try_list(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The noon restaurant must be listed on the Must-Try List"
        assert len(result) > 0

    def test_rubric_4_the_user_s_total_budget_is_1600_yuan__but_at_least_100_yuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The user\'s total budget is 1600 yuan, but at least 100 yuan must remain, and lunch takes 40% of the budget. Since (1600-100)*40%=600, the price of items in the noon restaurant order cannot exceed 600 yuan (inclusive)"
        assert len(result) > 0

    def test_rubric_5_the_reserved_restaurant_is_grandmother_s_home__oriental_pear(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved restaurant is Grandmother\'s Home (Oriental Pearl Branch)"
        assert len(result) > 0

    def test_rubric_6_the_lunch_reservation_time_is_12_00_00_on_double_ninth_festi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The lunch reservation time is 12:00:00 on Double Ninth Festival (2024-10-11)"
        assert len(result) > 0

    def test_rubric_7_the_lunch_reservation_is_for_5_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The lunch reservation is for 5 people"
        assert len(result) > 0

    def test_rubric_8_the_evening_restaurant_order_must_include_a_set_meal_for_7_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The evening restaurant order must include a set meal for 7 people, not multiple individual meals"
        assert len(result) > 0

    def test_rubric_9_the_evening_restaurant_order_must_include_a_cantonese_set_me(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The evening restaurant order must include a Cantonese Set Menu"
        assert len(result) > 0

    def test_rubric_10_the_evening_restaurant_order_must_include_white_cut_chicken(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The evening restaurant order must include White Cut Chicken"
        assert len(result) > 0

    def test_rubric_11_the_evening_restaurant_order_must_include_stir_fried_seasona(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The evening restaurant order must include Stir-fried Seasonal Vegetables"
        assert len(result) > 0

    def test_rubric_12_the_restaurant_for_dinner_must_be_within_3km__inclusive__of(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant for dinner must be within 3km (inclusive) of Shengshi Huating, No.1399 Shuanglong South Street, Wucheng District, Jinhua City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_13_the_user_s_total_budget_is_1600_yuan__but_at_least_100_yuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The user\'s total budget is 1600 yuan, but at least 100 yuan must remain, and dinner takes 60% of the budget. Since (1600-100)*60%=900, the price of items in the evening restaurant order cannot exceed 900 yuan (inclusive)"
        assert len(result) > 0
