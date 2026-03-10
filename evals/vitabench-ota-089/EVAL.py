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
        assert result[0]["store_id"] == 'S17557513687523962_A00006'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557513687523962_P00037", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 60) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557513687523962_H00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557513687523962_P00008", "quantity": 1}, {"product_id": "S17557513687523962_P00009", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 296) < 1

    def test_rubric_0_the_attraction_ordered_should_be_of_the_type_that_interests(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction ordered should be of the type that interests the user most (which according to user profile is traditional village type)"
        assert len(result) > 0

    def test_rubric_1_the_attraction_ticket_purchased_should_be_for_november_7__20(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction ticket purchased should be for November 7, 2024"
        assert len(result) > 0

    def test_rubric_2_the_attraction_ticket_purchased_should_be_an_adult_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction ticket purchased should be an Adult Ticket"
        assert len(result) > 0

    def test_rubric_3_according_to_the_calendar__wednesday__november_6__2024__and(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "According to the calendar, Wednesday (November 6, 2024) and Thursday (November 7, 2024) are not holidays, so the hotel booked should be within 5km of the attraction"
        assert len(result) > 0

    def test_rubric_4_the_hotel_should_be_booked_for_november_6__2024_and_november(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel should be booked for November 6, 2024 and November 7, 2024"
        assert len(result) > 0

    def test_rubric_5_the_room_type_booked_in_the_hotel_order_should_be_a_king_roo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type booked in the hotel order should be a king room"
        assert len(result) > 0

    def test_rubric_6_the_total_price_spent_on_the_hotel_order_should_not_exceed_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total price spent on the hotel order should not exceed 300 yuan"
        assert len(result) > 0

    def test_rubric_7_the_hotel_booked_should_have_free_parking(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booked should have Free Parking"
        assert len(result) > 0
