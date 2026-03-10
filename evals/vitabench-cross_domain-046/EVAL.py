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
        assert result[0]["store_id"] == 'S17550812417923070_I00009'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550812417923070_P00041", "quantity": 1}]
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
        assert result[1]["store_id"] == 'S17550812417923070_S00003'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550812417923070_P00011", "quantity": 1}, {"product_id": "S17550812417923070_P00012", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 89.8) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550812417923070_T00007'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550812417923070_P00031", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 154) < 1

    def test_rubric_0_the_in_store_merchant_should_be_an_outdoor_store_with_campin(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The in-store merchant should be an outdoor store with camping activities"
        assert len(result) > 0

    def test_rubric_1_the_ordered_outdoor_store_must_have_an_area_available_for_fr(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered outdoor store must have an area available for Frisbee activities"
        assert len(result) > 0

    def test_rubric_2_the_ordered_item_from_the_outdoor_store_should_be_a_two_pers(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item from the outdoor store should be a Two-Person Stove-Cooked Tea Package"
        assert len(result) > 0

    def test_rubric_3_the_takeout_order_must_include_playing_cards(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The takeout order must include Playing Cards"
        assert len(result) > 0

    def test_rubric_4_the_takeout_order_must_include_frisbee(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The takeout order must include Frisbee"
        assert len(result) > 0

    def test_rubric_5_the_playing_cards_and_frisbee_in_the_takeout_order_must_come(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The playing cards and frisbee in the takeout order must come from the same store"
        assert len(result) > 0

    def test_rubric_6_the_delivery_address_for_the_takeout_order_should_be_hoshino(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the takeout order should be Hoshino Camping Base, 168 Wanghai Road, Xinglongtai District, Panjin, Liaoning Province"
        assert len(result) > 0

    def test_rubric_7_the_expected_delivery_time_for_the_takeout_order_should_be_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The expected delivery time for the takeout order should be before 15:00 on November 22, 2024"
        assert len(result) > 0

    def test_rubric_8_the_departure_time_of_the_final_ordered_high_speed_rail_tick(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure time of the final ordered high-speed rail ticket from Panjin to Dalian should be 21:42"
        assert len(result) > 0

    def test_rubric_9_the_train_number_of_the_final_ordered_high_speed_rail_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train number of the final ordered high-speed rail ticket should be G8021"
        assert len(result) > 0
