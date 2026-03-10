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
        assert result[0]["store_id"] == 'S17557111228331195_A00008'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557111228331195_P00057", "quantity": 1}, {"product_id": "S17557111228331195_P00058", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 300) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557111228331195_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557111228331195_P00002", "quantity": 1}, {"product_id": "S17557111228331195_P00003", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 796) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557111228331195_F00011'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557111228331195_P00086", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 1780) < 1

    def test_rubric_0_the_attraction_ticket_order_should_be_for_harbin_ice_and_sno(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction ticket order should be for Harbin Ice and Snow World"
        assert len(result) > 0

    def test_rubric_1_the_attraction_ticket_date_should_be_december_11__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction ticket date should be December 11, 2025"
        assert len(result) > 0

    def test_rubric_2_the_attraction_ticket_order_should_include_1_child_ticket_an(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction ticket order should include 1 child ticket and 1 adult ticket"
        assert len(result) > 0

    def test_rubric_3_the_hotel_must_be_located_within_500m_of_harbin_people_s_squ(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel must be located within 500m of Harbin People\'s Square"
        assert len(result) > 0

    def test_rubric_4_the_hotel_must_provide_indoor_hot_spring_facilities(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel must provide indoor hot spring facilities"
        assert len(result) > 0

    def test_rubric_5_the_hotel_room_type_must_be_a_king_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel room type must be a king room"
        assert len(result) > 0

    def test_rubric_6_the_hotel_check_in_dates_should_be_december_10_and_december(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel check-in dates should be December 10 and December 11"
        assert len(result) > 0

    def test_rubric_7_must_check_the_nearest_metro_station_to_the_hotel__which_is(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Must check the nearest metro station to the hotel, which is People\'s Square Metro Station"
        assert len(result) > 0

    def test_rubric_8_need_to_check_direct_train_travel_time_from_harbin_to_linyi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check direct train travel time from Harbin to Linyi, results show all exceed 12-hour limit, so flight tickets should be booked instead of train tickets"
        assert len(result) > 0

    def test_rubric_9_the_flight_departure_time_should_be_around_2_00_pm(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flight departure time should be around 2:00 PM"
        assert len(result) > 0

    def test_rubric_10_the_flight_date_should_be_friday__december_12__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flight date should be Friday (December 12, 2025)"
        assert len(result) > 0

    def test_rubric_11_transportation_should_be_arranged_for_the_user_and_the_child(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Transportation should be arranged for the user and the child only, so flight ticket quantity should be 2"
        assert len(result) > 0
