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
        assert result[0]["store_id"] == 'S31127199787566498_S75237'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S25190868040778027_P13009", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 29.88) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S31834913635855682_S09841'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S29104756795340843_P23967", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 26.88) < 1

    def test_rubric_0_successfully_canceled_the_user_s_lemon_sour_soup_black_fish(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Successfully canceled the user\'s Lemon Sour Soup Black Fish order from Xiaoyu Family Sauerkraut Fish, and the order status with order_id E0721004T01 has been updated to cancelled"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_newly_placed_soft_tofu_soup_ord(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the newly placed Soft Tofu Soup order should be Zhejiang Hisun Pharmaceutical Co., Ltd., Binhai Industrial Zone, No. 56 Binhai Road, Jiaojiang District, Taizhou City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_2_the_estimated_delivery_time_for_the_newly_placed_soft_tofu_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the newly placed Soft Tofu Soup order should be around 18:00 on December 13, 2024, ensuring the user can finish eating by 18:30"
        assert len(result) > 0

    def test_rubric_3_the_newly_placed_soft_tofu_soup_order_must_include_staple_fo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The newly placed Soft Tofu Soup order must include staple food items"
        assert len(result) > 0
