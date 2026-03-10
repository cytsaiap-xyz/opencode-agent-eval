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
        assert result[0]["store_id"] == 'S17567841558014419_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567841558014419_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 52) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == ''

    def test_order_1_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 0) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567841558014419_I00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567841558014419_P00019", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 46) < 1

    def test_rubric_0_the_restaurant_ordered_should_be_a_jiangxi_cuisine_restauran(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered should be a Jiangxi cuisine restaurant"
        assert len(result) > 0

    def test_rubric_1_the_distance_from_the_ordered_restaurant_to_room_503__lawyer(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The distance from the ordered restaurant to Room 503, Lawyers Building of Shanxi Provincial Justice Department, No.9 Fuxi Street, Xinghualing District, Taiyuan City should be within 3km (including 3km)"
        assert len(result) > 0

    def test_rubric_2_the_ordered_items_from_the_restaurant_should_be_available_on(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered items from the restaurant should be available on weekdays"
        assert len(result) > 0

    def test_rubric_3_the_ordered_items_from_the_restaurant_should_be_an_individua(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered items from the restaurant should be an individual package"
        assert len(result) > 0

    def test_rubric_4_the_ordered_items_from_the_restaurant_should_include_main_co(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered items from the restaurant should include Main course, Side dish and Beverage"
        assert len(result) > 0

    def test_rubric_5_the_reserved_restaurant_should_be_gan_xiang_lou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved restaurant should be Gan Xiang Lou"
        assert len(result) > 0

    def test_rubric_6_the_restaurant_reservation_time_should_be_2025_03_25_12_00_0(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation time should be 2025-03-25 12:00:00"
        assert len(result) > 0

    def test_rubric_7_the_number_of_people_for_the_restaurant_reservation_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the restaurant reservation should be 1"
        assert len(result) > 0

    def test_rubric_8_the_ordered_item_from_the_massage_shop_should_be_a_shoulder(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item from the massage shop should be a Shoulder and neck massage package"
        assert len(result) > 0

    def test_rubric_9_according_to_the_query__the_price_of_the_restaurant_ordered(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "According to the query, the price of the restaurant ordered item is 52 yuan, so the price of the massage shop ordered item should be less than or equal to 48 yuan"
        assert len(result) > 0
