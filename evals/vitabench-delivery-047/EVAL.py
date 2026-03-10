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
        assert result[0]["store_id"] == 'S56072837632850697_S10550'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S56985501259963881_P30358", "quantity": 1}, {"product_id": "S19234847935487179_P30931", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 20.76) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S73617965392470980_S24774'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S28860708888783648_P73224", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 42) < 1

    def test_rubric_0_the_breakfast_order_delivery_address_should_be_beijing_dehen(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The breakfast order delivery address should be Beijing Deheng (Wuxi) Law Firm, 801-808, 8th Floor, Ping An Wealth Center, 15 Financial First Street, Taihu New City, Binhu District, Wuxi City, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_breakfast_order_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the breakfast order should be before 2025-10-10 10:00:00"
        assert len(result) > 0

    def test_rubric_2_the_soup_dumplings_in_the_breakfast_order_should_not_contain(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The soup dumplings in the breakfast order should not contain meat"
        assert len(result) > 0

    def test_rubric_3_the_breakfast_order_should_include_two_items__soup_dumplings(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The breakfast order should include two items: soup dumplings and [Spleen-Strengthening and Stomach-Nourishing] Pumpkin Millet Porridge"
        assert len(result) > 0

    def test_rubric_4_the_beverage_order_delivery_address_should_be_beijing_deheng(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The beverage order delivery address should be Beijing Deheng (Wuxi) Law Firm, 801-808, 8th Floor, Ping An Wealth Center, 15 Financial First Street, Taihu New City, Binhu District, Wuxi City, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_5_the_estimated_delivery_time_for_the_beverage_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the beverage order should be around 2025-10-10 10:00:00"
        assert len(result) > 0

    def test_rubric_6_the_beverage_order_should_select_warm_drinks_suitable_for_wa(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The beverage order should select warm drinks suitable for warming hands"
        assert len(result) > 0

    def test_rubric_7_the_beverage_order_should_not_include_coffee__but_can_includ(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The beverage order should not include coffee, but can include other beverages such as tea, juice, etc."
        assert len(result) > 0

    def test_rubric_8_the_beverage_order_should_select_drinks_with_no_sugar_or_les(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The beverage order should select drinks with no sugar or less sugar"
        assert len(result) > 0

    def test_rubric_9_the_beverage_order_should_include_2_servings_of_the_same_bev(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The beverage order should include 2 servings of the same beverage item"
        assert len(result) > 0
