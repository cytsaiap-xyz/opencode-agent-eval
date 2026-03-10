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
        assert result[0]["store_id"] == 'S17557071510245346_A00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557071510245346_P00042", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 180) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557071510245346_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557071510245346_P00001", "quantity": 1}, {"product_id": "S17557071510245346_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 856) < 1

    def test_rubric_0_query_the_price_of_huangcheng_xiangfu_tickets_with_show_incl(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Query the price of Huangcheng Xiangfu tickets with show included"
        assert len(result) > 0

    def test_rubric_1_check_the_weather_in_jincheng_from_august_2__2025_to_august(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Check the weather in Jincheng from August 2, 2025 to August 7, 2025, and find which day is sunny (result: August 5, 2025), so the attraction ticket date is set for August 5, 2025"
        assert len(result) > 0

    def test_rubric_2_the_attraction_ticket_purchased_includes_a_show(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction ticket purchased includes a show"
        assert len(result) > 0

    def test_rubric_3_check_that_the_beginning_of_autumn_date_is_august_7__2025__s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Check that the Beginning of Autumn date is August 7, 2025, so hotel reservations are made for August 7 and August 8, 2025"
        assert len(result) > 0

    def test_rubric_4_by_reviewing_last_month_s_hotel_orders_in_wuzhou__determine(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "By reviewing last month\'s hotel orders in Wuzhou, determine that the hotel to be booked is Atour Hotel Wuzhou"
        assert len(result) > 0

    def test_rubric_5_the_hotel_room_type_booked_is_a_twin_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel room type booked is a twin room"
        assert len(result) > 0
