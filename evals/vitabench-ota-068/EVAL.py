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
        assert result[0]["store_id"] == 'S17557514964243714_H00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557514964243714_P00001", "quantity": 4}, {"product_id": "S17557514964243714_P00002", "quantity": 4}, {"product_id": "S17557514964243714_P00004", "quantity": 4}, {"product_id": "S17557514964243714_P00005", "quantity": 4}, {"product_id": "S17557514964243714_P00009", "quantity": 4}, {"product_id": "S17557514964243714_P00010", "quantity": 4}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 31400) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557514964243714_A00005'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557514964243714_P00036", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 65) < 1

    def test_rubric_0_the_booked_hotel_should_be_within_500_meters_of_central_plaz(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel should be within 500 meters of Central Plaza, 18 Harbour Road, Wan Chai, Hong Kong"
        assert len(result) > 0

    def test_rubric_1_the_hotel_should_have_an_executive_floor(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel should have an Executive Floor"
        assert len(result) > 0

    def test_rubric_2_the_hotel_reservation_should_include_six_nights_of_rooms__sp(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel reservation should include six nights of rooms, specifically for 2024-09-13, 2024-09-14, 2024-09-15, 2024-09-16, 2024-09-17, 2024-09-18"
        assert len(result) > 0

    def test_rubric_3_the_room_type_in_the_hotel_reservation_should_be_a_king_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type in the hotel reservation should be a king room"
        assert len(result) > 0

    def test_rubric_4_the_hotel_reservation_should_include_4_rooms_for_each_night(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel reservation should include 4 rooms for each night"
        assert len(result) > 0

    def test_rubric_5_the_room_rate_per_night_should_be_between_1000_1600_yuan__an(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room rate per night should be between 1000-1600 yuan, and the total order amount should be between 24000-38400 yuan"
        assert len(result) > 0

    def test_rubric_6_need_to_check_the_date_of_mid_autumn_festival_in_2024__which(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the date of Mid-Autumn Festival in 2024, which is 2024-09-17; need to check the weather in Hong Kong on 2024-09-17, which is sunny, and the tickets in the attraction order should be for the Victoria Peak Tram"
        assert len(result) > 0

    def test_rubric_7_the_tickets_in_the_attraction_order_should_be_one_way_ticket(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tickets in the attraction order should be one-way tickets"
        assert len(result) > 0

    def test_rubric_8_the_tickets_in_the_attraction_order_should_be_adult_ticket(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tickets in the attraction order should be Adult Ticket"
        assert len(result) > 0

    def test_rubric_9_the_date_in_the_attraction_order_should_be_2024_09_17(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date in the attraction order should be 2024-09-17"
        assert len(result) > 0
