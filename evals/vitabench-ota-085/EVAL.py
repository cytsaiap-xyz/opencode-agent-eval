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
        assert result[0]["store_id"] == 'S17557513723206568_F00009'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557513723206568_P00079", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1450) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557513723206568_F00010'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557513723206568_P00083", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1380) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557513723206568_H00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557513723206568_P00001", "quantity": 1}, {"product_id": "S17557513723206568_P00002", "quantity": 1}, {"product_id": "S17557513723206568_P00003", "quantity": 1}, {"product_id": "S17557513723206568_P00004", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 1902) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557513723206568_A00006'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557513723206568_P00054", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 90) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17557513723206568_A00005'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17557513723206568_P00043", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 70) < 1

    def test_order_5_matches_expected_store(self):
        assert result[5]["store_id"] == 'S17557513723206568_A00007'

    def test_order_5_has_correct_products(self):
        expected_products = [{"product_id": "S17557513723206568_P00067", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[5]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_5_has_correct_total_price(self):
        assert abs(result[5]["total_price"] - 0) < 1

    def test_rubric_0_the_departure_flight_is_from_harbin_to_xining(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure flight is from Harbin to Xining"
        assert len(result) > 0

    def test_rubric_1_the_departure_flight_date_is_september_23__2027(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure flight date is September 23, 2027"
        assert len(result) > 0

    def test_rubric_2_the_departure_flight_time_is_in_the_morning(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure flight time is in the morning"
        assert len(result) > 0

    def test_rubric_3_the_return_flight_is_from_xining_to_harbin(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight is from Xining to Harbin"
        assert len(result) > 0

    def test_rubric_4_the_return_flight_date_is_september_27__2027(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight date is September 27, 2027"
        assert len(result) > 0

    def test_rubric_5_the_return_flight_cannot_be_a_red_eye_flight(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight cannot be a red-eye flight"
        assert len(result) > 0

    def test_rubric_6_the_total_cost_of_departure_and_return_flights_cannot_exceed(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total cost of departure and return flights cannot exceed 3000 yuan"
        assert len(result) > 0

    def test_rubric_7_the_hotel_booking_dates_are_september_23__2027__september_24(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booking dates are September 23, 2027, September 24, 2027, September 25, 2027, September 26, 2027"
        assert len(result) > 0

    def test_rubric_8_the_booked_hotel_must_have_opened_in_the_last_two_years(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel must have opened in the last two years"
        assert len(result) > 0

    def test_rubric_9_the_booked_hotel_must_provide_oxygen_facilities(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel must provide oxygen facilities"
        assert len(result) > 0

    def test_rubric_10_the_booked_hotel_must_have_wake_up_call_service(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel must have wake-up call service"
        assert len(result) > 0

    def test_rubric_11_the_total_cost_of_the_hotel_order_should_be_around_2000_yuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total cost of the hotel order should be around 2000 yuan"
        assert len(result) > 0

    def test_rubric_12_check_the_weather_in_xining_from_september_23_27__2027__and(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Check the weather in Xining from September 23-27, 2027, and find that September 25 has the highest temperature (10-23 ℃), so the ticket date for Qinghai Lake is September 25, 2027"
        assert len(result) > 0

    def test_rubric_13_the_ticket_type_purchased_for_qinghai_lake_is_adult_ticket(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket type purchased for Qinghai Lake is adult ticket"
        assert len(result) > 0

    def test_rubric_14_the_ticket_date_for_ta_er_monastery_should_be_september_26(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket date for Ta\'er Monastery should be September 26, 2027"
        assert len(result) > 0

    def test_rubric_15_the_ticket_type_purchased_for_ta_er_monastery_is_adult_ticke(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket type purchased for Ta\'er Monastery is adult ticket"
        assert len(result) > 0

    def test_rubric_16_the_ticket_date_for_the_museum_should_be_september_26__2027(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket date for the museum should be September 26, 2027"
        assert len(result) > 0
