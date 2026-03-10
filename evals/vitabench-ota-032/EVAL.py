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
        assert result[0]["store_id"] == 'S17557505488732992_T00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505488732992_P00065", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 356) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505488732992_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505488732992_P00001", "quantity": 1}, {"product_id": "S17557505488732992_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1176) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505488732992_A00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505488732992_P00046", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 180) < 1

    def test_rubric_0_the_train_ticket_in_the_order_is_from_shenzhen_to_nanjing__f(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket in the order is from Shenzhen to Nanjing (Fujian)"
        assert len(result) > 0

    def test_rubric_1_the_departure_time_of_the_train_in_the_ticket_order_is_febru(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure time of the train in the ticket order is February 28, 2025"
        assert len(result) > 0

    def test_rubric_2_the_train_ticket_purchased_in_the_order_is_second_class_seat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket purchased in the order is Second Class Seat"
        assert len(result) > 0

    def test_rubric_3_the_quantity_of_tickets_in_the_train_order_is_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of tickets in the train order is 2"
        assert len(result) > 0

    def test_rubric_4_the_booked_hotel_is_within_3km_of_the_tianluokeng_tulou_clus(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel is within 3km of the Tianluokeng Tulou Cluster Scenic Area"
        assert len(result) > 0

    def test_rubric_5_the_hotel_booking_dates_should_be_february_28__2025_and_marc(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booking dates should be February 28, 2025 and March 1, 2025"
        assert len(result) > 0

    def test_rubric_6_the_booked_hotel_should_have_hakka_features(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel should have Hakka Features"
        assert len(result) > 0

    def test_rubric_7_the_booked_hotel_should_have_non_smoking_floor(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel should have Non-smoking Floor"
        assert len(result) > 0

    def test_rubric_8_the_price_of_the_hotel_room_should_be_around_600_yuan_per_ni(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price of the hotel room should be around 600 yuan per night"
        assert len(result) > 0

    def test_rubric_9_check_the_calendar_to_confirm_the_specific_date_of_the_longt(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Check the calendar to confirm the specific date of the Longtou Festival (February 2nd of lunar calendar 2025 is March 1st), the booking time for the scenic area tickets is March 1, 2025"
        assert len(result) > 0

    def test_rubric_10_the_purchased_tickets_are_for_the_yunshui_yao_ancient_town_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The purchased tickets are for the Yunshui Yao Ancient Town Scenic Area"
        assert len(result) > 0

    def test_rubric_11_the_purchased_tickets_are_adult_ticket(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The purchased tickets are Adult Ticket"
        assert len(result) > 0

    def test_rubric_12_the_quantity_of_tickets_purchased_is_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of tickets purchased is 2"
        assert len(result) > 0
