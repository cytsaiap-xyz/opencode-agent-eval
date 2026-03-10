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
        assert result[0]["store_id"] == 'S17557518247339297_H00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557518247339297_P00003", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 888) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557518247339297_T00011'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557518247339297_P00057", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 144) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557518247339297_A00005'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557518247339297_P00023", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 560) < 1

    def test_rubric_0_the_hotel_booked_should_be_a_four_star_hotel(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booked should be a four-star hotel"
        assert len(result) > 0

    def test_rubric_1_the_hotel_booked_should_be_a_hot_spring_hotel(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booked should be a hot spring hotel"
        assert len(result) > 0

    def test_rubric_2_the_hotel_booked_should_have_a_first_floor_sauna_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booked should have a First Floor Sauna Room"
        assert len(result) > 0

    def test_rubric_3_the_room_type_in_the_hotel_order_should_include_hot_spring_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type in the hotel order should include hot spring service"
        assert len(result) > 0

    def test_rubric_4_the_room_type_in_the_hotel_order_should_be_a_king_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type in the hotel order should be a king room"
        assert len(result) > 0

    def test_rubric_5_the_date_in_the_hotel_order_should_be_2024_03_17(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date in the hotel order should be 2024-03-17"
        assert len(result) > 0

    def test_rubric_6_the_departure_date_of_the_train_ticket_should_be_2024_03_18(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure date of the train ticket should be 2024-03-18"
        assert len(result) > 0

    def test_rubric_7_the_arrival_time_of_the_train_ticket_should_be_before_12_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival time of the train ticket should be before 12:00 (including 12:00)"
        assert len(result) > 0

    def test_rubric_8_the_seat_type_of_the_train_ticket_should_be_first_class_seat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The seat type of the train ticket should be First Class Seat or Business Class Seat"
        assert len(result) > 0

    def test_rubric_9_the_train_journey_should_be_the_shortest_among_the_available(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train journey should be the shortest among the available options, which is D7625 (10:20-11:35, duration 75 minutes)"
        assert len(result) > 0

    def test_rubric_10_the_quantity_of_the_train_ticket_order_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of the train ticket order should be 2"
        assert len(result) > 0

    def test_rubric_11_the_attraction_booked_should_be_benxi_grand_canyon(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction booked should be Benxi Grand Canyon"
        assert len(result) > 0

    def test_rubric_12_need_to_check_the_weather_in_benxi_on_2024_03_18__which_is_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the weather in Benxi on 2024-03-18, which is sunny, so the attraction tickets should be for the package with more activities (Benxi Grand Canyon All-Inclusive Package)"
        assert len(result) > 0

    def test_rubric_13_the_quantity_in_the_attraction_order_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity in the attraction order should be 2"
        assert len(result) > 0

    def test_rubric_14_the_date_in_the_attraction_order_should_be_2024_03_18(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date in the attraction order should be 2024-03-18"
        assert len(result) > 0
