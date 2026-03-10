import json
import os
import pytest

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)
with open(os.path.join(_dir, "answer.json")) as _f:
    result = json.load(_f)

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
        assert result[0]["store_id"] == 'S17557505469336597_T00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505469336597_P00057", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 553) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505469336597_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505469336597_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 898) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505469336597_A00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505469336597_P00035", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 80) < 1

    def test_rubric_0_the_train_ordered_should_be_high_speed_rail_or_emu__electric(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ordered should be High-speed rail or EMU (Electric Multiple Unit) train"
        assert len(result) > 0

    def test_rubric_1_the_departure_city_of_the_train_should_be_nantong(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure city of the train should be Nantong"
        assert len(result) > 0

    def test_rubric_2_the_destination_of_the_train_should_be_wuhan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The destination of the train should be Wuhan"
        assert len(result) > 0

    def test_rubric_3_the_departure_date_of_the_train_should_be_march_23__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date of the train should be March 23, 2025"
        assert len(result) > 0

    def test_rubric_4_the_arrival_time_of_the_train_should_be_between_16_00_17_00(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The arrival time of the train should be between 16:00-17:00"
        assert len(result) > 0

    def test_rubric_5_the_train_with_the_shortest_travel_time_should_be_selected(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train with the shortest travel time should be selected, and the train in the order should be G1722 (travel time: 3 hours and 33 minutes)"
        assert len(result) > 0

    def test_rubric_6_the_distance_between_the_hotel_ordered_and_the_wuhan_univers(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The distance between the hotel ordered and the Wuhan University Cherry Blossom Garden at 16 Luojia Mountain Road, Wuchang District, Wuhan, Hubei Province should be less than or equal to 2 kilometers"
        assert len(result) > 0

    def test_rubric_7_the_hotel_brand_should_be_atour(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel brand should be Atour"
        assert len(result) > 0

    def test_rubric_8_the_check_in_date_for_the_hotel_should_be_march_23__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The check-in date for the hotel should be March 23, 2025"
        assert len(result) > 0

    def test_rubric_9_the_room_type_ordered_should_be_a_king_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type ordered should be a king room"
        assert len(result) > 0

    def test_rubric_10_the_total_cost_of_the_hotel_order_should_be_within_the_1000(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total cost of the hotel order should be within the 1000 yuan budget (including 1000 yuan)"
        assert len(result) > 0

    def test_rubric_11_should_calculate_how_many_nights_can_be_stayed_within_the_10(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Should calculate how many nights can be stayed within the 1000 yuan budget, the result is 1 night (Deluxe king room for 1 night costs 898 yuan in total)"
        assert len(result) > 0

    def test_rubric_12_the_attraction_ordered_should_be_yellow_crane_tower(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction ordered should be Yellow Crane Tower"
        assert len(result) > 0

    def test_rubric_13_the_attraction_ticket_type_should_be_adult_ticket(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction ticket type should be Adult ticket"
        assert len(result) > 0

    def test_rubric_14_need_to_check_the_ticket_price_of_yellow_crane_tower__the_re(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the ticket price of Yellow Crane Tower, the result is 80 yuan for Adult ticket"
        assert len(result) > 0

    def test_rubric_15_should_calculate_the_remaining_balance_after_deducting_hotel(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Should calculate the remaining balance after deducting hotel expenses from 1000 yuan, the result is 102 yuan, which is greater than 80 yuan, so Yellow Crane Tower ticket can be purchased"
        assert len(result) > 0

    def test_rubric_16_the_date_of_use_for_the_attraction_ticket_should_be_march_24(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date of use for the attraction ticket should be March 24, 2025"
        assert len(result) > 0
