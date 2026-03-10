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
        assert result[0]["store_id"] == 'S15949154785780736_S01374'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S27196852544252758_P93917", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 25) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S18899744937884355_S71840'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S14045593901868448_P87353", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 158.8) < 1

    def test_rubric_0_the_delivery_address_for_the_fresh_juice_order_should_be_nan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the fresh juice order should be Nanchang No. 2 Middle School (Supu Road Campus), No. 3 Supu Road, Dunzitang Street, Donghu District, Nanchang City, Jiangxi Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_fresh_juice_order_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the fresh juice order should be around 15:30 on June 21, 2025"
        assert len(result) > 0

    def test_rubric_2_the_fresh_juice_order_should_select_the_less_ice_option(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The fresh juice order should select the Less Ice option"
        assert len(result) > 0

    def test_rubric_3_the_fresh_juice_order_should_choose_a_product_with_a_variety(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The fresh juice order should choose a product with a variety of fruit ingredients"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_the_birthday_cake_order_should_be_n(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the birthday cake order should be Nanchang No. 2 Middle School (Supu Road Campus), No. 3 Supu Road, Dunzitang Street, Donghu District, Nanchang City, Jiangxi Province"
        assert len(result) > 0

    def test_rubric_5_the_estimated_delivery_time_for_the_birthday_cake_order_shou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the birthday cake order should be before 17:00 on June 21, 2025"
        assert len(result) > 0

    def test_rubric_6_the_birthday_cake_order_should_choose_a_merchant_from_the_ba(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The birthday cake order should choose a merchant from the Baxi brand"
        assert len(result) > 0

    def test_rubric_7_the_birthday_cake_order_product_should_be_made_with_fresh_cr(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The birthday cake order product should be made with Fresh Cream"
        assert len(result) > 0

    def test_rubric_8_the_birthday_cake_order_should_select_a_design_style_suitabl(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The birthday cake order should select a design style suitable for little girls\' aesthetic preferences"
        assert len(result) > 0
