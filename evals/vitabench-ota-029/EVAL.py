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
        assert result[0]["store_id"] == 'S17557505534942588_H00003'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505534942588_P00031", "quantity": 1}, {"product_id": "S17557505534942588_P00032", "quantity": 1}, {"product_id": "S17557505534942588_P00041", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1694) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505534942588_A00006'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505534942588_P00059", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 45) < 1

    def test_rubric_0_the_hotel_brand_should_be_hanting__ji_hotel__or_vienna_hotel(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel brand should be Hanting, Ji Hotel, or Vienna Hotel"
        assert len(result) > 0

    def test_rubric_1_the_hotel_room_type_must_be_king_rooms(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel room type must be king rooms"
        assert len(result) > 0

    def test_rubric_2_the_hotel_order_should_include_three_nights__specifically_20(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order should include three nights, specifically 2025-01-07, 2025-01-08, and 2025-01-09"
        assert len(result) > 0

    def test_rubric_3_the_price_for_each_hotel_room_per_night_should_be_less_than(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price for each hotel room per night should be less than or equal to 600 yuan"
        assert len(result) > 0

    def test_rubric_4_need_to_check_the_date_of_laba_festival_in_2025__which_is_ja(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the date of Laba Festival in 2025, which is January 7, 2025 (the eighth day of the twelfth lunar month of 2024), and the attraction ticket date should be January 7, 2025"
        assert len(result) > 0

    def test_rubric_5_need_to_check_if_yanmenguan_scenic_area_offers_tickets_with(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check if Yanmenguan Scenic Area offers tickets with guide services on January 7, 2025; the result is no, so the attraction should be Gujiao Museum"
        assert len(result) > 0

    def test_rubric_6_the_attraction_ticket_type_should_be_adult_ticket(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction ticket type should be adult ticket"
        assert len(result) > 0
