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
        assert result[0]["store_id"] == 'S17557514237836785_F00009'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557514237836785_P00080", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 580) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557514237836785_F00012'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557514237836785_P00115", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1280) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557514237836785_H00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557514237836785_P00001", "quantity": 1}, {"product_id": "S17557514237836785_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 476) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557514237836785_A00005'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557514237836785_P00041", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 80) < 1

    def test_rubric_0_query_the_price_of_economy_class_flights_from_changchun_to_y(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Query the price of economy class flights from Changchun to Yanji for next week\'s holiday (which is known to be Qingming Festival on April 4, 2025) (1280), and the price for Friday\'s economy class flights from Changchun to Yanji (580), with a price difference of 1280-580=700, exceeding 500 yuan. The departure flight date is March 28, 2025"
        assert len(result) > 0

    def test_rubric_1_the_departure_flight_is_economy_class(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure flight is economy class"
        assert len(result) > 0

    def test_rubric_2_the_flight_in_the_departure_ticket_order_is_from_changchun_t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight in the departure ticket order is from Changchun to Yanji"
        assert len(result) > 0

    def test_rubric_3_the_return_flight_ticket_date_should_be_march_30__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight ticket date should be March 30, 2025"
        assert len(result) > 0

    def test_rubric_4_the_departure_flight_is_business_class(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure flight is business class"
        assert len(result) > 0

    def test_rubric_5_the_flight_in_the_departure_ticket_order_is_from_yanji_to_ch(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight in the departure ticket order is from Yanji to Changchun"
        assert len(result) > 0

    def test_rubric_6_the_hotel_booking_dates_are_march_28__2025_and_march_29__202(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booking dates are March 28, 2025 and March 29, 2025"
        assert len(result) > 0

    def test_rubric_7_the_hotel_must_be_within_5km_of_yanbian_university(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must be within 5km of Yanbian University"
        assert len(result) > 0

    def test_rubric_8_the_total_price_for_two_nights_at_the_hotel_cannot_exceed_50(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total price for two nights at the hotel cannot exceed 500 yuan"
        assert len(result) > 0

    def test_rubric_9_the_attraction_booking_date_is_march_29__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction booking date is March 29, 2025"
        assert len(result) > 0

    def test_rubric_10_the_purchased_ticket_is_an_adult_ticket(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The purchased ticket is an adult ticket"
        assert len(result) > 0
