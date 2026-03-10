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
        assert result[0]["store_id"] == 'S19116133029330985_S34157'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S49904307817471643_P71858", "quantity": 1}, {"product_id": "S27988113436607546_P31975", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 38.49) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S24049974549772654_S37431'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S87687372548025370_P33636", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 25.0) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17738634835110948_S93470'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S96350112347326954_P11710", "quantity": 1}, {"product_id": "S29786269691079082_P68270", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 61.98) < 1

    def test_rubric_0_successfully_canceled_the_user_s_roast_duck_set_meal_order_f(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Successfully canceled the user\'s roast duck set meal order from Dalao Roast Duck (Qingyang Road Branch), the order status of order_id D0721001T01 has been updated to cancelled"
        assert len(result) > 0

    def test_rubric_1_the_item_in_the_chicken_soup_rice_order_for_the_child_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The item in the chicken soup rice order for the child should be non-spicy flavor"
        assert len(result) > 0

    def test_rubric_2_the_item_in_the_chicken_soup_rice_order_for_the_child_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The item in the chicken soup rice order for the child should include the option of no green onions"
        assert len(result) > 0

    def test_rubric_3_the_chicken_soup_rice_order_for_the_child_should_be_delivere(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The chicken soup rice order for the child should be delivered around 19:00 on September 30, 2024"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_the_chicken_soup_rice_order_for_the(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the chicken soup rice order for the child should be Phase One of Keyuan New Village, Wuhu Road Street, Baohe District, Hefei City, Anhui Province"
        assert len(result) > 0

    def test_rubric_5_the_item_in_the_spicy_chicken_order_should_be_a_portion_for(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The item in the spicy chicken order should be a portion for two people"
        assert len(result) > 0

    def test_rubric_6_the_item_in_the_spicy_chicken_order_should_select_the_extra(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The item in the spicy chicken order should select the extra spicy flavor option"
        assert len(result) > 0

    def test_rubric_7_the_spicy_chicken_order_should_include_noodle_type_staple_fo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The spicy chicken order should include noodle-type staple food items"
        assert len(result) > 0

    def test_rubric_8_the_spicy_chicken_order_should_be_delivered_around_19_00_on(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The spicy chicken order should be delivered around 19:00 on September 30, 2024"
        assert len(result) > 0

    def test_rubric_9_the_delivery_address_for_the_spicy_chicken_order_should_be_p(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the spicy chicken order should be Phase One of Keyuan New Village, Wuhu Road Street, Baohe District, Hefei City, Anhui Province"
        assert len(result) > 0
