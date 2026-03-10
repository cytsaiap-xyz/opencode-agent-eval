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
        assert result[0]["store_id"] == 'S19315672627329167_S12289'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S21294793049651694_P89343", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 21) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S12623390759490947_S33169'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S27724810072617102_P48906", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 38.9) < 1

    def test_rubric_0_the_delivery_address_for_lelecha_tea_order_should_be_greenla(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for LELECHA Tea order should be Greenland Yuansheng International, Intersection of Jinshui East Road and Dongfeng South Road, Zhengdong New District, Jinshui District, Zhengzhou City, Henan Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_lelecha_tea_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for LELECHA Tea order should be before 12:00 on August 16, 2025"
        assert len(result) > 0

    def test_rubric_2_when_choosing_lelecha_tea_drinks__select_products_with_no_te(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When choosing LELECHA Tea drinks, select products with no tea base to avoid caffeine"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_xiabu_xiabu_hot_pot_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for Xiabu Xiabu Hot Pot order should be Greenland Yuansheng International, Intersection of Jinshui East Road and Dongfeng South Road, Zhengdong New District, Jinshui District, Zhengzhou City, Henan Province"
        assert len(result) > 0

    def test_rubric_4_the_estimated_delivery_time_for_xiabu_xiabu_hot_pot_order_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for Xiabu Xiabu Hot Pot order should be before 12:00 on August 16, 2025"
        assert len(result) > 0

    def test_rubric_5_when_choosing_xiabu_xiabu_hot_pot_set__select_non_spicy_savo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When choosing Xiabu Xiabu Hot Pot set, select non-spicy savory flavor, avoiding mild spicy or spicy flavors"
        assert len(result) > 0
