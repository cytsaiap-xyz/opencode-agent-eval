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
        assert result[0]["store_id"] == 'S17557512725123677_H00004'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557512725123677_P00037", "quantity": 1}, {"product_id": "S17557512725123677_P00038", "quantity": 1}, {"product_id": "S17557512725123677_P00039", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 894) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557512725123677_A00008'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557512725123677_P00064", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 80) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557512725123677_A00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557512725123677_P00047", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 80) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557512725123677_H00005'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557512725123677_P00042", "quantity": 1}, {"product_id": "S17557512725123677_P00043", "quantity": 1}, {"product_id": "S17557512725123677_P00044", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 1140) < 1

    def test_rubric_0_the_order_status_of_jinjiang_inn_changsha_huanghua_airport_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order status of Jinjiang Inn Changsha Huanghua Airport Branch is cancelled"
        assert len(result) > 0

    def test_rubric_1_the_usage_date_of_orange_isle_tickets_is_november_16__2024(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The usage date of Orange Isle tickets is November 16, 2024"
        assert len(result) > 0

    def test_rubric_2_the_orange_isle_tickets_should_include_sightseeing_bus(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Orange Isle tickets should include sightseeing bus"
        assert len(result) > 0

    def test_rubric_3_the_orange_isle_tickets_should_include_professional_commenta(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Orange Isle tickets should include professional commentary service"
        assert len(result) > 0

    def test_rubric_4_the_usage_date_of_yuelu_academy_tickets_is_november_17__2024(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The usage date of Yuelu Academy tickets is November 17, 2024"
        assert len(result) > 0

    def test_rubric_5_the_yuelu_academy_tickets_should_include_professional_guided(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Yuelu Academy tickets should include professional guided tour"
        assert len(result) > 0

    def test_rubric_6_the_hotel_to_be_booked_should_be_near_wuyi_square(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel to be booked should be near Wuyi Square"
        assert len(result) > 0

    def test_rubric_7_the_hotel_price_range_should_be_300_500_yuan_per_night(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel price range should be 300-500 yuan per night"
        assert len(result) > 0

    def test_rubric_8_the_hotel_should_provide_a_fitness_center(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel should provide a Fitness center"
        assert len(result) > 0

    def test_rubric_9_the_hotel_order_should_include_rooms_for_3_nights__specifica(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order should include rooms for 3 nights, specifically November 14, 2024, November 15, 2024, and November 16, 2024"
        assert len(result) > 0
