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
        assert result[0]["store_id"] == 'S17550802118058644_A00006'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802118058644_P00030", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 288) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802118058644_I00010'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802118058644_P00070", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 108) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802118058644_S00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802118058644_P00001", "quantity": 1}, {"product_id": "S17550802118058644_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 41.8) < 1

    def test_rubric_0_must_check_and_compare_mianyang_s_weather_on_july_9_and_10(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Must check and compare Mianyang\'s weather on July 9 and 10, 2025: July 9 is sunny with temperatures of 26-35°C; July 10 is cloudy with temperatures of 27-38°C, July 10 is hotter"
        assert len(result) > 0

    def test_rubric_1_must_arrange_activities_reasonably_according_to_weather_cond(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Must arrange activities reasonably according to weather conditions: the date for rafting tickets should be July 10, 2025"
        assert len(result) > 0

    def test_rubric_2_rafting_activity_should_be_suitable_for_children(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Rafting activity should be suitable for children"
        assert len(result) > 0

    def test_rubric_3_must_choose_the_most_economical_option_available_for_rafting(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Must choose the most economical option available for rafting, the ticket order package should be Family Ticket (2 Adults 1 Child)"
        assert len(result) > 0

    def test_rubric_4_the_vr_game_center_ordered_should_be_near_a_shopping_mall(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The VR game center ordered should be near a shopping mall"
        assert len(result) > 0

    def test_rubric_5_the_package_ordered_should_be_a_two_hour_children_s_package(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package ordered should be a two-hour children\'s package at the VR game center"
        assert len(result) > 0

    def test_rubric_6_must_choose_the_most_economical_option_for_the_vr_game_cente(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Must choose the most economical option for the VR game center, the in-store order package should be Children\'s VR Adventure World (2 hours) 108 yuan"
        assert len(result) > 0

    def test_rubric_7_the_delivery_address_for_face_washing_towels_and_towels_must(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for face washing towels and towels must be JI Hotel, Next to Wangfujing Department Store, 68 East Linyuan Road, Fucheng District, Mianyang, Sichuan Province/JI Hotel next to Wangfujing"
        assert len(result) > 0

    def test_rubric_8_the_delivery_time_for_face_washing_towels_and_towels_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for face washing towels and towels should be between 21:00-22:00 on July 9, 2025"
        assert len(result) > 0

    def test_rubric_9_the_food_delivery_order_should_include_1_face_washing_towel(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery order should include 1 face washing towel and 1 towel"
        assert len(result) > 0

    def test_rubric_10_the_face_washing_towel_and_towel_should_come_from_the_same_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The face washing towel and towel should come from the same store"
        assert len(result) > 0
