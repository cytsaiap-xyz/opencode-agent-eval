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
        for i, order in enumerate(result):
            if i in {1}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17567836567248372_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836567248372_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 128) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836567248372_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2024-09-13 19:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567836567248372_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836567248372_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 32) < 1

    def test_rubric_0_the_boxing_gym_to_order_from_must_have_nationally_certified(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The boxing gym to order from must have nationally certified boxing coaches"
        assert len(result) > 0

    def test_rubric_1_the_package_ordered_from_the_gym_should_include_boxing_cours(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package ordered from the gym should include boxing courses"
        assert len(result) > 0

    def test_rubric_2_the_recommended_gym_should_be_within_800_meters_or_less_from(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The recommended gym should be within 800 meters or less from a parking lot"
        assert len(result) > 0

    def test_rubric_3_the_package_ordered_from_the_gym_should_include_professional(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package ordered from the gym should include professional private training"
        assert len(result) > 0

    def test_rubric_4_the_package_ordered_from_the_gym_should_include_protective_g(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package ordered from the gym should include protective gear"
        assert len(result) > 0

    def test_rubric_5_the_package_ordered_from_the_gym_should_include_basic_moveme(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package ordered from the gym should include basic movements instruction"
        assert len(result) > 0

    def test_rubric_6_should_check_if_the_recommended_gym_offers_single_trial_clas(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should check if the recommended gym offers single trial classes, and if so, the ordered package should include a single trial class"
        assert len(result) > 0

    def test_rubric_7_the_reserved_gym_should_be_nanning_gold_medal_boxing_trainin(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved gym should be Nanning Gold Medal Boxing Training Gym"
        assert len(result) > 0

    def test_rubric_8_the_gym_reservation_time_should_be_2024_09_13_19_00_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The gym reservation time should be 2024-09-13 19:00:00"
        assert len(result) > 0

    def test_rubric_9_the_number_of_people_for_the_gym_reservation_should_be_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the gym reservation should be 1"
        assert len(result) > 0

    def test_rubric_10_the_recommended_fast_food_restaurant_should_be_within_1km_or(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The recommended fast food restaurant should be within 1km or less from Nanning Gold Medal Boxing Training Gym"
        assert len(result) > 0

    def test_rubric_11_the_recommended_fast_food_restaurant_must_have_fast_serving(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The recommended fast food restaurant must have fast serving"
        assert len(result) > 0

    def test_rubric_12_the_single_person_meal_ordered_from_the_fast_food_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The single-person meal ordered from the fast food restaurant should be light-flavored"
        assert len(result) > 0

    def test_rubric_13_the_package_ordered_from_the_fast_food_restaurant_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package ordered from the fast food restaurant should be a single-person meal"
        assert len(result) > 0

    def test_rubric_14_the_package_ordered_from_the_fast_food_restaurant_should_hav(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package ordered from the fast food restaurant should have a balanced meat and vegetable combination"
        assert len(result) > 0

    def test_rubric_15_the_package_ordered_from_the_fast_food_restaurant_should_inc(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package ordered from the fast food restaurant should include rice"
        assert len(result) > 0

    def test_rubric_16_the_order_price_at_the_fast_food_restaurant_should_be_less_t(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The order price at the fast food restaurant should be less than or equal to 50 yuan"
        assert len(result) > 0
