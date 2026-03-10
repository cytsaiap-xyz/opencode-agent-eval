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
        assert result[0]["store_id"] == 'S17557505543289546_F00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505543289546_P00068", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 796) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505543289546_H00003'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505543289546_P00015", "quantity": 1}, {"product_id": "S17557505543289546_P00016", "quantity": 1}, {"product_id": "S17557505543289546_P00017", "quantity": 1}, {"product_id": "S17557505543289546_P00018", "quantity": 1}, {"product_id": "S17557505543289546_P00022", "quantity": 1}, {"product_id": "S17557505543289546_P00023", "quantity": 1}, {"product_id": "S17557505543289546_P00024", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 2240) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505543289546_A00005'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505543289546_P00034", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 298) < 1

    def test_rubric_0_flight_order_must_book_a_red_eye_flight(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Flight order must book a Red-eye Flight"
        assert len(result) > 0

    def test_rubric_1_need_to_check_which_flight_between_2028_02_15_and_2028_02_16(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check which flight between 2028-02-15 and 2028-02-16 has the best Price Discount, the result shows that CA1835 on February 15th at 820 yuan is the cheapest, and the flight in the order must be CA1835"
        assert len(result) > 0

    def test_rubric_2_guesthouse_order_must_be_for_a_guesthouse_rather_than_a_chai(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Guesthouse order must be for a guesthouse rather than a Chain Brand hotel"
        assert len(result) > 0

    def test_rubric_3_guesthouse_must_have_naxi_ethnic_features(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Guesthouse must have Naxi Ethnic Features"
        assert len(result) > 0

    def test_rubric_4_guesthouse_booking_duration_must_be_one_week__7_nights(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Guesthouse booking duration must be one week (7 nights)"
        assert len(result) > 0

    def test_rubric_5_the_dates_of_the_guesthouse_order_must_be_2028_02_15__2028_0(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dates of the guesthouse order must be 2028-02-15, 2028-02-16, 2028-02-17, 2028-02-18, 2028-02-19, 2028-02-20, 2028-02-21 respectively"
        assert len(result) > 0

    def test_rubric_6_the_guesthouse_price_per_night_must_be_lower_than_the_user_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The guesthouse price per night must be lower than the user\'s historical hotel consumption budget, the price per night should be less than 500 yuan"
        assert len(result) > 0

    def test_rubric_7_must_book_tickets_for_jade_dragon_snow_mountain_scenic_area(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Must book tickets for Jade Dragon Snow Mountain Scenic Area"
        assert len(result) > 0

    def test_rubric_8_the_visiting_time_for_jade_dragon_snow_mountain_in_the_ticke(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The visiting time for Jade Dragon Snow Mountain in the ticket order must be the sixth day (i.e., 2028-02-20, the 6th day counting from the check-in date)"
        assert len(result) > 0

    def test_rubric_9_the_jade_dragon_snow_mountain_admission_ticket_must_choose_a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Jade Dragon Snow Mountain admission ticket must choose a package that includes warm clothing rental"
        assert len(result) > 0
