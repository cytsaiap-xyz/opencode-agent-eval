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
        assert result[0]["store_id"] == 'S17557513329986348_A00006'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557513329986348_P00043", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 45) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557513329986348_A00008'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557513329986348_P00066", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 240) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557513329986348_T00014'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557513329986348_P00128", "quantity": 5}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 140) < 1

    def test_rubric_0_checked_the_weather_for_saturday__2025_03_22___which_is_over(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Checked the weather for Saturday (2025-03-22), which is overcast, so the attraction ticket purchased is for Zhengzhou City God Temple"
        assert len(result) > 0

    def test_rubric_1_the_number_of_tickets_purchased_is_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of tickets purchased is 3"
        assert len(result) > 0

    def test_rubric_2_the_type_of_tickets_purchased_is_adult_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The type of tickets purchased is Adult Ticket"
        assert len(result) > 0

    def test_rubric_3_the_date_of_the_purchased_tickets_is_march_22__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date of the purchased tickets is March 22, 2025"
        assert len(result) > 0

    def test_rubric_4_the_order_status_for_the_aquarium_tickets_purchased_the_day(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The order status for the Aquarium tickets purchased the day before yesterday is cancelled"
        assert len(result) > 0

    def test_rubric_5_by_checking_the_calendar__the_upcoming_holiday_is_april_4__2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "By checking the calendar, the upcoming holiday is April 4, 2025 (Tomb Sweeping Day), and the train ticket purchase date is April 4, 2025"
        assert len(result) > 0

    def test_rubric_6_the_train_tickets_purchased_are_from_zhengzhou_to_kaifeng(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train tickets purchased are from Zhengzhou to Kaifeng"
        assert len(result) > 0

    def test_rubric_7_according_to_the_inquiry__the_total_train_journey_takes_28_m(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "According to the inquiry, the total train journey takes 28 minutes, which is less than 1 hour, so the tickets purchased are Second Class Seat"
        assert len(result) > 0

    def test_rubric_8_the_number_of_train_tickets_purchased_is_5(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of train tickets purchased is 5"
        assert len(result) > 0
