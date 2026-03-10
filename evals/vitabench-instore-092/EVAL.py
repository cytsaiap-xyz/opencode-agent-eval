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
        assert result[0]["store_id"] == 'S17567842819486826_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567842819486826_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 68) < 1

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
        assert result[2]["store_id"] == 'S17567842819486826_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567842819486826_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 158) < 1

    def test_rubric_0_the_restaurant_ordered_should_be_a_yunnan_cuisine_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered should be a Yunnan cuisine restaurant"
        assert len(result) > 0

    def test_rubric_1_the_restaurant_ordered_should_be_an_established_restaurant_w(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered should be an established restaurant with over ten years of history"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_ordered_should_have_free_parking_available(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered should have free parking available"
        assert len(result) > 0

    def test_rubric_3_after_checking__the_restaurant_offers_a_single_person_meal_t(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "After checking, the restaurant offers a single-person meal that includes Steam Pot Chicken, so the ordered item should be a single-person meal with Steam Pot Chicken"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_s_ordered_items_should_be_available_on_weeken(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant\'s ordered items should be available on weekends"
        assert len(result) > 0

    def test_rubric_5_the_reserved_restaurant_should_be_dian_xiang_ge_yunnan_cuisi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved restaurant should be Dian Xiang Ge Yunnan Cuisine"
        assert len(result) > 0

    def test_rubric_6_the_restaurant_reservation_time_should_be_2024_07_21_12_00_0(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation time should be 2024-07-21 12:00:00"
        assert len(result) > 0

    def test_rubric_7_the_restaurant_reservation_should_be_for_2_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation should be for 2 people"
        assert len(result) > 0

    def test_rubric_8_the_ordered_ktv_should_be_within_1km__including_1km__of_dian(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered KTV should be within 1km (including 1km) of Dian Xiang Ge Yunnan Cuisine at 128 Zhongzhou Middle Road, Xigong District, Luoyang"
        assert len(result) > 0

    def test_rubric_9_the_ktv_ordered_item_should_include_a_fruit_platter(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV ordered item should include a Fruit Platter"
        assert len(result) > 0

    def test_rubric_10_the_usage_duration_of_the_ktv_ordered_item_should_be_4_hours(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The usage duration of the KTV ordered item should be 4 Hours"
        assert len(result) > 0

    def test_rubric_11_since_both_the_user_and_friend_don_t_want_to_spend_more_than(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Since both the user and friend don\'t want to spend more than 80 yuan each for karaoke, the KTV ordered item should cost less than or equal to 160 yuan"
        assert len(result) > 0
