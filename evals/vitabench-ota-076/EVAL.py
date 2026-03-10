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
        assert result[0]["store_id"] == 'S17557515241963642_A00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557515241963642_P00026", "quantity": 2}, {"product_id": "S17557515241963642_P00027", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 280) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557515241963642_T00011'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557515241963642_P00067", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1106) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557515241963642_H00004'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557515241963642_P00018", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 420) < 1

    def test_rubric_0_the_scenic_spot_to_be_booked_should_be_yuntai_mountain_sceni(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The scenic spot to be booked should be Yuntai Mountain Scenic Area"
        assert len(result) > 0

    def test_rubric_1_need_to_check_the_earliest_entry_time_for_yuntai_mountain_sc(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the earliest entry time for Yuntai Mountain Scenic Area, which is 06:30"
        assert len(result) > 0

    def test_rubric_2_need_to_check_the_ticket_price_information_for_yuntai_mounta(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the ticket price information for Yuntai Mountain Scenic Area, which is Student Ticket 60 yuan each (half-price discount)"
        assert len(result) > 0

    def test_rubric_3_the_date_in_the_scenic_spot_order_should_be_2025_07_15(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date in the scenic spot order should be 2025-07-15"
        assert len(result) > 0

    def test_rubric_4_need_to_check_the_weather_conditions_for_jiaozuo_yuntai_moun(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the weather conditions for Jiaozuo Yuntai Mountain Scenic Area on July 15, 2025, which shows a maximum temperature of 28 degrees, not exceeding 30 degrees, so the scenic spot order should include two Student Tickets and two rock climbing tickets"
        assert len(result) > 0

    def test_rubric_5_need_to_calculate_the_distance_between_yuntai_mountain_sceni(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to calculate the distance between Yuntai Mountain Scenic Area, Yuntai Mountain Town, Xiuwu County, Jiaozuo, Henan Province and Zhengzhou Railway Station, Erqi District, Zhengzhou, Henan Province; Luoyang Longmen Railway Station, Luolong District, Luoyang, Henan Province; and Jiaozuo Railway Station, Jiefang District, Jiaozuo, Henan Province, and compare which railway station is closest to Yuntai Mountain Scenic Area. The result is Jiaozuo Railway Station (distance 25.58km), so the destination in the train ticket order should be Jiaozuo Railway Station"
        assert len(result) > 0

    def test_rubric_6_the_date_in_the_train_ticket_order_should_be_2025_07_14(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date in the train ticket order should be 2025-07-14"
        assert len(result) > 0

    def test_rubric_7_the_quantity_in_the_train_ticket_order_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity in the train ticket order should be 2"
        assert len(result) > 0

    def test_rubric_8_the_seat_type_in_the_train_ticket_order_should_be_second_cla(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The seat type in the train ticket order should be Second Class Seat"
        assert len(result) > 0

    def test_rubric_9_the_hotel_to_be_booked_should_be_within_3_kilometers_of_yunt(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel to be booked should be within 3 kilometers of Yuntai Mountain Scenic Area, Yuntai Mountain Town, Xiuwu County, Jiaozuo, Henan Province"
        assert len(result) > 0

    def test_rubric_10_the_room_type_in_the_hotel_order_should_be_a_scenic_view_roo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type in the hotel order should be a scenic view room"
        assert len(result) > 0

    def test_rubric_11_the_room_type_in_the_hotel_order_should_be_a_king_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type in the hotel order should be a king room"
        assert len(result) > 0

    def test_rubric_12_the_date_in_the_hotel_order_should_be_2025_07_14(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date in the hotel order should be 2025-07-14"
        assert len(result) > 0

    def test_rubric_13_the_price_in_the_hotel_order_should_be_less_than_or_equal_to(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price in the hotel order should be less than or equal to 500"
        assert len(result) > 0
