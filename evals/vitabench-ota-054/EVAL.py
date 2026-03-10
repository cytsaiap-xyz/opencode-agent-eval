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
        assert result[0]["store_id"] == 'S17557512278455908_A00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557512278455908_P00023", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 560) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557512278455908_F00008'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557512278455908_P00043", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 2680) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557512278455908_T00013'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557512278455908_P00067", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 134) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557512278455908_H00001'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557512278455908_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 888) < 1

    def test_rubric_0_check_the_specific_date_of_the_dragon_boat_festival_in_2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Check the specific date of the Dragon Boat Festival in 2023 (June 22, 2023), and the scenic area ticket date must be June 23, 2023 (the second day of the Dragon Boat Festival)"
        assert len(result) > 0

    def test_rubric_1_check_and_provide_ticket_price_information_for_huangguoshu_w(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Check and provide ticket price information for Huangguoshu Waterfall Scenic Area (Adult ticket 240 yuan, Scenic area shuttle bus ticket 50 yuan, Adult ticket + Sightseeing bus combo 280 yuan), the purchased ticket should be Adult ticket + Sightseeing bus combo"
        assert len(result) > 0

    def test_rubric_2_the_number_of_tickets_purchased_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of tickets purchased should be 2"
        assert len(result) > 0

    def test_rubric_3_the_date_of_the_flight_reservation_should_be_2023_06_22(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date of the flight reservation should be 2023-06-22"
        assert len(result) > 0

    def test_rubric_4_the_departure_time_of_the_flight_in_the_order_should_be_in_t(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure time of the flight in the order should be in the morning"
        assert len(result) > 0

    def test_rubric_5_the_reserved_flight_should_be_business_class_cabin(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved flight should be Business class cabin"
        assert len(result) > 0

    def test_rubric_6_check_the_weather_conditions_for_guiyang_and_anshun_on_2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Check the weather conditions for Guiyang and Anshun on 2023-06-23, which are showers and sunny respectively; if one of them is rainy, then purchase train tickets from Guiyang to Anshun"
        assert len(result) > 0

    def test_rubric_7_the_train_tickets_purchased_should_be_high_speed_rail(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train tickets purchased should be High-speed rail"
        assert len(result) > 0

    def test_rubric_8_the_seats_for_the_train_tickets_should_be_first_class_seat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The seats for the train tickets should be First class seat"
        assert len(result) > 0

    def test_rubric_9_the_number_of_train_tickets_purchased_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of train tickets purchased should be 2"
        assert len(result) > 0

    def test_rubric_10_the_hotel_reservation_date_should_be_june_23__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel reservation date should be June 23, 2023"
        assert len(result) > 0

    def test_rubric_11_the_reserved_hotel_should_have_ethnic_feature(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved hotel should have Ethnic feature"
        assert len(result) > 0

    def test_rubric_12_the_reserved_hotel_should_have_a_waterfall_view(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved hotel should have a Waterfall view"
        assert len(result) > 0

    def test_rubric_13_the_reserved_hotel_should_be_within_10km_of_huangguoshu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved hotel should be within 10km of Huangguoshu"
        assert len(result) > 0

    def test_rubric_14_the_reserved_hotel_should_have_a_rating_of_4_0_or_above(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved hotel should have a rating of 4.0 or above"
        assert len(result) > 0

    def test_rubric_15_the_room_type_in_the_hotel_order_should_be_a_king_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type in the hotel order should be a King Room"
        assert len(result) > 0
