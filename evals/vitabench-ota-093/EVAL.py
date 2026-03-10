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
        assert result[0]["store_id"] == 'S17557518210681493_F00009'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557518210681493_P00091", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 700) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557518210681493_H00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557518210681493_P00017", "quantity": 1}, {"product_id": "S17557518210681493_P00018", "quantity": 1}, {"product_id": "S17557518210681493_P00019", "quantity": 1}, {"product_id": "S17557518210681493_P00020", "quantity": 1}, {"product_id": "S17557518210681493_P00021", "quantity": 1}, {"product_id": "S17557518210681493_P00022", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 2448) < 1

    def test_rubric_0_need_to_check_whether_there_are_direct_flights_from_weifang(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check whether there are direct flights from Weifang to Haikou, and the result is yes, so the departure city and arrival city for the flight order should be from Weifang to Haikou"
        assert len(result) > 0

    def test_rubric_1_need_to_filter_all_flights_on_2024_09_13__2024_09_14__and_20(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to filter all flights on 2024-09-13, 2024-09-14, and 2024-09-15, and find the cheapest flight, which is SC4651 on 2024-09-15, economy class"
        assert len(result) > 0

    def test_rubric_2_the_flight_order_should_be_for_flight_sc4651(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight order should be for flight SC4651"
        assert len(result) > 0

    def test_rubric_3_the_flight_order_date_should_be_2024_09_15(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight order date should be 2024-09-15"
        assert len(result) > 0

    def test_rubric_4_the_flight_order_should_be_for_economy_class(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight order should be for economy class"
        assert len(result) > 0

    def test_rubric_5_the_hotel_must_be_near_haikou_mingmen_plaza(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must be near Haikou Mingmen Plaza"
        assert len(result) > 0

    def test_rubric_6_the_hotel_order_price_per_night_must_be_within_the_300_500_y(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order price per night must be within the 300-500 yuan price range"
        assert len(result) > 0

    def test_rubric_7_the_hotel_must_provide_laundry_service(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must provide laundry service"
        assert len(result) > 0

    def test_rubric_8_the_hotel_order_s_accommodation_period_must_be_from_the_arri(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order\'s accommodation period must be from the arrival date until the evening of the 20th, specifically 2024-09-15, 2024-09-16, 2024-09-17, 2024-09-18, 2024-09-19, 2024-09-20"
        assert len(result) > 0
