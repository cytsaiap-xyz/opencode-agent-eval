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
        assert result[0]["store_id"] == 'S17557516206098984_F00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557516206098984_P00088", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1280) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557512803333407_T00012'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557516206098984_P00093", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 420) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557516206098984_F00012'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557516206098984_P00101", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 580) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557516206098984_F00013'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557516206098984_P00106", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 850) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17557516206098984_H00001'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17557516206098984_P00003", "quantity": 1}, {"product_id": "S17557516206098984_P00002", "quantity": 1}, {"product_id": "S17557516206098984_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 2064) < 1

    def test_order_5_matches_expected_store(self):
        assert result[5]["store_id"] == 'S17557516206098984_A00005'

    def test_order_5_has_correct_products(self):
        expected_products = [{"product_id": "S17557516206098984_P00044", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[5]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_5_has_correct_total_price(self):
        assert abs(result[5]["total_price"] - 120) < 1

    def test_rubric_0_the_first_leg_of_the_outbound_flight_must_be_from_taizhou_to(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The first leg of the outbound flight must be from Taizhou to Kunming"
        assert len(result) > 0

    def test_rubric_1_the_date_of_the_first_leg_of_the_outbound_flight_must_be_nex(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date of the first leg of the outbound flight must be next Saturday, June 19, 2027"
        assert len(result) > 0

    def test_rubric_2_the_second_leg_of_the_outbound_flight_must_be_from_kunming_t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The second leg of the outbound flight must be from Kunming to Xishuangbanna"
        assert len(result) > 0

    def test_rubric_3_the_departure_time_of_the_second_leg_must_be_at_least_90_min(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure time of the second leg must be at least 90 minutes after the arrival time of the first leg"
        assert len(result) > 0

    def test_rubric_4_the_date_of_the_second_leg_of_the_outbound_flight_must_be_ju(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date of the second leg of the outbound flight must be June 19, 2027"
        assert len(result) > 0

    def test_rubric_5_the_first_leg_of_the_return_flight_must_be_from_xishuangbann(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The first leg of the return flight must be from Xishuangbanna to Kunming"
        assert len(result) > 0

    def test_rubric_6_the_date_of_the_first_leg_of_the_return_flight_must_be_the_f(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date of the first leg of the return flight must be the fourth day of the trip, June 22, 2027"
        assert len(result) > 0

    def test_rubric_7_the_second_leg_of_the_return_flight_must_be_from_kunming_to(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The second leg of the return flight must be from Kunming to Taizhou"
        assert len(result) > 0

    def test_rubric_8_the_departure_time_of_the_second_leg_of_the_return_flight_mu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure time of the second leg of the return flight must be at least 90 minutes after the arrival time of the first leg"
        assert len(result) > 0

    def test_rubric_9_the_date_of_the_second_leg_of_the_return_flight_must_be_june(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date of the second leg of the return flight must be June 22, 2027"
        assert len(result) > 0

    def test_rubric_10_there_should_be_only_one_hotel_booking(self):
        # Structural check - the answer must contain orders that satisfy:
        # "There should be only one hotel booking"
        assert len(result) > 0

    def test_rubric_11_the_hotel_check_in_dates_must_be_june_19__2027__june_20__202(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel check-in dates must be June 19, 2027, June 20, 2027, and June 21, 2027"
        assert len(result) > 0

    def test_rubric_12_the_hotel_must_feature_dai_ethnic_style(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must feature Dai ethnic style"
        assert len(result) > 0

    def test_rubric_13_the_hotel_standard_must_match_the_user_s_usual_accommodation(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel standard must match the user\'s usual accommodation preference (mainly four-star, comfort-type hotels)"
        assert len(result) > 0

    def test_rubric_14_weather_information_for_june_21__2027__monday_after_next_wee(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Weather information for June 21, 2027 (Monday after next week) must be checked and provided, with the result showing cloudy, 22-28 degrees Celsius, 70% humidity, and scenic spot tickets need to be purchased"
        assert len(result) > 0

    def test_rubric_15_the_attraction_ticket_must_be_for_wild_elephant_valley(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction ticket must be for Wild Elephant Valley"
        assert len(result) > 0

    def test_rubric_16_the_ticket_must_include_the_sightseeing_bus(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket must include the sightseeing bus"
        assert len(result) > 0

    def test_rubric_17_the_date_of_the_attraction_ticket_must_be_june_21__2027(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date of the attraction ticket must be June 21, 2027"
        assert len(result) > 0
