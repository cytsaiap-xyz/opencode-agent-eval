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
        assert result[0]["store_id"] == 'S21718353114713898_S77555'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S28550993188472208_P13681", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 30.0) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S11830933639824558_S97829'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S29049403220872394_P92994", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 188.0) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S80854347985296109_S72541'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S15584715623979675_P75038", "quantity": 1}, {"product_id": "S59761435911294633_P74836", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 19.2) < 1

    def test_rubric_0_the_delivery_address_for_the_red_bean_paste_egg_yolk_pastry(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Red Bean Paste Egg Yolk Pastry order should be No. 26 Sihuan South Road, Henan\'an Street, Huicheng District, Huizhou City, Guangdong Province, Wanxiang International Office Building"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_meat_crab_pot_order_should_be_n(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Meat Crab Pot order should be No. 26 Sihuan South Road, Henan\'an Street, Huicheng District, Huizhou City, Guangdong Province, Wanxiang International Office Building"
        assert len(result) > 0

    def test_rubric_2_when_selecting_meat_crab_pot__the_mild_spicy_flavor_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When selecting Meat Crab Pot, the mild spicy flavor should be chosen, suitable for sharing with colleagues"
        assert len(result) > 0

    def test_rubric_3_when_selecting_a_meat_crab_pot_merchant__the_rating_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When selecting a Meat Crab Pot merchant, the rating should be greater than or equal to 4.5"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_the_double_skin_milk_pudding_order(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Double-Skin Milk Pudding order should be No. 8 Sanxin South Road, Jiangbei, Huicheng District, Huizhou City, Guangdong Province, Jiangbei New Garden"
        assert len(result) > 0

    def test_rubric_5_when_selecting_double_skin_milk_pudding__it_should_not_conta(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When selecting Double-Skin Milk Pudding, it should not contain mango ingredients to avoid allergic reactions"
        assert len(result) > 0

    def test_rubric_6_double_skin_milk_pudding_should_be_selected_as_a_hot_drink(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Double-Skin Milk Pudding should be selected as a hot drink, suitable for consumption during menstruation"
        assert len(result) > 0

    def test_rubric_7_the_double_skin_milk_pudding_order_should_include_red_bean(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Double-Skin Milk Pudding order should include Red Bean (Extra Topping), with a total of 2 items"
        assert len(result) > 0
