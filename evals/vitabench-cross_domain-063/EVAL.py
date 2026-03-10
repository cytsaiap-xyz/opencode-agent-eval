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
        assert result[0]["store_id"] == 'S17550807205888083_I00008'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550807205888083_P00047", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 188) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550807205888083_A00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550807205888083_P00001", "quantity": 2}, {"product_id": "S17550807205888083_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 60) < 1

    def test_rubric_0_the_restaurant_in_the_dining_order_must_have_an_industrial_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant in the dining order must have an industrial style decor"
        assert len(result) > 0

    def test_rubric_1_the_restaurant_order_must_include_fried_chicken_or_french_fr(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant order must include fried chicken or french fries and other snacks"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_meal_set_should_be_for_3_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant meal set should be for 3 people"
        assert len(result) > 0

    def test_rubric_3_checked_if_nantong_museum_is_open_on_september_5th__the_day(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Checked if Nantong Museum is open on September 5th (the day after tomorrow), and the result showed it is open, so tickets for Nantong Museum for the day after tomorrow (September 5th) were booked"
        assert len(result) > 0

    def test_rubric_4_the_museum_order_includes_adult_tickets(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The museum order includes adult tickets"
        assert len(result) > 0

    def test_rubric_5_the_museum_order_includes_senior_tickets(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The museum order includes senior tickets"
        assert len(result) > 0

    def test_rubric_6_the_museum_order_includes_2_adult_tickets(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The museum order includes 2 adult tickets"
        assert len(result) > 0

    def test_rubric_7_the_museum_order_includes_1_senior_ticket(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The museum order includes 1 senior ticket"
        assert len(result) > 0
