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
            if i in {2}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550940890083291_H00007'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550940890083291_P00044", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 888) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550940890083291_S00004'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550940890083291_P00022", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 268) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550809567256255_I00013'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 2

    def test_rubric_0_the_hotel_booked_should_be_a_hot_spring_hotel(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booked should be a Hot Spring hotel"
        assert len(result) > 0

    def test_rubric_1_the_booked_hotel_should_have_a_quiet_environment(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel should have a quiet environment"
        assert len(result) > 0

    def test_rubric_2_the_booked_hotel_must_be_clean_and_hygienic(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel must be Clean and Hygienic"
        assert len(result) > 0

    def test_rubric_3_the_room_type_of_the_booked_hotel_should_include_private_hot(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type of the booked hotel should include Private Hot Spring Bath"
        assert len(result) > 0

    def test_rubric_4_need_to_check_the_weather_in_foshan_on_december_28__2025__fo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the weather in Foshan on December 28, 2025 (Foshan weather is rainy, temperature 10-15°C, humidity 78%), rainy day, the hotel check-in date should be December 27, 2025"
        assert len(result) > 0

    def test_rubric_5_the_wine_merchant_should_be_a_wine_specialty_store(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The wine merchant should be a Wine Specialty Store"
        assert len(result) > 0

    def test_rubric_6_the_wine_ordered_should_be_white_wine(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The wine ordered should be White Wine"
        assert len(result) > 0

    def test_rubric_7_the_wine_ordered_should_avoid_sweet_wine_types(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The wine ordered should avoid Sweet wine types"
        assert len(result) > 0

    def test_rubric_8_the_expected_delivery_time_for_the_wine_should_be_december_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The expected delivery time for the wine should be December 26, 2025, 19:00-20:00"
        assert len(result) > 0

    def test_rubric_9_the_wine_delivery_address_should_be_evian_tianhui_north_area(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The wine delivery address should be Evian Tianhui North Area, 60m Southeast of Liangping Road and Zhongchuang Lane Intersection, Nanhai District, Foshan, Guangdong Province"
        assert len(result) > 0

    def test_rubric_10_need_to_check_when_christmas_2025_is__the_result_is_december(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check when Christmas 2025 is, the result is December 25, 2025"
        assert len(result) > 0

    def test_rubric_11_the_restaurant_booked_should_be_a_high_end_restaurant(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant booked should be a High-end Restaurant"
        assert len(result) > 0

    def test_rubric_12_the_restaurant_booked_should_have_a_terrace(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant booked should have a Terrace"
        assert len(result) > 0

    def test_rubric_13_the_location_of_the_booked_restaurant_should_be_within_3000m(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The location of the booked restaurant should be within 3000M of Haibei Creative Park"
        assert len(result) > 0

    def test_rubric_14_the_per_person_cost_of_the_restaurant_s_set_menu_should_be_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The per person cost of the restaurant\'s set menu should be between 150-350 yuan"
        assert len(result) > 0

    def test_rubric_15_the_booked_restaurant_should_offer_fusion_cuisine(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked restaurant should offer Fusion Cuisine"
        assert len(result) > 0

    def test_rubric_16_need_to_book_restaurant_seats_for_christmas__december_25__20(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to book restaurant seats for Christmas (December 25, 2025) at 7 PM"
        assert len(result) > 0

    def test_rubric_17_the_number_of_people_for_the_restaurant_booking_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the restaurant booking should be 2"
        assert len(result) > 0
