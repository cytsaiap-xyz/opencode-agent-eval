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
        for i, order in enumerate(result):
            if i in {1}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17567844366188652_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567844366188652_P00001", "quantity": 1}, {"product_id": "S17567844366188652_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 856) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567844366188652_I00001'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 2

    def test_rubric_0_the_recommended_seafood_restaurant_is_within_3km__inclusive(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The recommended seafood restaurant is within 3km (inclusive) of Qingdao Film Studio, No.1 Shilaoren Tourist Park, Laoshan District, Qingdao"
        assert len(result) > 0

    def test_rubric_1_the_seafood_restaurant_order_should_include_a_food_set_meal(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The seafood restaurant order should include a food set meal"
        assert len(result) > 0

    def test_rubric_2_the_seafood_restaurant_order_should_include_a_beverage_set_m(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The seafood restaurant order should include a beverage set meal"
        assert len(result) > 0

    def test_rubric_3_for_the_food_set_meal_in_the_seafood_restaurant_order__the_u(self):
        # Structural check - the answer must contain orders that satisfy:
        # "For the food set meal in the seafood restaurant order, the user prefers a three-person set meal, or a two-person set meal if the former is unavailable. The result is available; the ordered food set meal should be a three-person set meal"
        assert len(result) > 0

    def test_rubric_4_for_the_beverage_set_meal_in_the_seafood_restaurant_order__t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "For the beverage set meal in the seafood restaurant order, the user prefers a craft beer set for two, or a drinks set for two if the former is unavailable. The result is available; the ordered beverage set meal should be a craft beer set for two"
        assert len(result) > 0

    def test_rubric_5_the_food_set_meal_and_beverage_set_meal_should_be_from_the_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food set meal and beverage set meal should be from the same seafood restaurant"
        assert len(result) > 0

    def test_rubric_6_the_ordered_food_set_meal_in_the_seafood_restaurant_order_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered food set meal in the seafood restaurant order should include Boston Lobster"
        assert len(result) > 0

    def test_rubric_7_the_ordered_food_set_meal_in_the_seafood_restaurant_order_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered food set meal in the seafood restaurant order should include King Crab"
        assert len(result) > 0

    def test_rubric_8_the_total_price_of_the_seafood_restaurant_order_should_be_wi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total price of the seafood restaurant order should be within 1000 yuan (inclusive)"
        assert len(result) > 0

    def test_rubric_9_the_reserved_seafood_restaurant_should_be_pearl_of_the_sea_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved seafood restaurant should be Pearl of the Sea Seafood Restaurant"
        assert len(result) > 0

    def test_rubric_10_the_distance_between_the_user_s_company_and_the_seafood_rest(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The distance between the user\'s company and the seafood restaurant needs to be checked. If it\'s more than 2km (exclusive), the reservation should be at 18:00:00 on 2024-08-09; otherwise, it should be at 17:30:00 on 2024-08-09. Upon checking, the distance between the user\'s company and the seafood restaurant is 900 meters, which is within 2km (inclusive), so the seafood restaurant reservation time is 17:30:00 on 2024-08-09"
        assert len(result) > 0

    def test_rubric_11_the_number_of_people_for_the_seafood_restaurant_reservation(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the seafood restaurant reservation is 2"
        assert len(result) > 0
