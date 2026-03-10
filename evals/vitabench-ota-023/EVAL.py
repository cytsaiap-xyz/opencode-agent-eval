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
        assert result[0]["store_id"] == 'S17557505509719097_T00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505509719097_P00060", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 372) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505509719097_A00005'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505509719097_P00027", "quantity": 1}, {"product_id": "S17557505509719097_P00033", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 60) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550809608986081_H00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505509719097_P00013", "quantity": 2}, {"product_id": "S17557505509719097_P00015", "quantity": 2}, {"product_id": "S17557505509719097_P00017", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 3528) < 1

    def test_rubric_0_the_train_tickets_ordered_should_be_high_speed_rail_tickets(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train tickets ordered should be high-speed rail tickets"
        assert len(result) > 0

    def test_rubric_1_the_departure_date_of_the_ordered_train_tickets_should_be_se(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure date of the ordered train tickets should be September 30, 2023"
        assert len(result) > 0

    def test_rubric_2_the_departure_time_of_the_ordered_train_tickets_should_be_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure time of the ordered train tickets should be between 9:00-15:00"
        assert len(result) > 0

    def test_rubric_3_the_train_tickets_ordered_should_be_first_class_seat_or_seco(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train tickets ordered should be First class seat or Second class seat"
        assert len(result) > 0

    def test_rubric_4_priority_should_be_given_to_seats_with_more_available_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Priority should be given to seats with more available tickets, G1571 Second class seat (156 tickets)"
        assert len(result) > 0

    def test_rubric_5_the_train_ticket_order_should_include_2_second_class_seat_ti(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train ticket order should include 2 Second class seat tickets"
        assert len(result) > 0

    def test_rubric_6_the_date_for_the_admission_tickets_should_be_2023_10_02(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date for the admission tickets should be 2023-10-02"
        assert len(result) > 0

    def test_rubric_7_need_to_inquire_about_the_purchasing_method_for_bigan_temple(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to inquire about the purchasing method for Bigan Temple tickets, provide the most cost-effective ticket plan, and the ticket order should include 1 Adult ticket and 1 Student ticket"
        assert len(result) > 0

    def test_rubric_8_the_hotel_ordered_should_be_a_three_star_hotel(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel ordered should be a three-star hotel"
        assert len(result) > 0

    def test_rubric_9_the_distance_between_the_ordered_hotel_and_bigan_temple__big(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The distance between the ordered hotel and Bigan Temple, Bigan Avenue, Weihui City, Xinxiang, Henan Province should be less than or equal to 5 kilometers"
        assert len(result) > 0

    def test_rubric_10_the_hotel_order_should_include_rooms_for_three_nights__which(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel order should include rooms for three nights, which must be 2023-09-30, 2023-10-01, and 2023-10-02 respectively"
        assert len(result) > 0

    def test_rubric_11_since_second_class_seat_tickets_were_purchased_for_the_high(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Since Second class seat tickets were purchased for the high-speed rail, the room type in the hotel order should be king room, with quantity of each item being 2"
        assert len(result) > 0
