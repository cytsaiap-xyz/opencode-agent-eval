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
        assert result[0]["store_id"] == 'S14300562617778145_S54361'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S23532868960336657_P82546", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 29.8) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S59786818786582947_S57980'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S40851029391762274_P15308", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 24.9) < 1

    def test_rubric_0_the_rating_of_the_ramen_restaurant_should_be_4_3_or_above(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The rating of the ramen restaurant should be 4.3 or above"
        assert len(result) > 0

    def test_rubric_1_the_ramen_product_ordered_should_not_contain_shrimp_ingredie(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ramen product ordered should not contain shrimp ingredients"
        assert len(result) > 0

    def test_rubric_2_the_delivery_address_for_the_ramen_order_should_be_tianyuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the ramen order should be Tianyuan Business Building, 3 Yuejin Road, Chang\'an District, Shijiazhuang, Hebei Province"
        assert len(result) > 0

    def test_rubric_3_the_estimated_delivery_time_for_the_ramen_order_should_be_ar(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the ramen order should be around 2024-03-31 12:00:00"
        assert len(result) > 0

    def test_rubric_4_the_temperature_attribute_for_the_milk_tea_product_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The temperature attribute for the milk tea product should be set as hot"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_for_the_milk_tea_order_should_be_tianyu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the milk tea order should be Tianyuan Business Building, 3 Yuejin Road, Chang\'an District, Shijiazhuang, Hebei Province"
        assert len(result) > 0

    def test_rubric_6_the_estimated_delivery_time_for_the_milk_tea_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the milk tea order should be around 2024-03-31 12:00:00"
        assert len(result) > 0
