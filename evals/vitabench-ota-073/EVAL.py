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
        assert result[0]["store_id"] == 'S17557512531967139_F00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557512531967139_P00091", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 3840) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557512531967139_F00011'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557512531967139_P00103", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 3540) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557512531967139_H00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557512531967139_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 850) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557512531967139_H00002'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557512531967139_P00017", "quantity": 1}, {"product_id": "S17557512531967139_P00018", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 1200) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17557512531967139_A00006'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17557512531967139_P00065", "quantity": 1}, {"product_id": "S17557512531967139_P00064", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 23) < 1

    def test_order_5_matches_expected_store(self):
        assert result[5]["store_id"] == 'S17557512531967139_A00005'

    def test_order_5_has_correct_products(self):
        expected_products = [{"product_id": "S17557512531967139_P00051", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[5]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_5_has_correct_total_price(self):
        assert abs(result[5]["total_price"] - 18) < 1

    def test_rubric_0_compare_different_dates_for_round_trip_flights_between_shang(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Compare different dates for round-trip flights between Shanghai and Ho Chi Minh City and choose the cheapest option, while ensuring a 4-day stay in Ho Chi Minh City. Calculations show that the departure flight date should be 2024-12-30"
        assert len(result) > 0

    def test_rubric_1_the_departure_flight_should_be_economy_class(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure flight should be Economy Class"
        assert len(result) > 0

    def test_rubric_2_the_number_of_departure_flight_tickets_to_purchase_is_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of departure flight tickets to purchase is 3"
        assert len(result) > 0

    def test_rubric_3_the_departure_flight_is_from_shanghai_to_ho_chi_minh_city(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure flight is from Shanghai to Ho Chi Minh City"
        assert len(result) > 0

    def test_rubric_4_compare_different_dates_for_round_trip_flights_between_shang(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Compare different dates for round-trip flights between Shanghai and Ho Chi Minh City and choose the cheapest option, while ensuring a 4-day stay in Ho Chi Minh City. Calculations show that the return flight date should be 2025-01-02"
        assert len(result) > 0

    def test_rubric_5_the_return_flight_should_be_economy_class(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return flight should be Economy Class"
        assert len(result) > 0

    def test_rubric_6_the_number_of_return_flight_tickets_to_purchase_is_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of return flight tickets to purchase is 3"
        assert len(result) > 0

    def test_rubric_7_the_return_flight_is_from_ho_chi_minh_city_to_shanghai(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return flight is from Ho Chi Minh City to Shanghai"
        assert len(result) > 0

    def test_rubric_8_the_hotel_for_the_first_night_should_be_five_star(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel for the first night should be five-star"
        assert len(result) > 0

    def test_rubric_9_the_hotel_for_the_first_night_should_include_spa_services(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel for the first night should include spa services"
        assert len(result) > 0

    def test_rubric_10_the_hotel_booking_for_the_first_night_should_be_for_december(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booking for the first night should be for December 30, 2024"
        assert len(result) > 0

    def test_rubric_11_the_room_type_for_the_first_night_hotel_booking_should_be_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type for the first night hotel booking should be a Twin Room"
        assert len(result) > 0

    def test_rubric_12_the_nightly_rate_for_the_first_night_hotel_room_should_not_e(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The nightly rate for the first night hotel room should not exceed 1000 yuan"
        assert len(result) > 0

    def test_rubric_13_the_hotel_for_the_next_two_nights_should_have_local_features(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel for the next two nights should have Local Features"
        assert len(result) > 0

    def test_rubric_14_the_hotel_bookings_for_the_next_two_nights_should_be_for_dec(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel bookings for the next two nights should be for December 31, 2024 and January 01, 2025"
        assert len(result) > 0

    def test_rubric_15_the_room_type_for_the_next_two_nights_hotel_booking_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type for the next two nights hotel booking should be a Twin Room"
        assert len(result) > 0

    def test_rubric_16_the_nightly_rate_for_the_next_two_nights_hotel_room_should_n(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The nightly rate for the next two nights hotel room should not exceed 1000 yuan"
        assert len(result) > 0

    def test_rubric_17_the_independence_palace_attraction_booking_date_should_be_de(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Independence Palace attraction booking date should be December 31, 2024"
        assert len(result) > 0

    def test_rubric_18_the_independence_palace_attraction_booking_should_include_ad(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Independence Palace attraction booking should include Adult Ticket"
        assert len(result) > 0

    def test_rubric_19_the_number_of_adult_tickets_for_the_independence_palace_attr(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of Adult Tickets for the Independence Palace attraction should be 1"
        assert len(result) > 0

    def test_rubric_20_the_independence_palace_attraction_booking_should_include_ch(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Independence Palace attraction booking should include Child Ticket"
        assert len(result) > 0

    def test_rubric_21_the_number_of_child_tickets_for_the_independence_palace_attr(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of Child Tickets for the Independence Palace attraction should be 1"
        assert len(result) > 0

    def test_rubric_22_the_ho_chi_minh_fine_arts_museum_booking_date_should_be_janu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Ho Chi Minh Fine Arts Museum booking date should be January 01, 2025"
        assert len(result) > 0

    def test_rubric_23_the_tickets_purchased_for_the_ho_chi_minh_fine_arts_museum_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tickets purchased for the Ho Chi Minh Fine Arts Museum should be Family Package (2 Adults + 1 Child)"
        assert len(result) > 0
