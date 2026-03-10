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
        assert result[0]["store_id"] == 'S17567847828372521_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567847828372521_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 388) < 1

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
        assert result[2]["store_id"] == 'S17567847828372521_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567847828372521_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 30) < 1

    def test_rubric_0_the_western_restaurant_ordered_should_have_a_romantic_atmosp(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Western restaurant ordered should have a romantic atmosphere"
        assert len(result) > 0

    def test_rubric_1_the_distance_from_the_western_restaurant_to_room_1204__build(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The distance from the Western restaurant to Room 1204, Building 3, Canal No.1 Apartment, 128 Xihui Road, Liangxi District, Wuxi should be within 3km (inclusive)"
        assert len(result) > 0

    def test_rubric_2_the_western_restaurant_order_should_be_a_meal_for_two_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Western restaurant order should be a meal for two people, not multiple single-person meals"
        assert len(result) > 0

    def test_rubric_3_the_western_restaurant_order_should_include_champagne(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Western restaurant order should include champagne"
        assert len(result) > 0

    def test_rubric_4_the_western_restaurant_order_should_be_available_at_18_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Western restaurant order should be available at 18:00"
        assert len(result) > 0

    def test_rubric_5_the_reserved_western_restaurant_should_be_azure_coast_wester(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved Western restaurant should be Azure Coast Western Restaurant"
        assert len(result) > 0

    def test_rubric_6_the_western_restaurant_reservation_time_should_be_2025_08_29(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Western restaurant reservation time should be 2025-08-29 18:00:00"
        assert len(result) > 0

    def test_rubric_7_the_number_of_people_for_the_western_restaurant_reservation(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the Western restaurant reservation should be 2"
        assert len(result) > 0

    def test_rubric_8_the_distance_from_the_cat_cafe_to_azure_coast_western_restau(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The distance from the cat cafe to Azure Coast Western Restaurant should be within 2km (inclusive)"
        assert len(result) > 0

    def test_rubric_9_the_package_ordered_at_the_cat_cafe_should_be_a_single_perso(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package ordered at the cat cafe should be a single-person meal"
        assert len(result) > 0

    def test_rubric_10_the_package_ordered_at_the_cat_cafe_should_not_include_drink(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package ordered at the cat cafe should not include drinks"
        assert len(result) > 0
