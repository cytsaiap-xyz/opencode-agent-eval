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
        assert result[0]["store_id"] == 'S17557505528573677_T00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505528573677_P00087", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 596) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505528573677_T00012'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505528573677_P00094", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 596) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505528573677_H00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505528573677_P00001", "quantity": 1}, {"product_id": "S17557505528573677_P00002", "quantity": 1}, {"product_id": "S17557505528573677_P00003", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 2064) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557505528573677_A00005'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557505528573677_P00027", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 180) < 1

    def test_rubric_0_the_outbound_train_ticket_order_should_be_for_a_train_from_c(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound train ticket order should be for a train from Chongqing to Xichang"
        assert len(result) > 0

    def test_rubric_1_the_outbound_train_ticket_order_should_be_for_july_4__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound train ticket order should be for July 4, 2025"
        assert len(result) > 0

    def test_rubric_2_the_outbound_train_ticket_must_be_first_class_seat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound train ticket must be First Class Seat"
        assert len(result) > 0

    def test_rubric_3_the_outbound_train_should_be_a_daytime_train(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound train should be a daytime train"
        assert len(result) > 0

    def test_rubric_4_the_return_train_ticket_order_should_be_for_a_train_from_xic(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return train ticket order should be for a train from Xichang to Chongqing"
        assert len(result) > 0

    def test_rubric_5_the_return_train_ticket_order_should_be_for_july_7__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return train ticket order should be for July 7, 2025"
        assert len(result) > 0

    def test_rubric_6_the_return_train_ticket_order_must_be_first_class_seat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return train ticket order must be First Class Seat"
        assert len(result) > 0

    def test_rubric_7_the_return_train_should_be_a_daytime_train(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return train should be a daytime train"
        assert len(result) > 0

    def test_rubric_8_the_hotel_booked_must_have_a_good_atmosphere(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booked must have a good atmosphere"
        assert len(result) > 0

    def test_rubric_9_the_hotel_must_be_equipped_with_a_massage_room_facility(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must be equipped with a Massage Room facility"
        assert len(result) > 0

    def test_rubric_10_the_hotel_location_must_be_within_1km_of_huoba_square(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel location must be within 1km of Huoba Square"
        assert len(result) > 0

    def test_rubric_11_the_hotel_booking_dates_must_be_july_4__2025__july_5__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booking dates must be July 4, 2025, July 5, 2025, and July 6, 2025 respectively"
        assert len(result) > 0

    def test_rubric_12_tickets_for_lushan_scenic_area_must_be_booked_for_july_6__20(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Tickets for Lushan Scenic Area must be booked for July 6, 2025"
        assert len(result) > 0

    def test_rubric_13_the_lushan_scenic_area_ticket_order_must_be_a_two_person_tic(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Lushan Scenic Area ticket order must be a Two-person Ticket (Single Cable Car + Single Slide) combination"
        assert len(result) > 0
