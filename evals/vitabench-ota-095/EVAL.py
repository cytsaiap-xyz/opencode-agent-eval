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
        assert result[0]["store_id"] == 'S17557514605716896_A00006'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557514605716896_P00055", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 110) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557514605716896_A00007'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557514605716896_P00067", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 80) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557514605716896_A00009'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557514605716896_P00087", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 30) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557514605716896_H00002'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557514605716896_P00013", "quantity": 1}, {"product_id": "S17557514605716896_P00014", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 960) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17557514605716896_H00003'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17557514605716896_P00028", "quantity": 1}, {"product_id": "S17557514605716896_P00027", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 930) < 1

    def test_order_5_matches_expected_store(self):
        assert result[5]["store_id"] == 'S17557514605716896_F00012'

    def test_order_5_has_correct_products(self):
        expected_products = [{"product_id": "S17557514605716896_P00107", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[5]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_5_has_correct_total_price(self):
        assert abs(result[5]["total_price"] - 1180) < 1

    def test_rubric_0_the_ticket_date_for_xijiang_thousand_households_miao_village(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket date for Xijiang Thousand Households Miao Village order is May 8, 2027"
        assert len(result) > 0

    def test_rubric_1_the_ticket_type_for_xijiang_thousand_households_miao_village(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket type for Xijiang Thousand Households Miao Village order is adult ticket"
        assert len(result) > 0

    def test_rubric_2_the_ticket_date_for_zhaoxing_dong_village_order_is_may_9__20(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket date for Zhaoxing Dong Village order is May 9, 2027"
        assert len(result) > 0

    def test_rubric_3_the_ticket_type_for_zhaoxing_dong_village_order_is_adult_tic(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket type for Zhaoxing Dong Village order is adult ticket"
        assert len(result) > 0

    def test_rubric_4_the_attractions_ordered_should_be_the_type_of_attractions_th(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attractions ordered should be the type of attractions the user frequently visits (according to user profile, it\'s museums)"
        assert len(result) > 0

    def test_rubric_5_the_ticket_date_for_the_museum_order_is_may_10__2027(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket date for the museum order is May 10, 2027"
        assert len(result) > 0

    def test_rubric_6_the_ticket_type_for_the_museum_order_is_adult_ticket(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket type for the museum order is adult ticket"
        assert len(result) > 0

    def test_rubric_7_the_return_flight_is_from_ho_chi_minh_city_to_shanghai(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight is from Ho Chi Minh City to Shanghai"
        assert len(result) > 0

    def test_rubric_8_the_first_two_nights_of_accommodation_should_be_in_xijiang_t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The first two nights of accommodation should be in Xijiang Thousand Households Miao Village"
        assert len(result) > 0

    def test_rubric_9_the_dates_for_the_first_two_nights_of_accommodation_are_may(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dates for the first two nights of accommodation are May 7, 2027 and May 8, 2027"
        assert len(result) > 0

    def test_rubric_10_the_room_type_for_the_first_two_nights_should_be_king_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type for the first two nights should be king room"
        assert len(result) > 0

    def test_rubric_11_the_last_two_nights__accommodation_should_be_traditional_don(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The last two nights\' accommodation should be traditional Dong guesthouse"
        assert len(result) > 0

    def test_rubric_12_the_last_two_nights__accommodation_should_have_drum_tower_vi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The last two nights\' accommodation should have Drum Tower views"
        assert len(result) > 0

    def test_rubric_13_the_last_two_nights__accommodation_should_have_wind_and_rain(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The last two nights\' accommodation should have Wind and Rain Bridge views"
        assert len(result) > 0

    def test_rubric_14_the_dates_for_the_last_two_nights__accommodation_are_may_9(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dates for the last two nights\' accommodation are May 9, 2027 and May 10, 2027"
        assert len(result) > 0

    def test_rubric_15_the_room_type_for_the_last_two_nights_should_be_king_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type for the last two nights should be king room"
        assert len(result) > 0

    def test_rubric_16_the_total_price_for_all_four_nights_of_accommodation_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total price for all four nights of accommodation should not exceed 2000 yuan"
        assert len(result) > 0

    def test_rubric_17_the_departure_flight_booked_is_from_tianjin_to_guiyang(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure flight booked is from Tianjin to Guiyang"
        assert len(result) > 0

    def test_rubric_18_the_departure_flight_booked_should_not_depart_in_the_morning(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure flight booked should not depart in the morning"
        assert len(result) > 0

    def test_rubric_19_the_departure_flight_booked_should_not_arrive_too_late(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure flight booked should not arrive too late"
        assert len(result) > 0

    def test_rubric_20_the_departure_flight_departure_date_is_may_7__2027(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure flight departure date is May 7, 2027"
        assert len(result) > 0
