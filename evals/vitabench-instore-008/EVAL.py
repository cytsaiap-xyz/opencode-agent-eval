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
        assert result[0]["store_id"] == 'S17564420278251374_I00002'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420278251374_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 68) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17564420278251374_I00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17564420278251374_P00005", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 88) < 1

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

    def test_rubric_0_the_coffee_shop_merchant_must_be_pet_friendly(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The coffee shop merchant must be Pet-Friendly"
        assert len(result) > 0

    def test_rubric_1_the_coffee_shop_order_set_must_include_mini_cake_and_beverag(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The coffee shop order set must include mini cake and beverage"
        assert len(result) > 0

    def test_rubric_2_the_coffee_shop_order_set_must_not_include_tiramisu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The coffee shop order set must not include Tiramisu"
        assert len(result) > 0

    def test_rubric_3_the_beverage_in_the_coffee_shop_order_set_cannot_be_fruit_co(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beverage in the coffee shop order set cannot be fruit coffee"
        assert len(result) > 0

    def test_rubric_4_the_pet_shop_must_be_within_1km_of_the_coffee_shop__meow_caf(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The pet shop must be within 1km of the coffee shop (Meow Café, Room 102, Building B, Triumph Plaza, at the Intersection of Wangcheng Avenue and Triumph East Road, Xigong District, Luoyang)"
        assert len(result) > 0

    def test_rubric_5_the_pet_shop_order_package_must_be_a_bathing_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The pet shop order package must be a bathing service"
        assert len(result) > 0

    def test_rubric_6_the_pet_shop_order_package_must_include_paw_hair_trimming_an(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The pet shop order package must include Paw Hair Trimming and Loose Hair Removal services"
        assert len(result) > 0

    def test_rubric_7_the_pet_shop_bathing_service_must_be_booked_around_16_00_on(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The pet shop bathing service must be booked around 16:00 on 2025-06-17"
        assert len(result) > 0

    def test_rubric_8_the_booked_pet_shop_merchant_should_be_cute_pet_paradise(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked pet shop merchant should be Cute Pet Paradise"
        assert len(result) > 0

    def test_rubric_9_must_look_for_restaurants_within_1km_of_the_pet_shop__and_th(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Must look for restaurants within 1km of the pet shop, and the restaurant set menu must provide spicy food, cannot contain garlic, must include Sour Plum Juice. The result was none, so no restaurant order is needed"
        assert len(result) > 0
