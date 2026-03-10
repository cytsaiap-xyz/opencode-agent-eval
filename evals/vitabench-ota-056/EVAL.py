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
        assert result[0]["store_id"] == 'S17557511697936893_F00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557511697936893_P00118", "quantity": 7}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 5460) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557511697936893_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557511697936893_P00001", "quantity": 3}, {"product_id": "S17557511697936893_P00012", "quantity": 3}, {"product_id": "S17557511697936893_P00003", "quantity": 3}, {"product_id": "S17557511697936893_P00009", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 4056) < 1

    def test_rubric_0_january_29__2025_is_spring_festival__the_user_wants_all_five(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "January 29, 2025 is Spring Festival. The user wants all five days of the trip to be workdays, so the trip should be from January 20, 2025 to January 24, 2025, with the departure flight on January 20, 2025"
        assert len(result) > 0

    def test_rubric_1_the_departure_flight_cannot_be_a_red_eye_flight(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure flight cannot be a red-eye flight"
        assert len(result) > 0

    def test_rubric_2_the_departure_flight_seat_type_should_be_economy_class(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure flight seat type should be Economy class"
        assert len(result) > 0

    def test_rubric_3_the_number_of_departure_flight_tickets_should_be_7(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of departure flight tickets should be 7"
        assert len(result) > 0

    def test_rubric_4_the_departure_flight_should_be_from_chengdu_to_nanjing(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure flight should be from Chengdu to Nanjing"
        assert len(result) > 0

    def test_rubric_5_the_hotel_should_be_within_1km_range_of_qinhuai_river__exclu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel should be within 1km range of Qinhuai River (excluding exactly 1km)"
        assert len(result) > 0

    def test_rubric_6_the_hotel_budget_should_be_300_500_yuan_per_night(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel budget should be 300-500 yuan per night"
        assert len(result) > 0

    def test_rubric_7_the_hotel_should_not_be_any_of_these_brands__home_inn_hantin(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel should not be any of these brands: Home Inn/Hanting/7 Days/Ji Hotel/Jinjiang Inn"
        assert len(result) > 0

    def test_rubric_8_the_hotel_should_be_a_chain_brand(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel should be a chain brand"
        assert len(result) > 0

    def test_rubric_9_the_hotel_booking_should_include_3_twin_rooms_per_night(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booking should include 3 twin rooms per night"
        assert len(result) > 0

    def test_rubric_10_the_hotel_booking_should_include_twin_rooms_for_4_nights__sp(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booking should include twin rooms for 4 nights, specifically for January 20, 2025, January 21, 2025, January 22, 2025, and January 23, 2025"
        assert len(result) > 0
