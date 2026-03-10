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
        assert result[0]["store_id"] == 'S17557505487409598_T00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505487409598_P00080", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 398) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505487409598_T00011'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505487409598_P00093", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 468) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505487409598_H00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505487409598_P00008", "quantity": 1}, {"product_id": "S17557505487409598_P00016", "quantity": 1}, {"product_id": "S17557505487409598_P00015", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 1140) < 1

    def test_rubric_0_the_train_ticket_order_status_for_july_10__2027_should_be_ca(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket order status for July 10, 2027 should be cancelled"
        assert len(result) > 0

    def test_rubric_1_the_train_number_for_july_10__2027_is_k9619__with_departure(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train number for July 10, 2027 is K9619, with departure time at 18:30. The tickets for this train on July 12, 2027 are sold out, so the tickets for July 12, 2027 should be for train K9622 which departs one hour later (departure time at 19:30)"
        assert len(result) > 0

    def test_rubric_2_the_train_ticket_order_status_for_july_12__2027_should_be_pa(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket order status for July 12, 2027 should be paid"
        assert len(result) > 0

    def test_rubric_3_the_reserved_homestay_should_have_bai_ethnic_style(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved homestay should have Bai Ethnic Style"
        assert len(result) > 0

    def test_rubric_4_the_reserved_homestay_should_have_views_of_erhai_lake_and_ca(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved homestay should have views of Erhai Lake and Cangshan Mountain"
        assert len(result) > 0

    def test_rubric_5_the_reserved_homestay_should_include_breakfast(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved homestay should include breakfast"
        assert len(result) > 0

    def test_rubric_6_the_homestay_reservation_should_include_three_nights__specif(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The homestay reservation should include three nights, specifically for July 12, 2027, July 13, 2027, and July 14, 2027"
        assert len(result) > 0
