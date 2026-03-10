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
        assert result[0]["store_id"] == 'S17567844081518433_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567844081518433_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 2280) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17567844081518433_I00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17567844081518433_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 2580) < 1

    def test_rubric_0_the_restaurant_ordered_must_be_suitable_for_business_banquet(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered must be suitable for business banquets"
        assert len(result) > 0

    def test_rubric_1_the_restaurant_ordered_must_be_an_upscale_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered must be an upscale restaurant"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_ordered_must_be_michelin_listed(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered must be Michelin-listed"
        assert len(result) > 0

    def test_rubric_3_the_items_in_the_restaurant_order_must_be_a_six_person_set(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The items in the restaurant order must be a six-person set"
        assert len(result) > 0

    def test_rubric_4_the_price_of_items_in_the_restaurant_order_cannot_exceed_250(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of items in the restaurant order cannot exceed 2500 yuan (including 2500 yuan)"
        assert len(result) > 0

    def test_rubric_5_the_golf_club_ordered_must_be_indoor(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The golf club ordered must be indoor"
        assert len(result) > 0

    def test_rubric_6_the_budget_for_the_golf_club_order_should_be_10__higher_than(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The budget for the golf club order should be 10% higher than the restaurant order budget (cannot exceed), as the restaurant order budget is 2500 yuan (including 2500 yuan), therefore the total price of items in the golf club order cannot exceed 2750 yuan (including 2750 yuan)"
        assert len(result) > 0

    def test_rubric_7_the_items_in_the_golf_club_order_must_be_suitable_for_6_peop(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The items in the golf club order must be suitable for 6 people"
        assert len(result) > 0
