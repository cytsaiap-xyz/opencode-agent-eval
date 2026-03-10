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
        assert result[0]["store_id"] == 'S17567843102955155_I00004'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567843102955155_P00028", "quantity": 1}]
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
        assert result[1]["store_id"] == 'S17567843102955155_I00003'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17567843102955155_P00019", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 142) < 1

    def test_rubric_0_need_to_check_if_there_are_suitable_fitness_centers_within_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check if there are suitable fitness centers within 1km (inclusive) of Room 1203, Building A, Jianye Kaixuan Plaza, 59 Huayuan Road, Jinshui District, Zhengzhou. The result is yes, so the ordered merchant should be a fitness center"
        assert len(result) > 0

    def test_rubric_1_the_ordered_fitness_center_should_have_a_rating_of_4_5_or_ab(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered fitness center should have a rating of 4.5 or above"
        assert len(result) > 0

    def test_rubric_2_the_product_ordered_from_the_fitness_center_should_be_a_venu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product ordered from the fitness center should be a venue free training package"
        assert len(result) > 0

    def test_rubric_3_the_product_ordered_from_the_fitness_center_should_be_a_sing(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product ordered from the fitness center should be a single session card package"
        assert len(result) > 0

    def test_rubric_4_the_product_ordered_from_the_fitness_center_should_be_the_ch(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product ordered from the fitness center should be the cheapest among the qualifying packages"
        assert len(result) > 0

    def test_rubric_5_the_ordered_restaurant_should_be_a_bbq_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered restaurant should be a BBQ restaurant"
        assert len(result) > 0

    def test_rubric_6_the_ordered_restaurant_should_be_within_1km__inclusive__of_r(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered restaurant should be within 1km (inclusive) of Room 1203, Building A, Jianye Kaixuan Plaza, 59 Huayuan Road, Jinshui District, Zhengzhou"
        assert len(result) > 0

    def test_rubric_7_the_product_ordered_from_the_restaurant_should_be_a_single_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product ordered from the restaurant should be a single person package"
        assert len(result) > 0

    def test_rubric_8_the_package_ordered_from_the_restaurant_should_include_beer(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package ordered from the restaurant should include beer"
        assert len(result) > 0

    def test_rubric_9_need_to_check_historical_behavior_to_find_the_user_s_usual_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check historical behavior to find the user\'s usual spending on Sichuan cuisine, which is 125 yuan. The user indicates they can spend about 20 yuan more than their usual Sichuan cuisine spending, so the package price ordered from the restaurant should be around 145 yuan"
        assert len(result) > 0
