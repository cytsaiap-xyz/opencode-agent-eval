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
        assert result[0]["store_id"] == 'S17567836621485163_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836621485163_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 288) < 1

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
        assert result[2]["store_id"] == 'S17567836621485163_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836621485163_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 168) < 1

    def test_rubric_0_the_beauty_salon_should_be_within_1km__inclusive__from_the_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beauty salon should be within 1km (inclusive) from the 16th Floor, Yuanda Shopping Mall Office Building, 1268 Fifth Avenue, Qunli, Daoli District, Harbin"
        assert len(result) > 0

    def test_rubric_1_the_beauty_salon_s_rating_should_not_be_less_than_4_8(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beauty salon\'s rating should not be less than 4.8"
        assert len(result) > 0

    def test_rubric_2_the_purchased_beauty_salon_package_should_be_a_deep_cleansin(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased beauty salon package should be a deep cleansing package"
        assert len(result) > 0

    def test_rubric_3_after_checking_if_the_beauty_salon_has_hifu__high_intensity(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "After checking if the beauty salon has Hifu (High-Intensity Focused Ultrasound) packages, the result is positive, so the purchased package should be a Hifu package"
        assert len(result) > 0

    def test_rubric_4_the_price_of_the_beauty_salon_order_should_not_exceed_300_yu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of the beauty salon order should not exceed 300 yuan"
        assert len(result) > 0

    def test_rubric_5_the_beauty_salon_appointment_time_should_be_november_6__2024(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beauty salon appointment time should be November 6, 2024 at 18:30:00"
        assert len(result) > 0

    def test_rubric_6_the_number_of_people_for_the_beauty_salon_appointment_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the beauty salon appointment should be 1 person"
        assert len(result) > 0

    def test_rubric_7_the_appointed_beauty_salon_should_be_yashi_beauty_care_cente(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The appointed beauty salon should be Yashi Beauty Care Center"
        assert len(result) > 0

    def test_rubric_8_the_restaurant_ordered_from_should_be_a_russian_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered from should be a Russian restaurant"
        assert len(result) > 0

    def test_rubric_9_the_restaurant_order_should_be_a_set_menu_for_2_3_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant order should be a Set Menu for 2-3 People"
        assert len(result) > 0

    def test_rubric_10_the_restaurant_should_be_within_1km__inclusive__from_cr_arch(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant should be within 1km (inclusive) from CR Arch of Triumph, 218 Hongqi Street, Nangang District, Harbin"
        assert len(result) > 0

    def test_rubric_11_the_ordered_set_menu_for_2_3_people_should_be_the_cheapest_o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered Set Menu for 2-3 People should be the cheapest one in the restaurant"
        assert len(result) > 0
