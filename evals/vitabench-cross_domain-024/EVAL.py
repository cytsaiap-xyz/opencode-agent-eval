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
        assert result[0]["store_id"] == 'S17550802145565647_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802145565647_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 128) < 1

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
        assert result[2]["store_id"] == 'S17550802145565647_I00011'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802145565647_P00055", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 228) < 1

    def test_rubric_0_the_takeout_item_ordered_for_mom_is_bird_s_nest_cup(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The takeout item ordered for mom is Bird\'s Nest Cup"
        assert len(result) > 0

    def test_rubric_1_the_price_of_the_takeout_item_ordered_for_mom_should_be_less(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of the takeout item ordered for mom should be less than 150 yuan"
        assert len(result) > 0

    def test_rubric_2_the_expected_delivery_time_of_the_takeout_item_ordered_for_m(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The expected delivery time of the takeout item ordered for mom is around 09:00 on May 11, 2025 【which means the expected delivery time is within the 08:45-09:15 range】"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_mom_s_takeout_order_is_water_lane_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for mom\'s takeout order is Water Lane Apartment, 89 Pingjiang Road, Gusu District, Suzhou, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_4_the_flower_arrangement_appointment_time_is_15_00_on_may_11(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flower arrangement appointment time is 15:00 on May 11, 2025"
        assert len(result) > 0

    def test_rubric_5_the_number_of_people_for_the_flower_arrangement_appointment(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the flower arrangement appointment is 2"
        assert len(result) > 0

    def test_rubric_6_the_ordered_flower_arrangement_studio_should_be_four_seasons(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered flower arrangement studio should be Four Seasons Floral Fragrance Studio (S17550802145565647_I00011)"
        assert len(result) > 0

    def test_rubric_7_the_flower_arrangement_package_should_include_teaching_servi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flower arrangement package should include teaching service"
        assert len(result) > 0

    def test_rubric_8_the_weather_on_may_11__2025_is_light_rain(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The weather on May 11, 2025 is light rain"
        assert len(result) > 0

    def test_rubric_9_should_not_purchase_cruise_tickets(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should not purchase cruise tickets"
        assert len(result) > 0
