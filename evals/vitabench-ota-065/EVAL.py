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
        assert result[0]["store_id"] == 'S17557512073196111_T00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557512073196111_P00073", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 768) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557512073196111_H00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557512073196111_P00013", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 658) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557111228331195_A00008'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557111228331195_P00057", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 300) < 1

    def test_rubric_0_the_train_ticket_order_s_departure_time_is_saturday__may_25(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket order\'s departure time is Saturday (May 25, 2024)"
        assert len(result) > 0

    def test_rubric_1_the_train_ticket_order_must_be_for_a_lower_berth(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket order must be for a lower berth"
        assert len(result) > 0

    def test_rubric_2_the_train_ticket_order_should_be_for_a_soft_sleeper__lower_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket order should be for a Soft sleeper (lower berth)"
        assert len(result) > 0

    def test_rubric_3_the_hotel_check_in_date_should_be_the_evening_of_arrival__ma(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel check-in date should be the evening of arrival (May 27, 2024)"
        assert len(result) > 0

    def test_rubric_4_the_hotel_environment_must_be_tidy(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel environment must be Tidy"
        assert len(result) > 0

    def test_rubric_5_the_hotel_must_be_located_within_2km__inclusive__of_urumqi_r(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must be located within 2km (inclusive) of Urumqi Railway Station"
        assert len(result) > 0

    def test_rubric_6_the_hotel_order_price_must_be_between_500_1000_yuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel order price must be between 500-1000 yuan"
        assert len(result) > 0

    def test_rubric_7_the_scenic_spot_in_the_ticket_order_must_be_tianshan_grand_c(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The scenic spot in the ticket order must be Tianshan Grand Canyon"
        assert len(result) > 0

    def test_rubric_8_the_date_on_the_ticket_order_must_be_the_first_saturday_in_j(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date on the ticket order must be the first Saturday in June 2024, which is June 1"
        assert len(result) > 0

    def test_rubric_9_the_ticket_order_must_include_2_adult_tickets(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket order must include 2 Adult tickets"
        assert len(result) > 0
