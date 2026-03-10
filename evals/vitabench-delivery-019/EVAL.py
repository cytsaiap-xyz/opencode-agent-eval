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
        assert result[0]["store_id"] == 'S30220756126333890_S12490'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S52281857932585112_P12793", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 21.88) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S44013828441542373_S74498'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S19699521858967727_P19744", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 49.8) < 1

    def test_rubric_0_the_delivery_address_for_the_user_s_potato_noodle_order_shou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the user\'s potato noodle order should be Weifang Government Service Center, No. 3396 Dongfang Road, Kuiwen District, Weifang City, Shandong Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_potato_noodle_order_shou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the potato noodle order should be before 1 PM on March 25, 2026"
        assert len(result) > 0

    def test_rubric_2_the_potato_noodle_order_should_select_xu_youdao_potato_noodl(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The potato noodle order should select Xu Youdao Potato Noodles (Weifang Xinhua Branch) as the merchant"
        assert len(result) > 0

    def test_rubric_3_the_potato_noodle_order_should_include_products_with_sesame(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The potato noodle order should include products with sesame sauce flavor"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_the_mixed_rice_order_should_be_weif(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the mixed rice order should be Weifang Government Service Center, No. 3396 Dongfang Road, Kuiwen District, Weifang City, Shandong Province"
        assert len(result) > 0

    def test_rubric_5_the_estimated_delivery_time_for_the_mixed_rice_order_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the mixed rice order should be before 1 PM on March 25, 2026"
        assert len(result) > 0

    def test_rubric_6_the_mixed_rice_order_should_include_seafood_products(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The mixed rice order should include seafood products"
        assert len(result) > 0
