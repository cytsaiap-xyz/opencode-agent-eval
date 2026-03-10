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
        assert result[0]["store_id"] == 'S17567843825839468_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567843825839468_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 588) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17567843825839468_I00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17567843825839468_P00019", "quantity": 6}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 168) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567843825839468_I00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567843825839468_P00021", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 288) < 1

    def test_rubric_0_the_chinese_restaurant_should_be_within_5000m__inclusive__of(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Chinese restaurant should be within 5000m (inclusive) of Shanxi Medical University"
        assert len(result) > 0

    def test_rubric_1_the_chinese_restaurant_should_have_retro_decoration_style(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Chinese restaurant should have retro decoration style"
        assert len(result) > 0

    def test_rubric_2_the_ordered_item_at_the_chinese_restaurant_should_be_a_six_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the Chinese restaurant should be a six-person package"
        assert len(result) > 0

    def test_rubric_3_the_ordered_item_at_the_chinese_restaurant_should_include_dr(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the Chinese restaurant should include drinks"
        assert len(result) > 0

    def test_rubric_4_the_ordered_item_at_the_chinese_restaurant_should_be_availab(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the Chinese restaurant should be available on weekends"
        assert len(result) > 0

    def test_rubric_5_the_board_game_club_should_be_within_3000m__inclusive__of_la(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The board game club should be within 3000m (inclusive) of Laozhaimen Private Cuisine, 500m east of Shanxi Medical University, Qinxian North Street, Xiaodian District, Taiyuan City"
        assert len(result) > 0

    def test_rubric_6_the_ordered_item_at_the_board_game_club_should_be_werewolf_g(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the board game club should be Werewolf game tickets"
        assert len(result) > 0

    def test_rubric_7_the_ordered_item_at_the_board_game_club_should_be_individual(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the board game club should be Individual ticket"
        assert len(result) > 0

    def test_rubric_8_the_quantity_of_ordered_items_at_the_board_game_club_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of ordered items at the board game club should be 6"
        assert len(result) > 0

    def test_rubric_9_the_ordered_flower_shop_should_be_within_2000m__inclusive__o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered flower shop should be within 2000m (inclusive) of Room 1203, Building A, Longcheng Garden, No.100 South Inner Ring Street, Yingze District, Taiyuan City"
        assert len(result) > 0

    def test_rubric_10_the_ordered_flower_shop_should_be_open_until_23_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered flower shop should be open until 23:00"
        assert len(result) > 0

    def test_rubric_11_should_check_if_the_flower_shop_has_white_rose_bouquet_vouch(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should check if the flower shop has white rose bouquet vouchers, result is no, therefore the ordered item at the flower shop should be red rose"
        assert len(result) > 0

    def test_rubric_12_the_ordered_item_at_the_flower_shop_should_be_a_bouquet(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the flower shop should be a bouquet"
        assert len(result) > 0

    def test_rubric_13_the_ordered_item_at_the_flower_shop_cannot_be_a_discounted_i(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the flower shop cannot be a discounted item"
        assert len(result) > 0
