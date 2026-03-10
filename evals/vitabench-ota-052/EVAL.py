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
        assert result[0]["store_id"] == 'S17557512753054748_H00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557512753054748_P00001", "quantity": 1}, {"product_id": "S17557512753054748_P00002", "quantity": 1}, {"product_id": "S17557512753054748_P00003", "quantity": 1}, {"product_id": "S17557512753054748_P00004", "quantity": 1}, {"product_id": "S17557512753054748_P00005", "quantity": 1}, {"product_id": "S17557512753054748_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 4208) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557512753054748_A00008'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557512753054748_P00086", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 25) < 1

    def test_rubric_0_the_hotel_should_be_within_5km__inclusive__of_the_shaoyang_i(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel should be within 5km (inclusive) of the Shaoyang Intermediate People\'s Court"
        assert len(result) > 0

    def test_rubric_1_the_hotel_price_should_be_between_500_1000_yuan_per_night(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel price should be between 500-1000 yuan per night"
        assert len(result) > 0

    def test_rubric_2_the_booked_hotel_must_provide_ironing_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel must provide Ironing Service"
        assert len(result) > 0

    def test_rubric_3_the_booked_hotel_must_provide_laundry_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel must provide Laundry Service"
        assert len(result) > 0

    def test_rubric_4_the_booked_hotel_must_provide_breakfast(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel must provide breakfast"
        assert len(result) > 0

    def test_rubric_5_the_hotel_reservation_dates_should_be_december_30__2024__dec(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel reservation dates should be December 30, 2024, December 31, 2024, January 01, 2025, January 02, 2025, January 03, 2025, January 04, 2025,"
        assert len(result) > 0

    def test_rubric_6_due_to_the_new_year_s_day__january_01__2025__weather__light(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Due to the New Year\'s Day (January 01, 2025) weather (light rain) being unsuitable for outdoor activities, tickets to Baishuidong Scenic Area should not be purchased, but tickets for indoor attractions should be purchased instead"
        assert len(result) > 0

    def test_rubric_7_the_purchased_tickets_should_be_for_january_01__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased tickets should be for January 01, 2025"
        assert len(result) > 0
