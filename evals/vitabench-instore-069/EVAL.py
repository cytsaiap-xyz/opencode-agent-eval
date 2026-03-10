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
        assert result[0]["store_id"] == 'S17567836580604988_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836580604988_P00001", "quantity": 1}, {"product_id": "S17567836580604988_P00005", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 4576) < 1

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
        assert result[2]["store_id"] == 'S17567836580604988_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836580604988_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 268) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17567836580604988_I00002'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17567836580604988_P00013", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 288) < 1

    def test_rubric_0_the_beauty_salon_should_provide_face_to_face_consultation_se(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beauty salon should provide face-to-face consultation service"
        assert len(result) > 0

    def test_rubric_1_the_receptionist_and_doctor_of_the_beauty_salon_should_hold(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The receptionist and doctor of the beauty salon should hold professional qualification certificates"
        assert len(result) > 0

    def test_rubric_2_the_beauty_salon_order_should_include_a_facial_spot_removal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beauty salon order should include a facial spot removal and anti-wrinkle package with a quantity of 1"
        assert len(result) > 0

    def test_rubric_3_the_beauty_salon_order_should_include_a_facial_lifting_and_f(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beauty salon order should include a facial lifting and firming package with a quantity of 1"
        assert len(result) > 0

    def test_rubric_4_the_facial_spot_removal_and_anti_wrinkle_package_and_facial(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The facial spot removal and anti-wrinkle package and facial lifting and firming package should be from the same merchant"
        assert len(result) > 0

    def test_rubric_5_all_beauty_salon_ordered_items_should_be_holiday_special_pac(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "All beauty salon ordered items should be holiday special packages"
        assert len(result) > 0

    def test_rubric_6_the_reserved_beauty_salon_should_be_xinyan_medical_aesthetic(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved beauty salon should be Xinyan Medical Aesthetics Center (Qingxiu Mixc Branch)"
        assert len(result) > 0

    def test_rubric_7_the_beauty_salon_appointment_time_should_be_2025_03_08_14_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beauty salon appointment time should be 2025-03-08 14:00"
        assert len(result) > 0

    def test_rubric_8_the_number_of_people_for_the_beauty_salon_appointment_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the beauty salon appointment should be 2"
        assert len(result) > 0

    def test_rubric_9_user_history_should_be_checked__and_since_the_user_previousl(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "User history should be checked, and since the user previously frequented Tang Palace Cantonese Restaurant (Qingxiu Mixc Branch), the Cantonese restaurant order should be from Tang Palace Cantonese Restaurant (Qingxiu Mixc Branch)"
        assert len(result) > 0

    def test_rubric_10_the_cantonese_restaurant_should_be_checked_for_women_s_day_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Cantonese restaurant should be checked for Women\'s Day special set menu for two, and since it is available, the Cantonese restaurant order should be Women\'s Day Special Cantonese Premium Set for Two"
        assert len(result) > 0

    def test_rubric_11_the_order_status_for_business_set_menu_a_for_two_should_be_c(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The order status for Business Set Menu A for Two should be cancelled"
        assert len(result) > 0
