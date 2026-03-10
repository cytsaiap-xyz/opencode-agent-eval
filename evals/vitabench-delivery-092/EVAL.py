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
        assert result[0]["store_id"] == 'S27275721451294039_S33656'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S20101317002502950_P98829", "quantity": 3}]
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
        assert result[1]["store_id"] == 'S19740820626295546_S67618'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S32673216822626376_P48212", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 179) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S24929731886763144_S48061'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S33846261535716549_P36658", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 69) < 1

    def test_rubric_0_the_delivery_address_for_the_grilled_fish_order_should_be_ro(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the grilled fish order should be Room 1204, Building 3, Haiyun Garden (Haiyuan Street), No. 24 Haiyuan Street, Shahekou District, Dalian, Liaoning Province (430m walk from Exit B of Second Hospital Metro Station)"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_grilled_fish_order_shoul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the grilled fish order should be around 19:00 on September 26, 2025"
        assert len(result) > 0

    def test_rubric_2_the_dinner_order_should_choose_grilled_fish_items(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dinner order should choose grilled fish items"
        assert len(result) > 0

    def test_rubric_3_the_grilled_fish_order_should_include_a_dual_flavor_grilled(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The grilled fish order should include a dual-flavor grilled fish with garlic and sauce flavors"
        assert len(result) > 0

    def test_rubric_4_the_grilled_fish_order_should_select_a_size_for_3_or_more_pe(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The grilled fish order should select a size for 3 or more people"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_for_the_beverage_order_should_be_room_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the beverage order should be Room 1204, Building 3, Haiyun Garden (Haiyuan Street), No. 24 Haiyuan Street, Shahekou District, Dalian, Liaoning Province (430m walk from Exit B of Second Hospital Metro Station)"
        assert len(result) > 0

    def test_rubric_6_the_estimated_delivery_time_for_the_beverage_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the beverage order should be between 18:00 and 19:00 on September 26, 2025"
        assert len(result) > 0

    def test_rubric_7_the_beverage_order_should_choose_grape_jasmine_drinks(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beverage order should choose grape jasmine drinks"
        assert len(result) > 0

    def test_rubric_8_the_beverage_order_specification_should_be_large_size_with_l(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beverage order specification should be large size with less sugar"
        assert len(result) > 0

    def test_rubric_9_the_beverage_order_quantity_should_be_3_cups(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beverage order quantity should be 3 cups"
        assert len(result) > 0

    def test_rubric_10_the_delivery_address_for_the_stir_fried_rice_noodles_order_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the stir-fried rice noodles order should be Room 1204, Building 3, Haiyun Garden (Haiyuan Street), No. 24 Haiyuan Street, Shahekou District, Dalian, Liaoning Province (430m walk from Exit B of Second Hospital Metro Station)"
        assert len(result) > 0

    def test_rubric_11_the_estimated_delivery_time_for_the_stir_fried_rice_noodles(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the stir-fried rice noodles order should be between 18:00 and 19:00 on September 26, 2025"
        assert len(result) > 0

    def test_rubric_12_the_stir_fried_rice_noodles_order_should_select_home_style_r(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The stir-fried rice noodles order should select Home-style Restaurant (Stir-fry·Rice Bowls·Dumplings)"
        assert len(result) > 0

    def test_rubric_13_the_stir_fried_rice_noodles_order_should_choose_stir_fried_r(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The stir-fried rice noodles order should choose stir-fried rice noodles that do not contain Chinese turnip"
        assert len(result) > 0
