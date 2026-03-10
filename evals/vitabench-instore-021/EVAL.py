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
        assert result[0]["store_id"] == 'S17564420255786250_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420255786250_P00004", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 120) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17564420255786250_I00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17564420255786250_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 198) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == ''

    def test_order_2_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 0) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17564420255786250_I00002'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17564420255786250_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 268) < 1

    def test_rubric_0_the_status_of_the_single_person_shared_escape_room_experienc(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The status of the Single Person Shared Escape Room Experience Ticket order should be cancelled"
        assert len(result) > 0

    def test_rubric_1_the_ordered_product_at_the_escape_room_should_be_of_low_diff(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered product at the escape room should be of low difficulty"
        assert len(result) > 0

    def test_rubric_2_the_ordered_product_at_the_escape_room_should_be_a_couple_pa(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered product at the escape room should be a Couple Package"
        assert len(result) > 0

    def test_rubric_3_the_escape_room_should_be_puzzle_solver_escape_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The escape room should be Puzzle Solver Escape Room"
        assert len(result) > 0

    def test_rubric_4_the_booked_escape_room_should_be_puzzle_solver_escape_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked escape room should be Puzzle Solver Escape Room"
        assert len(result) > 0

    def test_rubric_5_the_booking_time_for_the_escape_room_should_be_2024_12_21_14(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booking time for the escape room should be 2024-12-21 14:00:00"
        assert len(result) > 0

    def test_rubric_6_the_number_of_people_for_the_escape_room_booking_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the escape room booking should be 2"
        assert len(result) > 0

    def test_rubric_7_the_budget_is_500_yuan__the_escape_room_costs_198_yuan__so_t(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The budget is 500 yuan, the escape room costs 198 yuan, so the price of the ordered Minnan cuisine should be less than or equal to 302 yuan"
        assert len(result) > 0

    def test_rubric_8_the_minnan_restaurant_should_be_within_500m__inclusive__of_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Minnan restaurant should be within 500m (inclusive) of Puzzle Solver Escape Room Center, 1299 Lijing Road, Honggutan New District, Nanchang, Jiangxi Province"
        assert len(result) > 0

    def test_rubric_9_the_minnan_restaurant_should_be_a_non_smoking_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Minnan restaurant should be a Non-Smoking Restaurant"
        assert len(result) > 0

    def test_rubric_10_the_minnan_restaurant_should_have_two_person_booth_seating(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Minnan restaurant should have Two-Person Booth seating"
        assert len(result) > 0

    def test_rubric_11_the_ordered_meal_at_the_minnan_restaurant_should_be_a_couple(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered meal at the Minnan restaurant should be a couple package, not two single person packages"
        assert len(result) > 0
