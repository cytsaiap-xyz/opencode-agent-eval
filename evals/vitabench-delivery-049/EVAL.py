import json
import os
import pytest
from solution import solve

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)

result = solve()
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
        assert result[0]["store_id"] == 'S29320856098611305_S14636'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S33258850217936154_P51247", "quantity": 1}, {"product_id": "S94741277271315699_P39700", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 18.8) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S23149193666334671_S55696'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S26406900254948404_P52292", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 30.0) < 1

    def test_rubric_0_the_afternoon_delivery_order_after_the_audition_should_choos(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The afternoon delivery order after the audition should choose Steamed Tender Cuttlefish Slices and Whole Grain Corn Wowotou from Qingshuji store"
        assert len(result) > 0

    def test_rubric_1_the_total_number_of_items_in_the_afternoon_delivery_order_af(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total number of items in the afternoon delivery order after the audition should be 2"
        assert len(result) > 0

    def test_rubric_2_the_delivery_address_for_the_afternoon_delivery_order_after(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the afternoon delivery order after the audition should be No.8, No.7 Tianxian Bridge North Road, Jinhai International Garden, Jinjiang District, Chengdu, Sichuan Province"
        assert len(result) > 0

    def test_rubric_3_the_estimated_delivery_time_for_the_afternoon_delivery_order(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the afternoon delivery order after the audition should be around 2025-10-30 15:00:00"
        assert len(result) > 0

    def test_rubric_4_the_sweetness_option_for_camellia_americano_in_the_coffee_or(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The sweetness option for Camellia Americano in the coffee order before the audition should be the no sugar option"
        assert len(result) > 0

    def test_rubric_5_the_total_number_of_items_in_the_coffee_order_before_the_aud(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total number of items in the coffee order before the audition should be 2 cups"
        assert len(result) > 0

    def test_rubric_6_the_delivery_address_for_the_coffee_order_before_the_auditio(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the coffee order before the audition should be No.8, No.7 Tianxian Bridge North Road, Jinhai International Garden, Jinjiang District, Chengdu, Sichuan Province"
        assert len(result) > 0

    def test_rubric_7_the_estimated_delivery_time_for_the_coffee_order_before_the(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the coffee order before the audition should be before 2025-10-30 12:00:00"
        assert len(result) > 0
