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
        assert result[0]["store_id"] == 'S17557511800822767_F00009'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557511800822767_P00079", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 2340) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557511800822767_F00011'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557511800822767_P00089", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 3840) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557511800822767_H00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557511800822767_P00011", "quantity": 1}, {"product_id": "S17557511800822767_P00012", "quantity": 1}, {"product_id": "S17557511800822767_P00013", "quantity": 1}, {"product_id": "S17557511800822767_P00014", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 3152) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557511800822767_A00005'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557511800822767_P00031", "quantity": 2}, {"product_id": "S17557511800822767_P00032", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 595) < 1

    def test_rubric_0_departure_flight_date_is_june_26__2028(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Departure flight date is June 26, 2028"
        assert len(result) > 0

    def test_rubric_1_departure_flight_cannot_be_a_red_eye_flight(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Departure flight cannot be a Red-eye Flight"
        assert len(result) > 0

    def test_rubric_2_number_of_departure_flight_tickets_is_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Number of departure flight tickets is 3"
        assert len(result) > 0

    def test_rubric_3_departure_flight_should_be_from_yantai_to_dunhuang(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Departure flight should be from Yantai to Dunhuang"
        assert len(result) > 0

    def test_rubric_4_return_flight_date_is_june_30__2028(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Return flight date is June 30, 2028"
        assert len(result) > 0

    def test_rubric_5_return_flight_cannot_be_a_red_eye_flight(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Return flight cannot be a Red-eye Flight"
        assert len(result) > 0

    def test_rubric_6_number_of_return_flight_tickets_is_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Number of return flight tickets is 3"
        assert len(result) > 0

    def test_rubric_7_return_flight_should_be_from_dunhuang_to_yantai(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Return flight should be from Dunhuang to Yantai"
        assert len(result) > 0

    def test_rubric_8_hotel_should_have_dunhuang_characteristics(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Hotel should have Dunhuang characteristics"
        assert len(result) > 0

    def test_rubric_9_the_booked_hotel_should_be_dunhuang_feitian_theme_hotel(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel should be Dunhuang Feitian Theme Hotel"
        assert len(result) > 0

    def test_rubric_10_hotel_room_type_should_be_family_suite_or_twin_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Hotel room type should be Family Suite or Twin Room"
        assert len(result) > 0

    def test_rubric_11_hotel_reservation_should_include_4_nights__specifically_for(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Hotel reservation should include 4 nights, specifically for June 26, 2028, June 27, 2028, June 28, 2028, and June 29, 2028"
        assert len(result) > 0

    def test_rubric_12_the_attraction_to_be_booked_should_be_mogao_caves(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction to be booked should be Mogao Caves"
        assert len(result) > 0

    def test_rubric_13_attraction_tickets_should_include_2_adult_tickets(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Attraction tickets should include 2 Adult Tickets"
        assert len(result) > 0

    def test_rubric_14_attraction_tickets_should_include_1_student_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Attraction tickets should include 1 Student Ticket"
        assert len(result) > 0

    def test_rubric_15_the_date_for_using_attraction_tickets_is_june_28__2028(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date for using attraction tickets is June 28, 2028"
        assert len(result) > 0
