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
        assert result[0]["store_id"] == 'S17567836577215650_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836577215650_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 98) < 1

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
        assert result[2]["store_id"] == 'S17567836577215650_I00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836577215650_P00046", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 298) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17567836577215650_I00003'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17567836577215650_P00019", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 88) < 1

    def test_rubric_0_the_flower_arrangement_shop_should_have_a_rating_of_4_5_or_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flower arrangement shop should have a rating of 4.5 or above"
        assert len(result) > 0

    def test_rubric_1_the_flower_arrangement_shop_should_be_the_closest_one_to_ifl(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flower arrangement shop should be the closest one to iFLYTEK Artificial Intelligence Research Institute, 12th Floor, Building C3, Innovation Industrial Park, 2800 Innovation Avenue, High-tech District, Hefei"
        assert len(result) > 0

    def test_rubric_2_the_ordered_item_at_the_flower_arrangement_shop_should_be_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the flower arrangement shop should be a beginner flower arrangement introduction course package"
        assert len(result) > 0

    def test_rubric_3_the_ordered_item_at_the_flower_arrangement_shop_should_have(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the flower arrangement shop should have the longest teaching duration"
        assert len(result) > 0

    def test_rubric_4_the_reserved_flower_arrangement_shop_should_be_floral_life(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved flower arrangement shop should be Floral Life"
        assert len(result) > 0

    def test_rubric_5_the_reservation_time_for_the_flower_arrangement_shop_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation time for the flower arrangement shop should be 2024-04-19 18:00"
        assert len(result) > 0

    def test_rubric_6_the_number_of_people_for_the_flower_arrangement_shop_reserva(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the flower arrangement shop reservation should be 1"
        assert len(result) > 0

    def test_rubric_7_the_seafood_buffet_restaurant_should_be_within_2000m__inclus(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The seafood buffet restaurant should be within 2000m (inclusive) of Floral Life, 3rd Floor, Building A, Technology Entrepreneurship Plaza, 2560 Innovation Avenue, High-tech District, Hefei"
        assert len(result) > 0

    def test_rubric_8_the_seafood_buffet_restaurant_should_provide_free_parking(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The seafood buffet restaurant should provide free parking"
        assert len(result) > 0

    def test_rubric_9_the_ordered_item_at_the_seafood_buffet_restaurant_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the seafood buffet restaurant should be a single person package"
        assert len(result) > 0

    def test_rubric_10_the_ordered_item_at_the_seafood_buffet_restaurant_should_inc(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the seafood buffet restaurant should include salmon"
        assert len(result) > 0

    def test_rubric_11_user_behavior_history_needs_to_be_checked__the_user_s_usual(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "User behavior history needs to be checked; the user\'s usual spending on Japanese cuisine is 250 yuan, and since there\'s no package that matches the user\'s usual consumption habits, the price of the ordered item at the seafood buffet restaurant should be within 300 yuan (inclusive)"
        assert len(result) > 0

    def test_rubric_12_the_foot_massage_shop_should_be_within_500m__inclusive__of_r(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The foot massage shop should be within 500m (inclusive) of Room 502, Unit 2, Building 8, Rongqiao Central Park, Wangjiang West Road and Qianshan Road Intersection, Shushan District, Hefei"
        assert len(result) > 0

    def test_rubric_13_the_foot_massage_shop_should_have_a_rating_of_4_5_or_above(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The foot massage shop should have a rating of 4.5 or above"
        assert len(result) > 0

    def test_rubric_14_the_foot_massage_shop_should_guarantee_massage_service_avail(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The foot massage shop should guarantee massage service availability on 2024-04-19 21:30"
        assert len(result) > 0

    def test_rubric_15_the_ordered_item_at_the_foot_massage_shop_should_be_a_single(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the foot massage shop should be a single person foot massage package"
        assert len(result) > 0

    def test_rubric_16_the_usage_duration_of_the_ordered_item_at_the_foot_massage_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The usage duration of the ordered item at the foot massage shop should be 1 hour"
        assert len(result) > 0

    def test_rubric_17_the_price_of_the_ordered_item_at_the_foot_massage_shop_shoul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of the ordered item at the foot massage shop should be within 100 yuan (inclusive)"
        assert len(result) > 0
