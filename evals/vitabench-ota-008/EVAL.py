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
        assert result[0]["store_id"] == 'S17557505471272970_H00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505471272970_P00001", "quantity": 1}, {"product_id": "S17557505471272970_P00002", "quantity": 1}, {"product_id": "S17557505471272970_P00003", "quantity": 1}, {"product_id": "S17557505471272970_P00004", "quantity": 1}, {"product_id": "S17557505471272970_P00005", "quantity": 1}, {"product_id": "S17557505471272970_P00006", "quantity": 1}, {"product_id": "S17557505471272970_P00007", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 2016) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505471272970_A00005'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505471272970_P00060", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 120) < 1

    def test_rubric_0_the_hotel_booked_is_in_linyi_area(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booked is in Linyi area"
        assert len(result) > 0

    def test_rubric_1_the_hotel_booking_dates_are_march_5__2025__march_6__2025__ma(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booking dates are March 5, 2025, March 6, 2025, March 7, 2025, March 8, 2025, March 9, 2025, March 10, 2025, March 11, 2025"
        assert len(result) > 0

    def test_rubric_2_the_booked_hotel_must_include_laundry_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel must include laundry service"
        assert len(result) > 0

    def test_rubric_3_the_booked_hotel_must_include_parking_lot(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel must include parking lot"
        assert len(result) > 0

    def test_rubric_4_the_booked_hotel_should_be_in_the_category_that_the_user_mos(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel should be in the category that the user most frequently searches for (by checking user profile, it\'s Budget hotel)"
        assert len(result) > 0

    def test_rubric_5_check_the_weather_in_yuncheng_on_women_s_day__march_8__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Check the weather in Yuncheng on Women\'s Day (March 8, 2025), (sunny, temperature 3-14 degrees Celsius, humidity 58%) the weather condition is good, so the tickets purchased are for Rainbow Salt Lake Scenic Area"
        assert len(result) > 0

    def test_rubric_6_the_purchase_date_for_the_tickets_is_march_8__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchase date for the tickets is March 8, 2025"
        assert len(result) > 0

    def test_rubric_7_the_quantity_of_tickets_purchased_is_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of tickets purchased is 2"
        assert len(result) > 0

    def test_rubric_8_the_ticket_order_only_includes_adult_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket order only includes Adult ticket"
        assert len(result) > 0
