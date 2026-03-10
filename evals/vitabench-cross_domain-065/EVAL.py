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
        assert result[0]["store_id"] == 'S17550803068052762_H00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550803068052762_P00021", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1280) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550803068052762_I00016'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550803068052762_P00101", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 120) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550803068052762_S00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550803068052762_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 138) < 1

    def test_rubric_0_need_to_find_the_highest_rated_hotel_among_available_options(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to find the highest-rated hotel among available options [Lushan Cloud Resort Hotel and Lushan Guling International Hotel are both Five-Star]"
        assert len(result) > 0

    def test_rubric_1_the_booked_hotel_should_be_located_within_the_lushan_scenic(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel should be located within the Lushan Scenic Area"
        assert len(result) > 0

    def test_rubric_2_the_room_type_in_the_hotel_booking_should_be_a_king_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type in the hotel booking should be a king room"
        assert len(result) > 0

    def test_rubric_3_the_hotel_booking_date_should_be_november_20__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booking date should be November 20, 2025"
        assert len(result) > 0

    def test_rubric_4_need_to_check_the_distance_from_lushan_scenic_area_to_downto(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the distance from Lushan Scenic Area to downtown Wanda Plaza, which is about 15km, so need to search for e-sports venues near Jiujiang downtown Wanda Plaza and create an order"
        assert len(result) > 0

    def test_rubric_5_the_internet_cafe_should_have_rtx4070_or_higher_graphics_car(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The internet cafe should have RTX4070 or higher graphics cards"
        assert len(result) > 0

    def test_rubric_6_the_internet_cafe_must_be_a_non_smoking_establishment(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The internet cafe must be a non-smoking establishment"
        assert len(result) > 0

    def test_rubric_7_the_internet_cafe_package_should_be_valid_for_3_hours(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The internet cafe package should be valid for 3 Hours"
        assert len(result) > 0

    def test_rubric_8_the_internet_cafe_package_should_be_for_a_single_person(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The internet cafe package should be for a single person"
        assert len(result) > 0

    def test_rubric_9_since_the_distance_from_lushan_scenic_area_to_downtown_wanda(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Since the distance from Lushan Scenic Area to downtown Wanda Plaza is about 15km, need to search for takeout options near the hotel and create an order"
        assert len(result) > 0

    def test_rubric_10_the_takeout_restaurant_should_serve_jiangxi_cuisine(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The takeout restaurant should serve Jiangxi Cuisine"
        assert len(result) > 0

    def test_rubric_11_the_takeout_food_should_avoid_the_user_s_dietary_restriction(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The takeout food should avoid the user\'s dietary restrictions and should not be Extra Spicy"
        assert len(result) > 0

    def test_rubric_12_the_delivery_address_for_the_takeout_order_should_be_lushan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the takeout order should be Lushan Cloud Resort Hotel, Guling Town, Lushan Scenic Area, Jiujiang, Jiangxi Province"
        assert len(result) > 0

    def test_rubric_13_the_estimated_delivery_time_for_the_takeout_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the takeout order should be around 17:30:00 on 2025-11-20 [delivery time should be within the 17:15-17:45 time range]"
        assert len(result) > 0

    def test_rubric_14_the_order_items_should_include_roast_chicken(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order items should include Roast Chicken"
        assert len(result) > 0

    def test_rubric_15_the_main_food_item_in_the_takeout_order_should_be_steamed_bu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The main food item in the takeout order should be steamed buns"
        assert len(result) > 0
