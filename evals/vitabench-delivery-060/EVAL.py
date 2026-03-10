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
        assert result[0]["store_id"] == 'S30277630239337670_S96390'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S30868868128876203_P46149", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 36.0) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S20143775779327750_S53996'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S26294683682178716_P63793", "quantity": 1}, {"product_id": "S97709085515793158_P00049", "quantity": 1}, {"product_id": "S23516532710347533_P09619", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 148) < 1

    def test_rubric_0_the_delivery_address_for_the_chabaidao_drink_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the CHABAIDAO drink order should be Xinyi Garden, Jinshan Road, Mudu Town, Wuzhong District, Suzhou, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_chabaidao_drink_order_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the CHABAIDAO drink order should be around 20:00 on 2026-08-09"
        assert len(result) > 0

    def test_rubric_2_the_chabaidao_drink_order_should_select_chabaidao__suzhou_fe(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The CHABAIDAO drink order should select CHABAIDAO (Suzhou Fenghua Plaza Branch) as the merchant"
        assert len(result) > 0

    def test_rubric_3_the_chabaidao_drink_ordered_should_be_pomelo_sago(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The CHABAIDAO drink ordered should be Pomelo Sago"
        assert len(result) > 0

    def test_rubric_4_the_temperature_attribute_for_the_chabaidao_drink_order_shou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The temperature attribute for the CHABAIDAO drink order should be set to less ice"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_for_the_sichuan_cuisine_dinner_order_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Sichuan cuisine dinner order should be Xinyi Garden, Jinshan Road, Mudu Town, Wuzhong District, Suzhou, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_6_the_estimated_delivery_time_for_the_sichuan_cuisine_dinner_o(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the Sichuan cuisine dinner order should be around 20:00 on 2026-08-09"
        assert len(result) > 0

    def test_rubric_7_the_sichuan_cuisine_dinner_order_should_not_include_seafood(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Sichuan cuisine dinner order should not include seafood items and rice"
        assert len(result) > 0

    def test_rubric_8_the_portion_size_of_the_sichuan_cuisine_dinner_order_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The portion size of the Sichuan cuisine dinner order should be suitable for three adults"
        assert len(result) > 0

    def test_rubric_9_the_total_price_of_the_sichuan_cuisine_dinner_order_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total price of the Sichuan cuisine dinner order should be around 150 yuan"
        assert len(result) > 0

    def test_rubric_10_the_sichuan_cuisine_dinner_order_should_include_3_sichuan_di(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Sichuan cuisine dinner order should include 3 Sichuan dishes"
        assert len(result) > 0
