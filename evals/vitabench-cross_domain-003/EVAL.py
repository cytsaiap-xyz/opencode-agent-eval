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
        assert result[0]["store_id"] == 'S17550802111734829_A00003'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802111734829_P00019", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 195) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550931962874071_S00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550931962874071_P00009", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 289) < 1

    def test_rubric_0_the_ordered_scenic_area_should_be_suitable_for_hiking_activi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered scenic area should be suitable for hiking activities"
        assert len(result) > 0

    def test_rubric_1_the_ordered_scenic_area_should_be_in_baoding(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered scenic area should be in Baoding"
        assert len(result) > 0

    def test_rubric_2_the_latest_admission_time_for_the_scenic_area_should_be_afte(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The latest admission time for the scenic area should be after 16:30"
        assert len(result) > 0

    def test_rubric_3_the_price_of_the_ordered_tickets_should_be_the_lowest_among(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of the ordered tickets should be the lowest among all tickets for this scenic area (S17550802111734829_P00019)"
        assert len(result) > 0

    def test_rubric_4_the_price_of_a_single_ticket_should_not_exceed_100_yuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of a single ticket should not exceed 100 yuan"
        assert len(result) > 0

    def test_rubric_5_the_usage_date_for_the_ordered_tickets_should_be_october_29(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The usage date for the ordered tickets should be October 29, 2025"
        assert len(result) > 0

    def test_rubric_6_the_quantity_of_ordered_tickets_should_be_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of ordered tickets should be 3"
        assert len(result) > 0

    def test_rubric_7_the_agent_must_check_the_weather_for_both_october_29__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The agent must check the weather for both October 29, 2025, and October 30, 2025, with the final results showing temperatures above 30 degrees on both days"
        assert len(result) > 0

    def test_rubric_8_the_ordered_outdoor_equipment_should_be_from_the_toread_outd(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered outdoor equipment should be from the Toread Outdoor Flagship Store"
        assert len(result) > 0

    def test_rubric_9_the_ordered_outdoor_equipment_should_be_a_tent(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered outdoor equipment should be a tent"
        assert len(result) > 0

    def test_rubric_10_the_delivery_address_for_the_outdoor_equipment_should_be_hua(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the outdoor equipment should be Huachuang International Plaza, 557 Yuhua West Road, Lianchi District, Baoding, Hebei Province"
        assert len(result) > 0

    def test_rubric_11_the_expected_delivery_time_for_the_outdoor_equipment_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The expected delivery time for the outdoor equipment should be before 16:30 on October 29, 2025"
        assert len(result) > 0
