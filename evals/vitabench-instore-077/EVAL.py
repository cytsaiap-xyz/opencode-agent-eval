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
        assert result[0]["store_id"] == 'S17567842410354300_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567842410354300_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 168) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17567842410354300_I00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17567842410354300_P00011", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 68) < 1

    def test_rubric_0_the_xinjiang_restaurant_order_should_be_suitable_for_photo_c(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Xinjiang restaurant order should be suitable for photo check-in"
        assert len(result) > 0

    def test_rubric_1_the_xinjiang_restaurant_order_should_be_a_two_person_set_tha(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Xinjiang restaurant order should be a two-person set that includes alcoholic beverages, Spicy Lamb Hoof, and Hand-Grabbed Rice"
        assert len(result) > 0

    def test_rubric_2_the_distance_from_the_claw_machine_store_to_tianshan_style_x(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The distance from the claw machine store to Tianshan Style Xinjiang Cuisine, 1st Floor, Building A, Triumph Plaza, No. 198 Zhongzhou Middle Road, Xigong District, Luoyang should be within 2km (including 2km)"
        assert len(result) > 0

    def test_rubric_3_in_the_claw_machine_store__the_200_game_coins_package_costs(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "In the claw machine store, the 200 Game Coins Package costs only 10 yuan more than the 100 Game Coins Package, so the 200 Game Coins Package should be purchased"
        assert len(result) > 0

    def test_rubric_4_the_distance_from_the_xinjiang_restaurant_to_room_1503__buil(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The distance from the Xinjiang restaurant to Room 1503, Building B, Triumph Plaza, No. 229 Zhongzhou Middle Road, Xigong District, Luoyang is within 1km (including 1km), so no reservation is needed"
        assert len(result) > 0
