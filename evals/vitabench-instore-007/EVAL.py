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
        assert result[0]["store_id"] == 'S17564420246412321_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420246412321_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 528) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == ''

    def test_order_1_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 0) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564420246412321_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564420246412321_P00005", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 268) < 1

    def test_rubric_0_the_mahjong_venue_must_have_a_good_environment(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The mahjong venue must have a good environment"
        assert len(result) > 0

    def test_rubric_1_the_mahjong_venue_facilities_must_be_relatively_new(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The mahjong venue facilities must be relatively new"
        assert len(result) > 0

    def test_rubric_2_the_mahjong_venue_cannot_be_located_in_a_residential_area(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The mahjong venue cannot be located in a residential area"
        assert len(result) > 0

    def test_rubric_3_the_mahjong_venue_must_be_full_self_service_style(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The mahjong venue must be Full self-service style"
        assert len(result) > 0

    def test_rubric_4_the_mahjong_package_ordered_should_not_include_tea_and_snack(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The mahjong package ordered should not include tea and snacks"
        assert len(result) > 0

    def test_rubric_5_the_mahjong_venue_order_must_be_a_6_hour_private_room_packag(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The mahjong venue order must be a 6-hour private room package"
        assert len(result) > 0

    def test_rubric_6_the_mahjong_venue_reservation_time_must_be_august_24__2024_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The mahjong venue reservation time must be August 24, 2024 at 4 PM"
        assert len(result) > 0

    def test_rubric_7_the_number_of_people_for_the_mahjong_venue_reservation_shoul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the mahjong venue reservation should be 4"
        assert len(result) > 0

    def test_rubric_8_the_reserved_mahjong_venue_should_be_shangya_card___chess_cl(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved mahjong venue should be Shangya Card & Chess Club"
        assert len(result) > 0

    def test_rubric_9_the_bbq_restaurant_ordered_must_be_an_established_venue_with(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The BBQ restaurant ordered must be an established venue with at least five years of operation, opened before 2019"
        assert len(result) > 0

    def test_rubric_10_the_bbq_restaurant_ordered_should_be_within_500m__including(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The BBQ restaurant ordered should be within 500m (including 500m) of Laojiekou BBQ, 156 Financial Second Street, Taihu New Town, Binhu District, Wuxi"
        assert len(result) > 0

    def test_rubric_11_the_bbq_restaurant_ordered_must_be_open_until_3_00_am__inclu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The BBQ restaurant ordered must be open until 3:00 AM (including 3:00 AM)"
        assert len(result) > 0

    def test_rubric_12_the_bbq_restaurant_order_should_be_a_set_menu_for_four(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The BBQ restaurant order should be a Set menu for four"
        assert len(result) > 0

    def test_rubric_13_the_bbq_restaurant_order_should_cost_no_more_than_80_yuan_pe(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The BBQ restaurant order should cost no more than 80 yuan per person, with a total order amount not exceeding 320 yuan"
        assert len(result) > 0
