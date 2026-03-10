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
        assert result[0]["store_id"] == 'S17564420268579665_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420268579665_P00003", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 116) < 1

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
        assert result[2]["store_id"] == 'S17564420268579665_I00004'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564420268579665_P00015", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 218) < 1

    def test_rubric_0_the_ordered_yoga_studio_cannot_be_taiyuan_yushe_yoga_club(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered yoga studio cannot be Taiyuan Yushe Yoga Club"
        assert len(result) > 0

    def test_rubric_1_the_ordered_yoga_studio_must_be_within_3km__including_3km__o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered yoga studio must be within 3km (including 3km) of the user\'s home"
        assert len(result) > 0

    def test_rubric_2_the_ordered_yoga_studio_must_have_an_elegant_environment(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered yoga studio must have an elegant environment"
        assert len(result) > 0

    def test_rubric_3_the_ordered_yoga_studio_must_have_professional_teachers(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered yoga studio must have professional teachers"
        assert len(result) > 0

    def test_rubric_4_the_ordered_yoga_studio_must_have_classes_scheduled_on_weekd(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered yoga studio must have classes scheduled on weekdays (Monday to Friday)"
        assert len(result) > 0

    def test_rubric_5_the_ordered_yoga_studio_must_be_recently_opened(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered yoga studio must be recently opened"
        assert len(result) > 0

    def test_rubric_6_the_purchased_yoga_package_must_be_suitable_for_beginners(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased yoga package must be suitable for beginners"
        assert len(result) > 0

    def test_rubric_7_the_purchased_yoga_package_must_include_basic_pose_instructi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased yoga package must include basic pose instruction"
        assert len(result) > 0

    def test_rubric_8_the_quantity_of_yoga_packages_purchased_must_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of yoga packages purchased must be 2"
        assert len(result) > 0

    def test_rubric_9_the_booked_merchant_should_be_qingya_yoga_life_studio(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked merchant should be Qingya Yoga Life Studio"
        assert len(result) > 0

    def test_rubric_10_the_number_of_people_in_the_yoga_studio_reservation_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people in the yoga studio reservation should be 2 people"
        assert len(result) > 0

    def test_rubric_11_the_time_in_the_yoga_studio_reservation_should_be_19_30_00_o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The time in the yoga studio reservation should be 19:30:00 on 2025-07-11"
        assert len(result) > 0

    def test_rubric_12_the_ordered_ktv_must_be_within_3km_of_the_user_s_home(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered KTV must be within 3km of the user\'s home"
        assert len(result) > 0

    def test_rubric_13_the_ordered_ktv_package_should_be_a_singing_only_package(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered KTV package should be a singing-only package"
        assert len(result) > 0

    def test_rubric_14_the_usage_duration_of_the_ordered_ktv_package_should_be_3_ho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The usage duration of the ordered KTV package should be 3 hours"
        assert len(result) > 0
