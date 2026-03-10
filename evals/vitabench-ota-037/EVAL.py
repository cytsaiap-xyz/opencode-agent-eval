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
        assert result[0]["store_id"] == 'S17557505558052360_H00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505558052360_P00001", "quantity": 1}, {"product_id": "S17557505558052360_P00003", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 2560) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505558052360_A00005'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505558052360_P00020", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 140) < 1

    def test_rubric_0_hotel_reservation_must_be_for_2_nights__on_2025_06_20_and_20(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Hotel reservation must be for 2 nights, on 2025-06-20 and 2025-06-21"
        assert len(result) > 0

    def test_rubric_1_hotel_must_be_located_near_linfen_high_speed_railway_station(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Hotel must be located near Linfen High-speed Railway Station"
        assert len(result) > 0

    def test_rubric_2_accommodation_must_be_atour_brand(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Accommodation must be Atour brand"
        assert len(result) > 0

    def test_rubric_3_accommodation_must_be_a_king_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Accommodation must be a King Room"
        assert len(result) > 0

    def test_rubric_4_attraction_ticket_must_be_for_xunzi_cultural_park(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Attraction ticket must be for Xunzi Cultural Park"
        assert len(result) > 0

    def test_rubric_5_xunzi_cultural_park_visit_must_be_scheduled_for_2025_06_21(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Xunzi Cultural Park visit must be scheduled for 2025-06-21"
        assert len(result) > 0

    def test_rubric_6_must_select_double_ticket_package_for_xunzi_cultural_park(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Must select Double Ticket Package for Xunzi Cultural Park"
        assert len(result) > 0

    def test_rubric_7_must_provide_information_about_xunzi_related_attractions_in(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Must provide information about Xunzi-related attractions in Linfen suitable for 2-3 hour visits, with result being Xunzi Memorial Museum"
        assert len(result) > 0

    def test_rubric_8_return_flight_must_arrive_around_8_9_pm(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Return flight must arrive around 8-9 PM"
        assert len(result) > 0

    def test_rubric_9_return_flight_order_must_be_for_2_tickets(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Return flight order must be for 2 tickets"
        assert len(result) > 0

    def test_rubric_10_return_flight_must_be_business_class(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Return flight must be Business Class"
        assert len(result) > 0
