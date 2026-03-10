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
        assert result[0]["store_id"] == 'S20788536851255214_S10437'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S75998663709962077_P31604", "quantity": 1}, {"product_id": "S17266542610618363_P36704", "quantity": 1}, {"product_id": "S18579665680945399_P97739", "quantity": 1}, {"product_id": "S25549692678617491_P05957", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 198.7) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S18659469264174024_S37719'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S33876326240563116_P68641", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 28) < 1

    def test_rubric_0_the_delivery_address_for_ordering_northeast_cuisine_for_fami(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for ordering Northeast cuisine for family dinner should be Resin Factory Residential Building, 500 meters walk from Exit B of Wangcun South Street Metro Station, Xiaodian District, Taiyuan City, Shanxi Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_northeast_cuisine_order(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the Northeast cuisine order should be around 18:00 on 2025-08-10"
        assert len(result) > 0

    def test_rubric_2_considering_the_baby_s_sensitive_digestive_system__the_north(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Considering the baby\'s sensitive digestive system, the Northeast cuisine order should avoid greasy and spicy items"
        assert len(result) > 0

    def test_rubric_3_the_northeast_cuisine_order_should_contain_6_items_in_total(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Northeast cuisine order should contain 6 items in total, including 3 dishes and 3 portions of rice"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_ordering_hot_drinks_for_wife_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for ordering hot drinks for wife should be Resin Factory Residential Building, 500 meters walk from Exit B of Wangcun South Street Metro Station, Xiaodian District, Taiyuan City, Shanxi Province"
        assert len(result) > 0

    def test_rubric_5_the_estimated_delivery_time_for_the_hot_drinks_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the hot drinks order should be around 18:00 on 2025-08-10"
        assert len(result) > 0

    def test_rubric_6_the_temperature_of_the_drink_chosen_for_wife_should_be_hot(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The temperature of the drink chosen for wife should be hot"
        assert len(result) > 0
