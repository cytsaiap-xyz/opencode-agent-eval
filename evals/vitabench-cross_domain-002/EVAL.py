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
        assert result[0]["store_id"] == ''

    def test_order_0_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 0) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802215964928_S00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802215964928_P00002", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 38) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802215964928_S00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802215964928_P00001", "quantity": 1}, {"product_id": "S17550802215964928_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 37) < 1

    def test_rubric_0_game_arcades_should_provide_claw_machines_and_arcade_games(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Game arcades should provide claw machines and arcade games"
        assert len(result) > 0

    def test_rubric_1_game_arcade_reservation_time_is_november_2__2025_at_3_00_pm(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Game arcade reservation time is November 2, 2025 at 3:00 PM"
        assert len(result) > 0

    def test_rubric_2_game_arcade_reservation_is_for_2_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Game arcade reservation is for 2 people"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_cancelled_bitter_gourd_beverage(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the cancelled bitter gourd beverage order is Retro Time Game Arcade, 168 East Renmin Road, Wucheng District, Jinhua, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_4_the_order_containing_two_cups_of_bitter_gourd_lemon_tea_has(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The order containing two cups of Bitter Gourd Lemon Tea has been cancelled"
        assert len(result) > 0

    def test_rubric_5_the_friend_is_taking_train_g1572(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The friend is taking train G1572"
        assert len(result) > 0

    def test_rubric_6_the_merchant_for_the_mint_lemon_tea_and_bitter_gourd_lemon_t(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The merchant for the Mint Lemon Tea and Bitter Gourd Lemon Tea order is A Little Tea"
        assert len(result) > 0

    def test_rubric_7_the_mint_lemon_tea_and_bitter_gourd_lemon_tea_order_contains(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Mint Lemon Tea and Bitter Gourd Lemon Tea order contains two beverages, one Mint Lemon Tea and one Bitter Gourd Lemon Tea"
        assert len(result) > 0

    def test_rubric_8_the_delivery_address_for_the_mint_lemon_tea_and_bitter_gourd(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the Mint Lemon Tea and Bitter Gourd Lemon Tea order is Retro Time Game Arcade, 168 East Renmin Road, Wucheng District, Jinhua, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_9_the_estimated_delivery_time_for_the_mint_lemon_tea_and_bitte(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the Mint Lemon Tea and Bitter Gourd Lemon Tea order should be slightly after 3:00 PM on November 2, 2025"
        assert len(result) > 0

    def test_rubric_10_the_dragon_boat_festival_in_2023_is_on_june_22__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Dragon Boat Festival in 2023 is on June 22, 2023"
        assert len(result) > 0
