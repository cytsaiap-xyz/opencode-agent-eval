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
        assert result[0]["store_id"] == 'S17557505501187701_A00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505501187701_P00025", "quantity": 2}, {"product_id": "S17557505501187701_P00026", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 480) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505501187701_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505501187701_P00005", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 398) < 1

    def test_rubric_0_check_the_lantern_festival_date__which_is_2025_02_12__so_the(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Check the Lantern Festival date, which is 2025-02-12, so the ticket purchase date is 2025-02-12"
        assert len(result) > 0

    def test_rubric_1_the_ticket_order_needs_to_include_a_child_ticket__the_older(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket order needs to include a child ticket (the older brother is 11 years old, and he needs to purchase child ticket for ages 6-12)"
        assert len(result) > 0

    def test_rubric_2_check_the_weather_for_february_12_and_13__2025__sunny_and_cl(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Check the weather for February 12 and 13, 2025 (sunny and cloudy respectively), the weather conditions are good, so the children ticket in the order should be for two days"
        assert len(result) > 0

    def test_rubric_3_the_younger_sister_is_only_5_years_old__children_under_6_don(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The younger sister is only 5 years old (children under 6 don\'t need tickets), so no ticket is purchased for her"
        assert len(result) > 0

    def test_rubric_4_the_ticket_order_needs_to_include_adult_tickets(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket order needs to include adult tickets"
        assert len(result) > 0

    def test_rubric_5_the_quantity_of_adult_tickets_in_the_order_is_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of adult tickets in the order is 2"
        assert len(result) > 0

    def test_rubric_6_check_the_weather_for_february_12_and_13__2025__sunny_and_cl(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Check the weather for February 12 and 13, 2025 (sunny and cloudy respectively), the weather conditions are good, so the adult tickets in the order should be for two days"
        assert len(result) > 0

    def test_rubric_7_check_the_lantern_festival_date__which_is_2025_02_12__so_the(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Check the Lantern Festival date, which is 2025-02-12, so the hotel booking date is 2025-02-12"
        assert len(result) > 0

    def test_rubric_8_the_hotel_must_include_a_parking_lot(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must include a parking lot"
        assert len(result) > 0

    def test_rubric_9_the_hotel_must_include_a_private_beach(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must include a private beach"
        assert len(result) > 0

    def test_rubric_10_the_hotel_must_offer_extra_bed_service(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must offer extra bed service"
        assert len(result) > 0

    def test_rubric_11_the_room_type_booked_in_the_hotel_order_is_a_twin_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type booked in the hotel order is a twin room"
        assert len(result) > 0
