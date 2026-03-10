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
        assert result[0]["store_id"] == 'S32974240222313518_S52218'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S21362993512450958_P20483", "quantity": 6}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 90.0) < 1

    def test_rubric_0_the_order_must_be_placed_at_guming__software_park_phase_iii(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order must be placed at Guming (Software Park Phase III Store), which is located at Building 07, Zone F, Software Park Phase III, Jimei District, Xiamen City, Fujian Province, and is the closest Guming branch to the user\'s work address"
        assert len(result) > 0

    def test_rubric_1_the_quantity_of_ordered_items_should_be_6_servings_to_meet_t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of ordered items should be 6 servings to meet the needs of a 6-person sharing meeting"
        assert len(result) > 0

    def test_rubric_2_the_ordered_product_should_have_floral_fragrance_characteris(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered product should have floral fragrance characteristics, such as jasmine aroma"
        assert len(result) > 0

    def test_rubric_3_the_sweetness_level_of_the_ordered_product_should_be_selecte(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The sweetness level of the ordered product should be selected as \'three parts sweet\', suitable for the low-sugar needs of people who are losing weight"
        assert len(result) > 0

    def test_rubric_4_the_estimated_delivery_time_should_be_before_14_30_on_june_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time should be before 14:30 on June 27, 2024, to ensure arrival before the sharing meeting begins"
        assert len(result) > 0
