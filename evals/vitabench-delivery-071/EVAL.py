import json
import os
import pytest
from solution import solve

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)

result = solve()
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
        assert result[0]["store_id"] == 'S22380603448156647_S47133'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S19752548911592184_P21735", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 44.0) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S19264770908101694_S38950'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S32959546924972330_P56695", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 268.0) < 1

    def test_rubric_0_the_delivery_address_for_the_fruit_tea_order_should_be_zhino(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the fruit tea order should be Zhinong Li, Opposite to the North of Huaxin Garden, Xingfu South Road, Zhifu District, Yantai, Shandong Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_fruit_tea_order_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the fruit tea order should be around 2024-09-14 18:00:00"
        assert len(result) > 0

    def test_rubric_2_the_fruit_tea_order_should_select_auntie_shanghai_select_tea(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The fruit tea order should select Auntie Shanghai Select Tea (Xingfu Middle Road Branch) as the store"
        assert len(result) > 0

    def test_rubric_3_the_fruit_tea_order_should_select_extra_large_bucket_of_frui(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The fruit tea order should select Extra Large Bucket of Fruit Tea as the product"
        assert len(result) > 0

    def test_rubric_4_the_temperature_attribute_for_the_fruit_tea_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The temperature attribute for the fruit tea order should be selected as No Ice"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_for_the_hot_pot_order_should_be_zhinong(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the hot pot order should be Zhinong Li, Opposite to the North of Huaxin Garden, Xingfu South Road, Zhifu District, Yantai, Shandong Province"
        assert len(result) > 0

    def test_rubric_6_the_estimated_delivery_time_for_the_hot_pot_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the hot pot order should be around 2024-09-14 18:00"
        assert len(result) > 0

    def test_rubric_7_the_hot_pot_order_should_select_a_product_with_tomato_flavor(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hot pot order should select a product with tomato flavor to cater to children\'s preferences"
        assert len(result) > 0

    def test_rubric_8_the_hot_pot_order_should_select_a_set_meal_suitable_for_2_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hot pot order should select a set meal suitable for 2-3 people"
        assert len(result) > 0
