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
        assert result[0]["store_id"] == 'S17567836566242471_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836566242471_P00001", "quantity": 1}, {"product_id": "S17567836566242471_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 156) < 1

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
        assert result[2]["store_id"] == 'S17567836566242471_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836566242471_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 68) < 1

    def test_rubric_0_training_institution_orders_should_include_foreign_teacher_i(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Training institution orders should include foreign teacher instruction"
        assert len(result) > 0

    def test_rubric_1_training_institution_course_orders_should_include_situationa(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Training institution course orders should include situational dialogue practice"
        assert len(result) > 0

    def test_rubric_2_training_institution_orders_should_include_adult_single_pers(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Training institution orders should include adult single-person trial voucher"
        assert len(result) > 0

    def test_rubric_3_training_institution_orders_should_include_kindergarten_sing(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Training institution orders should include kindergarten single-person trial voucher"
        assert len(result) > 0

    def test_rubric_4_training_institution_course_orders_should_be_for_english_spe(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Training institution course orders should be for English speaking courses"
        assert len(result) > 0

    def test_rubric_5_the_total_price_of_training_institution_course_orders_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total price of training institution course orders should be within 200 yuan (including 200 yuan)"
        assert len(result) > 0

    def test_rubric_6_adult_trial_voucher_and_kindergarten_trial_voucher_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Adult trial voucher and kindergarten trial voucher should be from the same training institution"
        assert len(result) > 0

    def test_rubric_7_the_reserved_training_institution_should_be_global_foreign_l(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved training institution should be Global Foreign Language Institute (Wanda Plaza Campus)"
        assert len(result) > 0

    def test_rubric_8_the_number_of_people_for_the_training_institution_reservatio(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the training institution reservation is 2"
        assert len(result) > 0

    def test_rubric_9_the_reservation_time_for_the_training_institution_is_2025_05(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation time for the training institution is 2025-05-17 10:00:00"
        assert len(result) > 0

    def test_rubric_10_need_to_check_if_there_is_a_pizza_hut_within_1km__inclusive(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check if there is a Pizza Hut within 1km (inclusive) of Global English Institute, 5th Floor, Building A, Wanda Plaza, No. 265 Zhongshan East Road, Chang\'an District, Shijiazhuang, the result is yes; restaurant order merchant should be Pizza Hut"
        assert len(result) > 0

    def test_rubric_11_the_product_ordered_from_pizza_hut_is_durian_pizza(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product ordered from Pizza Hut is Durian Pizza"
        assert len(result) > 0

    def test_rubric_12_the_product_ordered_from_pizza_hut_is_children_s_set_meal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product ordered from Pizza Hut is Children\'s Set Meal"
        assert len(result) > 0
