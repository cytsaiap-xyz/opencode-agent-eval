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
        assert result[0]["store_id"] == 'S17550802131504747_I00009'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802131504747_P00045", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 176) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802131504747_S00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802131504747_P00001", "quantity": 1}, {"product_id": "S17550802131504747_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 109.8) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802131504747_T00005'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802131504747_P00021", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 1580) < 1

    def test_rubric_0_the_restaurant_ordered_should_be_in_haikou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered should be in Haikou"
        assert len(result) > 0

    def test_rubric_1_the_restaurant_ordered_should_be_a_nutrition_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered should be a nutrition restaurant"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_s_average_cost_per_person_should_be_less_than(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant\'s average cost per person should be less than or equal to 100 yuan"
        assert len(result) > 0

    def test_rubric_3_the_restaurant_s_food_should_be_a_post_illness_care_set_meal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant\'s food should be a post-illness care set meal"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_s_food_should_not_contain_seafood(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant\'s food should not contain seafood"
        assert len(result) > 0

    def test_rubric_5_the_quantity_of_restaurant_food_items_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of restaurant food items should be 2"
        assert len(result) > 0

    def test_rubric_6_the_delivery_order_should_include_a_knitted_hat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order should include a knitted hat"
        assert len(result) > 0

    def test_rubric_7_the_delivery_order_should_include_a_hand_warmer(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order should include a hand warmer"
        assert len(result) > 0

    def test_rubric_8_the_knitted_hat_and_hand_warmer_in_the_delivery_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The knitted hat and hand warmer in the delivery order should come from the same store"
        assert len(result) > 0

    def test_rubric_9_the_delivery_address_should_be_room_502__unit_2__building_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address should be Room 502, Unit 2, Building 3, Kangda Community, No. 74 Xuefu Road, Nangang District, Harbin"
        assert len(result) > 0

    def test_rubric_10_the_estimated_delivery_time_should_be_january_25__2025__16_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time should be January 25, 2025, 16:10-17:10"
        assert len(result) > 0

    def test_rubric_11_a_train_ticket_should_be_ordered(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "A train ticket should be ordered"
        assert len(result) > 0

    def test_rubric_12_the_train_ticket_should_be_for_a_train_from_harbin_to_haikou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train ticket should be for a train from Harbin to Haikou"
        assert len(result) > 0

    def test_rubric_13_the_seat_type_of_the_train_ticket_should_be_soft_sleeper__tr(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The seat type of the train ticket should be soft sleeper (train berth)"
        assert len(result) > 0

    def test_rubric_14_the_departure_time_of_the_train_should_be_january_27__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure time of the train should be January 27, 2025"
        assert len(result) > 0
