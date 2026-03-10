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
        assert result[0]["store_id"] == 'S17564426706759535_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564426706759535_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 499) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17564426706759535_I00004'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17564426706759535_P00014", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 198) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == ''

    def test_order_2_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 0) < 1

    def test_rubric_0_the_photography_studio_should_have_a_high_return_rate(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The photography studio should have a High Return Rate"
        assert len(result) > 0

    def test_rubric_1_the_photography_studio_s_equipment_should_be_professional_eq(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The photography studio\'s equipment should be Professional Equipment"
        assert len(result) > 0

    def test_rubric_2_the_photography_studio_order_should_be_for_the_cheapest_pack(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The photography studio order should be for the cheapest package"
        assert len(result) > 0

    def test_rubric_3_the_photography_studio_order_should_be_for_a_personal_portra(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The photography studio order should be for a Personal Portrait Photography package"
        assert len(result) > 0

    def test_rubric_4_the_photography_studio_package_ordered_should_include_10_or(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The photography studio package ordered should include 10 or more Retouched Photos"
        assert len(result) > 0

    def test_rubric_5_the_photography_studio_package_ordered_should_include_all_or(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The photography studio package ordered should include all original photos service"
        assert len(result) > 0

    def test_rubric_6_since_the_weather_in_zhuhai_on_june_2__2024_is_sunny__the_re(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Since the weather in Zhuhai on June 2, 2024 is sunny, the restaurant order should be for Western Food"
        assert len(result) > 0

    def test_rubric_7_the_western_restaurant_should_be_no_more_than_3km__including(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Western restaurant should be no more than 3km (including 3km) from Starlight Photography Studio, 3rd Floor, Huafa Mall, 1688 Mingzhu South Road, Xiangzhou District, Zhuhai"
        assert len(result) > 0

    def test_rubric_8_the_western_restaurant_order_should_allow_for_terrace_dining(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Western restaurant order should allow for Terrace Dining"
        assert len(result) > 0

    def test_rubric_9_the_western_restaurant_order_should_be_a_single_set(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Western restaurant order should be a Single Set"
        assert len(result) > 0

    def test_rubric_10_the_photography_studio_appointment_time_should_be_10_00_00_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The photography studio appointment time should be 10:00:00 AM on June 2, 2024"
        assert len(result) > 0

    def test_rubric_11_the_photography_studio_reservation_should_be_for_1_person(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The photography studio reservation should be for 1 person"
        assert len(result) > 0

    def test_rubric_12_the_photography_studio_reservation_should_be_with_starlight(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The photography studio reservation should be with Starlight Photography Studio"
        assert len(result) > 0
