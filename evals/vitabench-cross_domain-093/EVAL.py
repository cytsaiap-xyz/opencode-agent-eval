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
        assert result[0]["store_id"] == 'S17550809260058202_S00002'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550809260058202_P00007", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 468) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550809260058202_A00010'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550809260058202_P00062", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 360) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550809260058202_H00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550809260058202_P00029", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 1080) < 1

    def test_rubric_0_the_cake_price_should_be_between_400_500_yuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The cake price should be between 400-500 yuan"
        assert len(result) > 0

    def test_rubric_1_the_cake_must_be_sugar_free_type(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The cake must be Sugar-Free type"
        assert len(result) > 0

    def test_rubric_2_the_cake_delivery_address_should_be_room_1103__building_b2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The cake delivery address should be Room 1103, Building B2, 700 Yishan Road, Xuhui District, Shanghai"
        assert len(result) > 0

    def test_rubric_3_the_estimated_cake_delivery_time_should_be_before_2026_07_15(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated cake delivery time should be before 2026-07-15 16:00"
        assert len(result) > 0

    def test_rubric_4_the_scenic_spot_order_should_be_for_yalu_river_cruise_ticket(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The scenic spot order should be for Yalu River Cruise tickets"
        assert len(result) > 0

    def test_rubric_5_check_the_weather_in_dandong_from_july_19__2026_to_july_25(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Check the weather in Dandong from July 19, 2026 to July 25, 2026, and choose the day with the highest temperature to order cruise tickets, therefore should order tickets for July 25, 2026 (temperature 25-34℃)"
        assert len(result) > 0

    def test_rubric_6_the_number_of_cruise_tickets_ordered_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of cruise tickets ordered should be 2"
        assert len(result) > 0

    def test_rubric_7_the_hotel_ordered_should_be_within_3_kilometers__inclusive(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel ordered should be within 3 kilometers (inclusive) from the Yalu River Tourist Dock, Zhenxing District, Dandong, Liaoning Province"
        assert len(result) > 0

    def test_rubric_8_the_hotel_room_type_ordered_should_be_river_view_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel room type ordered should be River View Room"
        assert len(result) > 0

    def test_rubric_9_the_hotel_room_price_should_be_greater_than_or_equal_to_1000(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel room price should be greater than or equal to 1000 yuan"
        assert len(result) > 0

    def test_rubric_10_based_on_the_cruise_ticket_date__july_25__2026___confirm_the(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Based on the cruise ticket date (July 25, 2026), confirm the hotel check-in date, which should be July 24, 2026"
        assert len(result) > 0
