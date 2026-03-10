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
        assert result[0]["store_id"] == 'S17557512511049624_T00014'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557512511049624_P00091", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 268) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557512511049624_T00017'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557512511049624_P00105", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 142) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557512511049624_H00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557512511049624_P00003", "quantity": 1}, {"product_id": "S17557512511049624_P00004", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 436) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557512511049624_F00011'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557512511049624_P00079", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 1220) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17557512511049624_F00012'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17557512511049624_P00080", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 1280) < 1

    def test_rubric_0_the_departure_location_of_the_outbound_train_should_be_cheng(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure location of the outbound train should be Chengdu"
        assert len(result) > 0

    def test_rubric_1_the_destination_of_the_outbound_train_should_be_langzhong(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The destination of the outbound train should be Langzhong"
        assert len(result) > 0

    def test_rubric_2_need_to_check_if_there_are_high_speed_train_tickets_from_che(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check if there are high-speed train tickets from Chengdu to Langzhong after 20:00 (including 20:00) on 2025-03-21, and the result is yes (Train D5181 departing at 20:35 on 2025-03-21), the date in the outbound train ticket order should be 2025-03-21"
        assert len(result) > 0

    def test_rubric_3_the_departure_location_of_the_return_train_should_be_langzho(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure location of the return train should be Langzhong"
        assert len(result) > 0

    def test_rubric_4_the_destination_of_the_return_train_should_be_chengdu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The destination of the return train should be Chengdu"
        assert len(result) > 0

    def test_rubric_5_the_departure_date_of_the_return_train_should_be_2025_03_23(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date of the return train should be 2025-03-23"
        assert len(result) > 0

    def test_rubric_6_the_departure_time_of_the_return_train_should_be_around_12_0(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure time of the return train should be around 12:00"
        assert len(result) > 0

    def test_rubric_7_the_seat_type_in_the_return_train_order_should_be_first_clas(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The seat type in the return train order should be first class seat"
        assert len(result) > 0

    def test_rubric_8_the_hotel_ordered_should_be_located_within_the_langzhong_anc(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel ordered should be located within the Langzhong Ancient City"
        assert len(result) > 0

    def test_rubric_9_the_price_of_the_hotel_ordered_should_be_around_200_yuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price of the hotel ordered should be around 200 yuan"
        assert len(result) > 0

    def test_rubric_10_the_hotel_order_should_include_rooms_for_two_nights__which_m(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order should include rooms for two nights, which must be 2025-03-21 and 2025-03-22 respectively"
        assert len(result) > 0

    def test_rubric_11_the_status_of_the_order_with_order_id_s17557512511049624_o00(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The status of the order with order ID S17557512511049624_O00001 should be cancelled"
        assert len(result) > 0

    def test_rubric_12_the_departure_date_of_the_flight_ordered_should_be_2025_03_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date of the flight ordered should be 2025-03-23"
        assert len(result) > 0

    def test_rubric_13_the_takeoff_time_of_the_flight_ordered_should_be_between_17(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The takeoff time of the flight ordered should be between 17:00-18:00"
        assert len(result) > 0

    def test_rubric_14_the_seat_type_in_the_flight_ticket_order_should_be_economy_c(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The seat type in the flight ticket order should be economy class"
        assert len(result) > 0
