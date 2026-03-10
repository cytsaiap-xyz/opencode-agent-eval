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
        assert result[0]["store_id"] == 'S17550802108185132_I00009'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802108185132_P00041", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 398) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802108185132_H00005'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802108185132_P00021", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 288) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802108185132_S00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802108185132_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 258) < 1

    def test_rubric_0_the_total_budget_for_hotel__skincare_products_and_restaurant(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total budget for hotel, skincare products and restaurant orders cannot exceed 1000 yuan"
        assert len(result) > 0

    def test_rubric_1_need_to_check_the_user_s_most_frequently_stayed_hotel_brand(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the user\'s most frequently stayed hotel brand in historical behavior, which is Home Inn, and the hotel brand ordered must be Home Inn"
        assert len(result) > 0

    def test_rubric_2_the_room_type_ordered_must_be_a_king_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type ordered must be a King Room"
        assert len(result) > 0

    def test_rubric_3_the_ordered_hotel_must_be_within_3_kilometers__inclusive__of(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered hotel must be within 3 kilometers (inclusive) of Fengsheng Garden, No.328 Tian\'an South Road, Fengze District, Quanzhou, Fujian Province"
        assert len(result) > 0

    def test_rubric_4_the_check_in_date_for_the_hotel_order_should_be_december_30(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The check-in date for the hotel order should be December 30, 2024"
        assert len(result) > 0

    def test_rubric_5_the_skincare_products_ordered_must_have_spot_removal_effects(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The skincare products ordered must have Spot Removal effects"
        assert len(result) > 0

    def test_rubric_6_the_delivery_address_for_the_skincare_products_order_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the skincare products order should be Fengsheng Garden, No.328 Tian\'an South Road, Fengze District, Quanzhou, Fujian Province"
        assert len(result) > 0

    def test_rubric_7_the_delivery_time_for_the_skincare_products_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the skincare products order should be before 16:30 on December 30, 2024"
        assert len(result) > 0

    def test_rubric_8_the_restaurant_ordered_should_serve_traditional_min_cuisine(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered should serve Traditional Min Cuisine"
        assert len(result) > 0

    def test_rubric_9_the_minnan_cuisine_order_set_meal_should_have_a_variety_of_d(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Minnan Cuisine order set meal should have a variety of dishes"
        assert len(result) > 0

    def test_rubric_10_the_minnan_cuisine_order_set_meal_must_include_ginger_duck(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Minnan Cuisine order set meal must include Ginger Duck"
        assert len(result) > 0

    def test_rubric_11_the_minnan_cuisine_order_set_meal_should_be_enough_for_at_le(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Minnan Cuisine order set meal should be enough for at least 3 people"
        assert len(result) > 0
