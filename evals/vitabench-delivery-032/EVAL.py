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
        assert result[0]["store_id"] == 'S32512243701239805_S17967'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17786566864082843_P67822", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 28.8) < 1

    def test_rubric_0_the_ordered_light_dinner_item_cannot_include_kyoto_grain_gri(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered light dinner item cannot include Kyoto Grain Grilled Meat Rice Bowl"
        assert len(result) > 0

    def test_rubric_1_the_ordered_light_dinner_item_should_come_from_super_deer_te(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered light dinner item should come from Super Deer Team · Light Weight-loss Meal (Jiaojiang Branch)"
        assert len(result) > 0

    def test_rubric_2_the_ordered_light_dinner_item_should_provide_a_feeling_of_fu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered light dinner item should provide a Feeling of Fullness and be suitable for consumption before exercise"
        assert len(result) > 0

    def test_rubric_3_the_ordered_light_dinner_item_should_cost_less_than_30_yuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered light dinner item should cost less than 30 yuan"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_the_light_dinner_order_should_be_zh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the light dinner order should be Zhejiang Nanyang Huacheng Technology Co., Ltd., No. 388 Development Avenue, Economic Development Zone, Baiyun Street, Jiaojiang District, Taizhou City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_5_the_estimated_delivery_time_for_the_light_dinner_order_shoul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the light dinner order should be before 18:00 on July 15, 2025"
        assert len(result) > 0
