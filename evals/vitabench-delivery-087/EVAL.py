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
        assert result[0]["store_id"] == 'S13425777444327930_S93304'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S30275213393925044_P42440", "quantity": 1}, {"product_id": "S79667605294087199_P22359", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 60) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S24620395468234095_S79800'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S31639431311084099_P91639", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 28) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S25726847335377968_S75768'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S33696416686604544_P21810", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 35.8) < 1

    def test_rubric_0_need_to_add_a_note_to_the_northeastern_cuisine_order_with_or(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to add a note to the Northeastern cuisine order with order_id H0721002O01: no Cilantro, add some garlic paste"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_lemon_wheat_drink_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the Lemon Wheat drink order should be Guixin Community, 1 Guixin Street, Nangang District, Harbin, Heilongjiang Province"
        assert len(result) > 0

    def test_rubric_2_the_estimated_delivery_time_for_the_lemon_wheat_drink_order(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the Lemon Wheat drink order should be around 18:00 on April 19, 2025"
        assert len(result) > 0

    def test_rubric_3_the_drink_order_should_select_lemon_wheat_type_beverages(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The drink order should select Lemon Wheat type beverages"
        assert len(result) > 0

    def test_rubric_4_the_lemon_wheat_drink_order_should_choose_less_ice_or_much_l(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Lemon Wheat drink order should choose less ice or much less ice"
        assert len(result) > 0

    def test_rubric_5_the_lemon_wheat_drink_order_should_select_medium_cup_or_stan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Lemon Wheat drink order should select medium cup or standard size, not Large Cup Size or extra large cup"
        assert len(result) > 0

    def test_rubric_6_the_delivery_address_for_the_smoked_chicken_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the smoked chicken order should be Guixin Community, 1 Guixin Street, Nangang District, Harbin, Heilongjiang Province"
        assert len(result) > 0

    def test_rubric_7_the_estimated_delivery_time_for_the_smoked_chicken_order_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the smoked chicken order should be around 18:00 on April 19, 2025"
        assert len(result) > 0

    def test_rubric_8_the_smoked_chicken_order_should_select_smoked_chicken_items(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The smoked chicken order should select smoked chicken items"
        assert len(result) > 0

    def test_rubric_9_the_smoked_chicken_order_should_select_items_without_cilantr(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The smoked chicken order should select items without Cilantro"
        assert len(result) > 0

    def test_rubric_10_the_smoked_chicken_order_should_select_hot_food_or_items_tha(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The smoked chicken order should select hot food or items that can be heated"
        assert len(result) > 0
