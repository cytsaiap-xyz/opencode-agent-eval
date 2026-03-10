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
        assert result[0]["store_id"] == 'S17557073973233365_T00014'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557073973233365_P00112", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 112) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557073973233365_T00015'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557073973233365_P00122", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 130) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557073973233365_F00010'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557073973233365_P00091", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 2560) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557073973233365_F00011'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557073973233365_P00096", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 2560) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17557073973233365_H00001'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17557073973233365_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 688) < 1

    def test_order_5_matches_expected_store(self):
        assert result[5]["store_id"] == 'S17557073973233365_H00004'

    def test_order_5_has_correct_products(self):
        expected_products = [{"product_id": "S17557073973233365_P00026", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[5]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_5_has_correct_total_price(self):
        assert abs(result[5]["total_price"] - 880) < 1

    def test_order_6_matches_expected_store(self):
        assert result[6]["store_id"] == 'S17557073973233365_A00006'

    def test_order_6_has_correct_products(self):
        expected_products = [{"product_id": "S17557073973233365_P00043", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[6]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_6_has_correct_total_price(self):
        assert abs(result[6]["total_price"] - 200) < 1

    def test_rubric_0_the_status_of_the_train_ticket_order_for_train_number_g2926(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The status of the train ticket order for train number G2926 is cancelled"
        assert len(result) > 0

    def test_rubric_1_the_status_of_the_train_ticket_order_for_train_number_g2927(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The status of the train ticket order for train number G2927 is cancelled"
        assert len(result) > 0

    def test_rubric_2_the_flight_in_the_outbound_air_ticket_order_is_from_kunming(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight in the outbound air ticket order is from Kunming to Ningxia"
        assert len(result) > 0

    def test_rubric_3_the_flight_in_the_outbound_air_ticket_order_is_operated_by_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight in the outbound air ticket order is operated by Sichuan Airlines"
        assert len(result) > 0

    def test_rubric_4_the_flight_in_the_outbound_air_ticket_order_departs_in_the_m(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight in the outbound air ticket order departs in the morning"
        assert len(result) > 0

    def test_rubric_5_the_date_of_the_outbound_air_ticket_order_is_september_20__2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date of the outbound air ticket order is September 20, 2024"
        assert len(result) > 0

    def test_rubric_6_the_number_of_tickets_in_the_outbound_air_ticket_order_is_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of tickets in the outbound air ticket order is 2"
        assert len(result) > 0

    def test_rubric_7_the_flight_in_the_return_air_ticket_order_is_from_ningxia_to(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight in the return air ticket order is from Ningxia to Kunming"
        assert len(result) > 0

    def test_rubric_8_the_flight_in_the_return_air_ticket_order_is_operated_by_sic(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight in the return air ticket order is operated by Sichuan Airlines"
        assert len(result) > 0

    def test_rubric_9_the_flight_in_the_return_air_ticket_order_departs_in_the_aft(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight in the return air ticket order departs in the afternoon"
        assert len(result) > 0

    def test_rubric_10_the_date_of_the_return_air_ticket_order_is_september_22__202(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date of the return air ticket order is September 22, 2024"
        assert len(result) > 0

    def test_rubric_11_the_number_of_tickets_in_the_return_air_ticket_order_is_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of tickets in the return air ticket order is 2"
        assert len(result) > 0

    def test_rubric_12_the_booking_date_for_the_first_night_hotel_order_is_septembe(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booking date for the first night hotel order is September 20, 2024"
        assert len(result) > 0

    def test_rubric_13_the_hotel_in_the_first_night_hotel_order_should_be_in_jinfen(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel in the first night hotel order should be in Jinfeng District"
        assert len(result) > 0

    def test_rubric_14_the_hotel_in_the_first_night_hotel_order_should_be_near_a_su(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel in the first night hotel order should be near a subway station"
        assert len(result) > 0

    def test_rubric_15_the_room_type_in_the_first_night_hotel_order_should_be_a_kin(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type in the first night hotel order should be a king room"
        assert len(result) > 0

    def test_rubric_16_the_booking_date_for_the_second_night_hotel_order_is_septemb(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booking date for the second night hotel order is September 22, 2024"
        assert len(result) > 0

    def test_rubric_17_the_hotel_in_the_second_night_hotel_order_should_be_in_shapo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel in the second night hotel order should be in Shapotou"
        assert len(result) > 0

    def test_rubric_18_the_hotel_in_the_second_night_hotel_order_should_have_starry(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel in the second night hotel order should have starry tents"
        assert len(result) > 0

    def test_rubric_19_the_room_type_in_the_second_night_hotel_order_should_be_a_ki(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type in the second night hotel order should be a king room"
        assert len(result) > 0

    def test_rubric_20_query_which_day_has_the_lowest_temperature_in_yinchuan__ning(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Query which day has the lowest temperature in Yinchuan, Ningxia from September 20, 2024 to September 22, 2024 (the result is September 21, 2024), so the date of the admission tickets is September 21, 2024"
        assert len(result) > 0

    def test_rubric_21_the_type_of_admission_tickets_purchased_is_adult_ticket(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The type of admission tickets purchased is Adult Ticket"
        assert len(result) > 0

    def test_rubric_22_the_number_of_adult_tickets_in_the_scenic_spot_order_is_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of Adult Tickets in the scenic spot order is 2"
        assert len(result) > 0

    def test_rubric_23_the_scenic_spot_ordered_is_the_western_film_studio(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The scenic spot ordered is the Western Film Studio"
        assert len(result) > 0
