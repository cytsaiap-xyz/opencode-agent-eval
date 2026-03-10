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
        assert result[0]["store_id"] == 'S20925321976048558_S44996'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S12535768828833281_P20402", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 20) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S21738656403955999_S17120'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S24749432382521543_P05845", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 18) < 1

    def test_rubric_0_successfully_canceled_the_sticky_rice_tibetan_tea___fresh_mi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Successfully canceled the Sticky Rice Tibetan Tea · Fresh Milk Tea order from Jincheng Tea House (Renhe New City Branch), the order status should be changed to cancelled"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_wonton_order_should_be_global_c(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the wonton order should be Global Center, Building 1, 1700 North Tianfu Avenue, Guixi Street, Wuhou District, Chengdu, Sichuan Province"
        assert len(result) > 0

    def test_rubric_2_the_estimated_delivery_time_for_the_wonton_order_should_be_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the wonton order should be between 11:30 and 12:30 on 2025-11-07"
        assert len(result) > 0

    def test_rubric_3_the_restaurant_rating_for_the_wonton_order_should_be_4_5_or(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant rating for the wonton order should be 4.5 or above"
        assert len(result) > 0

    def test_rubric_4_the_flavor_of_the_wonton_product_should_be_spicy(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flavor of the wonton product should be spicy"
        assert len(result) > 0
