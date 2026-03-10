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
        assert result[0]["store_id"] == 'S17550812145855949_I00013'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550812145855949_P00089", "quantity": 6}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 4188) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550812145855949_T00007'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550812145855949_P00048", "quantity": 4}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 72) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == ''

    def test_order_2_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 0) < 1

    def test_rubric_0_murder_mystery_game_venue_should_provide_a_two_day_one_night(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Murder Mystery Game venue should provide a two-day one-night murder mystery experience"
        assert len(result) > 0

    def test_rubric_1_the_ordered_script_should_be_an_emotional_script(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered script should be an Emotional Script"
        assert len(result) > 0

    def test_rubric_2_the_ordered_script_should_have_medium_difficulty_deduction(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered script should have Medium Difficulty Deduction"
        assert len(result) > 0

    def test_rubric_3_the_ordered_script_should_be_a_6_person_script(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered script should be a 6-Person Script"
        assert len(result) > 0

    def test_rubric_4_the_ordered_murder_mystery_package_should_include_male_and_f(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered murder mystery package should include male and female Styling services"
        assert len(result) > 0

    def test_rubric_5_the_ordered_murder_mystery_package_must_include_dinner_inclu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered murder mystery package must include Dinner Included"
        assert len(result) > 0

    def test_rubric_6_the_departure_station_of_the_ordered_train_should_be_xipu_st(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure station of the ordered train should be Xipu Station"
        assert len(result) > 0

    def test_rubric_7_the_arrival_station_of_the_ordered_train_should_be_dujiangya(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival station of the ordered train should be Dujiangyan Station"
        assert len(result) > 0

    def test_rubric_8_the_departure_time_of_the_ordered_train_should_be_between_10(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure time of the ordered train should be between 10:00-12:00 on August 3, 2024"
        assert len(result) > 0

    def test_rubric_9_the_quantity_of_ordered_train_tickets_should_be_4(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of ordered train tickets should be 4"
        assert len(result) > 0

    def test_rubric_10_the_ordered_restaurant_should_be_within_3000m_of_dujiangyan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered restaurant should be within 3000m of Dujiangyan Station"
        assert len(result) > 0

    def test_rubric_11_the_ordered_restaurant_package_should_include_wellness_dishe(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered restaurant package should include Wellness dishes and Snacks"
        assert len(result) > 0

    def test_rubric_12_the_ordered_restaurant_package_should_be_the_three_person_pa(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered restaurant package should be the Three-Person Package at Dujiangyan Sichuan Cuisine Restaurant, not three individual meals"
        assert len(result) > 0

    def test_rubric_13_seats_should_be_reserved_at_the_ordered_restaurant_for_12_30(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Seats should be reserved at the ordered restaurant for 12:30:00 on August 4, 2024"
        assert len(result) > 0

    def test_rubric_14_the_number_of_people_for_the_restaurant_reservation_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the restaurant reservation should be six"
        assert len(result) > 0
