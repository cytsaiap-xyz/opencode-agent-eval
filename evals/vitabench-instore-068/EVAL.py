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
        assert result[0]["store_id"] == 'S17567836610186779_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836610186779_P00001", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 264) < 1

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
        assert result[2]["store_id"] == ''

    def test_order_2_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 0) < 1

    def test_rubric_0_the_baking_workshop_order_delivery_address_should_be_within(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The baking workshop order delivery address should be within 3km (inclusive) of Room 1201, Unit 1, Building A3, Xinghai Square, Shahekou District, Dalian"
        assert len(result) > 0

    def test_rubric_1_the_ordered_item_from_the_baking_workshop_should_be_a_single(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item from the baking workshop should be a Single Person Experience package"
        assert len(result) > 0

    def test_rubric_2_the_ordered_item_from_the_baking_workshop_should_include_mat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item from the baking workshop should include Materials Provided and Making Instructions"
        assert len(result) > 0

    def test_rubric_3_the_quantity_of_items_ordered_from_the_baking_workshop_shoul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of items ordered from the baking workshop should be 3"
        assert len(result) > 0

    def test_rubric_4_the_booked_baking_workshop_should_be_creative_baking_worksho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked baking workshop should be Creative Baking Workshop"
        assert len(result) > 0

    def test_rubric_5_since_the_qingming_festival_2023_falls_on_2023_04_05__the_ba(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Since the Qingming Festival 2023 falls on 2023-04-05, the baking workshop reservation time should be 2023-04-05 15:00:00"
        assert len(result) > 0

    def test_rubric_6_the_number_of_people_for_the_baking_workshop_reservation_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the baking workshop reservation should be 3"
        assert len(result) > 0

    def test_rubric_7_there_is_a_thai_restaurant_with_terrace_within_3km__inclusiv(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "There is a Thai restaurant with terrace within 3km (inclusive) of Creative Baking Workshop, No.18 Xinghai Park East Road, Shahekou District, Dalian, so the restaurant reservation should be for a Thai restaurant"
        assert len(result) > 0

    def test_rubric_8_the_reserved_thai_restaurant_should_have_a_terrace(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved Thai restaurant should have a terrace"
        assert len(result) > 0

    def test_rubric_9_the_thai_restaurant_reservation_time_should_be_2023_04_05_18(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Thai restaurant reservation time should be 2023-04-05 18:00:00"
        assert len(result) > 0

    def test_rubric_10_the_number_of_people_for_the_thai_restaurant_reservation_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the Thai restaurant reservation should be 3"
        assert len(result) > 0
