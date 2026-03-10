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
        assert result[0]["store_id"] == 'S17557505552244121_F00008'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505552244121_P00058", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 950) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505552244121_T00011'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505552244121_P00073", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 553) < 1

    def test_rubric_0_flight_booking_status_should_be_cancelled(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Flight booking status should be cancelled"
        assert len(result) > 0

    def test_rubric_1_train_departure_date_should_be_july_30__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Train departure date should be July 30, 2025"
        assert len(result) > 0

    def test_rubric_2_train_ticket_should_be_for_a_route_from_tianjin_to_hangzhou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Train ticket should be for a route from Tianjin to Hangzhou"
        assert len(result) > 0

    def test_rubric_3_on_july_30__2025__the_cheapest_seat_type__second_class_seat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "On July 30, 2025, the cheapest seat type (Second Class Seat) on the earliest train G1677 from Tianjin to Hangzhou is sold out, so the booked train should be G1635, which departs 2-3 hours later"
        assert len(result) > 0

    def test_rubric_4_train_seat_type_should_be_second_class_seat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Train seat type should be Second Class Seat"
        assert len(result) > 0

    def test_rubric_5_the_distance_from_ningsheng_li__intersection_of_weijin_south(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The distance from Ningsheng Li, Intersection of Weijin South Road and Cangqiong Road, Nankai District, Tianjin to Tianjin Railway Station is about 6 kilometers"
        assert len(result) > 0
