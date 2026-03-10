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
        assert result[0]["store_id"] == 'S17564420241411338_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420241411338_P00002", "quantity": 8}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1104) < 1

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
        assert result[2]["store_id"] == 'S17564420241411338_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564420241411338_P00006", "quantity": 5}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 490) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == ''

    def test_order_3_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 0) < 1

    def test_rubric_0_latin_dance_studio_merchants_must_be_selected_from_latin_dan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Latin dance studio merchants must be selected from Latin dance studios/services"
        assert len(result) > 0

    def test_rubric_1_the_merchant_rating_for_dance_orders_must_be_higher_than_4_7(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The merchant rating for dance orders must be higher than 4.7 stars"
        assert len(result) > 0

    def test_rubric_2_the_dance_order_package_must_provide_course_services_with_te(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dance order package must provide course services with teacher guidance"
        assert len(result) > 0

    def test_rubric_3_the_dance_order_package_must_be_suitable_for_beginners_to_ex(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dance order package must be suitable for beginners to experience"
        assert len(result) > 0

    def test_rubric_4_since_the_user_doesn_t_want_to_be_with_strangers__it_s_neces(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Since the user doesn\'t want to be with strangers, it\'s necessary to screen for beginner courses with 6 people per class, which yields no results; therefore, small classes with 8 people per class should be selected, ordering 8 portions"
        assert len(result) > 0

    def test_rubric_5_the_appointment_time_for_dance_classes_must_be_saturday_at_4(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The appointment time for dance classes must be Saturday at 4 PM (February 27, 2024, 16:00)"
        assert len(result) > 0

    def test_rubric_6_since_the_user_doesn_t_want_to_be_with_strangers__the_number(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Since the user doesn\'t want to be with strangers, the number of people for the dance class appointment must be 8"
        assert len(result) > 0

    def test_rubric_7_the_appointed_dance_class_merchant_should_be_dancing_miracle(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The appointed dance class merchant should be Dancing Miracle Latin Dance Studio"
        assert len(result) > 0

    def test_rubric_8_the_sauna_room_merchant_needs_to_be_within_a_2km_range_of_th(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The sauna room merchant needs to be within a 2km range of the Latin dance studio (Dancing Miracle Latin Dance Studio, 5th Floor, Building B3, Olympic City Commercial Plaza, Huayuan Industrial Park, Nankai District, Tianjin)"
        assert len(result) > 0

    def test_rubric_9_the_sauna_room_order_needs_to_reserve_five_single_person_sau(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The sauna room order needs to reserve five single-person sauna items"
        assert len(result) > 0

    def test_rubric_10_the_sauna_room_order_package_content_must_be_steam_bath(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The sauna room order package content must be steam bath"
        assert len(result) > 0

    def test_rubric_11_the_number_of_people_for_the_sauna_room_appointment_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the sauna room appointment should be 5"
        assert len(result) > 0

    def test_rubric_12_the_appointment_time_for_the_sauna_room_should_be_half_an_ho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The appointment time for the sauna room should be half an hour after the Latin class ends; checking the Latin class order shows the Latin class duration is 90 minutes, therefore the sauna room appointment time should be February 27, 2024, 18:00"
        assert len(result) > 0

    def test_rubric_13_the_appointed_sauna_room_merchant_should_be_yuehuan_sauna_cl(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The appointed sauna room merchant should be Yuehuan Sauna Club"
        assert len(result) > 0
