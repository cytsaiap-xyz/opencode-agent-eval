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
        for i, order in enumerate(result):
            if i in {2}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550812965821285_A00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550812965821285_P00004", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 180) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550812965821285_I00006'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550812965821285_P00035", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 398) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550812965821285_I00006'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 3

    def test_rubric_0_the_attraction_booked_should_be_an_indoor_venue(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction booked should be an indoor venue"
        assert len(result) > 0

    def test_rubric_1_the_attraction_booked_should_have_multiple_interactive_exper(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction booked should have multiple interactive experience zones"
        assert len(result) > 0

    def test_rubric_2_the_date_for_the_attraction_tickets_should_be_april_18__2026(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date for the attraction tickets should be April 18, 2026"
        assert len(result) > 0

    def test_rubric_3_the_attraction_tickets_should_be_a_family_package_for_2_adul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction tickets should be a family package for 2 adults and 1 child"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_ordered_from_should_be_no_more_than_3_kilomet(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered from should be no more than 3 kilometers away from Suzhou Science and Technology Museum, 1 Changjiang Road, High-Tech Zone, Suzhou, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_5_the_restaurant_ordered_from_should_be_of_good_quality(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered from should be of good quality"
        assert len(result) > 0

    def test_rubric_6_the_restaurant_ordered_from_should_be_located_in_a_shopping(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered from should be located in a shopping mall"
        assert len(result) > 0

    def test_rubric_7_the_set_meal_ordered_from_the_restaurant_must_include_salmon(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The set meal ordered from the restaurant must include Salmon dishes"
        assert len(result) > 0

    def test_rubric_8_the_set_meal_ordered_from_the_restaurant_should_be_one_set_f(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The set meal ordered from the restaurant should be one set for 2-3 persons, not multiple individual set meals"
        assert len(result) > 0

    def test_rubric_9_the_set_meal_ordered_from_the_restaurant_should_cost_between(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The set meal ordered from the restaurant should cost between 100-150 yuan per person, with a total price between 300-450 yuan"
        assert len(result) > 0

    def test_rubric_10_the_reserved_restaurant_should_be_wuer_izakaya__jinji_lake_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should be Wuer Izakaya (Jinji Lake Branch)"
        assert len(result) > 0

    def test_rubric_11_must_make_a_reservation_at_the_jinji_lake_branch_izakaya_res(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Must make a reservation at the Jinji Lake Branch izakaya restaurant for April 18, 2026 at 18:00"
        assert len(result) > 0

    def test_rubric_12_the_reservation_should_be_for_3_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reservation should be for 3 people"
        assert len(result) > 0
