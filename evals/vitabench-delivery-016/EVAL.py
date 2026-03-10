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
        assert result[0]["store_id"] == 'S24420223932303530_S72897'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S26094851902819803_P44975", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 18.8) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S29994283967210769_S99077'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S21558969585413442_P15535", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 32.0) < 1

    def test_rubric_0_vermicelli_main_dish_order_should_choose_sichuan_chongqing_n(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Vermicelli main dish order should choose Sichuan-Chongqing Noodle House (Hot and Sour Vermicelli • Dumplings • Rice Noodles) store"
        assert len(result) > 0

    def test_rubric_1_vermicelli_main_dish_order_should_select_chongqing_pea_mix_h(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Vermicelli main dish order should select Chongqing Pea Mix Hot and Sour Vermicelli + Golden Beans + Pickled Long Beans + Peanuts + Side Dishes product"
        assert len(result) > 0

    def test_rubric_2_vermicelli_main_dish_order_should_select_mild_spicy_flavor(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Vermicelli main dish order should select mild spicy flavor"
        assert len(result) > 0

    def test_rubric_3_vermicelli_main_dish_order_delivery_address_should_be_nanhu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Vermicelli main dish order delivery address should be Nanhu Garden, No. 15 Dongzhai Road, Wucheng District, Jinhua City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_4_beverage_order_product_should_be_peach_flavor(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Beverage order product should be peach flavor"
        assert len(result) > 0

    def test_rubric_5_peach_flavor_beverage_order_product_should_be_low_caffeine_o(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Peach flavor beverage order product should be low-caffeine or caffeine-free drink"
        assert len(result) > 0

    def test_rubric_6_peach_flavor_beverage_order_product_should_select_hot_drink(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Peach flavor beverage order product should select hot drink"
        assert len(result) > 0

    def test_rubric_7_peach_flavor_beverage_order_delivery_address_should_be_nanhu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Peach flavor beverage order delivery address should be Nanhu Garden, No. 15 Dongzhai Road, Wucheng District, Jinhua City, Zhejiang Province"
        assert len(result) > 0
