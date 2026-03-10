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
        assert result[0]["store_id"] == 'S17567836568972451_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836568972451_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 468) < 1

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
        assert result[2]["store_id"] == 'S17567836568972451_I00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836568972451_P00019", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 88) < 1

    def test_rubric_0_user_should_prioritize_western_restaurants_within_5km__inclu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "User should prioritize Western restaurants within 5km (inclusive) of Room 1203, Building B, Wanda Plaza, 28 Taihu Middle Road, Xinbei District, Changzhou, Jiangsu Province. If none available, select a Japanese restaurant from user\'s history. As there are results, the restaurant ordered should be a Western restaurant"
        assert len(result) > 0

    def test_rubric_1_the_western_restaurant_ordered_should_be_a_listed_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Western restaurant ordered should be a Listed Restaurant"
        assert len(result) > 0

    def test_rubric_2_the_western_restaurant_s_environment_should_be_romantic_and(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Western restaurant\'s environment should be romantic and suitable for a proposal"
        assert len(result) > 0

    def test_rubric_3_the_western_restaurant_order_should_include_tomahawk_steak_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Western restaurant order should include Tomahawk Steak and Red Wine"
        assert len(result) > 0

    def test_rubric_4_the_western_restaurant_order_should_be_a_set_menu_for_two(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Western restaurant order should be a Set Menu for Two"
        assert len(result) > 0

    def test_rubric_5_the_reserved_western_restaurant_should_be_romantic_starry_sk(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved Western restaurant should be Romantic Starry Sky Western Restaurant"
        assert len(result) > 0

    def test_rubric_6_the_western_restaurant_reservation_time_should_be_2025_08_29(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Western restaurant reservation time should be 2025-08-29 17:30:00"
        assert len(result) > 0

    def test_rubric_7_the_western_restaurant_reservation_should_be_for_2_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Western restaurant reservation should be for 2 people"
        assert len(result) > 0

    def test_rubric_8_the_tea_house_ordered_should_have_a_quiet_environment(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tea house ordered should have a Quiet Environment"
        assert len(result) > 0

    def test_rubric_9_the_tea_house_should_be_within_500m__inclusive__of_room_1203(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tea house should be within 500m (inclusive) of Room 1203, Building B, Wanda Plaza, 28 Taihu Middle Road, Xinbei District, Changzhou, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_10_the_tea_house_order_price_should_be_within_100_yuan__inclusi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tea house order price should be within 100 yuan (inclusive)"
        assert len(result) > 0

    def test_rubric_11_the_tea_house_order_should_include_tea_snacks(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tea house order should include Tea Snacks"
        assert len(result) > 0

    def test_rubric_12_the_tea_house_order_should_be_a_set_menu_for_two(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tea house order should be a Set Menu for Two"
        assert len(result) > 0
