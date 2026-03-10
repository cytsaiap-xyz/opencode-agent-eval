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
        assert result[0]["store_id"] == 'S19692566950255903_S25485'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S31202981544351332_P86622", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 24.88) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S13136705917386046_S64166'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S20429208112066115_P67474", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 16) < 1

    def test_rubric_0_successfully_canceled_the_4_meat_5_veggie_fried_skewer_wrap(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Successfully canceled the 4 Meat 5 Veggie Fried Skewer Wrap order from Han Style Fried Skewers store, the order status with order_id A0714002O01 has been updated to cancelled"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_cough_relief_lung_nourishing_te(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Cough Relief Lung Nourishing tea drink order should be Cuizhu Jiayuan, 98 Heping Avenue, Yunlong District, Xuzhou, Jiangsu Province (Under Construction)"
        assert len(result) > 0

    def test_rubric_2_the_estimated_delivery_time_for_the_cough_relief_lung_nouris(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the Cough Relief Lung Nourishing tea drink order should be between 2025-11-08 22:31:38 and 2025-11-08 23:31:38"
        assert len(result) > 0

    def test_rubric_3_the_merchant_should_provide_night_delivery_service_when_orde(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The merchant should provide night delivery service when ordering the Cough Relief Lung Nourishing tea drink"
        assert len(result) > 0

    def test_rubric_4_the_temperature_of_the_cough_relief_lung_nourishing_tea_drin(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The temperature of the Cough Relief Lung Nourishing tea drink should be hot"
        assert len(result) > 0

    def test_rubric_5_the_sweetness_level_of_the_cough_relief_lung_nourishing_tea(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The sweetness level of the Cough Relief Lung Nourishing tea drink should be less sugar or no sugar"
        assert len(result) > 0

    def test_rubric_6_the_tea_drink_product_in_the_order_should_have_cough_relief(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea drink product in the order should have Cough Relief Lung Nourishing health benefits"
        assert len(result) > 0
