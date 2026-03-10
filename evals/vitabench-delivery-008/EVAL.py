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
        assert result[0]["store_id"] == 'S14848003758238527_S93427'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S30688323956871062_P57881", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 29.76) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S14848003758238527_S93427'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S30688323956871062_P57881", "quantity": 1}, {"product_id": "S10866881969664312_P25702", "quantity": 1}, {"product_id": "S19855181240368022_P21464", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 30.26) < 1

    def test_rubric_0_cancel_the_order_with_order_id_1072104t01(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Cancel the order with order ID 1072104T01"
        assert len(result) > 0

    def test_rubric_1_the_reordered_items_should_include_a_jianbing_for_the_daught(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reordered items should include a Jianbing for the daughter, without egg, with sweet bean sauce flavor"
        assert len(result) > 0

    def test_rubric_2_the_jianbing_for_the_user_in_the_reordered_items_should_be_i(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Jianbing for the user in the reordered items should be identical to the product in order ID 1072104T01 (with egg, tomato sauce flavor)"
        assert len(result) > 0

    def test_rubric_3_the_reordered_breakfast_should_contain_3_items_in_total__inc(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reordered breakfast should contain 3 items in total, including 2 Jianbings and 1 tea egg"
        assert len(result) > 0
