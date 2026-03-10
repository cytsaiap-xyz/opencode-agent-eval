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
        assert result[0]["store_id"] == 'S17557512197955944_A00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557512197955944_P00032", "quantity": 5}, {"product_id": "S17557512197955944_P00033", "quantity": 1}, {"product_id": "S17557512197955944_P00034", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 500) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557512197955944_A00007'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557512197955944_P00057", "quantity": 6}, {"product_id": "S17557512197955944_P00059", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 390) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557512197955944_H00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557512197955944_P00009", "quantity": 2}, {"product_id": "S17557512197955944_P00010", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 3192) < 1

    def test_rubric_0_your_relative_s_family_has_a_middle_school_child__so_friday(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Your relative\'s family has a middle school child, so Friday\'s tickets include a student ticket"
        assert len(result) > 0

    def test_rubric_1_your_relative_s_family_also_has_a_72_year_old_senior__so_fri(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Your relative\'s family also has a 72-year-old senior, so Friday\'s tickets include a senior ticket"
        assert len(result) > 0

    def test_rubric_2_friday_s_tickets_include_adult_tickets(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Friday\'s tickets include adult tickets"
        assert len(result) > 0

    def test_rubric_3_the_group_consists_of_3_adults_from_your_family_and_4_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The group consists of 3 adults from your family and 4 people from your relative\'s family, including their 72-year-old senior and middle school child, so Friday\'s tickets include 5 adult tickets"
        assert len(result) > 0

    def test_rubric_4_friday_s_attraction_should_be_one_that_would_interest_a_midd(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Friday\'s attraction should be one that would interest a middle school student (research shows it\'s the Qingdao Marine Science and Technology Museum)"
        assert len(result) > 0

    def test_rubric_5_the_order_of_visiting_the_two_attractions_must_be_determined(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order of visiting the two attractions must be determined based on comparing ticket prices (Qingdao Marine Science and Technology Museum: Friday: Adult Ticket ¥80, Student Ticket ¥60, Senior Ticket ¥40; Saturday: Adult Ticket ¥100, Student Ticket ¥75, Senior Ticket ¥50. Qingdao Olympic Sailing Center: Friday: Adult Ticket ¥50, Senior Ticket ¥25; Saturday: Adult Ticket ¥60, Senior Ticket ¥30); The cheapest combination is visiting the Marine Science and Technology Museum on Friday and the Olympic Sailing Center on Saturday."
        assert len(result) > 0

    def test_rubric_6_the_ticket_date_in_the_qingdao_marine_science_and_technology(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket date in the Qingdao Marine Science and Technology Museum order is 2026-07-18"
        assert len(result) > 0

    def test_rubric_7_saturday_s_attraction_has_no_student_ticket_option__so_the_n(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Saturday\'s attraction has no student ticket option, so the number of adult tickets purchased is 6"
        assert len(result) > 0

    def test_rubric_8_saturday_s_attraction_order_includes_a_senior_ticket(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Saturday\'s attraction order includes a senior ticket"
        assert len(result) > 0

    def test_rubric_9_the_ticket_date_in_the_qingdao_olympic_sailing_center_order(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket date in the Qingdao Olympic Sailing Center order is 2026-07-19"
        assert len(result) > 0

    def test_rubric_10_the_hotel_booking_dates_are_july_17__2026_and_july_18__2026(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booking dates are July 17, 2026 and July 18, 2026"
        assert len(result) > 0

    def test_rubric_11_the_hotel_order_includes_only_twin_rooms(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order includes only twin rooms"
        assert len(result) > 0

    def test_rubric_12_the_hotel_order_includes_2_twin_rooms_per_night(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order includes 2 twin rooms per night"
        assert len(result) > 0

    def test_rubric_13_the_hotel_should_have_a_rating_above_4_5(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel should have a rating above 4.5"
        assert len(result) > 0

    def test_rubric_14_the_rooms_in_the_hotel_order_should_have_sea_views(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The rooms in the hotel order should have sea views"
        assert len(result) > 0

    def test_rubric_15_the_hotel_booked_offers_laundry_service(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booked offers laundry service"
        assert len(result) > 0
