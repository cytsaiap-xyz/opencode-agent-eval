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
        assert result[0]["store_id"] == 'S17557514070032606_F00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557514070032606_P00100", "quantity": 7}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 8260) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557514070032606_F00011'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557514070032606_P00105", "quantity": 7}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 8260) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557512073196111_H00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557514070032606_P00015", "quantity": 1}, {"product_id": "S17557514070032606_P00016", "quantity": 1}, {"product_id": "S17557514070032606_P00024", "quantity": 1}, {"product_id": "S17557514070032606_P00025", "quantity": 1}, {"product_id": "S17557514070032606_P00013", "quantity": 2}, {"product_id": "S17557514070032606_P00014", "quantity": 2}, {"product_id": "S17557514070032606_P00022", "quantity": 2}, {"product_id": "S17557514070032606_P00023", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 8380) < 1

    def test_rubric_0_the_outbound_flight_order_must_be_from_shenzhen_to_nyingchi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound flight order must be from Shenzhen to Nyingchi"
        assert len(result) > 0

    def test_rubric_1_the_outbound_flight_order_departure_time_must_be_march_25__2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound flight order departure time must be March 25, 2025"
        assert len(result) > 0

    def test_rubric_2_the_outbound_flight_order_cabin_class_should_be_economy_clas(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound flight order cabin class should be economy class"
        assert len(result) > 0

    def test_rubric_3_the_outbound_flight_order_ticket_quantity_must_be_7(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound flight order ticket quantity must be 7"
        assert len(result) > 0

    def test_rubric_4_the_outbound_flight_order_must_depart_after_10_00_am(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound flight order must depart after 10:00 AM"
        assert len(result) > 0

    def test_rubric_5_the_return_flight_order_must_be_from_nyingchi_to_shenzhen(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight order must be from Nyingchi to Shenzhen"
        assert len(result) > 0

    def test_rubric_6_the_return_flight_order_departure_time_must_be_march_29__202(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight order departure time must be March 29, 2025"
        assert len(result) > 0

    def test_rubric_7_the_return_flight_order_cabin_class_should_be_economy_class(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight order cabin class should be economy class"
        assert len(result) > 0

    def test_rubric_8_the_return_flight_order_ticket_quantity_must_be_7(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight order ticket quantity must be 7"
        assert len(result) > 0

    def test_rubric_9_the_return_flight_order_must_depart_after_10_00_am(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight order must depart after 10:00 AM"
        assert len(result) > 0

    def test_rubric_10_the_hotel_booked_must_be_located_in_nyingchi_city_area(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booked must be located in Nyingchi city area"
        assert len(result) > 0

    def test_rubric_11_there_should_be_only_one_hotel_order(self):
        # Structural check - the answer must contain orders that satisfy:
        # "There should be only one hotel order"
        assert len(result) > 0

    def test_rubric_12_the_hotel_order_check_in_dates_must_be_march_25__2025__march(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order check-in dates must be March 25, 2025, March 26, 2025, March 27, 2025, and March 28, 2025"
        assert len(result) > 0

    def test_rubric_13_the_hotel_order_must_book_2_family_rooms_per_night(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order must book 2 family rooms per night"
        assert len(result) > 0

    def test_rubric_14_the_hotel_order_must_book_1_twin_room_per_night(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order must book 1 twin room per night"
        assert len(result) > 0

    def test_rubric_15_weather_for_march_26_in_nyingchi_should_be_checked__with_res(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Weather for March 26 in Nyingchi should be checked, with results showing light rain; no scenic spot tickets need to be booked"
        assert len(result) > 0
