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
        for i, order in enumerate(result):
            assert "store_id" in order
            assert "products" in order
            assert "total_price" in order
            assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S28422315784431063_S02543'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S83212177555407456_P08105", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 39.8) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S64699348232044444_S98376'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17395716266717529_P37049", "quantity": 1}, {"product_id": "S17395716266717529_P37049", "quantity": 1}]
        remaining = list(result[1]["products"])
        for ep in expected_products:
            found_idx = next(
                (i for i, p in enumerate(remaining)
                 if p["product_id"] == ep["product_id"] and p["quantity"] == ep["quantity"]),
                None,
            )
            assert found_idx is not None, f"Missing product {ep['product_id']} with quantity {ep['quantity']}"
            remaining.pop(found_idx)

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 48.0) < 1

    def test_rubric_0_the_delivery_address_of_the_sushi_order_should_be_yingge_yua(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address of the sushi order should be Yingge Yuan Residential Area, 198 Jiqingmen Street, Jianye District, Nanjing, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_1_the_delivery_time_of_the_sushi_order_should_be_around_2024_0(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time of the sushi order should be around 2024-07-15 18:30:00"
        assert len(result) > 0

    def test_rubric_2_the_sushi_order_should_be_from_a_dine_in_restaurant_rather_t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The sushi order should be from a Dine-in Restaurant rather than a delivery-only restaurant"
        assert len(result) > 0

    def test_rubric_3_the_sushi_order_should_be_from_the_restaurant_closest_to_the(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The sushi order should be from the restaurant closest to the user"
        assert len(result) > 0

    def test_rubric_4_the_product_in_the_sushi_order_should_be_a_cooked_sushi_plat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The product in the sushi order should be a cooked sushi platter"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_of_the_juice_order_should_be_yingge_yua(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address of the juice order should be Yingge Yuan Residential Area, 198 Jiqingmen Street, Jianye District, Nanjing, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_6_the_delivery_time_of_the_juice_order_should_be_around_2024_0(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time of the juice order should be around 2024-07-15 18:30:00"
        assert len(result) > 0

    def test_rubric_7_the_juice_order_should_include_one_room_temperature_item(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The juice order should include one room temperature item"
        assert len(result) > 0

    def test_rubric_8_the_juice_order_should_include_one_chilled_item(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The juice order should include one chilled item"
        assert len(result) > 0

    def test_rubric_9_the_quantity_of_items_in_the_juice_order_should_be_2_portion(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of items in the juice order should be 2 portions"
        assert len(result) > 0
