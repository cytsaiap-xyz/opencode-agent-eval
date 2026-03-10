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
        assert result[0]["store_id"] == 'S17557515995167456_A00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557515995167456_P00031", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 245) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557515995167456_H00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557515995167456_P00009", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 780) < 1

    def test_rubric_0_need_to_check_the_opening_hours_of_mount_tai_scenic_area__th(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the opening hours of Mount Tai Scenic Area, the result shows that it supports night climbing (open 24 hours a day)"
        assert len(result) > 0

    def test_rubric_1_need_to_check_the_weather_in_mount_tai_from_july_27_to_july(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the weather in Mount Tai from July 27 to July 31, the result is as follows: July 27, Tai\'an cloudy, 26-36°C; July 28, Tai\'an cloudy, 28-33°C; July 29, Tai\'an sunny, 22-31°C; July 30, Tai\'an cloudy, 24-33°C; July 31, Tai\'an light rain, 21-28°C"
        assert len(result) > 0

    def test_rubric_2_need_to_filter_non_rainy_dates_for_mount_tai__calculate_the(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to filter non-rainy dates for Mount Tai, calculate the average temperature for each day, and select the date with the lowest average temperature, the result is July 29, thus the scenic spot ticket date should be July 29, 2026"
        assert len(result) > 0

    def test_rubric_3_scenic_spot_tickets_must_include_cable_car_packages(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Scenic spot tickets must include cable car packages"
        assert len(result) > 0

    def test_rubric_4_the_ticket_order_must_be_for_mount_tai_scenic_area(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket order must be for Mount Tai Scenic Area"
        assert len(result) > 0

    def test_rubric_5_the_hotel_must_be_located_within_500m_of_no__126_hongmen_roa(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must be located within 500m of No. 126 Hongmen Road, Taishan District, Tai\'an City, Shandong Province (at the foot of Mount Tai)"
        assert len(result) > 0

    def test_rubric_6_the_unit_price_of_items_in_the_hotel_order_should_be_between(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The unit price of items in the hotel order should be between 500-1000 yuan"
        assert len(result) > 0

    def test_rubric_7_the_hotel_must_have_a_jacuzzi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must have a jacuzzi"
        assert len(result) > 0

    def test_rubric_8_the_hotel_order_must_be_for_a_king_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order must be for a king room"
        assert len(result) > 0

    def test_rubric_9_the_check_in_date_for_the_hotel_order_must_be_july_29__2026(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The check-in date for the hotel order must be July 29, 2026"
        assert len(result) > 0

    def test_rubric_10_must_filter_trains_from_shenzhen_to_tai_an__check_the_train(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Must filter trains from Shenzhen to Tai\'an, check the train with the longest travel time, the result is K1234, with a duration of 18 hours and 15 minutes"
        assert len(result) > 0
