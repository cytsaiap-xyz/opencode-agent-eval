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
        assert result[0]["store_id"] == 'S17557512327935013_T00013'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557512327935013_P00093", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 256) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557512327935013_H00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557512327935013_P00009", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 428) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557512327935013_A00005'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557512327935013_P00031", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 160) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557512327935013_A00006'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557512327935013_P00034", "quantity": 1}, {"product_id": "S17557512327935013_P00036", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 200) < 1

    def test_rubric_0_the_train_ticket_booking_date_is_june_13__2026(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train ticket booking date is June 13, 2026"
        assert len(result) > 0

    def test_rubric_1_the_booked_train_ticket_is_for_a_train_departing_around_7_am(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked train ticket is for a train departing around 7 AM"
        assert len(result) > 0

    def test_rubric_2_the_booked_train_ticket_corresponds_to_the_train_with_the_sh(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked train ticket corresponds to the train with the shortest travel time"
        assert len(result) > 0

    def test_rubric_3_the_number_of_train_tickets_booked_is_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of train tickets booked is 2"
        assert len(result) > 0

    def test_rubric_4_the_total_price_of_the_booked_train_tickets_does_not_exceed(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total price of the booked train tickets does not exceed 400"
        assert len(result) > 0

    def test_rubric_5_the_booked_train_tickets_are_from_linyi_to_qufu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked train tickets are from Linyi to Qufu"
        assert len(result) > 0

    def test_rubric_6_the_hotel_booking_should_be_with_the_brand_that_the_user_mos(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booking should be with the brand that the user most frequently stays at (which is Home Inn according to the user profile)"
        assert len(result) > 0

    def test_rubric_7_the_hotel_booking_date_is_june_13__2026(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booking date is June 13, 2026"
        assert len(result) > 0

    def test_rubric_8_the_room_type_in_the_hotel_booking_is_a_twin_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type in the hotel booking is a twin room"
        assert len(result) > 0

    def test_rubric_9_the_confucius_temple_tickets_are_purchased_for_june_13__2026(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Confucius Temple tickets are purchased for June 13, 2026"
        assert len(result) > 0

    def test_rubric_10_only_adult_tickets_are_available_when_checking_confucius_tem(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Only adult tickets are available when checking Confucius Temple ticket information, so all tickets in the Confucius Temple order are adult tickets"
        assert len(result) > 0

    def test_rubric_11_the_number_of_tickets_in_the_confucius_temple_order_is_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of tickets in the Confucius Temple order is 2"
        assert len(result) > 0

    def test_rubric_12_check_the_weather_in_qufu_on_june_14__2026__which_is_sunny(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Check the weather in Qufu on June 14, 2026 (which is sunny), purchase tickets for Nishan Sacred Land for June 14, 2026"
        assert len(result) > 0

    def test_rubric_13_check_that_the_age_range_for_child_tickets_at_nishan_sacred(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Check that the age range for child tickets at Nishan Sacred Land is 6-15 years old, the child is 13 years old, so purchase a child ticket for them"
        assert len(result) > 0

    def test_rubric_14_the_nishan_sacred_land_order_includes_adult_tickets(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Nishan Sacred Land order includes adult tickets"
        assert len(result) > 0
