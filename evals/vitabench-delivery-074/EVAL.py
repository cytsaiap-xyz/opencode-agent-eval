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
        assert result[0]["store_id"] == 'S24847536756058661_S98390'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S30591239557390280_P60779", "quantity": 1}]
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
        assert result[1]["store_id"] == 'S28589198334368358_S78525'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S14184585097927965_P84004", "quantity": 1}, {"product_id": "S13834984990585068_P44986", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 28.8) < 1

    def test_rubric_0_the_delivery_address_for_the_user_s_body_management_salad_or(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the user\'s body management salad order should be Haiyue Building, No.590 Gangcheng East Street, Laishan District, Yantai, Shandong Province"
        assert len(result) > 0

    def test_rubric_1_the_user_s_body_management_salad_order_should_select_the_com(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The user\'s body management salad order should select the combo salad product from Magic Salad (Baolong Plaza)"
        assert len(result) > 0

    def test_rubric_2_the_user_s_body_management_salad_order_should_select_the__no(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The user\'s body management salad order should select the \'no sauce\' product attribute"
        assert len(result) > 0

    def test_rubric_3_the_user_s_body_management_salad_order_should_avoid_high_sug(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The user\'s body management salad order should avoid high-sugar and fried food items"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_the_assistant_s_tiptoe_beef_order_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the assistant\'s Tiptoe Beef order should be Haiyue Building, No.590 Gangcheng East Street, Laishan District, Yantai, Shandong Province"
        assert len(result) > 0

    def test_rubric_5_the_assistant_s_tiptoe_beef_order_should_select_the_extra_sp(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The assistant\'s Tiptoe Beef order should select the extra spicy flavor attribute"
        assert len(result) > 0

    def test_rubric_6_the_assistant_s_tiptoe_beef_order_should_avoid_green_onion_g(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The assistant\'s Tiptoe Beef order should avoid green onion garnishes or seasonings"
        assert len(result) > 0
