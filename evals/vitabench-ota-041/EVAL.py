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
        assert result[0]["store_id"] == 'S17557505554587434_T00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505554587434_P00054", "quantity": 4}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 260) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505554587434_T00013'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505554587434_P00070", "quantity": 4}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 272) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505554587434_H00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505554587434_P00006", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 776) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557505554587434_A00006'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557505554587434_P00036", "quantity": 4}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 512) < 1

    def test_rubric_0_the_departure_location_for_the_outbound_ticket_is_nantong__a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure location for the outbound ticket is Nantong, and the destination is Suzhou South Railway Station"
        assert len(result) > 0

    def test_rubric_1_the_outbound_ticket_should_be_emu__electric_multiple_unit__t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound ticket should be EMU (Electric Multiple Unit) train or High-speed rail"
        assert len(result) > 0

    def test_rubric_2_the_departure_date_for_the_outbound_ticket_should_be_2029_04(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date for the outbound ticket should be 2029-04-28"
        assert len(result) > 0

    def test_rubric_3_the_quantity_in_the_outbound_ticket_order_should_be_4(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity in the outbound ticket order should be 4"
        assert len(result) > 0

    def test_rubric_4_the_seat_type_in_the_outbound_ticket_order_should_be_second(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The seat type in the outbound ticket order should be Second class seat"
        assert len(result) > 0

    def test_rubric_5_the_outbound_ticket_should_be_the_earliest_available_train(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound ticket should be the earliest available train, which is D5432 (departing at 06:28)"
        assert len(result) > 0

    def test_rubric_6_the_departure_location_for_the_return_ticket_is_suzhou_south(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure location for the return ticket is Suzhou South Railway Station, and the destination is Nantong"
        assert len(result) > 0

    def test_rubric_7_the_return_ticket_should_be_emu__electric_multiple_unit__tra(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return ticket should be EMU (Electric Multiple Unit) train or High-speed rail"
        assert len(result) > 0

    def test_rubric_8_the_departure_date_for_the_return_ticket_should_be_2029_04_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date for the return ticket should be 2029-04-29"
        assert len(result) > 0

    def test_rubric_9_the_departure_time_for_the_return_ticket_should_be_around_17(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure time for the return ticket should be around 17:00"
        assert len(result) > 0

    def test_rubric_10_the_quantity_in_the_return_ticket_order_should_be_4(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity in the return ticket order should be 4"
        assert len(result) > 0

    def test_rubric_11_the_seat_type_in_the_return_ticket_order_should_be_second_cl(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The seat type in the return ticket order should be Second class seat"
        assert len(result) > 0

    def test_rubric_12_the_brand_of_the_hotel_should_be_hanting_or_home_inn_or_7_da(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The brand of the hotel should be Hanting or Home Inn or 7 Days Inn"
        assert len(result) > 0

    def test_rubric_13_the_distance_between_the_hotel_and_suzhou_south_railway_stat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The distance between the hotel and Suzhou South Railway Station, Wuzhong District, Suzhou, Jiangsu Province should be less than or equal to 500 meters"
        assert len(result) > 0

    def test_rubric_14_the_hotel_should_be_newly_opened_in_2028(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel should be newly opened in 2028"
        assert len(result) > 0

    def test_rubric_15_the_check_in_date_for_the_hotel_should_be_2029_04_28(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The check-in date for the hotel should be 2029-04-28"
        assert len(result) > 0

    def test_rubric_16_the_quantity_in_the_hotel_order_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity in the hotel order should be 2"
        assert len(result) > 0

    def test_rubric_17_need_to_check_and_calculate_the_price_difference_between_twi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check and calculate the price difference between twin rooms and king rooms within the available options, which is 70 yuan, greater than 50 yuan, so the room type in the hotel order should be Economy king room"
        assert len(result) > 0

    def test_rubric_18_the_attraction_to_be_booked_should_be_zhouzhuang_ancient_tow(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction to be booked should be Zhouzhuang Ancient Town"
        assert len(result) > 0

    def test_rubric_19_the_tickets_for_the_attraction_should_include_the_cultural_c(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tickets for the attraction should include the cultural creative ice cream package"
        assert len(result) > 0

    def test_rubric_20_the_date_in_the_attraction_order_should_be_2029_04_28(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date in the attraction order should be 2029-04-28"
        assert len(result) > 0

    def test_rubric_21_the_quantity_in_the_attraction_order_should_be_4(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity in the attraction order should be 4"
        assert len(result) > 0
