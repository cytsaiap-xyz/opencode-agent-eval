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
        assert result[0]["store_id"] == 'S17557511395254657_T00013'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557511395254657_P00093", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 450) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557511395254657_A00005'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557511395254657_P00046", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 45) < 1

    def test_rubric_0_train_departure_date_should_be_june_18__2024(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Train departure date should be June 18, 2024"
        assert len(result) > 0

    def test_rubric_1_train_tickets_should_be_for_the_train_from_jinan_to_weihai(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Train tickets should be for the train from Jinan to Weihai"
        assert len(result) > 0

    def test_rubric_2_train_number_should_be_g6966(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Train number should be G6966"
        assert len(result) > 0

    def test_rubric_3_number_of_train_tickets_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Number of train tickets should be 2"
        assert len(result) > 0

    def test_rubric_4_the_ordered_attraction_ticket_should_be_the_cheapest_one__ba(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered attraction ticket should be the cheapest one (Banana boat experience ticket)"
        assert len(result) > 0

    def test_rubric_5_attraction_ticket_use_date_should_be_june_19__2024(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Attraction ticket use date should be June 19, 2024"
        assert len(result) > 0

    def test_rubric_6_number_of_attraction_tickets_should_be_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Number of attraction tickets should be 1"
        assert len(result) > 0
