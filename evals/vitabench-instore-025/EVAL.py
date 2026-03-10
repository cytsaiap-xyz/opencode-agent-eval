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
        assert result[0]["store_id"] == 'S17564424227928765_I00004'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564424227928765_P00015", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 228) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564424227928765_I00004'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2024-08-17 13:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564424227928765_I00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564424227928765_P00009", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 128) < 1

    def test_rubric_0_check_tomorrow_s__2024_08_17__weather_forecast__with_the_hig(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Check tomorrow\'s (2024-08-17) weather forecast, with the highest temperature exceeding 35°C, need to invite a bestie with a car to go to a pet grooming shop, so the pet grooming shop should be within 3km (including 3km) from Room 301, Unit 2, Building 5, Shanxi Theater Staff Quarters, 69 Tiyu Road, Xiaodian District, Taiyuan"
        assert len(result) > 0

    def test_rubric_1_the_pet_grooming_shop_s_rating_should_be_greater_than_or_equ(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The pet grooming shop\'s rating should be greater than or equal to 4.5"
        assert len(result) > 0

    def test_rubric_2_the_pet_grooming_service_should_be_a_package_that_includes_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The pet grooming service should be a package that includes Bath, Grooming, and Nail Care"
        assert len(result) > 0

    def test_rubric_3_the_total_price_of_the_pet_grooming_order_should_be_less_tha(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total price of the pet grooming order should be less than or equal to 300 yuan"
        assert len(result) > 0

    def test_rubric_4_the_pet_grooming_appointment_should_be_at_pet_paradise(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The pet grooming appointment should be at Pet Paradise"
        assert len(result) > 0

    def test_rubric_5_check_tomorrow_s__2024_08_17__weather_forecast__with_the_hig(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Check tomorrow\'s (2024-08-17) weather forecast, with the highest temperature exceeding 35°C, need to invite a bestie with a car to go to a pet grooming shop, so the pet grooming shop appointment time should be 2024-08-17 13:00:00"
        assert len(result) > 0

    def test_rubric_6_the_number_of_pet_grooming_appointments_should_be_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of pet grooming appointments should be 1"
        assert len(result) > 0

    def test_rubric_7_the_coffee_shop_should_be_within_1km__including_1km__from_pe(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The coffee shop should be within 1km (including 1km) from Pet Paradise, 145 Changzhi Road, Xiaodian District, Taiyuan"
        assert len(result) > 0

    def test_rubric_8_the_coffee_shop_should_be_a_social_media_check_in_spot(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The coffee shop should be a Social Media Check-in spot"
        assert len(result) > 0

    def test_rubric_9_the_coffee_shop_order_should_be_a_set_for_two_that_includes(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The coffee shop order should be a set for two that includes White Flat White"
        assert len(result) > 0

    def test_rubric_10_the_coffee_shop_order_should_include_low_sugar_dessert(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The coffee shop order should include Low-Sugar Dessert"
        assert len(result) > 0
