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
        assert result[0]["store_id"] == 'S15927822440687410_S54674'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S54069754917006434_P49432", "quantity": 5}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 24.5) < 1

    def test_rubric_0_order_of_sauce_meat_buns_to_satisfy_hunger_before_evening_st(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Order of sauce meat buns to satisfy hunger before evening study session, delivery address should be Longtan Campus of Shanxi Engineering Vocational College, 131 Xinjian Road, Sanqiao Street, Xinghualing District, Taiyuan, Shanxi Province"
        assert len(result) > 0

    def test_rubric_1_order_of_sauce_meat_buns_to_satisfy_hunger_before_evening_st(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Order of sauce meat buns to satisfy hunger before evening study session, estimated delivery time should be before 2025-04-01 20:00:00"
        assert len(result) > 0

    def test_rubric_2_when_ordering_sauce_meat_buns_to_satisfy_hunger_before_eveni(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When ordering sauce meat buns to satisfy hunger before evening study session, the selected store should be Pang Er Jiu Traditional Buns (Jingang\'yan Road Branch)"
        assert len(result) > 0

    def test_rubric_3_order_of_sauce_meat_buns_to_satisfy_hunger_before_evening_st(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Order of sauce meat buns to satisfy hunger before evening study session, the total quantity of items should be 5"
        assert len(result) > 0
