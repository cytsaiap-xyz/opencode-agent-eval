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
        assert result[0]["store_id"] == 'S17557505485023605_F00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505485023605_P00092", "quantity": 6}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 7680) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505485023605_H00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505485023605_P00016", "quantity": 3}, {"product_id": "S17557505485023605_P00013", "quantity": 3}, {"product_id": "S17557505485023605_P00014", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 11520) < 1

    def test_rubric_0_departure_city_must_be_hangzhou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Departure city must be Hangzhou"
        assert len(result) > 0

    def test_rubric_1_destination_must_be_lhasa__tibet(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Destination must be Lhasa, Tibet"
        assert len(result) > 0

    def test_rubric_2_departure_date_must_be_the_3rd_of_next_month__july_3__2021(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Departure date must be the 3rd of next month (July 3, 2021)"
        assert len(result) > 0

    def test_rubric_3_should_check_all_trains_departing_from_hangzhou__with_result(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Should check all trains departing from Hangzhou, with results showing that none can reach the destination by July 4, thus air travel should be selected"
        assert len(result) > 0

    def test_rubric_4_the_quantity_for_the_flight_order_should_be_6(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity for the flight order should be 6"
        assert len(result) > 0

    def test_rubric_5_the_departure_time_for_the_flight_should_be_in_the_afternoon(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure time for the flight should be in the afternoon"
        assert len(result) > 0

    def test_rubric_6_the_hotel_booking_dates_should_be_july_3__2021__july_4__2021(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booking dates should be July 3, 2021, July 4, 2021, and July 5, 2021"
        assert len(result) > 0

    def test_rubric_7_the_hotel_must_have_oxygen_supply_facilities(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must have Oxygen Supply Facilities"
        assert len(result) > 0

    def test_rubric_8_the_hotel_must_have_tibetan_style_decoration(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must have Tibetan-style Decoration"
        assert len(result) > 0

    def test_rubric_9_the_hotel_accommodation_should_be_comfortable(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel accommodation should be comfortable"
        assert len(result) > 0

    def test_rubric_10_all_room_types_in_the_hotel_order_should_be_the_same(self):
        # Structural check - the answer must contain orders that satisfy:
        # "All room types in the hotel order should be the same"
        assert len(result) > 0

    def test_rubric_11_the_hotel_rooms_should_accommodate_6_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel rooms should accommodate 6 people"
        assert len(result) > 0

    def test_rubric_12_the_total_price_of_the_hotel_order_needs_to_be_less_than_or(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total price of the hotel order needs to be less than or equal to 5000 yuan"
        assert len(result) > 0

    def test_rubric_13_need_to_check_information_on_popular_attractions_in_lhasa__w(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check information on popular attractions in Lhasa, with results showing Potala Palace (4.8 stars, 200 yuan ticket), Jokhang Temple (4.7 stars, 85 yuan ticket), Barkhor Street (4.5 stars, Free Admission), and Norbulingka (4.3 stars, 60 yuan ticket)"
        assert len(result) > 0
