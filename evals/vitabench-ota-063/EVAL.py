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
        assert result[0]["store_id"] == 'S17557512184312537_T00013'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557512184312537_P00075", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 536) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557512184312537_A00005'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557512184312537_P00028", "quantity": 1}, {"product_id": "S17557512184312537_P00029", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 30) < 1

    def test_rubric_0_check_train_tickets_and_flight_information_from_nanjing_stat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Check train tickets and flight information from Nanjing Station to Shanghai for next Wednesday, choose the travel option that allows earlier arrival at the office; Train G7003 arrives the earliest, arriving at 09:02, plus 30 minutes from the station to the office, finally arriving at 09:32; Flight MU2882 arrives at 08:20, plus 80 minutes from the airport to the office, finally arriving at 09:40. Therefore, choose to take the G7003 train"
        assert len(result) > 0

    def test_rubric_1_the_date_of_the_purchased_train_ticket_is_october_23__2024(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date of the purchased train ticket is October 23, 2024"
        assert len(result) > 0

    def test_rubric_2_the_purchased_train_ticket_is_for_a_train_from_nanjing_to_sh(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased train ticket is for a train from Nanjing to Shanghai"
        assert len(result) > 0

    def test_rubric_3_the_purchased_train_ticket_is_a_business_class_seat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased train ticket is a Business Class Seat"
        assert len(result) > 0

    def test_rubric_4_the_ordered_attraction_must_be_of_the_user_s_favorite_type(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered attraction must be of the user\'s favorite type (exhibition hall/museum/art gallery)"
        assert len(result) > 0

    def test_rubric_5_the_ordered_attraction_is_within_5km__inclusive__of_the_bund(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered attraction is within 5km (inclusive) of the Bund Financial Center"
        assert len(result) > 0

    def test_rubric_6_the_attraction_order_includes_an_adult_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction order includes an adult ticket"
        assert len(result) > 0

    def test_rubric_7_the_attraction_order_includes_guided_tour_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction order includes guided tour service"
        assert len(result) > 0

    def test_rubric_8_the_scheduled_time_for_the_attraction_ticket_is_october_25(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scheduled time for the attraction ticket is October 25, 2024"
        assert len(result) > 0
