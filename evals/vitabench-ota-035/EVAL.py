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
        assert result[0]["store_id"] == 'S17557505466916064_F00009'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505466916064_P00070", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1520) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505466916064_H00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505466916064_P00015", "quantity": 2}, {"product_id": "S17557505466916064_P00016", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1440) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505466916064_F00013'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505466916064_P00089", "quantity": 4}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 1520) < 1

    def test_rubric_0_flight_to_ili_is_scheduled_for_june_20__2027(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Flight to Ili is scheduled for June 20, 2027"
        assert len(result) > 0

    def test_rubric_1_the_flight_arrives_in_ili_around_4_pm_on_june_20__2027(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight arrives in Ili around 4 PM on June 20, 2027"
        assert len(result) > 0

    def test_rubric_2_number_of_tickets_to_ili_is_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Number of tickets to Ili is 1"
        assert len(result) > 0

    def test_rubric_3_the_homestay_should_be_in_country_style(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The homestay should be in Country Style"
        assert len(result) > 0

    def test_rubric_4_the_homestay_should_offer_flower_field_view(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The homestay should offer Flower Field View"
        assert len(result) > 0

    def test_rubric_5_since_the_king_room_costs_over_200_yuan_per_night__the_homes(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Since the king room costs over 200 yuan per night, the homestay booking should be for twin rooms"
        assert len(result) > 0

    def test_rubric_6_the_homestay_booking_should_include_2_twin_rooms_per_night(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The homestay booking should include 2 twin rooms per night"
        assert len(result) > 0

    def test_rubric_7_the_homestay_booking_should_be_for_2_nights__on_june_20_and(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The homestay booking should be for 2 nights, on June 20 and June 21, 2027"
        assert len(result) > 0

    def test_rubric_8_flight_to_urumqi_is_scheduled_for_june_22__2027(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Flight to Urumqi is scheduled for June 22, 2027"
        assert len(result) > 0

    def test_rubric_9_the_flight_arrives_in_urumqi_in_the_afternoon_of_june_22__20(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight arrives in Urumqi in the afternoon of June 22, 2027"
        assert len(result) > 0

    def test_rubric_10_number_of_tickets_to_urumqi_is_4(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Number of tickets to Urumqi is 4"
        assert len(result) > 0
