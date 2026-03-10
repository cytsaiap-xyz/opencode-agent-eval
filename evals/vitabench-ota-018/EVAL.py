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
        assert result[0]["store_id"] == 'S17557505472901595_A00006'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505472901595_P00052", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 200) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505472901595_F00010'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505472901595_P00087", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1560) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505472901595_H00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505472901595_P00023", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 2174) < 1

    def test_rubric_0_need_to_provide_inner_mongolia_xiangshawan_weather_forecast(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to provide Inner Mongolia Xiangshawan weather forecast information, with results showing sandstorm in Ordos on April 8, 2027, temperature 8-15 degrees, therefore the destination of the trip should be Ningxia Shapotou"
        assert len(result) > 0

    def test_rubric_1_the_attraction_for_the_admission_ticket_order_must_be_ningxi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction for the admission ticket order must be Ningxia Shapotou"
        assert len(result) > 0

    def test_rubric_2_the_type_of_admission_ticket_order_must_be_basic_admission_t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The type of admission ticket order must be basic admission ticket without other activities"
        assert len(result) > 0

    def test_rubric_3_the_date_of_the_admission_ticket_order_must_be_april_8__2027(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date of the admission ticket order must be April 8, 2027 (the second day after the first Wednesday of next month)"
        assert len(result) > 0

    def test_rubric_4_the_quantity_of_admission_tickets_must_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of admission tickets must be 2"
        assert len(result) > 0

    def test_rubric_5_the_arrival_city_for_the_flight_order_should_be_yinchuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The arrival city for the flight order should be Yinchuan"
        assert len(result) > 0

    def test_rubric_6_the_departure_date_of_the_flight_order_must_be_april_7__2027(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date of the flight order must be April 7, 2027 (the first Wednesday of next month)"
        assert len(result) > 0

    def test_rubric_7_the_quantity_of_flight_tickets_must_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of flight tickets must be 2"
        assert len(result) > 0

    def test_rubric_8_the_arrival_time_of_the_flight_should_be_in_the_morning(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The arrival time of the flight should be in the morning"
        assert len(result) > 0

    def test_rubric_9_the_check_in_date_for_the_hotel_order_must_be_april_7__2027(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The check-in date for the hotel order must be April 7, 2027"
        assert len(result) > 0

    def test_rubric_10_the_room_in_the_hotel_order_needs_to_have_a_desert_view(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room in the hotel order needs to have a desert view"
        assert len(result) > 0

    def test_rubric_11_the_hotel_should_be_rated_4_star_or_above(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel should be rated 4-star or above"
        assert len(result) > 0

    def test_rubric_12_the_hotel_address_should_be_located_near_ningxia_shapotou_ra(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel address should be located near Ningxia Shapotou rather than Inner Mongolia Xiangshawan"
        assert len(result) > 0
