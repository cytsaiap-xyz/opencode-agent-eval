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
        assert result[0]["store_id"] == 'S17557505467922967_F00009'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505467922967_P00040", "quantity": 1}]
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
        assert result[1]["store_id"] == 'S17557505467922967_T00014'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505467922967_P00071", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 58) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505467922967_H00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505467922967_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 188) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557505467922967_A00005'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557505467922967_P00021", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 128) < 1

    def test_rubric_0_the_flight_in_the_airplane_order_is_from_hefei_to_taiyuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flight in the airplane order is from Hefei to Taiyuan"
        assert len(result) > 0

    def test_rubric_1_the_booked_air_ticket_should_be_for_june_17__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked air ticket should be for June 17, 2023"
        assert len(result) > 0

    def test_rubric_2_the_flight_in_the_airplane_order_should_arrive_in_the_aftern(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flight in the airplane order should arrive in the afternoon"
        assert len(result) > 0

    def test_rubric_3_the_train_in_the_train_ticket_order_is_from_taiyuan_to_fenya(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train in the train ticket order is from Taiyuan to Fenyang"
        assert len(result) > 0

    def test_rubric_4_the_booked_train_ticket_date_should_be_june_18__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked train ticket date should be June 18, 2023"
        assert len(result) > 0

    def test_rubric_5_the_train_departure_time_in_the_train_ticket_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train departure time in the train ticket order should be the earliest one of the day"
        assert len(result) > 0

    def test_rubric_6_the_train_ticket_booked_in_the_train_ticket_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train ticket booked in the train ticket order should be an upper berth"
        assert len(result) > 0

    def test_rubric_7_the_booked_hotel_should_be_within_2km_of_taiyuan_railway_sta(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel should be within 2km of Taiyuan Railway Station, Jianshe South Road, Yingze District, Taiyuan, Shanxi Province"
        assert len(result) > 0

    def test_rubric_8_the_booked_hotel_should_have_good_soundproofing(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel should have good soundproofing"
        assert len(result) > 0

    def test_rubric_9_the_booked_hotel_should_provide_wake_up_call_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel should provide wake-up call service"
        assert len(result) > 0

    def test_rubric_10_the_hotel_reservation_date_is_june_17__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel reservation date is June 17, 2023"
        assert len(result) > 0

    def test_rubric_11_the_room_type_in_the_hotel_order_should_not_exceed_200_yuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type in the hotel order should not exceed 200 yuan"
        assert len(result) > 0

    def test_rubric_12_the_scenic_spot_in_the_attraction_order_should_match_the_use(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scenic spot in the attraction order should match the user\'s most frequently visited type (query results show natural scenic spots)"
        assert len(result) > 0

    def test_rubric_13_the_scenic_spot_in_the_attraction_order_should_offer_rafting(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scenic spot in the attraction order should offer rafting"
        assert len(result) > 0

    def test_rubric_14_the_ticket_purchased_in_the_attraction_order_should_be_an_ad(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket purchased in the attraction order should be an adult ticket"
        assert len(result) > 0

    def test_rubric_15_the_ticket_purchased_in_the_attraction_order_should_include(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket purchased in the attraction order should include rafting"
        assert len(result) > 0

    def test_rubric_16_the_ticket_date_should_be_on_the_dragon_boat_festival_holida(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket date should be on the Dragon Boat Festival holiday, which is June 22, 2023 according to the query, so the purchased ticket date is June 22, 2023"
        assert len(result) > 0
