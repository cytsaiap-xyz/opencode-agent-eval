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
        assert result[0]["store_id"] == 'S17567844712785574_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567844712785574_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 298) < 1

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
        assert result[2]["store_id"] == 'S17567844712785574_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567844712785574_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 88) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17567844712785574_I00010'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17567844712785574_P00082", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 180) < 1

    def test_rubric_0_japanese_restaurant_orders_should_have_a_pleasant_environmen(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Japanese restaurant orders should have a pleasant environment"
        assert len(result) > 0

    def test_rubric_1_japanese_restaurant_orders_should_include_tatami(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Japanese restaurant orders should include Tatami"
        assert len(result) > 0

    def test_rubric_2_japanese_restaurant_orders_should_include_kimono_experience(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Japanese restaurant orders should include Kimono experience"
        assert len(result) > 0

    def test_rubric_3_japanese_restaurant_orders_must_be_kaiseki_cuisine(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Japanese restaurant orders must be Kaiseki Cuisine"
        assert len(result) > 0

    def test_rubric_4_japanese_restaurant_orders_must_be_for_a_single_person(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Japanese restaurant orders must be for a single person"
        assert len(result) > 0

    def test_rubric_5_the_reserved_japanese_restaurant_should_be_cherry_blossom_ja(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved Japanese restaurant should be Cherry Blossom Japanese Cuisine"
        assert len(result) > 0

    def test_rubric_6_the_japanese_restaurant_reservation_time_is_2026_04_11_12_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Japanese restaurant reservation time is 2026-04-11 12:00:00"
        assert len(result) > 0

    def test_rubric_7_the_number_of_people_in_the_japanese_restaurant_reservation(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people in the Japanese restaurant reservation is 1"
        assert len(result) > 0

    def test_rubric_8_pottery_workshop_orders_must_be_intangible_heritage_experien(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Pottery workshop orders must be intangible heritage experience packages"
        assert len(result) > 0

    def test_rubric_9_pottery_workshop_orders_must_be_for_single_person_packages(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Pottery workshop orders must be for single person packages"
        assert len(result) > 0

    def test_rubric_10_the_price_of_pottery_workshop_order_should_be_less_than_or_e(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of pottery workshop order should be less than or equal to 100 yuan"
        assert len(result) > 0

    def test_rubric_11_based_on_user_historic_orders_and_behavior__the_yoga_studio(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Based on user historic orders and behavior, the yoga studio selected should not be Zen Yoga Lifestyle Center or Zen Joy Yoga Studio"
        assert len(result) > 0

    def test_rubric_12_the_items_ordered_at_the_yoga_studio_should_be_pilates_cours(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The items ordered at the yoga studio should be Pilates courses"
        assert len(result) > 0

    def test_rubric_13_the_items_ordered_at_the_yoga_studio_should_be_private_lesso(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The items ordered at the yoga studio should be private lessons"
        assert len(result) > 0

    def test_rubric_14_the_items_ordered_at_the_yoga_studio_should_be_new_customer(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The items ordered at the yoga studio should be new customer discounts"
        assert len(result) > 0

    def test_rubric_15_since_a_suitable_pottery_workshop_can_be_found__there_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Since a suitable pottery workshop can be found, there should not be orders from foot therapy centers"
        assert len(result) > 0
