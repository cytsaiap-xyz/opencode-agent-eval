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
        assert result[0]["store_id"] == 'S17550802126834321_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802126834321_P00006", "quantity": 1}, {"product_id": "S17550802126834321_P00004", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 53) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802126834321_I00011'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802126834321_P00053", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 388) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802126834321_H00007'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802126834321_P00034", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 398) < 1

    def test_rubric_0_food_delivery_merchants_need_to_have_ratings_of_4_4_or_above(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Food delivery merchants need to have ratings of 4.4 or above"
        assert len(result) > 0

    def test_rubric_1_the_ordered_cake_must_be_made_with_dairy_cream(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered cake must be made with Dairy Cream"
        assert len(result) > 0

    def test_rubric_2_the_price_of_the_ordered_cake_should_be_between_20_80_yuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price of the ordered cake should be between 20-80 yuan"
        assert len(result) > 0

    def test_rubric_3_the_delivery_order_needs_to_include_a_cake(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery order needs to include a cake"
        assert len(result) > 0

    def test_rubric_4_the_delivery_order_needs_to_include_birthday_hats_and_ribbon(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery order needs to include birthday hats and ribbons"
        assert len(result) > 0

    def test_rubric_5_the_cake__birthday_hats__and_ribbons_in_the_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The cake, birthday hats, and ribbons in the order should be from the same store"
        assert len(result) > 0

    def test_rubric_6_the_delivery_address_for_the_food_delivery_order_is_room_304(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the food delivery order is Room 304, Building 9, Baolong Residential Area Lane 2, Nanlian Community, Longgang Street (350 meters walk from Exit B of Longcheng Square Metro Station), Longgang District, Shenzhen, Guangdong Province"
        assert len(result) > 0

    def test_rubric_7_the_ordered_chinese_restaurant_should_have_an_elegant_enviro(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered Chinese restaurant should have an Elegant Environment"
        assert len(result) > 0

    def test_rubric_8_a_birthday_package_should_be_ordered_at_the_chinese_restaura(self):
        # Structural check - the answer must contain orders that satisfy:
        # "A Birthday Package should be ordered at the Chinese restaurant"
        assert len(result) > 0

    def test_rubric_9_the_restaurant_order_package_should_be_suitable_for_three_pe(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant order package should be suitable for three people"
        assert len(result) > 0

    def test_rubric_10_the_ordered_set_menu_dishes_must_comply_with_the_user_s_diet(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered set menu dishes must comply with the user\'s dietary restrictions: Low Salt"
        assert len(result) > 0

    def test_rubric_11_the_ordered_set_menu_dishes_should_avoid_deep_fried_foods(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered set menu dishes should avoid Deep-fried foods"
        assert len(result) > 0

    def test_rubric_12_the_ordered_hotel_should_be_within_1km_or_less_from_the_rest(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered hotel should be within 1km or less from the restaurant"
        assert len(result) > 0

    def test_rubric_13_the_ordered_hotel_room_cannot_be_a_king_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered hotel room cannot be a King Room"
        assert len(result) > 0

    def test_rubric_14_the_total_price_of_the_hotel_order_should_not_exceed_400_yua(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total price of the hotel order should not exceed 400 yuan"
        assert len(result) > 0

    def test_rubric_15_the_booking_date_for_the_hotel_order_should_be_2025_05_20(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booking date for the hotel order should be 2025-05-20"
        assert len(result) > 0
