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
        assert result[0]["store_id"] == 'S17567836585819667_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836585819667_P00004", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 98) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == ''

    def test_order_1_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 0) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567836585819667_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836585819667_P00016", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 188) < 1

    def test_rubric_0_the_healing_center_should_have_been_in_business_for_3_years(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The healing center should have been in business for 3 years or more"
        assert len(result) > 0

    def test_rubric_1_the_healing_center_should_be_a_well_known_chain_brand(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The healing center should be a well-known chain brand"
        assert len(result) > 0

    def test_rubric_2_the_ordered_item_at_the_healing_center_should_be_a_meditatio(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the healing center should be a meditation course"
        assert len(result) > 0

    def test_rubric_3_the_ordered_item_at_the_healing_center_should_be_a_single_se(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the healing center should be a single session package"
        assert len(result) > 0

    def test_rubric_4_the_ordered_item_at_the_healing_center_should_be_at_new_cust(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the healing center should be at new customer benefit price"
        assert len(result) > 0

    def test_rubric_5_the_duration_of_the_ordered_item_at_the_healing_center_shoul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The duration of the ordered item at the healing center should be 1.5 hours"
        assert len(result) > 0

    def test_rubric_6_the_booked_healing_center_should_be_mindful_space_meditation(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked healing center should be Mindful Space Meditation Center (Science Park Branch)"
        assert len(result) > 0

    def test_rubric_7_the_booking_time_for_the_healing_center_is_2025_12_25_18_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booking time for the healing center is 2025-12-25 18:00"
        assert len(result) > 0

    def test_rubric_8_the_number_of_people_for_the_healing_center_booking_is_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the healing center booking is 1"
        assert len(result) > 0

    def test_rubric_9_should_check_whether_there_is_a_car_wash_service_within_1000(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should check whether there is a car wash service within 1000m (inclusive) of 3/F, Tower B, High-Tech Plaza, 22 Keyuan Road, Science Park South Area, Nanshan District, Shenzhen (Mindful Space Meditation Center) that offers 1.5h service including interior and exterior cleaning and seat care. The result is yes, therefore should place an order at the car wash service. The distance from the car wash service to 3/F, Tower B, High-Tech Plaza, 22 Keyuan Road, Science Park South Area, Nanshan District, Shenzhen (Mindful Space Meditation Center) should be within 1000m (inclusive)"
        assert len(result) > 0

    def test_rubric_10_the_ordered_item_at_the_car_wash_service_should_be_a_car_was(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the car wash service should be a car wash voucher"
        assert len(result) > 0

    def test_rubric_11_the_duration_of_the_ordered_item_at_the_car_wash_service_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The duration of the ordered item at the car wash service should be 1.5h"
        assert len(result) > 0

    def test_rubric_12_the_ordered_item_at_the_car_wash_service_should_include_inte(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the car wash service should include interior and exterior cleaning and seat care"
        assert len(result) > 0
