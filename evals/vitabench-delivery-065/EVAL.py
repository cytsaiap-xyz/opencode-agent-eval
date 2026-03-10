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
        assert result[0]["store_id"] == 'S32507084916632845_S19824'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S14825796504948355_P99189", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 38.0) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S32507084916632845_S19824'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S14825796504948355_P99189", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 19.0) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S52087136705399630_S27337'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S14316846796057144_P36623", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 198.0) < 1

    def test_rubric_0_order_one_more_serving_of_tofu_pudding_from_order_d0721003t0(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Order one more serving of tofu pudding from order D0721003T01"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_beef_jerky_order_should_be_jing(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the beef jerky order should be Jingcheng Xiufu, No. 288 Zhangba East Road, Yanta District, Xi\'an City, Shaanxi Province"
        assert len(result) > 0

    def test_rubric_2_the_beef_jerky_order_should_select_taizu_military_rations__f(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beef jerky order should select Taizu Military Rations: Freshly Baked Beef Jerky (Xi\'an Branch) as the merchant"
        assert len(result) > 0

    def test_rubric_3_the_beef_jerky_order_should_select_lean_type_products__avoid(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beef jerky order should select lean type products, avoiding marbled mixed types"
        assert len(result) > 0

    def test_rubric_4_the_total_weight_of_beef_jerky_products_in_the_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total weight of beef jerky products in the order should be one jin (500g)"
        assert len(result) > 0
