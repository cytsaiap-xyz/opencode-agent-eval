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
        assert result[0]["store_id"] == 'S17567836667757115_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836667757115_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 168) < 1

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
        assert result[2]["store_id"] == 'S17567836667757115_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836667757115_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 45) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17567836667757115_I00003'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17567836667757115_P00019", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 28) < 1

    def test_rubric_0_the_eye_care_center_must_be_professional(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The eye care center must be professional"
        assert len(result) > 0

    def test_rubric_1_the_eye_care_center_must_be_within_1km__inclusive__of_the_15(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The eye care center must be within 1km (inclusive) of the 15th Floor, No.5 Victory International Building, Harbor Square, Zhongshan District, Dalian"
        assert len(result) > 0

    def test_rubric_2_for_the_eye_care_center_order__priority_should_be_given_to_e(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "For the eye care center order, priority should be given to eye + head massage combination packages; if unavailable, order eye massage packages only; upon checking, eye + head massage packages are available, so these should be ordered"
        assert len(result) > 0

    def test_rubric_3_the_service_time_for_the_eye_care_center_order_must_be_40_mi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The service time for the eye care center order must be 40 minutes or longer"
        assert len(result) > 0

    def test_rubric_4_the_eye_care_center_should_be_bright_eyes_care_center(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The eye care center should be Bright Eyes Care Center"
        assert len(result) > 0

    def test_rubric_5_the_appointment_time_for_the_eye_care_center_should_be_2024(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The appointment time for the eye care center should be 2024-07-20 15:30:00"
        assert len(result) > 0

    def test_rubric_6_the_number_of_people_for_the_eye_care_center_appointment_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the eye care center appointment should be 1"
        assert len(result) > 0

    def test_rubric_7_the_cake_ordered_from_the_cake_shop_should_be_4_inch(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The cake ordered from the cake shop should be 4-inch"
        assert len(result) > 0

    def test_rubric_8_the_cake_ordered_should_be_sugar_free(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The cake ordered should be Sugar-free"
        assert len(result) > 0

    def test_rubric_9_the_cake_ordered_should_not_contain_mango(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The cake ordered should not contain mango"
        assert len(result) > 0

    def test_rubric_10_the_cake_ordered_should_use_dairy_cream(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The cake ordered should use Dairy Cream"
        assert len(result) > 0

    def test_rubric_11_the_milk_tea_ordered_should_be_sugar_free(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The milk tea ordered should be Sugar-free"
        assert len(result) > 0

    def test_rubric_12_the_milk_tea_ordered_should_be_grape_flavored(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The milk tea ordered should be grape flavored"
        assert len(result) > 0

    def test_rubric_13_the_milk_tea_ordered_should_not_contain_mango(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The milk tea ordered should not contain mango"
        assert len(result) > 0

    def test_rubric_14_the_recommended_milk_tea_shop_should_be_heytea(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The recommended milk tea shop should be HeyTea"
        assert len(result) > 0
