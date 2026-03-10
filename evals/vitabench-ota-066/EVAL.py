import json
import os
import pytest
from solution import solve

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)

result = solve()
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
        assert result[0]["store_id"] == 'S17557514893253360_T00009'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557514893253360_P00052", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 178) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557514893253360_T00012'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557514893253360_P00070", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 178) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557514893253360_H00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557514893253360_P00007", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 758) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557514893253360_A00005'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557514893253360_P00027", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 170) < 1

    def test_rubric_0_departure_location_of_the_outbound_train_ticket_should_be_wu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Departure location of the outbound train ticket should be Wuxi"
        assert len(result) > 0

    def test_rubric_1_destination_of_the_outbound_train_ticket_should_be_zhenjiang(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Destination of the outbound train ticket should be Zhenjiang"
        assert len(result) > 0

    def test_rubric_2_departure_date_of_the_outbound_train_ticket_should_be_octobe(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Departure date of the outbound train ticket should be October 22, 2023"
        assert len(result) > 0

    def test_rubric_3_the_ordered_outbound_train_should_be_the_one_with_the_shorte(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered outbound train should be the one with the shortest travel time among available options, the train in the outbound ticket order should be G7095 (47 minutes travel time)"
        assert len(result) > 0

    def test_rubric_4_the_quantity_in_the_outbound_train_ticket_order_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity in the outbound train ticket order should be 2"
        assert len(result) > 0

    def test_rubric_5_the_seat_type_in_the_outbound_train_ticket_order_should_be_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The seat type in the outbound train ticket order should be Business class seat"
        assert len(result) > 0

    def test_rubric_6_departure_location_of_the_return_train_ticket_should_be_zhen(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Departure location of the return train ticket should be Zhenjiang"
        assert len(result) > 0

    def test_rubric_7_destination_of_the_return_train_ticket_should_be_wuxi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Destination of the return train ticket should be Wuxi"
        assert len(result) > 0

    def test_rubric_8_departure_date_of_the_return_train_ticket_should_be_october(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Departure date of the return train ticket should be October 23, 2023"
        assert len(result) > 0

    def test_rubric_9_need_to_check_the_date_of_double_ninth_festival_in_2023__whi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the date of Double Ninth Festival in 2023, which is October 23, 2023, so the arrival time of the return ticket should be around 10:00"
        assert len(result) > 0

    def test_rubric_10_the_quantity_in_the_return_train_ticket_order_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity in the return train ticket order should be 2"
        assert len(result) > 0

    def test_rubric_11_the_seat_type_in_the_return_train_ticket_order_should_be_har(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The seat type in the return train ticket order should be Hard sleeper"
        assert len(result) > 0

    def test_rubric_12_the_hotel_to_be_booked_should_be_a_chain_hotel(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel to be booked should be a Chain hotel"
        assert len(result) > 0

    def test_rubric_13_the_rating_of_the_booked_hotel_should_be_greater_than_or_equ(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The rating of the booked hotel should be greater than or equal to 4.5"
        assert len(result) > 0

    def test_rubric_14_the_check_in_date_of_the_hotel_should_be_october_22__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The check-in date of the hotel should be October 22, 2023"
        assert len(result) > 0

    def test_rubric_15_the_room_type_in_the_hotel_order_should_be_twin_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type in the hotel order should be twin room"
        assert len(result) > 0

    def test_rubric_16_the_attraction_to_be_booked_should_be_zhenjiang_jinshan_temp(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction to be booked should be Zhenjiang Jinshan Temple"
        assert len(result) > 0

    def test_rubric_17_need_to_check_the_weather_in_zhenjiang_on_october_22__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the weather in Zhenjiang on October 22, 2023, which is sunny, so the ticket type in the attraction order should be the ticket with \"Water Charm Jiangsu\""
        assert len(result) > 0

    def test_rubric_18_the_quantity_in_the_attraction_order_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity in the attraction order should be 2"
        assert len(result) > 0

    def test_rubric_19_the_date_in_the_attraction_order_should_be_2023_10_22(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date in the attraction order should be 2023-10-22"
        assert len(result) > 0
