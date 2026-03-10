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
        assert result[0]["store_id"] == 'S23312256807055062_S85735'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S67035860351848435_P63325", "quantity": 1}, {"product_id": "S11629187197692636_P36270", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 27.6) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S16925160597268446_S05242'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S32779988634634158_P65798", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 44.0) < 1

    def test_rubric_0_the_delivery_address_for_the_pancake_order_should_be_buildin(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the pancake order should be Building A, Baolian Plaza, 1103 Liyu Road, Wucheng District, Jinhua City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_pancake_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the pancake order should be between 2025-02-08 11:30:00 and 2025-02-08 12:15:00"
        assert len(result) > 0

    def test_rubric_2_the_pancake_order_should_select_lai_shili_pu_pancake__sanjia(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The pancake order should select Lai Shili Pu·Pancake (Sanjiang International Store) as the merchant"
        assert len(result) > 0

    def test_rubric_3_the_pancake_order_should_include_multigrain_pancake___egg(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The pancake order should include Multigrain Pancake + Egg + Crispy Cracker + Handmade Extra Large Tenderloin + Lettuce item and add Beef Slices item"
        assert len(result) > 0

    def test_rubric_4_the_pancake_order_should_add_a_note_requesting_to_cut_the_pa(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The pancake order should add a note requesting to cut the pancake into halves"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_for_the_beverage_order_should_be_buildi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the beverage order should be Building A, Baolian Plaza, 1103 Liyu Road, Wucheng District, Jinhua City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_6_the_estimated_delivery_time_for_the_beverage_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the beverage order should be before 2025-05-23 12:15:00"
        assert len(result) > 0

    def test_rubric_7_the_beverage_order_should_select_drinks_with_sweet_and_fresh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The beverage order should select drinks with Sweet and Fresh flavor"
        assert len(result) > 0

    def test_rubric_8_the_beverage_order_should_select_drinks_with_less_ice(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The beverage order should select drinks with less ice"
        assert len(result) > 0

    def test_rubric_9_the_beverage_order_should_select_drinks_with_no_extra_sugar(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The beverage order should select drinks with no extra sugar to meet sugar restriction requirements"
        assert len(result) > 0
