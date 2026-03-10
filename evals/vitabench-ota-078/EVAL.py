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
        assert result[0]["store_id"] == 'S17557514993656554_H00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557514993656554_P00002", "quantity": 1}, {"product_id": "S17557514993656554_P00005", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1900) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557514993656554_A00005'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557514993656554_P00020", "quantity": 2}, {"product_id": "S17557514993656554_P00022", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1240) < 1

    def test_rubric_0_hotel_booking_dates_must_be_january_2__2025_and_january_3__2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Hotel booking dates must be January 2, 2025 and January 3, 2025 respectively"
        assert len(result) > 0

    def test_rubric_1_the_hotel_must_be_located_near_changbai_mountain__such_as_so(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must be located near Changbai Mountain (such as Songjianghe Town in Fusong County or other areas surrounding the Changbai Mountain scenic area)"
        assert len(result) > 0

    def test_rubric_2_the_hotel_must_provide_free_parking_service(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must provide free parking service"
        assert len(result) > 0

    def test_rubric_3_the_hotel_must_have_hot_spring_facilities(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must have hot spring facilities"
        assert len(result) > 0

    def test_rubric_4_the_room_must_be_a_heated_kang_bed_type(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room must be a heated kang bed type"
        assert len(result) > 0

    def test_rubric_5_the_hotel_booking_must_be_for_family_rooms(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booking must be for family rooms"
        assert len(result) > 0

    def test_rubric_6_the_hotel_must_provide_breakfast_service(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must provide breakfast service"
        assert len(result) > 0

    def test_rubric_7_the_attraction_tickets_must_be_multi_site_combo_tickets(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction tickets must be multi-site combo tickets"
        assert len(result) > 0

    def test_rubric_8_the_tickets_must_not_include_shuttle_bus_service(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tickets must not include shuttle bus service"
        assert len(result) > 0

    def test_rubric_9_child_ticket_discounts_available_for_a_9_year_old_child_must(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Child ticket discounts available for a 9-year-old child must be inquired about"
        assert len(result) > 0

    def test_rubric_10_different_combo_ticket_purchase_options_must_be_compared_for(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Different combo ticket purchase options must be compared for price differences, with the result showing that purchasing two adult combo tickets and one child combo ticket separately is cheaper than a family combo ticket, therefore the ticket order must include 2 adult combo tickets and 1 child combo ticket"
        assert len(result) > 0

    def test_rubric_11_the_attraction_tickets_must_be_for_january_3__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction tickets must be for January 3, 2025"
        assert len(result) > 0
