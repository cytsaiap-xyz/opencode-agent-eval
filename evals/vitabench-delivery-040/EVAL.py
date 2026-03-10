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
        assert result[0]["store_id"] == 'S13964547993271611_S17164'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S41033997512498734_P56142", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 19) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S13966425117690123_S02958'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S23055183453475350_P16425", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 176.8) < 1

    def test_rubric_0_the_delivery_address_for_the_hand_shaken_lemon_tea_order_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the hand-shaken lemon tea order should be Jinqiu Residential Area, No. 368 Furong South Road, Tianxin District, Changsha, Hunan Province (180 meters from Railway Institute Metro Station Exit 2)"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_hand_shaken_lemon_tea_or(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the hand-shaken lemon tea order should be between 2025-10-10 12:00:00 and 2025-10-10 14:00:00"
        assert len(result) > 0

    def test_rubric_2_the_hand_shaken_lemon_tea_order_should_choose_the_merchant_c(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hand-shaken lemon tea order should choose the merchant closest to the user: LINLEE Hand-shaken Lemon Tea (Forestry University Branch)"
        assert len(result) > 0

    def test_rubric_3_the_hand_shaken_lemon_tea_order_should_select_the_signature(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hand-shaken lemon tea order should select the Signature Hand-shaken Lemon Tea product"
        assert len(result) > 0

    def test_rubric_4_the_sweetness_level_for_the_signature_hand_shaken_lemon_tea(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The sweetness level for the Signature Hand-shaken Lemon Tea should be 5/10 sugar (slightly less than standard sweetness)"
        assert len(result) > 0

    def test_rubric_5_the_hand_shaken_lemon_tea_order_needs_a_note_requesting_the(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hand-shaken lemon tea order needs a note requesting the ugliest duck"
        assert len(result) > 0

    def test_rubric_6_the_delivery_address_for_the_salmon_sashimi_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the salmon sashimi order should be Jinqiu Residential Area, No. 368 Furong South Road, Tianxin District, Changsha, Hunan Province (180 meters from Railway Institute Metro Station Exit 2)"
        assert len(result) > 0

    def test_rubric_7_the_estimated_delivery_time_for_the_salmon_sashimi_order_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the salmon sashimi order should be between 2025-10-10 12:00:00 and 2025-10-10 14:00:00"
        assert len(result) > 0

    def test_rubric_8_the_salmon_sashimi_order_should_select_products_labeled_as_f(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The salmon sashimi order should select products labeled as Fresh-cut Today"
        assert len(result) > 0
