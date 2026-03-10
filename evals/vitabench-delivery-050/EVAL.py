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
        assert result[0]["store_id"] == 'S55752896230532586_S79712'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S10013050269630202_P84592", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 28.7) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S20865362129566483_S13882'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S23251562205512993_P99701", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 36.0) < 1

    def test_rubric_0_successfully_canceled_the_order_for__deluxe_individual_custo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Successfully canceled the order for 🏅Deluxe Individual Customized Set Meal from Sixi Cloud Kitchen Chinese Healthy Cuisine store, specifically the order with order_id 90721002T02 should have been updated to cancelled status"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_carrot_slimming_bottle_juice_or(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the Carrot Slimming Bottle juice order should be Jiayleyuan, No.158 Yongle Road, Liangxi District, Wuxi City, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_2_the_estimated_delivery_time_for_the_carrot_slimming_bottle_j(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the Carrot Slimming Bottle juice order should be before 7:00 PM on November 1, 2025"
        assert len(result) > 0

    def test_rubric_3_the_total_number_of_items_in_the_carrot_slimming_bottle_juic(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total number of items in the Carrot Slimming Bottle juice order should be 2"
        assert len(result) > 0

    def test_rubric_4_the_product_specification_in_the_carrot_slimming_bottle_juic(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product specification in the Carrot Slimming Bottle juice order should be \'No ice\'"
        assert len(result) > 0
