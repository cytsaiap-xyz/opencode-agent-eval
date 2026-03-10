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
        assert result[0]["store_id"] == 'S17557112364479019_T00012'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557112364479019_P00065", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 796) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557112364479019_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557112364479019_P00003", "quantity": 1}, {"product_id": "S17557112364479019_P00004", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1416) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557072491807785_A00005'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557112364479019_P00025", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 300) < 1

    def test_rubric_0_need_to_check_the_weather_in_xi_an_and_datong_on_december_31(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the weather in Xi\'an and Datong on December 31, 2024. The result is Xi\'an: cloudy, 0 to 10 degrees Celsius; Datong: cloudy, -6 to 4 degrees Celsius, so the departure time of the train ticket is December 31"
        assert len(result) > 0

    def test_rubric_1_the_train_ticket_must_be_first_class_seat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train ticket must be first-class seat"
        assert len(result) > 0

    def test_rubric_2_the_train_arrival_time_cannot_exceed_9_00_pm_on_december_31(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train arrival time cannot exceed 9:00 PM on December 31, 2024"
        assert len(result) > 0

    def test_rubric_3_the_quantity_of_tickets_in_the_train_ticket_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of tickets in the train ticket order should be 2"
        assert len(result) > 0

    def test_rubric_4_the_hotel_must_be_located_within_3_kilometers_of_the_yungang(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel must be located within 3 kilometers of the Yungang Grottoes scenic spot"
        assert len(result) > 0

    def test_rubric_5_the_hotel_must_provide_luggage_storage_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel must provide luggage storage service"
        assert len(result) > 0

    def test_rubric_6_the_hotel_booking_duration_must_be_2_nights__check_in_on_dec(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booking duration must be 2 nights (check-in on December 31 and January 1)"
        assert len(result) > 0

    def test_rubric_7_the_hotel_order_must_be_for_consecutive_stays__i_e___the_sam(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel order must be for consecutive stays, i.e., the same hotel and same room type"
        assert len(result) > 0

    def test_rubric_8_the_scenic_spot_tickets_date_must_be_january_1__2025__the_se(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scenic spot tickets date must be January 1, 2025 (the second day after arrival)"
        assert len(result) > 0

    def test_rubric_9_the_scenic_spot_tickets_must_include_battery_car_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scenic spot tickets must include battery car service"
        assert len(result) > 0

    def test_rubric_10_the_scenic_spot_tickets_must_be_adult_tickets(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scenic spot tickets must be adult tickets"
        assert len(result) > 0

    def test_rubric_11_the_ticket_order_should_be_for_yungang_grottoes_scenic_spot(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket order should be for Yungang Grottoes scenic spot"
        assert len(result) > 0

    def test_rubric_12_the_number_of_tickets_in_the_order_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of tickets in the order should be 2"
        assert len(result) > 0
