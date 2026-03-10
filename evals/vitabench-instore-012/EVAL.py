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
        assert result[0]["store_id"] == 'S17564420255503132_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420255503132_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 120) < 1

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
        assert result[2]["store_id"] == 'S17564420255503132_I00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564420255503132_P00011", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 688) < 1

    def test_rubric_0_should_check_if_the_highest_temperature_on_july_4__2024_exce(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should check if the highest temperature on July 4, 2024 exceeds 30 degrees. The result is no, so the sports venue order should be from a previously visited gymnasium"
        assert len(result) > 0

    def test_rubric_1_need_to_check_user_s_historical_behavior_to_find_previously(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check user\'s historical behavior to find previously visited gymnasiums. The result is Lexing Sports Center, so the sports venue order should be from Lexing Sports Center"
        assert len(result) > 0

    def test_rubric_2_the_product_ordered_at_the_sports_venue_should_be_a_badminto(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product ordered at the sports venue should be a Badminton Court usage voucher"
        assert len(result) > 0

    def test_rubric_3_the_usage_duration_for_the_sports_venue_product_should_be_4(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The usage duration for the sports venue product should be 4 Hours"
        assert len(result) > 0

    def test_rubric_4_the_quantity_of_sports_venue_product_ordered_should_be_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of sports venue product ordered should be 1"
        assert len(result) > 0

    def test_rubric_5_the_reserved_sports_venue_should_be_lexing_sports_center(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved sports venue should be Lexing Sports Center"
        assert len(result) > 0

    def test_rubric_6_the_sports_venue_reservation_time_should_be_2024_07_04_14_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The sports venue reservation time should be 2024-07-04 14:00:00"
        assert len(result) > 0

    def test_rubric_7_the_number_of_people_for_the_sports_venue_reservation_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the sports venue reservation should be 4"
        assert len(result) > 0

    def test_rubric_8_the_rating_of_the_whole_roasted_lamb_restaurant_should_be_4(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The rating of the whole roasted lamb restaurant should be 4.2 or above"
        assert len(result) > 0

    def test_rubric_9_the_whole_roasted_lamb_restaurant_s_distance_from_lexing_spo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The whole roasted lamb restaurant\'s distance from Lexing Sports Center, 77 Sports Road, Yingze District, Taiyuan should not exceed 2km (including 2km)"
        assert len(result) > 0

    def test_rubric_10_the_product_ordered_from_the_whole_roasted_lamb_restaurant_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product ordered from the whole roasted lamb restaurant should be a set for 5-6 people"
        assert len(result) > 0

    def test_rubric_11_the_quantity_of_product_ordered_from_the_whole_roasted_lamb(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of product ordered from the whole roasted lamb restaurant should be 1"
        assert len(result) > 0

    def test_rubric_12_the_set_ordered_from_the_whole_roasted_lamb_restaurant_shoul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The set ordered from the whole roasted lamb restaurant should be non-alcoholic"
        assert len(result) > 0
