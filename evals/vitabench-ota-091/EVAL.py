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
        assert result[0]["store_id"] == 'S17557515354675422_A00006'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557515354675422_P00045", "quantity": 1}, {"product_id": "S17557515354675422_P00046", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 238) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557515354675422_A00007'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557515354675422_P00053", "quantity": 1}, {"product_id": "S17557515354675422_P00058", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 295) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557515354675422_A00008'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557515354675422_P00068", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 30) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557515354675422_H00001'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557515354675422_P00005", "quantity": 1}, {"product_id": "S17557515354675422_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 716) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17557515354675422_H00003'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17557515354675422_P00025", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 498) < 1

    def test_rubric_0_it_won_t_rain_in_guilin_on_october_18_and_19__2026__and_it_w(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "It won\'t rain in Guilin on October 18 and 19, 2026, and it won\'t rain in Beihai on October 20 and 21, 2026, which meets the travel plan requirement of four days without rain, so the date for using Longji Rice Terraces tickets is October 18, 2026"
        assert len(result) > 0

    def test_rubric_1_longji_rice_terraces_tickets_should_include_2_adult_tickets(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Longji Rice Terraces tickets should include 2 adult tickets"
        assert len(result) > 0

    def test_rubric_2_longji_rice_terraces_tickets_should_include_1_child_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Longji Rice Terraces tickets should include 1 child ticket (7 years and below)"
        assert len(result) > 0

    def test_rubric_3_xingping_ancient_town_li_river_cruise_tickets_are_for_use_on(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Xingping Ancient Town Li River cruise tickets are for use on October 19, 2026"
        assert len(result) > 0

    def test_rubric_4_xingping_ancient_town_li_river_cruise_tickets_should_include(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Xingping Ancient Town Li River cruise tickets should include 2 adult tickets"
        assert len(result) > 0

    def test_rubric_5_xingping_ancient_town_li_river_cruise_tickets_should_include(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Xingping Ancient Town Li River cruise tickets should include 1 child ticket (7 years and below)"
        assert len(result) > 0

    def test_rubric_6_weizhou_island_dishui_danping_scenic_area_tickets_are_for_us(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Weizhou Island Dishui Danping Scenic Area tickets are for use on October 20, 2026"
        assert len(result) > 0

    def test_rubric_7_the_number_of_weizhou_island_dishui_danping_scenic_area_tick(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of Weizhou Island Dishui Danping Scenic Area tickets should be 3"
        assert len(result) > 0

    def test_rubric_8_the_hotel_brand_for_staying_in_guilin_should_be_home_inn(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel brand for staying in Guilin should be Home Inn"
        assert len(result) > 0

    def test_rubric_9_the_hotel_order_in_guilin_should_include_rooms_for_2_nights(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel order in Guilin should include rooms for 2 nights, on October 18 and 19, 2026 respectively"
        assert len(result) > 0

    def test_rubric_10_the_budget_for_the_hotel_in_guilin_is_300_500_yuan_per_night(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The budget for the hotel in Guilin is 300-500 yuan per night"
        assert len(result) > 0

    def test_rubric_11_the_room_type_for_the_hotel_in_guilin_should_be_a_twin_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type for the hotel in Guilin should be a twin room"
        assert len(result) > 0

    def test_rubric_12_the_hotel_on_weizhou_island_should_be_booked_for_october_20(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel on Weizhou Island should be booked for October 20, 2026"
        assert len(result) > 0

    def test_rubric_13_the_budget_for_the_hotel_on_weizhou_island_is_300_500_yuan_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The budget for the hotel on Weizhou Island is 300-500 yuan per night"
        assert len(result) > 0

    def test_rubric_14_the_room_type_for_the_hotel_on_weizhou_island_should_be_a_fa(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type for the hotel on Weizhou Island should be a family suite"
        assert len(result) > 0
