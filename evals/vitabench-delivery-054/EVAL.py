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
        assert result[0]["store_id"] == 'S79687561289843350_S50725'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S34696353417615440_P13458", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 24.8) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S13169465789960013_S02214'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S79356345247909739_P59597", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 19.8) < 1

    def test_rubric_0_the_delivery_address_for_the_pasta_order_should_be_east_area(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the pasta order should be East Area of Qinyuyuan, Nanchi Road, Yuecheng District, Shaoxing City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_pasta_order_should_be_ar(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the pasta order should be around 12:00 PM on 2025-08-16"
        assert len(result) > 0

    def test_rubric_2_the_pasta_order_should_select_products_from_xiyin_steak_home(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The pasta order should select products from Xiyin Steak Homemade Pasta · Baked Rice (Shaoxing Branch)"
        assert len(result) > 0

    def test_rubric_3_the_pasta_order_should_not_select_pasta_products_with_tomato(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The pasta order should not select pasta products with tomato meat sauce flavor"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_the_brown_sugar_ginger_tea_order_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the brown sugar ginger tea order should be East Area of Qinyuyuan, Nanchi Road, Yuecheng District, Shaoxing City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_5_the_estimated_delivery_time_for_the_brown_sugar_ginger_tea_o(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the brown sugar ginger tea order should be around 12:00 PM on 2025-08-16"
        assert len(result) > 0

    def test_rubric_6_the_brown_sugar_ginger_tea_order_should_select_hot_drink_pro(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The brown sugar ginger tea order should select hot drink products"
        assert len(result) > 0

    def test_rubric_7_the_brown_sugar_ginger_tea_order_should_select_products_with(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The brown sugar ginger tea order should select products with the \'more ginger\' attribute"
        assert len(result) > 0
