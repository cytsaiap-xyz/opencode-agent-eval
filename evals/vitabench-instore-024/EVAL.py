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
        assert result[0]["store_id"] == 'S17564420254944798_I00003'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420254944798_P00009", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 3280) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17564420254944798_I00004'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17564420254944798_P00013", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 888) < 1

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

    def test_rubric_0_the_permanent_makeup_shop_i_order_from_must_have_technicians(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The permanent makeup shop I order from must have technicians with excellent skills"
        assert len(result) > 0

    def test_rubric_1_the_permanent_makeup_shop_must_have_a_rating_greater_than_or(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The permanent makeup shop must have a rating greater than or equal to 4.2"
        assert len(result) > 0

    def test_rubric_2_the_package_from_the_permanent_makeup_shop_must_be_semi_perm(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package from the permanent makeup shop must be semi-permanent eyebrow microblading"
        assert len(result) > 0

    def test_rubric_3_need_to_search_for_the_most_expensive_semi_permanent_eyebrow(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to search for the most expensive semi-permanent eyebrow microblading package, which is Korean Semi-Permanent Eyebrow Microblading (Chief Technician Jin Zhishou) from Celebrity Permanent Makeup & SPA Center for 3280 yuan, therefore the order must be for Korean Semi-Permanent Eyebrow Microblading (Chief Technician Jin Zhishou) from Celebrity Permanent Makeup & SPA Center"
        assert len(result) > 0

    def test_rubric_4_must_check_user_behavior_history_to_find_previously_visited(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Must check user behavior history to find previously visited Italian restaurants, which shows La Vita Italian Traditional Cuisine; the in-store dining establishment must be La Vita Italian Traditional Cuisine"
        assert len(result) > 0

    def test_rubric_5_need_to_check_if_la_vita_italian_traditional_cuisine_offers(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check if La Vita Italian Traditional Cuisine offers a Qixi Festival Set Menu, results show they do; the in-store dining order must be for the Qixi Festival Set Menu"
        assert len(result) > 0

    def test_rubric_6_the_restaurant_reservation_order_needs_to_book_for_6_00_pm_o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation order needs to book for 6:00 PM on Saturday, August 9, 2025"
        assert len(result) > 0

    def test_rubric_7_the_restaurant_reservation_must_be_for_2_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation must be for 2 people"
        assert len(result) > 0

    def test_rubric_8_the_reservation_should_be_made_at_la_vita_italian_traditiona(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation should be made at La Vita Italian Traditional Cuisine"
        assert len(result) > 0

    def test_rubric_9_the_eyebrow_microblading_appointment_time_must_be_at_3_00_pm(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The eyebrow microblading appointment time must be at 3:00 PM on Sunday, August 10, 2025"
        assert len(result) > 0

    def test_rubric_10_the_permanent_makeup_shop_for_the_appointment_should_be_cele(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The permanent makeup shop for the appointment should be Celebrity Permanent Makeup & SPA Center"
        assert len(result) > 0
