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
        assert result[0]["store_id"] == 'S29486264305003802_S39010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S36884482657705391_P75204", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 13.98) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S29486264305003802_S39010'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S28382361366179982_P55716", "quantity": 1}, {"product_id": "S14711568638595663_P90074", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 27.96) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S37913683790352552_S74206'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S14370458659709302_P73302", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 29.8) < 1

    def test_rubric_0_successfully_cancel_the_user_s_order_for_mango_pomelo_sago_c(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Successfully cancel the user\'s order for Mango Pomelo Sago Cheese Mochi at Nuojiji Mochi Shop·Coffee (Shida South Road Branch), with order number 10721002T01"
        assert len(result) > 0

    def test_rubric_1_the_merchant_for_the_new_order_should_still_be_nuojiji_mochi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The merchant for the new order should still be Nuojiji Mochi Shop·Coffee (Shida South Road Branch)"
        assert len(result) > 0

    def test_rubric_2_the_reordered_mochi_items_should_be_mint_dark_chocolate_chee(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reordered mochi items should be Mint Dark Chocolate Cheese Mochi and Blueberry and Mulberry Cheese Mochi (Slightly Sour)"
        assert len(result) > 0

    def test_rubric_3_the_specifications_for_the_reordered_mochi_items_should_avoi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The specifications for the reordered mochi items should avoid black mochi skin, preferring options such as coconut or white Oreo flavor"
        assert len(result) > 0

    def test_rubric_4_the_reordered_mochi_order_needs_to_include_a_note_requesting(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reordered mochi order needs to include a note requesting disposable gloves from the merchant"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_for_the_reordered_mochi_should_be_no_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the reordered mochi should be No.1 Shida South Road, Qingshanhu District, Nanchang City, Jiangxi Province (200 meters from Exit 4 of Shida South Road Metro Station), Shida South Road No.1 Complex"
        assert len(result) > 0

    def test_rubric_6_should_purchase_boiled_and_deep_fried_food_from_sister_xu_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should purchase boiled and deep-fried food from Sister Xu\'s Boiled and Deep-fried (Shunwai Road Branch)"
        assert len(result) > 0

    def test_rubric_7_the_boiled_and_deep_fried_order_should_only_include_one_set(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The boiled and deep-fried order should only include one set meal that contains both boiled and deep-fried items"
        assert len(result) > 0

    def test_rubric_8_the_boiled_and_deep_fried_order_needs_to_include_a_note_requ(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The boiled and deep-fried order needs to include a note requesting no coriander and no fish mint, in accordance with the user\'s dietary restrictions of no coriander/fish mint"
        assert len(result) > 0

    def test_rubric_9_the_delivery_address_for_the_sister_xu_s_boiled_and_deep_fri(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the Sister Xu\'s Boiled and Deep-fried order should be No.1 Shida South Road, Qingshanhu District, Nanchang City, Jiangxi Province (200 meters from Exit 4 of Shida South Road Metro Station), Shida South Road No.1 Complex"
        assert len(result) > 0
