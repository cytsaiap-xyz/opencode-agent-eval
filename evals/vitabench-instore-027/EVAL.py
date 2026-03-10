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
        assert result[0]["store_id"] == 'S17564423645199589_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564423645199589_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 138) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17564423645199589_I00004'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17564423645199589_P00005", "quantity": 1}, {"product_id": "S17564423645199589_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 42) < 1

    def test_rubric_0_due_to_tomorrow_s__july_20__2025__light_rain_weather__the_sw(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Due to tomorrow\'s (July 20, 2025) light rain weather, the swimming pool ordered must be an indoor swimming pool"
        assert len(result) > 0

    def test_rubric_1_the_swimming_pool_ordered_must_have_a_parking_lot(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The swimming pool ordered must have a parking lot"
        assert len(result) > 0

    def test_rubric_2_the_swimming_pool_order_must_be_for_a_parent_child_package(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The swimming pool order must be for a parent-child package"
        assert len(result) > 0

    def test_rubric_3_the_swimming_pool_order_must_include_at_least_2_hours_of_swi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The swimming pool order must include at least 2 hours of swimming time"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_ordered_should_be_yonghe_king(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered should be Yonghe King"
        assert len(result) > 0

    def test_rubric_5_the_restaurant_should_be_within_1_kilometer__inclusive__of_a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant should be within 1 kilometer (inclusive) of Anhui Province Sports Center Indoor Swimming Pool, 188 Qianshan Road, Shushan District, Hefei City, Anhui Province"
        assert len(result) > 0

    def test_rubric_6_the_restaurant_order_must_include_two_different_single_perso(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant order must include two different single-person meals"
        assert len(result) > 0

    def test_rubric_7_the_restaurant_order_must_be_valid_for_use_on_july_20__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant order must be valid for use on July 20, 2025 (Sunday)"
        assert len(result) > 0
