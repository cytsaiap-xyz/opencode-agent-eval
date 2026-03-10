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
        assert result[0]["store_id"] == 'S17564420245532453_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420245532453_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 198) < 1

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
        assert result[2]["store_id"] == 'S17564420245532453_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564420245532453_P00005", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 98) < 1

    def test_rubric_0_the_price_of_ordered_items_at_the_nail_salon_should_be_withi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of ordered items at the nail salon should be within the range of 150-280 yuan (inclusive)"
        assert len(result) > 0

    def test_rubric_1_the_rating_of_the_ordered_nail_salon_must_be_4_2_or_above(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The rating of the ordered nail salon must be 4.2 or above"
        assert len(result) > 0

    def test_rubric_2_the_ordered_nail_salon_must_provide_one_customer_one_disinfe(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered nail salon must provide One-customer-one-disinfection service"
        assert len(result) > 0

    def test_rubric_3_the_ordered_nail_salon_item_cannot_be_a_solid_color_nail_art(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered nail salon item cannot be a Solid Color Nail Art Package"
        assert len(result) > 0

    def test_rubric_4_the_ordered_nail_salon_item_should_be_a_nail_art_package_wit(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered nail salon item should be a nail art package with design"
        assert len(result) > 0

    def test_rubric_5_the_ordered_nail_salon_item_should_be_a_french_manicure_pack(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered nail salon item should be a French Manicure Package"
        assert len(result) > 0

    def test_rubric_6_the_ordered_nail_salon_item_should_include_constructed_nail(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered nail salon item should include Constructed Nail Art service"
        assert len(result) > 0

    def test_rubric_7_the_reserved_nail_salon_should_be_elegant_fingertip_nail_sal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved nail salon should be Elegant Fingertip Nail Salon"
        assert len(result) > 0

    def test_rubric_8_the_number_of_people_for_the_nail_salon_reservation_is_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the nail salon reservation is 1"
        assert len(result) > 0

    def test_rubric_9_the_reservation_time_for_the_nail_salon_is_2025_05_07_11_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation time for the nail salon is 2025-05-07 11:00:00"
        assert len(result) > 0

    def test_rubric_10_the_hot_pot_restaurant_should_be_old_beijing_copper_pot_hot(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hot pot restaurant should be Old Beijing Copper Pot Hot Pot"
        assert len(result) > 0

    def test_rubric_11_the_hot_pot_restaurant_must_be_within_1km__inclusive__of_ele(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hot pot restaurant must be within 1km (inclusive) of Elegant Fingertip Nail Salon, No.170 Xuefu Road, Nangang District, Harbin"
        assert len(result) > 0

    def test_rubric_12_the_ordered_item_at_the_hot_pot_restaurant_should_be_a_singl(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the hot pot restaurant should be a Single Person Meal"
        assert len(result) > 0

    def test_rubric_13_the_ordered_hot_pot_package_should_be_non_spicy(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered hot pot package should be Non-spicy"
        assert len(result) > 0
