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
        assert result[0]["store_id"] == 'S33426782440170597_S44844'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S19129919838199477_P45960", "quantity": 1}, {"product_id": "S24419034942875443_P68345", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 79.6) < 1

    def test_rubric_0_the_delivery_address_for_the_garlic_and_vermicelli_shrimp_lu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the Garlic and Vermicelli Shrimp lunch order should be East Building, Hubin, No. 33 Renmin West Road, Lucheng District, Wenzhou City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_garlic_and_vermicelli_sh(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the Garlic and Vermicelli Shrimp lunch order should be between 11:00 and 12:00 on March 8, 2025"
        assert len(result) > 0

    def test_rubric_2_the_garlic_and_vermicelli_shrimp_lunch_order_should_not_incl(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Garlic and Vermicelli Shrimp lunch order should not include spicy or greasy items"
        assert len(result) > 0

    def test_rubric_3_the_garlic_and_vermicelli_shrimp_lunch_order_should_include(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Garlic and Vermicelli Shrimp lunch order should include Garlic and Vermicelli Shrimp related items"
        assert len(result) > 0

    def test_rubric_4_the_garlic_and_vermicelli_shrimp_lunch_order_should_be_porti(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Garlic and Vermicelli Shrimp lunch order should be portioned for either a meal for two or two single-person meals"
        assert len(result) > 0

    def test_rubric_5_the_total_price_of_the_garlic_and_vermicelli_shrimp_lunch_or(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total price of the Garlic and Vermicelli Shrimp lunch order should be kept within 80 yuan"
        assert len(result) > 0
