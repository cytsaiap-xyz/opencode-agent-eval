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
        assert result[0]["store_id"] == 'S18646822163055673_S83922'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S12678590731222448_P39976", "quantity": 1}, {"product_id": "S28133304347865044_P04578", "quantity": 1}, {"product_id": "S63696291966516933_P45731", "quantity": 1}, {"product_id": "S96623811432181556_P52935", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 113) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S14394301616023486_S55695'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S15469799519439947_P55117", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 98) < 1

    def test_rubric_0_home_style_cuisine_orders_should_have_a_balance_of_meat_and(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Home-style cuisine orders should have a balance of meat and vegetable dishes"
        assert len(result) > 0

    def test_rubric_1_restaurants_for_home_style_cuisine_orders_should_have_rating(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Restaurants for home-style cuisine orders should have ratings of 4.0 or above"
        assert len(result) > 0

    def test_rubric_2_home_style_cuisine_orders_should_be_delivered_before_8_00_pm(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Home-style cuisine orders should be delivered before 8:00 PM on May 27, 2025, but not too early to avoid the food getting cold"
        assert len(result) > 0

    def test_rubric_3_home_style_cuisine_orders_should_be_delivered_to_wusi_huatin(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Home-style cuisine orders should be delivered to Wusi Huating, 8-1 Yongsheng Lane, Shahekou District, Dalian, Liaoning Province (280m walk from Exit A of Xinggong Street Metro Station)"
        assert len(result) > 0

    def test_rubric_4_the_lotus_root_pastry_order_should_contain_handmade_products(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Lotus Root Pastry order should contain handmade products"
        assert len(result) > 0

    def test_rubric_5_the_lotus_root_pastry_order_should_be_in_gift_box_packaging(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Lotus Root Pastry order should be in gift box packaging"
        assert len(result) > 0

    def test_rubric_6_the_lotus_root_pastry_order_should_be_delivered_to_wusi_huat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Lotus Root Pastry order should be delivered to Wusi Huating, 8-1 Yongsheng Lane, Shahekou District, Dalian, Liaoning Province (280m walk from Exit A of Xinggong Street Metro Station)"
        assert len(result) > 0
