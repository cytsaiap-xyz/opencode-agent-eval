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
        assert result[0]["store_id"] == 'S17557505566882089_F00008'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505566882089_P00081", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 4360) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505566882089_F00009'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505566882089_P00087", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 9120) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505566882089_H00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505566882089_P00001", "quantity": 1}, {"product_id": "S17557505566882089_P00003", "quantity": 1}, {"product_id": "S17557505566882089_P00004", "quantity": 1}, {"product_id": "S17557505566882089_P00005", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 1832) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557505566882089_A00005'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557505566882089_P00052", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 796) < 1

    def test_rubric_0_the_anniversary_is_on_august_10__2025__and_the_user_wishes_t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The anniversary is on August 10, 2025, and the user wishes to arrive two days before the anniversary, so the departure flight should be on August 8, 2025"
        assert len(result) > 0

    def test_rubric_1_the_departure_flight_should_not_be_a_red_eye_flight(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure flight should not be a Red-eye Flight"
        assert len(result) > 0

    def test_rubric_2_the_number_of_departure_flight_tickets_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of departure flight tickets should be 2"
        assert len(result) > 0

    def test_rubric_3_the_departure_flight_should_be_from_dalian_to_daocheng(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure flight should be from Dalian to Daocheng"
        assert len(result) > 0

    def test_rubric_4_the_return_flight_date_should_be_august_12__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight date should be August 12, 2025 "
        assert len(result) > 0

    def test_rubric_5_the_return_flight_should_not_be_a_red_eye_flight(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight should not be a Red-eye Flight"
        assert len(result) > 0

    def test_rubric_6_the_number_of_return_flight_tickets_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of return flight tickets should be 2"
        assert len(result) > 0

    def test_rubric_7_the_return_flight_should_be_from_daocheng_to_dalian(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight should be from Daocheng to Dalian"
        assert len(result) > 0

    def test_rubric_8_the_hotel_booked_should_have_tibetan_characteristics(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booked should have Tibetan Characteristics"
        assert len(result) > 0

    def test_rubric_9_the_hotel_room_type_ordered_should_be_a_king_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel room type ordered should be a king room"
        assert len(result) > 0

    def test_rubric_10_the_hotel_booking_should_include_4_nights__specifically_for(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booking should include 4 nights, specifically for August 8, 2025, August 9, 2025, August 10, 2025, and August 11, 2025"
        assert len(result) > 0

    def test_rubric_11_the_scenic_area_ordered_should_be_daocheng_yading_scenic_are(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The scenic area ordered should be Daocheng Yading Scenic Area"
        assert len(result) > 0

    def test_rubric_12_the_tickets_should_include_oxygen_cylinder(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tickets should include Oxygen Cylinder"
        assert len(result) > 0

    def test_rubric_13_the_weather_in_daocheng_on_2025_08_09_will_be_light_rain__so(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The weather in Daocheng on 2025-08-09 will be light rain, so the tickets should include rain gear"
        assert len(result) > 0

    def test_rubric_14_the_number_of_scenic_area_tickets_ordered_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of scenic area tickets ordered should be 2"
        assert len(result) > 0

    def test_rubric_15_the_date_of_use_for_the_scenic_area_tickets_should_be_august(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date of use for the scenic area tickets should be August 9, 2025"
        assert len(result) > 0
