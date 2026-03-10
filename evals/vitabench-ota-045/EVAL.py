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
        assert result[0]["store_id"] == 'S17557505502056324_F00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505502056324_P00078", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1180) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557112364479019_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505502056324_P00021", "quantity": 4}, {"product_id": "S17557505502056324_P00018", "quantity": 4}, {"product_id": "S17557505502056324_P00022", "quantity": 4}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 9408) < 1

    def test_rubric_0_flight_departure_date_must_be_august_27__2024__three_days_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Flight departure date must be August 27, 2024 (three days before birthday)"
        assert len(result) > 0

    def test_rubric_1_flight_order_must_be_scheduled_in_the_afternoon_to_evening(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Flight order must be scheduled in the afternoon to evening, allowing passengers to see the sunset from the plane"
        assert len(result) > 0

    def test_rubric_2_need_to_check_the_departure_and_arrival_times_of_train_k9786(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the departure and arrival times of train K9786, which are 11:41 departure and 22:58 arrival"
        assert len(result) > 0

    def test_rubric_3_accommodation_in_kashgar_must_be_booked_for_3_nights(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Accommodation in Kashgar must be booked for 3 nights"
        assert len(result) > 0

    def test_rubric_4_kashgar_accommodation_check_in_dates_must_be_august_28__2024(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Kashgar accommodation check-in dates must be August 28, 2024, August 29, 2024, and August 30, 2024 respectively"
        assert len(result) > 0

    def test_rubric_5_accommodation_in_kashgar_must_be_a_hotel_with_uyghur_charact(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Accommodation in Kashgar must be a hotel with Uyghur characteristics"
        assert len(result) > 0

    def test_rubric_6_must_book_4_rooms_per_night_for_the_kashgar_accommodation(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Must book 4 rooms per night for the Kashgar accommodation"
        assert len(result) > 0

    def test_rubric_7_the_hotel_in_kashgar_must_provide_parking_services_or_have_a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel in Kashgar must provide parking services or have a Parking Lot"
        assert len(result) > 0
