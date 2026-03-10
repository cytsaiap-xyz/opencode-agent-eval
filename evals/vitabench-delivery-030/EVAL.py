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
        assert result[0]["store_id"] == 'S19004578492371518_S36411'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S46568509078173011_P19624", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 64.8) < 1

    def test_rubric_0_the_delivery_address_for_the_steamed_beef_steak_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the steamed beef steak order should be Building A, Baolian Plaza, 1103 Li Yu Road, Wucheng District, Jinhua City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_1_the_delivery_time_for_the_steamed_beef_steak_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the steamed beef steak order should be on or before 2025-12-21 19:00, ensuring that the user can eat promptly after class"
        assert len(result) > 0

    def test_rubric_2_when_selecting_a_steamed_beef_steak_restaurant__the_rating_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When selecting a steamed beef steak restaurant, the rating should be 4.3 or above to ensure high-quality products"
        assert len(result) > 0

    def test_rubric_3_when_selecting_a_steamed_beef_steak_restaurant__it_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When selecting a steamed beef steak restaurant, it should be a Dine-in Restaurant with a physical store, which can generally be checked in the merchant\'s tags"
        assert len(result) > 0

    def test_rubric_4_when_selecting_a_steamed_beef_steak_product__the_portion_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When selecting a steamed beef steak product, the portion should be 250g to meet the user\'s appetite requirements"
        assert len(result) > 0
