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
        assert result[0]["store_id"] == 'S17557516159742676_T00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557516159742676_P00062", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 189) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557516159742676_H00004'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557516159742676_P00024", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 520) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557516159742676_A00005'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557516159742676_P00032", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 160) < 1

    def test_rubric_0_the_destination_of_the_train_order_should_be_jiujiang(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The destination of the train order should be Jiujiang"
        assert len(result) > 0

    def test_rubric_1_the_departure_date_of_the_train_order_should_be_2026_09_01(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure date of the train order should be 2026-09-01"
        assert len(result) > 0

    def test_rubric_2_the_arrival_time_of_the_train_should_be_around_09_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival time of the train should be around 09:00"
        assert len(result) > 0

    def test_rubric_3_the_seat_type_in_the_train_ticket_order_should_be_second_cla(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The seat type in the train ticket order should be second class seat"
        assert len(result) > 0

    def test_rubric_4_need_to_check_the_weather_in_lushan_mountain_on_2026_09_01_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the weather in Lushan Mountain on 2026-09-01 and 2026-09-02, which is showers followed by sunny, suitable for viewing the sea of clouds, and the booked hotel should be located on Lushan Mountain"
        assert len(result) > 0

    def test_rubric_5_the_price_of_the_booked_hotel_should_be_less_than_or_equal_t(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of the booked hotel should be less than or equal to 600 yuan"
        assert len(result) > 0

    def test_rubric_6_the_room_type_of_the_booked_hotel_should_be_a_king_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type of the booked hotel should be a king room"
        assert len(result) > 0

    def test_rubric_7_the_attraction_to_be_ordered_should_be_lushan_scenic_area(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction to be ordered should be Lushan Scenic Area"
        assert len(result) > 0

    def test_rubric_8_the_ticket_date_in_the_attraction_order_should_be_2026_09_02(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket date in the attraction order should be 2026-09-02"
        assert len(result) > 0

    def test_rubric_9_the_ticket_type_in_the_attraction_order_should_be_adult_tick(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket type in the attraction order should be adult ticket"
        assert len(result) > 0
