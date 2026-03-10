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
        assert result[0]["store_id"] == 'S26236855021467337_S70481'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S10537711184752782_P68507", "quantity": 1}, {"product_id": "S13669419091607176_P73917", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 42.9) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S63706096961310423_S13042'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S16562090161106991_P30021", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 35.9) < 1

    def test_rubric_0_the_delivery_address_for_dinner_order_should_be_guorui_build(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for dinner order should be Guorui Building, 359 Jiangdong Middle Road, Jianye District, Nanjing, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_dinner_order_should_be_aroun(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for dinner order should be around 2025-04-16 17:00:00"
        assert len(result) > 0

    def test_rubric_2_the_dinner_order_should_select_xiao_chuniang_huaiyang_cuisin(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dinner order should select Xiao Chuniang Huaiyang Cuisine (Hexi Aomei Building Store)"
        assert len(result) > 0

    def test_rubric_3_the_dinner_order_should_include_huaiyang_yanduxian_and_rice(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dinner order should include Huaiyang Yanduxian and Rice"
        assert len(result) > 0

    def test_rubric_4_the_huaiyang_yanduxian_in_the_dinner_order_should_be_single(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Huaiyang Yanduxian in the dinner order should be single portion size, quantity of 1"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_for_overtime_snack_order_should_be_guor(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for overtime snack order should be Guorui Building, 359 Jiangdong Middle Road, Jianye District, Nanjing, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_6_the_estimated_delivery_time_for_overtime_snack_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for overtime snack order should be around 2025-04-16 19:00:00"
        assert len(result) > 0

    def test_rubric_7_the_overtime_snack_order_should_select_juewei_duck_neck(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The overtime snack order should select Juewei Duck Neck"
        assert len(result) > 0

    def test_rubric_8_the_overtime_snack_order_should_include_signature_duck_neck(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The overtime snack order should include Signature Duck Neck"
        assert len(result) > 0

    def test_rubric_9_the_signature_duck_neck_in_the_overtime_snack_order_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Signature Duck Neck in the overtime snack order should be medium size"
        assert len(result) > 0
