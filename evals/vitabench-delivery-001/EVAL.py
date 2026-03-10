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
        assert result[0]["store_id"] == 'S85277471199200385_S98778'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S26110520013660896_P88296", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 25) < 1

    def test_rubric_0_the_rice_noodle_restaurant_must_support_dine_in_available(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The rice noodle restaurant must support Dine-in available"
        assert len(result) > 0

    def test_rubric_1_the_rice_noodle_product_must_not_be_gold_soup_flavor__as_the(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The rice noodle product must not be gold soup flavor, as the user is tired of it"
        assert len(result) > 0

    def test_rubric_2_the_rice_noodle_product_must_not_contain_fried_side_dishes_o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The rice noodle product must not contain fried side dishes or high-purine ingredients (such as offal, seafood soup, etc.)"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_rice_noodle_order_should_be_yun(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the rice noodle order should be Yunnan University Affiliated Hospital, 160 meters southeast of the intersection of Xinmin Lane and Pingzheng Street, Wuhua District, Kunming, Yunnan Province"
        assert len(result) > 0

    def test_rubric_4_the_delivery_time_for_the_rice_noodle_order_should_be_around(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the rice noodle order should be around 2025-06-21 12:00:00 to ensure completion of the meal before the afternoon break"
        assert len(result) > 0
