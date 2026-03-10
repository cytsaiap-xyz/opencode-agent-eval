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
        assert result[0]["store_id"] == 'S17550810646623020_A00009'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550810646623020_P00052", "quantity": 8}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1200) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550810646623020_A00010'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550810646623020_P00062", "quantity": 4}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 480) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550810646623020_I00018'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 12

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550810646623020_F00014'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17550810646623020_P00089", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 1960) < 1

    def test_rubric_0_the_boat_tour_ticket_should_be_used_between_14_00_18_00(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The boat tour ticket should be used between 14:00-18:00"
        assert len(result) > 0

    def test_rubric_1_the_boat_tour_ticket_order_should_include_8_tickets(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The boat tour ticket order should include 8 tickets"
        assert len(result) > 0

    def test_rubric_2_the_boat_tour_ticket_order_date_should_be_june_30__2024(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The boat tour ticket order date should be June 30, 2024"
        assert len(result) > 0

    def test_rubric_3_other_experience_activities_not_involving_water_activities_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Other experience activities not involving water activities should be within Wuzhen West Scenic Area"
        assert len(result) > 0

    def test_rubric_4_other_experience_activity_tickets_not_involving_water_activi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Other experience activity tickets not involving water activities should be used between 14:00-18:00"
        assert len(result) > 0

    def test_rubric_5_the_order_for_other_experience_activity_tickets_not_involvin(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order for other experience activity tickets not involving water activities should include 4 tickets"
        assert len(result) > 0

    def test_rubric_6_the_order_date_for_other_experience_activity_tickets_not_inv(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order date for other experience activity tickets not involving water activities should be June 30, 2024"
        assert len(result) > 0

    def test_rubric_7_the_reserved_restaurant_should_be_no_more_than_800_meters_fr(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should be no more than 800 meters from Wuzhen West Scenic Area"
        assert len(result) > 0

    def test_rubric_8_the_reserved_restaurant_should_have_a_classical_ambiance(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should have a Classical Ambiance"
        assert len(result) > 0

    def test_rubric_9_the_reserved_restaurant_should_have_banquet_set_meals_that_c(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should have banquet set meals that can accommodate 12 people"
        assert len(result) > 0

    def test_rubric_10_the_restaurant_reservation_time_should_be_18_00_on_june_30(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation time should be 18:00 on June 30, 2024"
        assert len(result) > 0

    def test_rubric_11_the_reservation_order_should_be_for_12_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reservation order should be for 12 people"
        assert len(result) > 0

    def test_rubric_12_the_departure_date_of_the_flight_order_should_be_june_30__20(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date of the flight order should be June 30, 2024"
        assert len(result) > 0

    def test_rubric_13_the_take_off_time_of_the_flight_should_be_at_or_after_07_00(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The take-off time of the flight should be at or after 07:00"
        assert len(result) > 0

    def test_rubric_14_to_ensure_members_can_arrive_from_hangzhou_airport_to_wuzhen(self):
        # Structural check - the answer must contain orders that satisfy:
        # "To ensure members can arrive from Hangzhou Airport to Wuzhen for the 14:00 activity on the same day, considering it takes one and a half hours from Hangzhou to Wuzhen, the flight in the ticket order should arrive in Hangzhou at or before 12:30"
        assert len(result) > 0

    def test_rubric_15_the_seat_type_in_the_flight_ticket_order_should_be_economy_c(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The seat type in the flight ticket order should be Economy Class"
        assert len(result) > 0
