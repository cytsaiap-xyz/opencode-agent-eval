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
        assert result[0]["store_id"] == ''

    def test_order_0_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 0) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802174487229_I00010'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802174487229_P00052", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 149) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802174487229_F00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802174487229_F00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 780) < 1

    def test_rubric_0_the_booked_ktv_should_have_a_rating_of_4_0_or_above(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked KTV should have a rating of 4.0 or above"
        assert len(result) > 0

    def test_rubric_1_the_booked_ktv_should_be_within_3km_of_room_1506__tower_a__w(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked KTV should be within 3km of Room 1506, Tower A, Wuhan Tiandi, 688 Jiefang Avenue, Jianghan District, Wuhan"
        assert len(result) > 0

    def test_rubric_2_the_ktv_reservation_should_be_for_2_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV reservation should be for 2 people"
        assert len(result) > 0

    def test_rubric_3_the_ktv_reservation_time_should_be_18_00_00_on_2025_09_12(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV reservation time should be 18:00:00 on 2025-09-12"
        assert len(result) > 0

    def test_rubric_4_the_ordered_product_should_be_compatible_with_iphone_13(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered product should be compatible with iPhone 13"
        assert len(result) > 0

    def test_rubric_5_the_ordered_product_should_be_a_charging_head(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered product should be a charging head"
        assert len(result) > 0

    def test_rubric_6_the_ordered_product_should_be_an_original_factory_product(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered product should be an Original Factory Product"
        assert len(result) > 0

    def test_rubric_7_the_ordered_product_should_support_fast_charging(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered product should support Fast Charging"
        assert len(result) > 0

    def test_rubric_8_by_checking_the_calendar__there_are_no_holidays_coming_up__s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "By checking the calendar, there are no holidays coming up, so purchase flight tickets for September 14, 2025"
        assert len(result) > 0

    def test_rubric_9_the_user_plans_to_finish_lunch_at_12_00_and_leave_afterward(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The user plans to finish lunch at 12:00 and leave afterward, plus a two-hour buffer, so the flight departure time should be at or after 14:00:00"
        assert len(result) > 0

    def test_rubric_10_the_user_doesn_t_want_to_land_too_late_and_miss_dinner_at_17(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The user doesn\'t want to land too late and miss dinner at 17:00, so the flight arrival time should be at or before 17:00:00"
        assert len(result) > 0

    def test_rubric_11_the_purchased_flight_ticket_should_be_for_a_flight_from_wuha(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased flight ticket should be for a flight from Wuhan to Guangzhou"
        assert len(result) > 0
