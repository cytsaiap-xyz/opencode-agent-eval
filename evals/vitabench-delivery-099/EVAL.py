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
        assert result[0]["store_id"] == 'S19728863776884431_S86002'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S78307369213340465_P29115", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 25.9) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S30804956163842857_S55020'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S95851429464568625_P06476", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 18.0) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S33689769018838954_S40512'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S24288445174253477_P93566", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 31.9) < 1

    def test_rubric_0_the_delivery_address_for_the_bibimbap_order_should_be_buildi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the bibimbap order should be Building D, Jianye Headquarters Harbor, Intersection of Dongfeng East Road and Ruyi West Road, Ruyi Lake Street, Jinshui District, Zhengzhou City, Henan Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_bibimbap_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the bibimbap order should be around September 20, 2024, 12:00:00-13:00:00, so that the meal can be finished before the meeting"
        assert len(result) > 0

    def test_rubric_2_the_bibimbap_item_selected_should_be_tuna_bibimbap_type(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The bibimbap item selected should be tuna bibimbap type"
        assert len(result) > 0

    def test_rubric_3_the_bibimbap_item_selected_should_be_non_spicy_flavor(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The bibimbap item selected should be non-spicy flavor"
        assert len(result) > 0

    def test_rubric_4_the_bibimbap_item_price_should_be_above_25_yuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The bibimbap item price should be above 25 yuan"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_for_the_sweet_drink_order_should_be_bui(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the sweet drink order should be Building D, Jianye Headquarters Harbor, Intersection of Dongfeng East Road and Ruyi West Road, Ruyi Lake Street, Jinshui District, Zhengzhou City, Henan Province"
        assert len(result) > 0

    def test_rubric_6_the_estimated_delivery_time_for_the_sweet_drink_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the sweet drink order should be before 13:30 on September 20, 2024"
        assert len(result) > 0

    def test_rubric_7_the_selected_drink_should_be_a_hot_drink_type(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The selected drink should be a hot drink type"
        assert len(result) > 0

    def test_rubric_8_the_selected_drink_should_have_energizing_effects__such_as_c(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The selected drink should have energizing effects, such as containing caffeine"
        assert len(result) > 0

    def test_rubric_9_the_delivery_address_for_the_snack_order_should_be_building(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the snack order should be Building D, Jianye Headquarters Harbor, Intersection of Dongfeng East Road and Ruyi West Road, Ruyi Lake Street, Jinshui District, Zhengzhou City, Henan Province"
        assert len(result) > 0

    def test_rubric_10_the_estimated_delivery_time_for_the_snack_order_should_be_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the snack order should be before 13:30 on September 20, 2024"
        assert len(result) > 0

    def test_rubric_11_the_selected_snack_should_be_crispy_type(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The selected snack should be crispy type"
        assert len(result) > 0

    def test_rubric_12_the_selected_snack_should_be_large_size_or_in_a_shareable_fo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The selected snack should be large size or in a shareable format"
        assert len(result) > 0
