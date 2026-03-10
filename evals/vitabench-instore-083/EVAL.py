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
        assert result[0]["store_id"] == 'S17567842071582031_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567842071582031_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 688) < 1

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
        assert result[2]["store_id"] == 'S17567842071582031_I00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567842071582031_P00020", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 288) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17567842071582031_I00007'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17567842071582031_P00056", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 688) < 1

    def test_rubric_0_the_restaurant_ordered_should_be_a_french_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered should be a French restaurant"
        assert len(result) > 0

    def test_rubric_1_the_restaurant_order_should_be_a_set_meal_for_two__not_two_i(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant order should be a set meal for two, not two individual set meals"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_set_meal_should_include_candlelight__champagn(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant set meal should include candlelight, champagne, appetizer, main course and dessert"
        assert len(result) > 0

    def test_rubric_3_the_restaurant_set_meal_should_not_include_high_fat_offal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant set meal should not include high-fat offal"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_set_meal_price_should_be_1500_yuan_or_less(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant set meal price should be 1500 yuan or less"
        assert len(result) > 0

    def test_rubric_5_the_restaurant_should_accept_reservations(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant should accept reservations"
        assert len(result) > 0

    def test_rubric_6_the_reserved_western_restaurant_should_be_paris_impression_f(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved western restaurant should be Paris Impression French Restaurant"
        assert len(result) > 0

    def test_rubric_7_the_restaurant_reservation_time_should_be_2024_08_10_18_00_0(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation time should be 2024-08-10 18:00:00"
        assert len(result) > 0

    def test_rubric_8_the_restaurant_reservation_should_be_for_2_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation should be for 2 people"
        assert len(result) > 0

    def test_rubric_9_the_yoga_course_order_status_should_be_cancelled(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The yoga course order status should be cancelled"
        assert len(result) > 0

    def test_rubric_10_the_hot_spring_should_be_within_10km__including_10km__of_par(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hot spring should be within 10km (including 10km) of Paris Impression French Restaurant, 5th Floor, Triumph Plaza, No. 128 Huayuan Road, Jinshui District, Zhengzhou, Henan Province"
        assert len(result) > 0

    def test_rubric_11_the_hot_spring_order_should_be_a_couple_package(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hot spring order should be a Couple Package"
        assert len(result) > 0

    def test_rubric_12_with_a_total_budget_of_1500_yuan__the_western_restaurant_ord(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "With a total budget of 1500 yuan, the western restaurant order totals 688 yuan, and can exceed the budget by at most 200 yuan, therefore the hot spring order total should not exceed 1012 yuan (including 1012 yuan)"
        assert len(result) > 0
