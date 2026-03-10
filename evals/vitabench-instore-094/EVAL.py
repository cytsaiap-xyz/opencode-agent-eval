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
        assert result[0]["store_id"] == 'S17567846744104222_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567846744104222_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 168) < 1

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
        assert result[2]["store_id"] == 'S17567846744104222_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567846744104222_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 120) < 1

    def test_rubric_0_the_restaurant_ordered_should_be_a_buffet_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered should be a buffet restaurant"
        assert len(result) > 0

    def test_rubric_1_the_restaurant_ordered_should_be_a_vegetarian_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered should be a vegetarian restaurant"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_ordered_should_have_outdoor_dining_areas(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered should have outdoor dining areas"
        assert len(result) > 0

    def test_rubric_3_the_total_price_of_the_items_ordered_at_the_restaurant_shoul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total price of the items ordered at the restaurant should be less than or equal to 200 yuan"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_order_should_be_for_a_single_person_voucher(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant order should be for a single-person voucher"
        assert len(result) > 0

    def test_rubric_5_the_quantity_of_items_ordered_from_the_restaurant_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of items ordered from the restaurant should be 1"
        assert len(result) > 0

    def test_rubric_6_the_restaurant_reservation_should_be_at_qinghe_vegetarian_bu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation should be at Qinghe Vegetarian Buffet Restaurant"
        assert len(result) > 0

    def test_rubric_7_the_restaurant_reservation_time_should_be_2025_11_08_12_00_0(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation time should be 2025-11-08 12:00:00"
        assert len(result) > 0

    def test_rubric_8_the_number_of_people_for_the_restaurant_reservation_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the restaurant reservation should be 3"
        assert len(result) > 0

    def test_rubric_9_the_yoga_center_ordered_should_be_within_3km__including_3km(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The yoga center ordered should be within 3km (including 3km) from Qinghe Vegetarian Buffet Restaurant, 3rd Floor, Green Plaza, 156 Kaiyuan Avenue, Luolong District, Luoyang"
        assert len(result) > 0

    def test_rubric_10_check_if_the_qualified_yoga_center_offers_yoga_small_group_c(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Check if the qualified yoga center offers Yoga Small Group Class (3 People), the result is yes, so the ordered item should be a package for a 3-person small group class"
        assert len(result) > 0
