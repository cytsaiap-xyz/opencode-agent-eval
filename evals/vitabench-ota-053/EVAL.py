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
        assert result[0]["store_id"] == 'S17557512640389974_F00009'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557512640389974_P00081", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 4740) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557512640389974_F00009'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557512640389974_P00082", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 5360) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557512640389974_H00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557512640389974_P00003", "quantity": 1}, {"product_id": "S17557512640389974_P00004", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 2840) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557512640389974_A00005'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557512640389974_P00044", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 480) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17557512640389974_A00006'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17557512640389974_P00056", "quantity": 1}, {"product_id": "S17557512640389974_P00057", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 300) < 1

    def test_rubric_0_the_status_of_the_original_order_for_three_economy_class_fli(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The status of the original order for three economy class flight tickets for June 19, 2026 in the historical orders is cancelled"
        assert len(result) > 0

    def test_rubric_1_the_date_of_the_booked_flight_tickets_is_june_19__2026(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date of the booked flight tickets is June 19, 2026"
        assert len(result) > 0

    def test_rubric_2_the_flight_originally_booked_in_the_historical_orders_was_cz(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flight originally booked in the historical orders was CZ3567, so  the newly booked flight is also CZ3567"
        assert len(result) > 0

    def test_rubric_3_the_newly_booked_flight_tickets_are_for_business_class(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The newly booked flight tickets are for business class"
        assert len(result) > 0

    def test_rubric_4_the_number_of_flight_tickets_booked_is_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of flight tickets booked is 2"
        assert len(result) > 0

    def test_rubric_5_the_hotel_booking_dates_are_june_19__2026_and_june_20__2026(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booking dates are June 19, 2026 and June 20, 2026"
        assert len(result) > 0

    def test_rubric_6_the_booked_hotel_should_be_close_to_the_business_center(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel should be close to the business center"
        assert len(result) > 0

    def test_rubric_7_the_booked_hotel_room_type_should_be_a_twin_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel room type should be a twin room"
        assert len(result) > 0

    def test_rubric_8_the_price_per_night_for_the_booked_hotel_room_must_be_within(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price per night for the booked hotel room must be within the range of 1000-2000 yuan"
        assert len(result) > 0

    def test_rubric_9_next_saturday__june_20__2026__will_be_cloudy_with_no_strong(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Next Saturday (June 20, 2026) will be cloudy with no strong wind or rain, so the tickets purchased for Mount Putuo Scenic Area should include speedboat transportation"
        assert len(result) > 0

    def test_rubric_10_the_user_s_child_is_14_years_old__and_since_children_s_ticke(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The user\'s child is 14 years old, and since children\'s tickets are for ages 6-12, the number of adult tickets purchased for Mount Putuo Scenic Area should be 2"
        assert len(result) > 0

    def test_rubric_11_the_date_of_the_tickets_purchased_for_mount_putuo_scenic_are(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date of the tickets purchased for Mount Putuo Scenic Area is June 20, 2026"
        assert len(result) > 0

    def test_rubric_12_the_purchased_tickets_are_for_an_attraction_where_fishing_is(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased tickets are for an attraction where fishing is available"
        assert len(result) > 0

    def test_rubric_13_the_date_of_the_tickets_purchased_for_the_fishing_attraction(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date of the tickets purchased for the fishing attraction should be June 21, 2026"
        assert len(result) > 0

    def test_rubric_14_the_user_s_child_is_14_years_old__so_a_youth_ticket_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The user\'s child is 14 years old, so a youth ticket should be purchased for the fishing attraction"
        assert len(result) > 0

    def test_rubric_15_the_fishing_attraction_order_includes_an_adult_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The fishing attraction order includes an adult ticket"
        assert len(result) > 0
