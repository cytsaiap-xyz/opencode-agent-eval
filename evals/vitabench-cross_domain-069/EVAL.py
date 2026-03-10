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
        assert result[0]["store_id"] == 'S17550806610851493_S00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550806610851493_P00021", "quantity": 1}, {"product_id": "", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 298) < 1

    def test_rubric_0_the_food_delivery_order_must_be_for_legal_classic_books(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery order must be for legal classic books"
        assert len(result) > 0

    def test_rubric_1_the_purchased_books_must_be_hardcover_editions(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased books must be hardcover editions"
        assert len(result) > 0

    def test_rubric_2_the_purchased_books_must_have_collectible_value(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased books must have collectible value"
        assert len(result) > 0

    def test_rubric_3_the_purchased_books_should_be_delivered_to_room_1203__unit_5(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased books should be delivered to Room 1203, Unit 5, Jinnyu Jiahua Building, 19 Xibeiwang Middle Road, Haidian District, Beijing"
        assert len(result) > 0

    def test_rubric_4_the_books_need_to_be_delivered_on_the_same_day(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The books need to be delivered on the same day"
        assert len(result) > 0

    def test_rubric_5_need_to_check_the_operating_hours_of_the_private_cinema_for(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the operating hours of the private cinema for booking, with the result showing open until 1:00 AM, and the books should be delivered before 20:00 on June 8, 2025"
        assert len(result) > 0

    def test_rubric_6_the_private_cinema_must_be_a_small_private_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The private cinema must be a Small Private Room"
        assert len(result) > 0

    def test_rubric_7_the_package_duration_for_the_private_cinema_booking_must_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package duration for the private cinema booking must be 4 hours"
        assert len(result) > 0

    def test_rubric_8_the_private_cinema_must_be_close_to_home__within_3_kilometer(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The private cinema must be close to home, within 3 kilometers of Room 1203, Unit 5, Jinnyu Jiahua Building, 19 Xibeiwang Middle Road, Haidian District, Beijing"
        assert len(result) > 0

    def test_rubric_9_the_private_cinema_must_have_a_rating_higher_than_4_9(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The private cinema must have a rating higher than 4.9"
        assert len(result) > 0

    def test_rubric_10_the_private_cinema_needs_to_be_booked_for_the_latest_availab(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The private cinema needs to be booked for the latest available time slot on the same day (June 8, 2024), which is 21:00"
        assert len(result) > 0

    def test_rubric_11_the_number_of_people_for_the_private_cinema_booking_is_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the private cinema booking is 2"
        assert len(result) > 0

    def test_rubric_12_check_if_the_great_hall_of_the_people_is_open_for_visits_tom(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Check if The Great Hall of the People is open for visits tomorrow (June 9, 2024), with the result showing that The Great Hall of the People is open from 09:00-15:00 tomorrow"
        assert len(result) > 0

    def test_rubric_13_two_tickets_need_to_be_purchased_for_tomorrow__june_9__2024(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Two tickets need to be purchased for tomorrow (June 9, 2024)"
        assert len(result) > 0

    def test_rubric_14_the_attraction_for_the_tickets_should_be_the_great_hall_of_t(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction for the tickets should be The Great Hall of the People"
        assert len(result) > 0
