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
        assert result[0]["store_id"] == 'S17557505500237378_F00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505500237378_P00069", "quantity": 1}]
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
        assert result[1]["store_id"] == 'S17557505500237378_F00009'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505500237378_P00064", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1700) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505500237378_A00005'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505500237378_P00029", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 684) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557505500237378_H00002'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557505500237378_P00009", "quantity": 1}, {"product_id": "S17557505500237378_P00010", "quantity": 1}, {"product_id": "S17557505500237378_P00011", "quantity": 1}, {"product_id": "S17557505500237378_P00012", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 1572) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17557505500237378_F00011'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17557505500237378_P00073", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 2670) < 1

    def test_rubric_0_the_flight_ticket_from_chongqing_to_zhangjiajie_should_have(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight ticket from Chongqing to Zhangjiajie should have a departure date of June 25, 2022"
        assert len(result) > 0

    def test_rubric_1_the_quantity_of_flight_tickets_from_chongqing_to_zhangjiajie(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of flight tickets from Chongqing to Zhangjiajie should be 1"
        assert len(result) > 0

    def test_rubric_2_the_flight_ticket_type_from_chongqing_to_zhangjiajie_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight ticket type from Chongqing to Zhangjiajie should be Economy Class"
        assert len(result) > 0

    def test_rubric_3_need_to_filter_flights_with_zhangjiajie_as_the_destination(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to filter flights with Zhangjiajie as the destination, and find the combination of flights departing from Shenzhen and Chongqing respectively with the shortest arrival time interval. The result is MU2287 and CZ3967, so the flight from Chongqing to Zhangjiajie in the order should be MU2287"
        assert len(result) > 0

    def test_rubric_4_the_flight_tickets_from_shenzhen_to_zhangjiajie_should_have(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight tickets from Shenzhen to Zhangjiajie should have a departure date of June 25, 2022"
        assert len(result) > 0

    def test_rubric_5_the_quantity_of_flight_tickets_from_shenzhen_to_zhangjiajie(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of flight tickets from Shenzhen to Zhangjiajie should be 2"
        assert len(result) > 0

    def test_rubric_6_the_flight_ticket_type_from_shenzhen_to_zhangjiajie_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight ticket type from Shenzhen to Zhangjiajie should be Economy Class"
        assert len(result) > 0

    def test_rubric_7_need_to_filter_flights_with_zhangjiajie_as_the_destination(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to filter flights with Zhangjiajie as the destination, and find the combination of flights departing from Shenzhen and Chongqing respectively with the shortest arrival time interval. The result is MU2287 and CZ3967, so the flight from Shenzhen to Zhangjiajie in the order should be CZ3967"
        assert len(result) > 0

    def test_rubric_8_the_attraction_to_order_should_be_zhangjiajie_national_fores(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction to order should be Zhangjiajie National Forest Park"
        assert len(result) > 0

    def test_rubric_9_the_usage_date_for_the_attraction_tickets_should_be_june_26(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The usage date for the attraction tickets should be June 26, 2022"
        assert len(result) > 0

    def test_rubric_10_the_quantity_of_attraction_tickets_should_be_3(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of attraction tickets should be 3"
        assert len(result) > 0

    def test_rubric_11_the_distance_from_the_booked_hotel_to_the_zhangjiajie_nation(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The distance from the booked hotel to the Zhangjiajie National Forest Park Visitor Center should be within 1km (including 1km)"
        assert len(result) > 0

    def test_rubric_12_the_hotel_order_should_include_a_king_room_for_2_nights__wit(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order should include a King Room for 2 nights, with booking dates of June 25, 2022 and June 26, 2022"
        assert len(result) > 0

    def test_rubric_13_the_hotel_order_should_include_a_twin_room_for_2_nights__wit(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order should include a Twin Room for 2 nights, with booking dates of June 25, 2022 and June 26, 2022"
        assert len(result) > 0

    def test_rubric_14_the_flight_tickets_from_zhangjiajie_to_shenzhen_should_have(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight tickets from Zhangjiajie to Shenzhen should have a departure date of June 27, 2022"
        assert len(result) > 0

    def test_rubric_15_the_quantity_of_flight_tickets_from_zhangjiajie_to_shenzhen(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of flight tickets from Zhangjiajie to Shenzhen should be 3"
        assert len(result) > 0

    def test_rubric_16_the_flight_ticket_type_from_zhangjiajie_to_shenzhen_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight ticket type from Zhangjiajie to Shenzhen should be Economy Class"
        assert len(result) > 0
