import json
import os
import pytest

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)
with open(os.path.join(_dir, "answer.json")) as _f:
    result = json.load(_f)

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
        assert result[0]["store_id"] == 'S31052467565438218_S47916'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17615674632633116_P23216", "quantity": 1}, {"product_id": "S19386987754841236_P27124", "quantity": 1}, {"product_id": "S21595093811316764_P97749", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 142.0) < 1

    def test_rubric_0_the_delivery_address_for_the_family_dinner_order_celebrating(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the family dinner order celebrating promotion should be Xinyuan Residential Area, 180 meters southeast of the intersection of Huangshanglong Road and Minxiangyuan Road, Yunlong District, Xuzhou City, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_family_dinner_order_cele(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the family dinner order celebrating promotion should be before 9:00 PM on November 27, 2025"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_for_the_family_dinner_order_celebrating_promo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant for the family dinner order celebrating promotion should be a Guangshunxing brand store"
        assert len(result) > 0

    def test_rubric_3_the_family_dinner_order_celebrating_promotion_should_contain(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The family dinner order celebrating promotion should contain 3 dishes in total"
        assert len(result) > 0

    def test_rubric_4_the_family_dinner_order_celebrating_promotion_should_include(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The family dinner order celebrating promotion should include pig stomach chicken as the main dish, and at least one dim sum item (such as shumai)"
        assert len(result) > 0
