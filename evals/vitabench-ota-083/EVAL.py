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
        assert result[0]["store_id"] == 'S17557515810777999_A00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557515810777999_P00022", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 659) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557515810777999_H00003'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557515810777999_P00012", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 288) < 1

    def test_rubric_0_the_ordered_attraction_should_be_the_type_that_the_user_visi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered attraction should be the type that the user visits most frequently (by querying user profile, it should be theme parks)"
        assert len(result) > 0

    def test_rubric_1_by_checking_the_calendar__the_dragon_boat_festival_is_on_may(self):
        # Structural check - the answer must contain orders that satisfy:
        # "By checking the calendar, the Dragon Boat Festival is on May 31, 2025, and the attraction tickets should be booked for the Saturday after the festival (i.e., June 7, 2025)"
        assert len(result) > 0

    def test_rubric_2_the_purchased_tickets_should_be_family_package__2_adults___1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The purchased tickets should be family package (2 adults + 1 child)"
        assert len(result) > 0

    def test_rubric_3_the_booked_hotel_should_be_within_3km_of_zigong_fantawild_di(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel should be within 3km of Zigong Fantawild Dinosaur Kingdom"
        assert len(result) > 0

    def test_rubric_4_the_hotel_order_should_be_for_a_theme_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order should be for a theme room"
        assert len(result) > 0

    def test_rubric_5_the_hotel_reservation_date_should_be_june_7__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel reservation date should be June 7, 2025"
        assert len(result) > 0

    def test_rubric_6_the_hotel_order_cost_should_not_exceed_300_yuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order cost should not exceed 300 yuan"
        assert len(result) > 0

    def test_rubric_7_the_booked_hotel_should_offer_late_checkout(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel should offer late checkout"
        assert len(result) > 0

    def test_rubric_8_verify_that_the_hotel_reservation_is_confirmed_successfully(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Verify that the hotel reservation is confirmed successfully"
        assert len(result) > 0
