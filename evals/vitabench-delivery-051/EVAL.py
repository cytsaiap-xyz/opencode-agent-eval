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
        assert result[0]["store_id"] == 'S30850685469731172_S36097'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S21506093879054601_P76267", "quantity": 1}, {"product_id": "S93547843667417090_P83816", "quantity": 1}, {"product_id": "S26425446816165610_P76672", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 19.9) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S33996772983601674_S77584'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S27620400204289599_P20660", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 22) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S18153259721295821_S70391'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17046537634653466_P30684", "quantity": 1}, {"product_id": "S12674226154717622_P79085", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 20.4) < 1

    def test_rubric_0_need_to_cancel_the_order_with_order_id_90721003o01(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to cancel the order with order_id 90721003O01"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_rice_wrapper_roll_ordered_for_d(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the rice wrapper roll ordered for daughter should be Cuihu Paradise Walk Phase 2, 120 meters west of the intersection of Huasheng Road and Jiabo Road, Yuzhong District, Chongqing City"
        assert len(result) > 0

    def test_rubric_2_the_delivery_time_for_the_rice_wrapper_roll_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the rice wrapper roll order should be between 2025-10-17 10:43:27 and 2025-10-17 12:43:27"
        assert len(result) > 0

    def test_rubric_3_when_choosing_a_rice_wrapper_roll_restaurant__priority_shoul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When choosing a rice wrapper roll restaurant, priority should be given to chain stores that originated from Guizhou"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_the_bean_soup_rice_ordered_for_daug(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the bean soup rice ordered for daughter should be Cuihu Paradise Walk Phase 2, 120 meters west of the intersection of Huasheng Road and Jiabo Road, Yuzhong District, Chongqing City"
        assert len(result) > 0

    def test_rubric_5_the_delivery_time_for_the_bean_soup_rice_order_should_be_bet(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the bean soup rice order should be between 2025-10-17 10:43:27 and 2025-10-17 12:43:27"
        assert len(result) > 0

    def test_rubric_6_when_choosing_a_bean_soup_rice_restaurant__it_should_be_the(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When choosing a bean soup rice restaurant, it should be the highest-rated No. 71 Bean Soup Rice restaurant"
        assert len(result) > 0

    def test_rubric_7_considering_the_daughter_s_health_condition_of_high_choleste(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Considering the daughter\'s health condition of high cholesterol, the bean soup rice items should not contain offal or other high-cholesterol ingredients"
        assert len(result) > 0
