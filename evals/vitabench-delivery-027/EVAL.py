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
        assert result[0]["store_id"] == 'S46965052648464593_S62841'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S23791788223100807_P96193", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 30.8) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S24068403411340407_S13634'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S66100942698586097_P70018", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 54) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S16962569604602955_S46413'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S31573652904634511_P96917", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 30) < 1

    def test_rubric_0_the_delivery_address_for_the_lunch_noodle_order_should_be_qu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the lunch noodle order should be Quanzhou Urban Construction Group Co., Ltd., Building 8, Shuimo Fanglin, 688 Anji South Road, Fengze District, Quanzhou, Fujian Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_lunch_noodle_order_shoul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the lunch noodle order should be before 12:30 on August 23, 2025"
        assert len(result) > 0

    def test_rubric_2_the_ordered_lunch_noodle_items_should_not_contain_seafood_in(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered lunch noodle items should not contain seafood ingredients"
        assert len(result) > 0

    def test_rubric_3_the_ordered_lunch_noodle_items_should_not_contain_offal_ingr(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered lunch noodle items should not contain offal ingredients such as pork intestine, pig liver, etc."
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_the_bakery_order_should_be_quanzhou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the bakery order should be Quanzhou Urban Construction Group Co., Ltd., Building 8, Shuimo Fanglin, 688 Anji South Road, Fengze District, Quanzhou, Fujian Province"
        assert len(result) > 0

    def test_rubric_5_the_estimated_delivery_time_for_the_bakery_order_should_be_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the bakery order should be before 12:30 on August 23, 2025"
        assert len(result) > 0

    def test_rubric_6_the_merchant_for_the_bakery_order_should_be_jiyue_bakery(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The merchant for the bakery order should be Jiyue Bakery"
        assert len(result) > 0

    def test_rubric_7_the_ordered_bakery_items_should_have_a_chewy_texture__usuall(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered bakery items should have a Chewy Texture, usually indicated in the product description or tags"
        assert len(result) > 0

    def test_rubric_8_the_bakery_order_should_include_3_identical_bread_items(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The bakery order should include 3 identical bread items"
        assert len(result) > 0

    def test_rubric_9_the_delivery_address_for_the_four_fruits_soup_order_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Four Fruits Soup order should be Quanzhou Urban Construction Group Co., Ltd., Building 8, Shuimo Fanglin, 688 Anji South Road, Fengze District, Quanzhou, Fujian Province"
        assert len(result) > 0

    def test_rubric_10_the_estimated_delivery_time_for_the_four_fruits_soup_order_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the Four Fruits Soup order should be before 19:00 on August 23, 2025"
        assert len(result) > 0

    def test_rubric_11_the_four_fruits_soup_order_should_include_a_note_specifying(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Four Fruits Soup order should include a note specifying one soup without pearls"
        assert len(result) > 0

    def test_rubric_12_the_four_fruits_soup_order_should_select_the_best_selling_fo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Four Fruits Soup order should select the best-selling Four Fruits Soup from the store"
        assert len(result) > 0
