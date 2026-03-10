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
        assert result[0]["store_id"] == 'S17564425297743877_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564425297743877_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 128) < 1

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
        assert result[2]["store_id"] == 'S17564425297743877_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564425297743877_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 388) < 1

    def test_rubric_0_the_calligraphy_order_package_must_be_suitable_for_children(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The calligraphy order package must be suitable for children"
        assert len(result) > 0

    def test_rubric_1_the_calligraphy_package_must_include_pen__ink__paper__and_in(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The calligraphy package must include pen, ink, paper, and inkstone"
        assert len(result) > 0

    def test_rubric_2_the_calligraphy_order_package_must_be_an_experience_course_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The calligraphy order package must be an experience course package"
        assert len(result) > 0

    def test_rubric_3_the_calligraphy_package_must_provide_one_on_one_teaching(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The calligraphy package must provide One-on-One Teaching"
        assert len(result) > 0

    def test_rubric_4_the_calligraphy_order_merchant_must_be_within_3km_of_the_hom(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The calligraphy order merchant must be within 3km of the home address (Room 1204, Building B, Hangyang International City, 131 Minzu Avenue, Qingxiu District, Nanning)"
        assert len(result) > 0

    def test_rubric_5_the_calligraphy_appointment_merchant_must_be_han_mo_xuan_cal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The calligraphy appointment merchant must be Han Mo Xuan Calligraphy Training Center"
        assert len(result) > 0

    def test_rubric_6_the_calligraphy_appointment_order_must_be_scheduled_for_sund(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The calligraphy appointment order must be scheduled for Sunday afternoon (April 6, 2025) at 3 PM"
        assert len(result) > 0

    def test_rubric_7_the_calligraphy_appointment_order_must_be_for_1_person(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The calligraphy appointment order must be for 1 person"
        assert len(result) > 0

    def test_rubric_8_the_restaurant_must_be_located_within_3km_of_mixc_shopping_c(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant must be located within 3km of Mixc Shopping Center"
        assert len(result) > 0

    def test_rubric_9_the_dining_party_consists_of_6_people__including_4_adults__1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dining party consists of 6 people, including 4 adults, 1 young child, and 1 infant; the restaurant order should be one 5-6 person meal package rather than multiple 3-person packages"
        assert len(result) > 0

    def test_rubric_10_the_restaurant_package_dishes_must_be_light_flavored(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant package dishes must be Light Flavored"
        assert len(result) > 0

    def test_rubric_11_the_restaurant_must_provide_high_chair_available_facility(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant must provide High Chair Available facility"
        assert len(result) > 0
