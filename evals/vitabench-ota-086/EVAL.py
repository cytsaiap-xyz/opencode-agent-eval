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
        assert result[0]["store_id"] == 'S17557514229117401_A00006'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557514229117401_P00045", "quantity": 5}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1400) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557514229117401_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557514229117401_P00002", "quantity": 2}, {"product_id": "S17557514229117401_P00005", "quantity": 2}, {"product_id": "S17557514229117401_P00007", "quantity": 1}, {"product_id": "S17557514229117401_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 4240) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557514229117401_T00015'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557514229117401_P00105", "quantity": 5}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 1240) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557514229117401_T00014'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557514229117401_P00099", "quantity": 5}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 2765) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17557514229117401_A00008'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17557514229117401_P00071", "quantity": 5}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 150) < 1

    def test_rubric_0_the_purchased_tickets_are_dated_april_22__2023(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The purchased tickets are dated April 22, 2023"
        assert len(result) > 0

    def test_rubric_1_the_number_of_tickets_purchased_is_5(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of tickets purchased is 5"
        assert len(result) > 0

    def test_rubric_2_the_purchased_tickets_are_valid_for_adults(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The purchased tickets are valid for adults"
        assert len(result) > 0

    def test_rubric_3_the_purchased_tickets_include_camel_riding_activity(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The purchased tickets include camel riding activity"
        assert len(result) > 0

    def test_rubric_4_the_tickets_are_for_ulan_butong_grassland(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tickets are for Ulan Butong Grassland"
        assert len(result) > 0

    def test_rubric_5_the_hotel_reservation_dates_are_april_21__2023_and_april_22(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel reservation dates are April 21, 2023 and April 22, 2023"
        assert len(result) > 0

    def test_rubric_6_the_hotel_booking_includes_twin_rooms(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booking includes twin rooms"
        assert len(result) > 0

    def test_rubric_7_the_hotel_booking_includes_king_rooms(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booking includes king rooms"
        assert len(result) > 0

    def test_rubric_8_the_hotel_booking_includes_2_twin_rooms_per_night(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booking includes 2 twin rooms per night"
        assert len(result) > 0

    def test_rubric_9_the_hotel_booking_includes_1_king_room_per_night(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booking includes 1 king room per night"
        assert len(result) > 0

    def test_rubric_10_the_price_per_night_for_each_hotel_room_should_be_consistent(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price per night for each hotel room should be consistent with the user\'s usual spending level (query shows it\'s 500-1000)"
        assert len(result) > 0

    def test_rubric_11_the_booked_hotel_should_be_clean_and_tidy(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel should be clean and tidy"
        assert len(result) > 0

    def test_rubric_12_the_purchased_train_tickets_are_from_beijing_to_chifeng(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The purchased train tickets are from Beijing to Chifeng"
        assert len(result) > 0

    def test_rubric_13_for_the_beijing_to_chifeng_train_tickets__the_arrival_time_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "For the Beijing to Chifeng train tickets, the arrival time should not be in the early morning hours"
        assert len(result) > 0

    def test_rubric_14_for_the_beijing_to_chifeng_train_tickets__all_seats_are_of_t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "For the Beijing to Chifeng train tickets, all seats are of the same class"
        assert len(result) > 0

    def test_rubric_15_for_the_beijing_to_chifeng_train_tickets__5_tickets_were_pur(self):
        # Structural check - the answer must contain orders that satisfy:
        # "For the Beijing to Chifeng train tickets, 5 tickets were purchased"
        assert len(result) > 0

    def test_rubric_16_the_beijing_to_chifeng_train_tickets_are_booked_for_april_21(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Beijing to Chifeng train tickets are booked for April 21, 2023"
        assert len(result) > 0

    def test_rubric_17_train_tickets_were_also_purchased_from_nanjing_to_beijing(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Train tickets were also purchased from Nanjing to Beijing"
        assert len(result) > 0

    def test_rubric_18_for_the_nanjing_to_beijing_train_tickets__the_departure_time(self):
        # Structural check - the answer must contain orders that satisfy:
        # "For the Nanjing to Beijing train tickets, the departure time should not be in the early morning hours"
        assert len(result) > 0

    def test_rubric_19_for_the_nanjing_to_beijing_train_tickets__all_seats_are_of_t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "For the Nanjing to Beijing train tickets, all seats are of the same class"
        assert len(result) > 0

    def test_rubric_20_for_the_nanjing_to_beijing_train_tickets__the_arrival_time_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "For the Nanjing to Beijing train tickets, the arrival time should be at least half an hour earlier than the departure time of the Beijing to Chifeng train"
        assert len(result) > 0

    def test_rubric_21_for_the_nanjing_to_beijing_train_tickets__5_tickets_were_pur(self):
        # Structural check - the answer must contain orders that satisfy:
        # "For the Nanjing to Beijing train tickets, 5 tickets were purchased"
        assert len(result) > 0

    def test_rubric_22_the_nanjing_to_beijing_train_tickets_are_booked_for_april_21(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Nanjing to Beijing train tickets are booked for April 21, 2023"
        assert len(result) > 0

    def test_rubric_23_the_weather_forecast_for_april_23__2023_in_chifeng_shows_rai(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The weather forecast for April 23, 2023 in Chifeng shows rain, so the attraction booked is a museum"
        assert len(result) > 0

    def test_rubric_24_the_attraction_tickets_purchased_include_guided_tour_service(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction tickets purchased include guided tour service"
        assert len(result) > 0

    def test_rubric_25_the_number_of_attraction_tickets_purchased_is_5(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of attraction tickets purchased is 5"
        assert len(result) > 0

    def test_rubric_26_the_attraction_tickets_are_dated_april_23__2023(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction tickets are dated April 23, 2023"
        assert len(result) > 0
