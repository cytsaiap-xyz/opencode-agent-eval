import json
import os
import pytest

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)
with open(os.path.join(_dir, "answer.json")) as _f:
    result = json.load(_f)

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
        assert result[0]["store_id"] == 'S17550802131843488_S00002'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802131843488_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 456) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802131843488_I00012'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802131843488_P00064", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 198) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802131843488_T00008'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802131843488_P00039", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 157) < 1

    def test_rubric_0_afternoon_tea_order_should_include_12_drinks(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Afternoon tea order should include 12 drinks"
        assert len(result) > 0

    def test_rubric_1_all_drinks_in_the_afternoon_tea_order_must_be_half_sugar__ca(self):
        # Structural check - the answer must contain orders that satisfy:
        # "All drinks in the afternoon tea order must be half-sugar, cannot choose full sugar, sugar-free or non-adjustable sugar drinks"
        assert len(result) > 0

    def test_rubric_2_afternoon_tea_order_drinks_must_include_three_different_flav(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Afternoon tea order drinks must include three different flavors"
        assert len(result) > 0

    def test_rubric_3_afternoon_tea_drinks_must_include_at_least_two_hot_drinks(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Afternoon tea drinks must include at least two hot drinks"
        assert len(result) > 0

    def test_rubric_4_the_afternoon_tea_order_must_consider_the_user_s_dietary_res(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The afternoon tea order must consider the user\'s dietary restrictions and cannot include alcoholic beverages"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_for_the_afternoon_tea_order_should_be_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the afternoon tea order should be 12th Floor, Building B, Yuanda Shopping Mall, intersection of 5th Avenue and Lijiang Road, Qunli, Daoli District, Harbin, Heilongjiang Province"
        assert len(result) > 0

    def test_rubric_6_the_delivery_time_for_the_afternoon_tea_order_should_be_betw(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the afternoon tea order should be between 5pm and 6pm on April 14, 2025"
        assert len(result) > 0

    def test_rubric_7_the_bowling_alley_should_be_located_within_3km_of_12th_floor(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The bowling alley should be located within 3km of 12th Floor, Building B, Yuanda Shopping Mall, intersection of 5th Avenue and Lijiang Road, Qunli, Daoli District, Harbin, Heilongjiang Province"
        assert len(result) > 0

    def test_rubric_8_should_search_for_the_highest_rated_bowling_alley__which_is(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Should search for the highest-rated bowling alley, which is Star Motion Bowling Alley"
        assert len(result) > 0

    def test_rubric_9_the_bowling_order_package_should_be_single_person_unlimited(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The bowling order package should be single person unlimited time"
        assert len(result) > 0

    def test_rubric_10_the_bowling_order_package_should_be_for_1_person(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The bowling order package should be for 1 person"
        assert len(result) > 0

    def test_rubric_11_should_search_for_the_earliest_departure_from_harbin_to_daqi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Should search for the earliest departure from Harbin to Daqing, which is G1205, and the order should be for train G1205"
        assert len(result) > 0

    def test_rubric_12_the_train_ticket_order_must_be_for_first_class_seat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket order must be for First-class seat"
        assert len(result) > 0

    def test_rubric_13_the_train_ticket_order_should_be_for_april_15__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket order should be for April 15, 2025"
        assert len(result) > 0
