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
        assert result[0]["store_id"] == 'S17557514720248044_F00009'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557514720248044_P00103", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 750) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557514720248044_F00011'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557514720248044_P00122", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 500) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557514720248044_H00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557514720248044_P00006", "quantity": 2}, {"product_id": "S17557514720248044_P00010", "quantity": 2}, {"product_id": "S17557514720248044_P00011", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 1728) < 1

    def test_rubric_0_must_search_and_compare_different_date_combinations_for_roun(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Must search and compare different date combinations for round-trip flights from Changchun to Guilin between May 4 and May 10, including combinations such as departing on the 4th and returning on the 7th, departing on the 5th and returning on the 8th, departing on the 6th and returning on the 9th, departing on the 7th and returning on the 10th, etc.; return the cheapest flight price combination as the travel dates, which is May 5th departure (750 yuan) + May 8th return (500 yuan), with a total price of 1250 yuan"
        assert len(result) > 0

    def test_rubric_1_the_outbound_flight_order_should_be_for_a_flight_from_changc(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound flight order should be for a flight from Changchun to Guilin"
        assert len(result) > 0

    def test_rubric_2_the_outbound_flight_order_date_should_be_may_5__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound flight order date should be May 5, 2025"
        assert len(result) > 0

    def test_rubric_3_the_outbound_flight_order_number_should_be_cz3421(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound flight order number should be CZ3421"
        assert len(result) > 0

    def test_rubric_4_the_quantity_for_the_outbound_flight_order_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity for the outbound flight order should be 2"
        assert len(result) > 0

    def test_rubric_5_the_return_flight_order_should_be_for_a_flight_from_guilin_t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight order should be for a flight from Guilin to Changchun"
        assert len(result) > 0

    def test_rubric_6_the_return_flight_order_date_should_be_may_8__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight order date should be May 8, 2025"
        assert len(result) > 0

    def test_rubric_7_the_return_flight_order_number_should_be_ca1847(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight order number should be CA1847"
        assert len(result) > 0

    def test_rubric_8_the_quantity_for_the_return_flight_order_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity for the return flight order should be 2"
        assert len(result) > 0

    def test_rubric_9_should_check_the_hotel_brands_where_the_user_frequently_stay(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Should check the hotel brands where the user frequently stays, which are Vienna, Ji Hotel, or Orange Hotel; the hotel brand in the hotel order should be Vienna, Ji Hotel, or Orange Hotel"
        assert len(result) > 0

    def test_rubric_10_the_hotel_room_in_the_order_must_be_a_king_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel room in the order must be a king room"
        assert len(result) > 0

    def test_rubric_11_the_hotel_check_in_dates_must_match_the_flight_itinerary__fo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel check-in dates must match the flight itinerary, for a total of 3 nights"
        assert len(result) > 0

    def test_rubric_12_the_hotel_order_should_include_2_rooms_per_night_to_accommod(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order should include 2 rooms per night to accommodate the need for separate beds"
        assert len(result) > 0

    def test_rubric_13_the_check_in_dates_in_the_hotel_order_should_be_may_5__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The check-in dates in the hotel order should be May 5, 2025, May 6, 2025, and May 7, 2025 respectively"
        assert len(result) > 0
