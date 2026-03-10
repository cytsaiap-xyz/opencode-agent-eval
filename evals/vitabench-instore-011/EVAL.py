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
        assert result[0]["store_id"] == 'S17564420250725791_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420250725791_P00004", "quantity": 1}]
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
        assert result[1]["store_id"] == 'S17564420250725791_I00003'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17564420250725791_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 138) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564420250725791_I00004'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564420250725791_P00017", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 68) < 1

    def test_rubric_0_the_merchant_ordered_in_the_bathhouse_order_cannot_be_the__n(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The merchant ordered in the bathhouse order cannot be the \'Northeastern Bathhouse\' that the user has visited before"
        assert len(result) > 0

    def test_rubric_1_the_item_ordered_in_the_bathhouse_order_must_include_full_bo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The item ordered in the bathhouse order must include full body massage"
        assert len(result) > 0

    def test_rubric_2_the_item_ordered_in_the_bathhouse_order_must_include_cupping(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The item ordered in the bathhouse order must include Cupping Therapy"
        assert len(result) > 0

    def test_rubric_3_the_merchant_ordered_in_the_bathhouse_order_must_be_high_end(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The merchant ordered in the bathhouse order must be high-end"
        assert len(result) > 0

    def test_rubric_4_the_rating_of_the_merchant_ordered_in_the_japanese_restauran(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The rating of the merchant ordered in the Japanese restaurant order should be 4.2 or above"
        assert len(result) > 0

    def test_rubric_5_the_item_ordered_in_the_japanese_restaurant_order_is_a_meal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The item ordered in the Japanese restaurant order is a meal for one person"
        assert len(result) > 0

    def test_rubric_6_the_item_ordered_in_the_japanese_restaurant_order_includes_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The item ordered in the Japanese restaurant order includes Sashimi Platter"
        assert len(result) > 0

    def test_rubric_7_the_merchant_ordered_in_the_japanese_restaurant_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The merchant ordered in the Japanese restaurant order should be within 3km of Crown Sauna Club, No. 268, Xueshi Road, Yuelu District, Changsha"
        assert len(result) > 0

    def test_rubric_8_if_the_total_cost_of_the_bathhouse_order_and_japanese_cuisin(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "If the total cost of the bathhouse order and Japanese cuisine order does not exceed 600 yuan, then purchase a billiards package"
        assert len(result) > 0

    def test_rubric_9_the_total_cost_of_the_billiards_package_order_plus_the_bathh(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total cost of the billiards package order plus the bathhouse order and Japanese cuisine order cannot exceed 600 yuan"
        assert len(result) > 0
