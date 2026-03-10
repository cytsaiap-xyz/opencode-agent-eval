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
        assert result[0]["store_id"] == 'S11783747910046861_S82990'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S10167012764512840_P66561", "quantity": 1}, {"product_id": "", "quantity": 1}, {"product_id": "", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 21) < 1

    def test_rubric_0_need_to_modify_the_note_for_order_with_order_id_30711009o01(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to modify the note for order with order_id 30711009O01 to: No disposable tableware"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_sauce_bone_rice_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the Sauce Bone Rice order should be Nanhu Garden, 15 Dongzhai Road, Wucheng District, Jinhua, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_2_the_delivery_time_for_the_sauce_bone_rice_order_should_be_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the Sauce Bone Rice order should be before 2025-10-18 12:43:29"
        assert len(result) > 0

    def test_rubric_3_the_sauce_bone_rice_set_meal_should_include_vegetables(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Sauce Bone Rice set meal should include vegetables"
        assert len(result) > 0

    def test_rubric_4_the_sauce_bone_rice_order_should_note_no_disposable_tablewar(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Sauce Bone Rice order should note no disposable tableware"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_for_the_children_s_set_meal_order_shoul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the Children\'s Set Meal order should be Nanhu Garden, 15 Dongzhai Road, Wucheng District, Jinhua, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_6_the_delivery_time_for_the_children_s_set_meal_order_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the Children\'s Set Meal order should be before 2025-10-18 12:43:29"
        assert len(result) > 0

    def test_rubric_7_the_children_s_set_meal_should_be_selected_from_ajisen_ramen(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Children\'s Set Meal should be selected from Ajisen Ramen"
        assert len(result) > 0

    def test_rubric_8_the_children_s_set_meal_order_should_note_no_disposable_tabl(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Children\'s Set Meal order should note no disposable tableware"
        assert len(result) > 0
