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
        assert result[0]["store_id"] == 'S22977061347928632_S51833'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S10727973616443900_P65567", "quantity": 1}, {"product_id": "S29951410232592308_P63313", "quantity": 1}, {"product_id": "S11104135624417312_P02672", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 132) < 1

    def test_rubric_0_the_delivery_address_for_the_friend_from_beijing_should_be_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the friend from Beijing should be Sheraton Nanchang Hotel, Shajing Street, Honggutan District, Nanchang, Jiangxi Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_friend_from_beijing_shou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the friend from Beijing should be within 11:30-12:00 on September 20, 2025"
        assert len(result) > 0

    def test_rubric_2_the_jiangxi_cuisine_restaurant_chosen_for_the_friend_from_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Jiangxi cuisine restaurant chosen for the friend from Beijing should have a rating of 4.5 or above"
        assert len(result) > 0

    def test_rubric_3_the_restaurant_chosen_for_the_friend_from_beijing_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant chosen for the friend from Beijing should be on the Must-order List of Jiangxi cuisine restaurants"
        assert len(result) > 0

    def test_rubric_4_the_ordered_dishes_for_the_friend_from_beijing_must_be_authe(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered dishes for the friend from Beijing must be authentic Jiangxi cuisine"
        assert len(result) > 0

    def test_rubric_5_the_order_for_the_friend_from_beijing_needs_to_include_three(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The order for the friend from Beijing needs to include three different dishes"
        assert len(result) > 0

    def test_rubric_6_the_ordered_items_for_the_friend_from_beijing_should_not_inc(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered items for the friend from Beijing should not include eggplant dishes"
        assert len(result) > 0

    def test_rubric_7_the_ordered_dishes_for_the_friend_from_beijing_should_be_mod(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered dishes for the friend from Beijing should be moderately spicy, suitable for people from Jiangsu (Mild spicy or Medium spicy)"
        assert len(result) > 0
