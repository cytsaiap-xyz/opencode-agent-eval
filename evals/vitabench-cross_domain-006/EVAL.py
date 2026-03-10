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
        assert result[0]["store_id"] == 'S17550802127833850_H00006'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802127833850_P00035", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 688) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550802127833850_I00011'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802127833850_S00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802127833850_P00002", "quantity": 2}, {"product_id": "S17550802127833850_P00003", "quantity": 1}, {"product_id": "S17550931962268303_P00004", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 184.1) < 1

    def test_rubric_0_the_hotel_booked_must_be_pet_friendly(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booked must be pet-friendly"
        assert len(result) > 0

    def test_rubric_1_the_hotel_booked_must_have_a_massage_bathtub(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booked must have a Massage Bathtub"
        assert len(result) > 0

    def test_rubric_2_the_hotel_booking_date_should_be_2025_04_24(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booking date should be 2025-04-24"
        assert len(result) > 0

    def test_rubric_3_the_booked_hotel_should_be_within_6km__inclusive__of_the_spo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel should be within 6km (inclusive) of the sports center"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_booked_should_be_within_3km__inclusive__of_th(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant booked should be within 3km (inclusive) of the sports center"
        assert len(result) > 0

    def test_rubric_5_the_restaurant_booked_must_allow_pets(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant booked must allow pets"
        assert len(result) > 0

    def test_rubric_6_the_restaurant_booked_must_have_nutritional_meals_designed_f(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant booked must have nutritional meals designed for athletes"
        assert len(result) > 0

    def test_rubric_7_the_restaurant_reservation_time_should_be_13_00_00_on_2025_0(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation time should be 13:00:00 on 2025-04-25"
        assert len(result) > 0

    def test_rubric_8_the_restaurant_reservation_should_be_for_1_person(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation should be for 1 person"
        assert len(result) > 0

    def test_rubric_9_the_delivery_address_for_the_pet_food_order_should_be_athlet(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the pet food order should be Athletes\' Nutrition Restaurant, 35 Keyuan Avenue, Xixiangtang District, Nanning, Guangxi Province"
        assert len(result) > 0

    def test_rubric_10_the_expected_delivery_time_for_the_pet_food_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The expected delivery time for the pet food order should be around 13:00 on 2025-04-25 [meaning the expected delivery time should be within the 12:45-13:15 timeframe]"
        assert len(result) > 0

    def test_rubric_11_the_pet_food_order_should_include_chicken_breast(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The pet food order should include Chicken Breast"
        assert len(result) > 0

    def test_rubric_12_the_pet_food_order_should_include_canned_pet_snacks(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The pet food order should include canned pet snacks"
        assert len(result) > 0

    def test_rubric_13_the_pet_food_order_should_include_a_dog_food_bowl(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The pet food order should include a dog food bowl"
        assert len(result) > 0

    def test_rubric_14_all_items_in_the_pet_food_order_should_be_from_the_same_stor(self):
        # Structural check - the answer must contain orders that satisfy:
        # "All items in the pet food order should be from the same store"
        assert len(result) > 0

    def test_rubric_15_the_quantity_of_chicken_breast_in_the_pet_food_order_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of Chicken Breast in the pet food order should be 2"
        assert len(result) > 0

    def test_rubric_16_the_quantity_of_canned_pet_snacks_in_the_pet_food_order_shou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of canned pet snacks in the pet food order should be 1"
        assert len(result) > 0

    def test_rubric_17_the_quantity_of_dog_food_bowl_in_the_pet_food_order_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of dog food bowl in the pet food order should be 1"
        assert len(result) > 0
