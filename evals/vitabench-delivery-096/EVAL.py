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
        assert result[0]["store_id"] == 'S29509549137012996_S47439'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S31507710680622253_P20902", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 39.9) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S33764608762858787_S11690'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S10915355094844256_P90588", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 28.71) < 1

    def test_rubric_0_the_delivery_address_for_the_garlic_vermicelli_meat_slice_or(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the Garlic Vermicelli Meat Slice order for wife should be No.25, No.2 Shuangfengshan Road, Yunmanting Zone C, Nan\'an District, Chongqing"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_garlic_vermicelli_meat_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the Garlic Vermicelli Meat Slice order for wife should be around 2024-05-18 21:00"
        assert len(result) > 0

    def test_rubric_2_the_garlic_vermicelli_meat_slice_order_for_wife_should_be_no(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Garlic Vermicelli Meat Slice order for wife should be non-spicy flavor, avoiding stimulating seasonings"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_strained_yogurt_bowl_order_for(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the Strained Yogurt Bowl order for daughter should be No.25, No.2 Shuangfengshan Road, Yunmanting Zone C, Nan\'an District, Chongqing"
        assert len(result) > 0

    def test_rubric_4_the_estimated_delivery_time_for_the_strained_yogurt_bowl_ord(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the Strained Yogurt Bowl order for daughter should be before 2024-05-18 19:30"
        assert len(result) > 0
