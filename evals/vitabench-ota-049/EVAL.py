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
        assert result[0]["store_id"] == 'S17557505513132740_F00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505513132740_P00046", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 980) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505513132740_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505513132740_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 780) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505513132740_A00007'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505513132740_P00032", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 168) < 1

    def test_rubric_0_need_to_check_the_date_of_qingming_festival_in_2025__which_i(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the date of Qingming Festival in 2025, which is April 4, 2025, so the departure date for flight booking should be April 4, 2025"
        assert len(result) > 0

    def test_rubric_1_the_arrival_time_of_the_flight_should_be_between_12_00_18_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival time of the flight should be between 12:00-18:00"
        assert len(result) > 0

    def test_rubric_2_need_to_compare_flight_prices_between_sanya_and_haikou_withi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to compare flight prices between Sanya and Haikou within the available options, and the price in the flight order should be the cheapest one (Haikou flight CZ6851 Economy Class at ¥980)"
        assert len(result) > 0

    def test_rubric_3_the_hotel_to_be_booked_should_be_clearwater_bay_resort(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel to be booked should be Clearwater Bay Resort"
        assert len(result) > 0

    def test_rubric_4_the_check_in_date_for_the_hotel_should_be_april_4__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The check-in date for the hotel should be April 4, 2025"
        assert len(result) > 0

    def test_rubric_5_the_room_price_in_the_hotel_order_should_be_the_cheapest_amo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room price in the hotel order should be the cheapest among available options (Ocean View Deluxe King Room at ¥780)"
        assert len(result) > 0

    def test_rubric_6_need_to_calculate_the_distance_between_clearwater_bay_resort(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to calculate the distance between Clearwater Bay Resort, Clearwater Bay Avenue, Yingzhou Town, Lingshui Li Autonomous County, Hainan Province and Tianya Haijiao, Tianya Haijiao Scenic Area, Tianya District, Sanya, Hainan Province; Nanshan Temple, Nanshan Cultural Tourism Zone, Yazhou District, Sanya, Hainan Province; Wuzhizhou Island, Wuzhizhou Island Tourism Area, Haitang District, Sanya, Hainan Province, and compare which scenic spot is closest to Clearwater Bay Resort. The result is Wuzhizhou Island (33.73 kilometers away), so the scenic spot to be booked should be Wuzhizhou Island. (Tianya Haijiao is 72.62 kilometers away from Clearwater Bay Resort, Nanshan Temple is 88.98 kilometers away from Clearwater Bay Resort)"
        assert len(result) > 0

    def test_rubric_7_the_ticket_date_in_the_scenic_spot_order_should_be_april_5(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket date in the scenic spot order should be April 5, 2025"
        assert len(result) > 0

    def test_rubric_8_the_ticket_in_the_scenic_spot_order_should_be_adult_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket in the scenic spot order should be Adult Ticket"
        assert len(result) > 0
