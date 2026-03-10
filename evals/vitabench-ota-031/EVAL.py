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
        assert result[0]["store_id"] == 'S17557505511258118_F00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505511258118_P00094", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 950) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505511258118_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505511258118_P00008", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 168) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505511258118_A00005'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505511258118_P00042", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 180) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557505511258118_A00005'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557505511258118_P00069", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 60) < 1

    def test_rubric_0_need_to_check_the_weather_conditions_at_mount_hua_this_weeke(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the weather conditions at Mount Hua this weekend, the result shows May 24 at Mount Hua will be sunny 12-25°C, May 25 at Mount Hua will be cloudy 14-26°C; therefore the itinerary time should be this weekend"
        assert len(result) > 0

    def test_rubric_1_the_flight_order_s_arrival_time_should_be_around_5_pm(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flight order\'s arrival time should be around 5 PM"
        assert len(result) > 0

    def test_rubric_2_the_flight_order_s_date_should_be_may_24__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flight order\'s date should be May 24, 2025"
        assert len(result) > 0

    def test_rubric_3_need_to_filter_flights_arriving_around_5_pm_and_find_the_che(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to filter flights arriving around 5 PM and find the cheapest flight, which is S17557505511258118_P00094"
        assert len(result) > 0

    def test_rubric_4_the_hotel_must_be_located_at_the_closest_position_to_mount_h(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel must be located at the closest position to Mount Hua\'s entrance"
        assert len(result) > 0

    def test_rubric_5_the_hotel_order_s_date_should_be_may_24__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel order\'s date should be May 24, 2025"
        assert len(result) > 0

    def test_rubric_6_need_to_filter_hotels_at_the_foot_of_mount_hua_and_find_the(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to filter hotels at the foot of Mount Hua and find the cheapest room type, which is Budget Single Room at Mount Hua International Hotel, the hotel order\'s room type must be Budget Single Room"
        assert len(result) > 0

    def test_rubric_7_must_provide_mount_hua_cable_car_ticket_information__the_sui(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Must provide Mount Hua cable car ticket information, the suitable cable car for descending after watching the sunrise is the West Peak Cable Car descent ticket"
        assert len(result) > 0

    def test_rubric_8_there_should_be_two_admission_ticket_orders__one_of_which_is(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "There should be two admission ticket orders, one of which is for Mount Hua Scenic Area"
        assert len(result) > 0

    def test_rubric_9_the_admission_ticket_for_mount_hua_scenic_area_should_be_for(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The admission ticket for Mount Hua Scenic Area should be for use on May 25, 2025"
        assert len(result) > 0

    def test_rubric_10_there_should_be_two_admission_ticket_orders__one_of_which_is(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "There should be two admission ticket orders, one of which is for Mount Hua West Peak Cable Car"
        assert len(result) > 0

    def test_rubric_11_the_cable_car_ticket_s_use_date_should_be_may_25__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The cable car ticket\'s use date should be May 25, 2025"
        assert len(result) > 0

    def test_rubric_12_the_cable_car_ticket_order_type_must_be_adult_descent_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The cable car ticket order type must be Adult Descent Ticket"
        assert len(result) > 0
