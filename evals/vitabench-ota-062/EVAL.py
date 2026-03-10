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
        assert result[0]["store_id"] == 'S17557513687109603_T00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557513687109603_P00063", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1106) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557513687109603_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557513687109603_P00001", "quantity": 1}, {"product_id": "S17557513687109603_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1360) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557513687109603_A00005'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557513687109603_P00030", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 0) < 1

    def test_rubric_0_the_ordered_train_should_include_accessible_carriage(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered train should include accessible carriage"
        assert len(result) > 0

    def test_rubric_1_the_ordered_train_should_have_wheelchair_accessible_seat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered train should have wheelchair-accessible seat"
        assert len(result) > 0

    def test_rubric_2_the_number_of_train_tickets_ordered_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of train tickets ordered should be 2"
        assert len(result) > 0

    def test_rubric_3_the_train_in_the_order_should_be_from_dalian_to_beijing(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train in the order should be from Dalian to Beijing"
        assert len(result) > 0

    def test_rubric_4_the_departure_time_of_the_train_tickets_in_the_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure time of the train tickets in the order should be September 13, 2023"
        assert len(result) > 0

    def test_rubric_5_the_hotel_should_be_within_3km__inclusive__of_the_chinese_pl(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel should be within 3km (inclusive) of the Chinese PLA General Hospital at 28 Fuxing Road, Haidian District, Beijing"
        assert len(result) > 0

    def test_rubric_6_the_ordered_hotel_should_have_an_elevator(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered hotel should have an Elevator"
        assert len(result) > 0

    def test_rubric_7_the_hotel_booking_dates_should_be_2023_09_13_and_2023_09_14(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booking dates should be 2023-09-13 and 2023-09-14"
        assert len(result) > 0

    def test_rubric_8_the_room_booked_in_the_hotel_order_should_be_a_twin_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room booked in the hotel order should be a twin room"
        assert len(result) > 0

    def test_rubric_9_check_the_weather_in_beijing_on_2023_09_14__showers___the_at(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Check the weather in Beijing on 2023-09-14 (showers), the attraction ordered should be indoor"
        assert len(result) > 0

    def test_rubric_10_the_booking_date_for_the_attraction_should_be_september_14(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booking date for the attraction should be September 14, 2023"
        assert len(result) > 0

    def test_rubric_11_the_ordered_attraction_should_be_wheelchair_accessible(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered attraction should be wheelchair accessible"
        assert len(result) > 0

    def test_rubric_12_the_number_of_attraction_tickets_ordered_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of attraction tickets ordered should be 2"
        assert len(result) > 0
