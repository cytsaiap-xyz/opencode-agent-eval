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
        assert result[0]["store_id"] == 'S17557512803333407_A00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557512803333407_P00037", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 960) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557512803333407_T00012'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557512803333407_P00095", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1762) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557512803333407_H00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557512803333407_P00002", "quantity": 1}, {"product_id": "S17557512803333407_P00001", "quantity": 1}, {"product_id": "S17557512803333407_P00004", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 1194) < 1

    def test_rubric_0_the_attraction_ticket_order_must_be_for_fantawild_adventure(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction ticket order must be for Fantawild Adventure Jiayuguan"
        assert len(result) > 0

    def test_rubric_1_the_attraction_ticket_order_must_be_for_the_second_day_after(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction ticket order must be for the second day after arriving in Jiayuguan (February 10, 2025)"
        assert len(result) > 0

    def test_rubric_2_the_attraction_ticket_order_must_be_suitable_for_2_people__1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction ticket order must be suitable for 2 people (1 adult and 1 child)"
        assert len(result) > 0

    def test_rubric_3_the_attraction_ticket_order_must_include_express_passes(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction ticket order must include express passes"
        assert len(result) > 0

    def test_rubric_4_the_train_order_must_be_for_an_emu__electric_multiple_unit(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train order must be for an EMU (Electric Multiple Unit) train"
        assert len(result) > 0

    def test_rubric_5_the_train_tickets_must_be_first_class_seats(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train tickets must be first class seats"
        assert len(result) > 0

    def test_rubric_6_the_train_arrival_time_must_be_before_4_00_pm(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train arrival time must be before 4:00 PM"
        assert len(result) > 0

    def test_rubric_7_the_train_ticket_order_must_be_for_travel_from_xi_an_to_jiay(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket order must be for travel from Xi\'an to Jiayuguan"
        assert len(result) > 0

    def test_rubric_8_the_train_ticket_order_must_include_2_tickets(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket order must include 2 tickets"
        assert len(result) > 0

    def test_rubric_9_the_return_journey_must_be_scheduled_for_the_morning_of_the(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return journey must be scheduled for the morning of the Lantern Festival (February 12, 2025)"
        assert len(result) > 0

    def test_rubric_10_the_hotel_in_the_accommodation_order_must_be_fantawild_theme(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel in the accommodation order must be Fantawild Theme Hotel Jiayuguan"
        assert len(result) > 0

    def test_rubric_11_the_lantern_festival_date_needs_to_be_checked__which_is_febr(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Lantern Festival date needs to be checked, which is February 12, 2025, so the hotel stay must be for February 09, 2025, February 10, 2025, and February 11, 2025"
        assert len(result) > 0

    def test_rubric_12_the_hotel_order_must_be_suitable_for_2_people__1_adult_and_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order must be suitable for 2 people (1 adult and 1 child)"
        assert len(result) > 0
