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
        assert result[0]["store_id"] == 'S32613676585530873_S13462'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S30257020650698187_P69287", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 22.9) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S27620923749829280_S83358'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S14884944326041048_P20569", "quantity": 10}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 120) < 1

    def test_rubric_0_the_delivery_address_for_the_curry_omurice_order_should_be_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the curry omurice order should be 1588 Wenhua Road, Weifang Xinchen Plaza, Kuiwen District, Weifang City, Shandong Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_curry_omurice_order_shou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the curry omurice order should be before 14:00 on August 2, 2025"
        assert len(result) > 0

    def test_rubric_2_the_items_in_the_curry_omurice_order_should_have_spicy_chara(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The items in the curry omurice order should have spicy characteristics or contain pepper or other seasonings"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_taro_dessert_order_should_be_15(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the taro dessert order should be 1588 Wenhua Road, Weifang Xinchen Plaza, Kuiwen District, Weifang City, Shandong Province"
        assert len(result) > 0

    def test_rubric_4_the_estimated_delivery_time_for_the_taro_dessert_order_shoul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the taro dessert order should be between 15:00 and 16:00 on August 2, 2025"
        assert len(result) > 0

    def test_rubric_5_the_items_in_the_taro_dessert_order_should_be_sweet_pastries(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The items in the taro dessert order should be sweet pastries containing taro filling"
        assert len(result) > 0

    def test_rubric_6_the_items_in_the_taro_dessert_order_should_have_a_soft_and_t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The items in the taro dessert order should have a soft and tender texture"
        assert len(result) > 0

    def test_rubric_7_the_total_quantity_of_items_in_the_taro_dessert_order_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total quantity of items in the taro dessert order should be 20 pieces"
        assert len(result) > 0
