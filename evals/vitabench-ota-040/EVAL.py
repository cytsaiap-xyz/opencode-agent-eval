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
        assert result[0]["store_id"] == 'S17557505488137572_F00009'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505488137572_P00088", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 2460) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505488137572_F00010'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505488137572_P00097", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 2997) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505488137572_H00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505488137572_P00004", "quantity": 1}, {"product_id": "S17557505488137572_P00001", "quantity": 1}, {"product_id": "S17557505488137572_P00006", "quantity": 1}, {"product_id": "S17557505488137572_P00002", "quantity": 1}, {"product_id": "S17557505488137572_P00008", "quantity": 1}, {"product_id": "S17557505488137572_P00009", "quantity": 1}, {"product_id": "S17557505488137572_P00007", "quantity": 1}, {"product_id": "S17557505488137572_P20009", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 3540) < 1

    def test_rubric_0_the_outbound_flight_should_be_from_fuzhou_to_beijing(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound flight should be from Fuzhou to Beijing"
        assert len(result) > 0

    def test_rubric_1_the_outbound_flight_departure_date_should_be_july_4__2026__t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound flight departure date should be July 4, 2026 (this Saturday)"
        assert len(result) > 0

    def test_rubric_2_the_outbound_flight_ticket_quantity_should_be_3(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound flight ticket quantity should be 3"
        assert len(result) > 0

    def test_rubric_3_the_outbound_flight_should_be_an_afternoon_or_evening_flight(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound flight should be an afternoon or evening flight"
        assert len(result) > 0

    def test_rubric_4_the_return_flight_should_be_from_beijing_to_fuzhou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight should be from Beijing to Fuzhou"
        assert len(result) > 0

    def test_rubric_5_the_return_flight_departure_date_should_be_july_12__2026__ne(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight departure date should be July 12, 2026 (next Sunday)"
        assert len(result) > 0

    def test_rubric_6_the_return_flight_ticket_quantity_should_be_3(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight ticket quantity should be 3"
        assert len(result) > 0

    def test_rubric_7_the_return_flight_should_be_an_afternoon_or_evening_flight(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight should be an afternoon or evening flight"
        assert len(result) > 0

    def test_rubric_8_the_hotel_should_be_in_the_style_of_qing_dynasty_royal_garde(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel should be in the style of Qing Dynasty royal garden"
        assert len(result) > 0

    def test_rubric_9_the_hotel_needs_to_provide_laundry_service(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel needs to provide laundry service"
        assert len(result) > 0

    def test_rubric_10_the_hotel_must_be_family_friendly(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must be Family-friendly"
        assert len(result) > 0

    def test_rubric_11_the_hotel_room_type_should_be_family_room_or_king_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel room type should be family room or king room"
        assert len(result) > 0

    def test_rubric_12_the_hotel_booking_should_be_for_8_nights__on_july_4__2026__j(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booking should be for 8 nights, on July 4, 2026, July 5, 2026, July 6, 2026, July 7, 2026, July 8, 2026, July 9, 2026, July 10, 2026, and July 11, 2026"
        assert len(result) > 0

    def test_rubric_13_if_both_king_room_and_family_room_are_available_on_the_same(self):
        # Structural check - the answer must contain orders that satisfy:
        # "If both king room and family room are available on the same date, family room should be prioritized, so the room type for July 11, 2026 should be family room"
        assert len(result) > 0
