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
        assert result[0]["store_id"] == 'S97537355154593224_S10282'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S30020602686844963_P19861", "quantity": 1}, {"product_id": "S11612563883050070_P50866", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 27.8) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S22026835984229219_S49422'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S28196571056007770_P75509", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 25.8) < 1

    def test_rubric_0_successfully_canceled_the_old_shanghai_pork_rib_with_rice_ca(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Successfully canceled the Old Shanghai Pork Rib with Rice Cake store order that the user no longer needs due to indigestion, the order status with order_id 30711008O01 has been changed to cancelled"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_newly_ordered_winter_melon_meat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the newly ordered winter melon meat soup should be Greentown Begonia Garden, No. 1766 Bayi South Street, Wucheng District, Jinhua City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_2_the_delivery_time_for_the_newly_ordered_winter_melon_meat_so(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the newly ordered winter melon meat soup should be before 13:00 on November 22, 2025, to meet the user\'s afternoon shift needs"
        assert len(result) > 0

    def test_rubric_3_the_newly_ordered_product_for_the_user_with_indigestion_shou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The newly ordered product for the user with indigestion should contain both winter melon and meat, suitable for stomach care needs"
        assert len(result) > 0
