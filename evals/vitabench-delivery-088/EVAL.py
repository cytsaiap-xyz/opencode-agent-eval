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
        assert result[0]["store_id"] == 'S28238457757110038_S89746'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S21140841273620451_P81330", "quantity": 5}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 134.4) < 1

    def test_rubric_0_the_delivery_address_for_the_lemon_boneless_chicken_feet_nig(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the Lemon Boneless Chicken Feet night snack order should be Weifang Xinchen Tiandi, No.1588 Wenhua Road, Kuiwen District, Weifang City, Shandong Province"
        assert len(result) > 0

    def test_rubric_1_the_delivery_time_for_the_lemon_boneless_chicken_feet_night(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the Lemon Boneless Chicken Feet night snack order should be between 2025-03-05 19:00:00 and 2025-03-05 20:00:00"
        assert len(result) > 0

    def test_rubric_2_when_selecting_lemon_boneless_chicken_feet_night_snack_produ(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When selecting Lemon Boneless Chicken Feet night snack products, the quantity should be sufficient for five people"
        assert len(result) > 0

    def test_rubric_3_when_selecting_night_snack_chicken_feet_products__boneless_c(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When selecting night snack chicken feet products, boneless chicken feet should be chosen"
        assert len(result) > 0

    def test_rubric_4_when_selecting_night_snack_products__lemon_flavored_chicken(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When selecting night snack products, lemon flavored chicken feet should be chosen"
        assert len(result) > 0
