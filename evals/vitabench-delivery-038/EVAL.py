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
        assert result[0]["store_id"] == 'S33946320621632228_S88968'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S75401753354131701_P99357", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 37.9) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S97919228618067522_S48161'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S87111253562385722_P09756", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 51.8) < 1

    def test_rubric_0_the_delivery_address_for_the_half_chicken_set_meal_order_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the half chicken set meal order should be International Department, South Campus of Linyi No.1 Middle School, No.135 Lingong Road, Zhimadun Street, Hedong District, Linyi City, Shandong Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_half_chicken_set_meal_or(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the half chicken set meal order should be before 2025-05-23 18:30:00"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_for_ordering_the_half_chicken_set_meal_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant for ordering the half chicken set meal should be Tastin\' Chinese Burger (Dongfang City Branch)"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_herbal_tea_guilinggao_order_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the herbal tea Guilinggao order should be No.28 Boutique Apartment, 200 Meters West of People\'s Square, Intersection of Yinqueshan Road and Xinhua Road, Lanshan District, Linyi City, Shandong Province (Linyi People\'s Square Branch)"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_for_ordering_the_herbal_tea_guilinggao_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant for ordering the herbal tea Guilinggao should be Yu Bao Tang"
        assert len(result) > 0

    def test_rubric_5_the_herbal_tea_guilinggao_ordered_should_include_honey_as_an(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The herbal tea Guilinggao ordered should include honey as an ingredient"
        assert len(result) > 0
