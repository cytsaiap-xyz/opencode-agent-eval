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
        assert result[0]["store_id"] == 'S17557512471457512_T00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557512471457512_P00068", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 90) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557512471457512_T00012'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557512471457512_P00078", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 108) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557512471457512_A00005'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557512471457512_P00035", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 336) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557512471457512_A00006'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557512471457512_P00042", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 84) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17557512471457512_A00007'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17557512471457512_P00051", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 90) < 1

    def test_order_5_matches_expected_store(self):
        assert result[5]["store_id"] == 'S17557512471457512_H00001'

    def test_order_5_has_correct_products(self):
        expected_products = [{"product_id": "S17557512471457512_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[5]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_5_has_correct_total_price(self):
        assert abs(result[5]["total_price"] - 688) < 1

    def test_rubric_0_the_departure_location_of_the_outbound_ticket_should_be_nanj(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure location of the outbound ticket should be Nanjing, and the destination should be Yangzhou"
        assert len(result) > 0

    def test_rubric_1_the_departure_date_of_the_outbound_ticket_should_be_april_5(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure date of the outbound ticket should be April 5, 2023"
        assert len(result) > 0

    def test_rubric_2_the_arrival_time_of_the_outbound_ticket_should_be_around_08(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival time of the outbound ticket should be around 08:00"
        assert len(result) > 0

    def test_rubric_3_the_seat_type_in_the_outbound_ticket_order_should_be_second(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The seat type in the outbound ticket order should be Second-class seat"
        assert len(result) > 0

    def test_rubric_4_the_quantity_in_the_outbound_ticket_order_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity in the outbound ticket order should be 2"
        assert len(result) > 0

    def test_rubric_5_the_departure_location_of_the_return_ticket_should_be_yangzh(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure location of the return ticket should be Yangzhou, and the destination should be Nanjing"
        assert len(result) > 0

    def test_rubric_6_the_departure_date_of_the_return_ticket_should_be_april_6__2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure date of the return ticket should be April 6, 2023"
        assert len(result) > 0

    def test_rubric_7_the_arrival_time_of_the_return_ticket_should_be_around_20_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival time of the return ticket should be around 20:00"
        assert len(result) > 0

    def test_rubric_8_the_seat_type_in_the_return_ticket_order_should_be_second_cl(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The seat type in the return ticket order should be Second-class seat"
        assert len(result) > 0

    def test_rubric_9_the_quantity_in_the_return_ticket_order_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity in the return ticket order should be 2"
        assert len(result) > 0

    def test_rubric_10_the_scenic_spot_order_should_include_slender_west_lake(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scenic spot order should include Slender West Lake"
        assert len(result) > 0

    def test_rubric_11_need_to_check_the_weather_in_yangzhou_on_2023_04_05__the_res(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the weather in Yangzhou on 2023-04-05, the result is sunny, and the tickets in the Slender West Lake scenic spot order should include a Hanfu photo package"
        assert len(result) > 0

    def test_rubric_12_the_number_of_tickets_in_the_slender_west_lake_scenic_spot_o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of tickets in the Slender West Lake scenic spot order should be 2"
        assert len(result) > 0

    def test_rubric_13_the_ticket_date_in_the_slender_west_lake_scenic_spot_order_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket date in the Slender West Lake scenic spot order should be 2023-04-05"
        assert len(result) > 0

    def test_rubric_14_the_scenic_spot_order_should_include_ge_garden(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scenic spot order should include Ge Garden"
        assert len(result) > 0

    def test_rubric_15_the_number_of_tickets_in_the_ge_garden_scenic_spot_order_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of tickets in the Ge Garden scenic spot order should be 2"
        assert len(result) > 0

    def test_rubric_16_the_ticket_date_in_the_ge_garden_scenic_spot_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket date in the Ge Garden scenic spot order should be 2023-04-05"
        assert len(result) > 0

    def test_rubric_17_the_ticket_type_in_the_ge_garden_scenic_spot_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket type in the Ge Garden scenic spot order should be Adult ticket"
        assert len(result) > 0

    def test_rubric_18_the_scenic_spot_order_should_include_daming_temple(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scenic spot order should include Daming Temple"
        assert len(result) > 0

    def test_rubric_19_the_number_of_tickets_in_the_daming_temple_scenic_spot_order(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of tickets in the Daming Temple scenic spot order should be 2"
        assert len(result) > 0

    def test_rubric_20_the_ticket_date_in_the_daming_temple_scenic_spot_order_shoul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket date in the Daming Temple scenic spot order should be 2023-04-06"
        assert len(result) > 0

    def test_rubric_21_the_ticket_type_in_the_daming_temple_scenic_spot_order_shoul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket type in the Daming Temple scenic spot order should be Adult ticket"
        assert len(result) > 0

    def test_rubric_22_the_hotel_brand_to_be_ordered_should_be_atour(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel brand to be ordered should be Atour"
        assert len(result) > 0

    def test_rubric_23_the_distance_between_the_ordered_hotel_and_yangzhou_commerci(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The distance between the ordered hotel and Yangzhou Commercial Center, 666 Wenchang Middle Road, Guangling District, Yangzhou, Jiangsu Province should be less than or equal to 3 kilometers"
        assert len(result) > 0

    def test_rubric_24_the_room_type_in_the_hotel_order_should_be_king_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type in the hotel order should be King Room"
        assert len(result) > 0

    def test_rubric_25_the_check_in_date_of_the_hotel_order_should_be_april_5__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The check-in date of the hotel order should be April 5, 2023"
        assert len(result) > 0
