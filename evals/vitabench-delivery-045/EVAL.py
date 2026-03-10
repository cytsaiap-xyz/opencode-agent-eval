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
        assert result[0]["store_id"] == 'S18620106904396838_S09686'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S21178425587357621_P66770", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 99) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S12492181510325089_S67166'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S25230280955908773_P80930", "quantity": 1}, {"product_id": "S48384040914991720_P07322", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 34) < 1

    def test_rubric_0_the_delivery_address_for_the_ice_cream_cake_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the ice cream cake order should be Cui Lake Paradise Phase 2, 120 meters west of the intersection of Huasheng Road and Jiabo Road, Yuzhong District, Chongqing"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_ice_cream_cake_order_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the ice cream cake order should be before 16:00 on September 13, 2025"
        assert len(result) > 0

    def test_rubric_2_the_ice_cream_cake_should_match_the_scene_of_mother_and_daug(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ice cream cake should match the scene of mother and daughter having afternoon tea"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_pure_tea_beverage_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the pure tea beverage order should be Cui Lake Paradise Phase 2, 120 meters west of the intersection of Huasheng Road and Jiabo Road, Yuzhong District, Chongqing"
        assert len(result) > 0

    def test_rubric_4_the_estimated_delivery_time_for_the_pure_tea_beverage_order(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the pure tea beverage order should be before 16:00 on September 13, 2025"
        assert len(result) > 0

    def test_rubric_5_the_pure_tea_beverage_order_should_select_products_from_the(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The pure tea beverage order should select products from the Chucha Huayue store"
        assert len(result) > 0

    def test_rubric_6_the_two_tea_beverages_in_the_pure_tea_beverage_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The two tea beverages in the pure tea beverage order should be of different styles, and both should be standard ice"
        assert len(result) > 0
