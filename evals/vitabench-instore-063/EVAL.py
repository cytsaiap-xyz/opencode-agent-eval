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
        assert result[0]["store_id"] == 'S17567836566125885_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836566125885_P00004", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 158) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17567836566125885_I00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17567836566125885_P00016", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 23) < 1

    def test_rubric_0_the_distance_between_the_health_preservation_center_and_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The distance between the health preservation center and Room 1203, Building B, Huale Garden, 1037 Luoyu Road, Hongshan District, Wuhan should be within 3000m (including 3000m)"
        assert len(result) > 0

    def test_rubric_1_the_health_preservation_center_should_have_a_tcm_physician_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The health preservation center should have a TCM Physician available on Mondays"
        assert len(result) > 0

    def test_rubric_2_the_ordered_product_from_the_health_preservation_center_shou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered product from the health preservation center should be a multiple acupoint treatment package"
        assert len(result) > 0

    def test_rubric_3_the_ordered_product_from_the_health_preservation_center_shou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered product from the health preservation center should be moxibustion treatment"
        assert len(result) > 0

    def test_rubric_4_the_ordered_product_from_the_health_preservation_center_shou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered product from the health preservation center should be the Traditional Five-Point Moxibustion Experience Package"
        assert len(result) > 0

    def test_rubric_5_the_distance_between_the_beverage_shop_and_the_starlight_par(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The distance between the beverage shop and the Starlight Paradise Shopping Mall should be within 1000m (including 1000m)"
        assert len(result) > 0

    def test_rubric_6_after_checking_the_user_s_historic_orders__book_and_resercat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "After checking the user\'s historic orders, book and resercation, the user\'s preferred store rating range is 4.3-5.0, so the beverage shop\'s rating should be 4.3 or above"
        assert len(result) > 0

    def test_rubric_7_the_beverage_shop_should_be_checked_for_strawberry_milkshake(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beverage shop should be checked for Strawberry Milkshake, which is available, so the ordered product from the beverage shop should be Strawberry Milkshake"
        assert len(result) > 0
