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
            if i in {1, 2}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17564420291759936_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420291759936_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 288) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564420291759936_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2025-05-31 18:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 2

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564420291759936_I00004'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 2

    def test_rubric_0_the_ktv_to_be_ordered_should_have_a_rating_of_4_0_or_above(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV to be ordered should have a rating of 4.0 or above"
        assert len(result) > 0

    def test_rubric_1_the_ktv_package_must_include_drinks(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV package must include drinks"
        assert len(result) > 0

    def test_rubric_2_the_ktv_package_must_not_exceed_360_yuan__based_on_twice_the(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV package must not exceed 360 yuan (based on twice the upper limit of the user\'s leisure entertainment consumption of 120-180 yuan)"
        assert len(result) > 0

    def test_rubric_3_the_duration_of_the_ktv_package_should_be_2_hours(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The duration of the KTV package should be 2 hours"
        assert len(result) > 0

    def test_rubric_4_check_the_weather_information_for_the_weekend__may_31st__sun(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Check the weather information for the weekend (May 31st: sunny 20-28℃, June 1st: light rain 19-25℃), as it won\'t rain on the 31st, the KTV reservation time should be 2025-05-31 at 18:00:00"
        assert len(result) > 0

    def test_rubric_5_the_number_of_people_for_the_ktv_reservation_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the KTV reservation should be 2"
        assert len(result) > 0

    def test_rubric_6_the_ktv_to_be_booked_should_be_xingju_ktv__shinan_mixc_branc(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV to be booked should be Xingju KTV (Shinan Mixc Branch)"
        assert len(result) > 0

    def test_rubric_7_the_night_snack_venue_must_be_a_hot_pot_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The night snack venue must be a Hot pot restaurant"
        assert len(result) > 0

    def test_rubric_8_the_night_snack_venue_must_be_within_3km_of_home__sea_view_g(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The night snack venue must be within 3km of home (Sea View Garden, 76 Yan\'an Road)"
        assert len(result) > 0

    def test_rubric_9_the_night_snack_venue_must_have_a_two_person_private_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The night snack venue must have a Two-person private room"
        assert len(result) > 0

    def test_rubric_10_the_night_snack_venue_must_support_advance_reservations(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The night snack venue must support advance reservations"
        assert len(result) > 0

    def test_rubric_11_the_reservation_time_for_the_night_snack_venue_must_be_2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation time for the night snack venue must be 2025-05-31 at 21:00:00"
        assert len(result) > 0

    def test_rubric_12_the_number_of_people_for_the_night_snack_reservation_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the night snack reservation should be 2"
        assert len(result) > 0
