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
        assert result[0]["store_id"] == 'S17550810625406958_S00003'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550810625406958_P00013", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 65) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550810625406958_F00005'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550810625406958_P00021", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 780) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550810625406958_F00008'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550810625406958_P00054", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 820) < 1

    def test_rubric_0_restaurant_reservation_time_is_august_2__2024_at_7_00_pm(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Restaurant reservation time is August 2, 2024 at 7:00 PM"
        assert len(result) > 0

    def test_rubric_1_the_ordered_item_in_the_delivery_order_is_rye_walnut_pastry(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item in the delivery order is Rye Walnut Pastry Gift Box from Yue Xiang Lou"
        assert len(result) > 0

    def test_rubric_2_the_delivery_address_for_the_takeout_order_is_yue_xiang_lou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the takeout order is Yue Xiang Lou, 88 Zhonghua North Road, Yunyan District, Guiyang, Guizhou Province"
        assert len(result) > 0

    def test_rubric_3_the_estimated_delivery_time_for_the_takeout_order_is_august(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the takeout order is August 2, 2024 at 7:00 PM"
        assert len(result) > 0

    def test_rubric_4_the_flight_order_should_include_round_trip_flights(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight order should include round-trip flights"
        assert len(result) > 0

    def test_rubric_5_the_departure_flight_date_is_august_10__2024(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure flight date is August 10, 2024"
        assert len(result) > 0

    def test_rubric_6_the_return_flight_date_is_august_15__2024(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight date is August 15, 2024"
        assert len(result) > 0

    def test_rubric_7_the_departure_flight_in_the_ticket_order_should_be_cz3707(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure flight in the ticket order should be CZ3707"
        assert len(result) > 0

    def test_rubric_8_the_return_flight_in_the_ticket_order_should_be_cz3708(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight in the ticket order should be CZ3708"
        assert len(result) > 0

    def test_rubric_9_the_total_price_of_the_flight_order_should_be_less_than_2000(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total price of the flight order should be less than 2000 yuan"
        assert len(result) > 0
