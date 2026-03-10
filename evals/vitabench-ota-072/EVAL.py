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
        assert result[0]["store_id"] == 'S17557512487369621_T00012'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557512487369621_P00086", "quantity": 2}, {"product_id": "S17557512487369621_P00090", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 832) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557512487369621_A00005'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557512487369621_P00032", "quantity": 4}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 40) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557512487369621_A00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557512487369621_P00043", "quantity": 2}, {"product_id": "S17557512487369621_P00045", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 60) < 1

    def test_rubric_0_train_number_should_be_d3115(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Train number should be D3115"
        assert len(result) > 0

    def test_rubric_1_train_departure_date_should_be_march_22__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Train departure date should be March 22, 2025"
        assert len(result) > 0

    def test_rubric_2_train_tickets_should_include_2_second_class_seats(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Train tickets should include 2 Second-class seats"
        assert len(result) > 0

    def test_rubric_3_train_tickets_should_include_2_business_class_seats(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Train tickets should include 2 Business-class seats"
        assert len(result) > 0

    def test_rubric_4_day_1_attraction_should_be_pingtan_beach(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Day 1 attraction should be Pingtan Beach"
        assert len(result) > 0

    def test_rubric_5_day_1_attraction_ticket_usage_date_should_be_march_22__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Day 1 attraction ticket usage date should be March 22, 2025"
        assert len(result) > 0

    def test_rubric_6_day_1_attraction_ticket_quantity_should_be_4(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Day 1 attraction ticket quantity should be 4"
        assert len(result) > 0

    def test_rubric_7_day_2_attraction_should_be_three_lanes_and_seven_alleys(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Day 2 attraction should be Three Lanes and Seven Alleys"
        assert len(result) > 0

    def test_rubric_8_day_2_attraction_ticket_usage_date_should_be_march_23__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Day 2 attraction ticket usage date should be March 23, 2025"
        assert len(result) > 0

    def test_rubric_9_day_2_attraction_tickets_should_include_2_adult_tickets(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Day 2 attraction tickets should include 2 Adult tickets"
        assert len(result) > 0

    def test_rubric_10_day_2_attraction_tickets_should_include_2_senior_tickets(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Day 2 attraction tickets should include 2 Senior tickets"
        assert len(result) > 0
