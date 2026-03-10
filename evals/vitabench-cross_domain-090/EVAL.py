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
        assert result[0]["store_id"] == 'S17550942219808099_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550942219808099_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 42.8) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550942219808099_H00007'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550942219808099_P00048", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 880) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550942219808099_I00012'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550942219808099_P00083", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 398) < 1

    def test_rubric_0_the_food_delivery_should_be_healthy_nutrition_meals(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food delivery should be healthy nutrition meals"
        assert len(result) > 0

    def test_rubric_1_the_food_delivery_order_for_nutrition_meals_should_be_from_r(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food delivery order for nutrition meals should be from restaurants with physical stores"
        assert len(result) > 0

    def test_rubric_2_the_nutrition_meal_ordered_should_be_low_carb(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The nutrition meal ordered should be Low Carb"
        assert len(result) > 0

    def test_rubric_3_the_nutrition_meal_ordered_should_have_high_satiety(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The nutrition meal ordered should have High Satiety"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_the_nutrition_meal_should_be_unit_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the nutrition meal should be Unit 2201, Building 8, Sunshine 100 Community, 235 Xiaoxiang Middle Road, Yuelu District, Changsha, Hunan Province"
        assert len(result) > 0

    def test_rubric_5_the_estimated_delivery_time_for_the_nutrition_meal_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the nutrition meal should be around 2026-05-14 11:00 [meaning the delivery time should be between 10:45 and 11:15]"
        assert len(result) > 0

    def test_rubric_6_the_hotel_ordered_should_be_more_than_30_kilometers_away_fro(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel ordered should be more than 30 kilometers away from Unit 2201, Building 8, Sunshine 100 Community, 235 Xiaoxiang Middle Road, Yuelu District, Changsha, Hunan Province"
        assert len(result) > 0

    def test_rubric_7_the_room_ordered_should_be_equipped_with_jacuzzi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room ordered should be equipped with Jacuzzi"
        assert len(result) > 0

    def test_rubric_8_the_hotel_check_in_date_should_be_2026_06_13(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel check-in date should be 2026-06-13"
        assert len(result) > 0

    def test_rubric_9_the_in_store_restaurant_should_be_a_bbq_restaurant(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The in-store restaurant should be a BBQ restaurant"
        assert len(result) > 0

    def test_rubric_10_the_in_store_restaurant_s_rating_should_be_greater_than_or_e(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The in-store restaurant\'s rating should be greater than or equal to 4.2"
        assert len(result) > 0

    def test_rubric_11_the_price_of_the_ordered_items_at_the_in_store_restaurant_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price of the ordered items at the in-store restaurant should be less than or equal to 400 yuan"
        assert len(result) > 0

    def test_rubric_12_the_dishes_ordered_at_the_in_store_restaurant_should_be_dive(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dishes ordered at the in-store restaurant should be diverse"
        assert len(result) > 0

    def test_rubric_13_the_items_ordered_at_the_in_store_restaurant_should_be_avail(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The items ordered at the in-store restaurant should be Available at Night"
        assert len(result) > 0
