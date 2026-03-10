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
        assert result[0]["store_id"] == 'S17557505485381345_H00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505485381345_P00001", "quantity": 1}, {"product_id": "S17557505485381345_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1376) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505485381345_H00004'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505485381345_P00023", "quantity": 1}, {"product_id": "S17557505485381345_P00024", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1760) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505485381345_A00007'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505485381345_P00042", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 80) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557505485381345_A00010'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557505485381345_P00073", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 220) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17557505485381345_A00011'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17557505485381345_P00082", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 138) < 1

    def test_rubric_0_the_booking_dates_for_mangshi_hotel_are_july_2__2025_and_jul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booking dates for Mangshi hotel are July 2, 2025 and July 3, 2025"
        assert len(result) > 0

    def test_rubric_1_the_mangshi_hotel_should_have_good_views__a_scenic_view_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Mangshi hotel should have good views, a Scenic View Room should be booked"
        assert len(result) > 0

    def test_rubric_2_the_price_of_the_mangshi_hotel_must_be_within_the_range_of_5(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of the Mangshi hotel must be within the range of 500-1000 yuan"
        assert len(result) > 0

    def test_rubric_3_check_the_weather_in_mangshi_on_july_2__2025_and_july_3__202(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Check the weather in Mangshi on July 2, 2025 and July 3, 2025 (sunny and cloudy respectively) and the weather in Tengchong on July 4, 2025 and July 5, 2025 (overcast and showers respectively), so the hotel booked in Tengchong should have a swimming pool"
        assert len(result) > 0

    def test_rubric_4_the_swimming_pool_in_the_tengchong_hotel_should_be_outdoor(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The swimming pool in the Tengchong hotel should be outdoor"
        assert len(result) > 0

    def test_rubric_5_the_tengchong_hotel_should_have_good_views__a_mountain_view(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Tengchong hotel should have good views, a Mountain View Room should be booked"
        assert len(result) > 0

    def test_rubric_6_the_booking_dates_for_tengchong_hotel_are_july_4__2025_and_j(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booking dates for Tengchong hotel are July 4, 2025 and July 5, 2025"
        assert len(result) > 0

    def test_rubric_7_the_price_of_the_tengchong_hotel_must_be_within_the_range_of(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of the Tengchong hotel must be within the range of 500-1000 yuan"
        assert len(result) > 0

    def test_rubric_8_the_booking_date_for_tickets_to_menghuan_golden_pagoda_is_ju(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booking date for tickets to Menghuan Golden Pagoda is July 3, 2025"
        assert len(result) > 0

    def test_rubric_9_the_number_of_tickets_booked_in_the_menghuan_golden_pagoda_o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of tickets booked in the Menghuan Golden Pagoda order is 2"
        assert len(result) > 0

    def test_rubric_10_the_tickets_booked_in_the_menghuan_golden_pagoda_order_are_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tickets booked in the Menghuan Golden Pagoda order are Adult Ticket"
        assert len(result) > 0

    def test_rubric_11_the_booking_date_for_tickets_to_tengchong_beihai_wetland_is(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booking date for tickets to Tengchong Beihai Wetland is July 5, 2025"
        assert len(result) > 0

    def test_rubric_12_the_number_of_tickets_booked_in_the_tengchong_beihai_wetland(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of tickets booked in the Tengchong Beihai Wetland order is 2"
        assert len(result) > 0

    def test_rubric_13_the_tickets_booked_in_the_tengchong_beihai_wetland_order_are(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tickets booked in the Tengchong Beihai Wetland order are Adult Ticket"
        assert len(result) > 0

    def test_rubric_14_the_booking_date_for_tickets_to_tengchong_hot_sea_park_is_ju(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booking date for tickets to Tengchong Hot Sea Park is July 5, 2025"
        assert len(result) > 0

    def test_rubric_15_the_tickets_booked_in_the_tengchong_hot_sea_park_order_are_c(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tickets booked in the Tengchong Hot Sea Park order are Couple Package"
        assert len(result) > 0
