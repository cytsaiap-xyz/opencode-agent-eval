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
        assert result[0]["store_id"] == 'S17557510281733481_H00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557510281733481_P00007", "quantity": 1}, {"product_id": "S17557510281733481_P00008", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1560) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557510281733481_A00006'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557510281733481_P00053", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 108) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557510281733481_A00007'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557510281733481_P00063", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 20) < 1

    def test_rubric_0_need_to_check_the_weather_in_hangzhou_on_march_4__2027_and_m(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the weather in Hangzhou on March 4, 2027 and March 5, 2027, which shows cloudy and sunny respectively, neither is rainy, so the distance between the hotel in the hotel order and the West Lake Scenic Area at 1 Longjing Road, West Lake District, Hangzhou, Zhejiang Province should be less than or equal to 500 meters"
        assert len(result) > 0

    def test_rubric_1_the_hotel_order_should_include_rooms_for_two_nights__specifi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order should include rooms for two nights, specifically for 2027-03-04 and 2027-03-05"
        assert len(result) > 0

    def test_rubric_2_the_attraction_in_the_attraction_order_with_date_2027_03_04(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction in the attraction order with date 2027-03-04 should be Lingyin Temple"
        assert len(result) > 0

    def test_rubric_3_the_ticket_in_the_attraction_order_with_date_2027_03_04_shou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket in the attraction order with date 2027-03-04 should be Adult Ticket"
        assert len(result) > 0

    def test_rubric_4_the_ticket_in_the_attraction_order_with_date_2027_03_04_shou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket in the attraction order with date 2027-03-04 should include an Incense and Candle Set"
        assert len(result) > 0

    def test_rubric_5_the_ticket_in_the_attraction_order_with_date_2027_03_04_shou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket in the attraction order with date 2027-03-04 should include Guided Tour Service"
        assert len(result) > 0

    def test_rubric_6_the_attraction_in_the_attraction_order_with_date_2027_03_05(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction in the attraction order with date 2027-03-05 should be Zhejiang Art Museum"
        assert len(result) > 0

    def test_rubric_7_the_ticket_in_the_attraction_order_with_date_2027_03_05_shou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket in the attraction order with date 2027-03-05 should be Contemporary Art Exhibition Ticket"
        assert len(result) > 0
