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
        assert result[0]["store_id"] == ''

    def test_order_0_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 0) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17564420264159867_I00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17564420264159867_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 388) < 1

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

    def test_rubric_0_the_reservation_time_for_the_western_restaurant_should_be_at(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation time for the Western restaurant should be at noon (12:00) on Chinese Valentine\'s Day (August 29, 2025)"
        assert len(result) > 0

    def test_rubric_1_the_number_of_people_for_the_western_restaurant_reservation(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the Western restaurant reservation should be 2"
        assert len(result) > 0

    def test_rubric_2_the_western_restaurant_should_have_a_terrace(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Western restaurant should have a terrace"
        assert len(result) > 0

    def test_rubric_3_the_western_restaurant_should_have_a_lake_view(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Western restaurant should have a lake view"
        assert len(result) > 0

    def test_rubric_4_the_western_restaurant_should_provide_a_sirloin_steak_set_fo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Western restaurant should provide a sirloin steak set for two, rather than two individual set meals"
        assert len(result) > 0

    def test_rubric_5_the_price_of_the_sirloin_steak_set_for_two_at_the_western_re(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of the sirloin steak set for two at the Western restaurant should be within 500 yuan (including 500 yuan)"
        assert len(result) > 0

    def test_rubric_6_the_rating_of_the_western_restaurant_should_be_4_3_or_above(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The rating of the Western restaurant should be 4.3 or above"
        assert len(result) > 0

    def test_rubric_7_the_ktv_should_be_within_2km__including_2km__of_the_lakeside(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV should be within 2km (including 2km) of the Lakeside Western Restaurant at the intersection of Xinhua Road and Yuhe Road, Bailang River Scenic Area, Kuiwen District, Weifang City, Shandong Province"
        assert len(result) > 0

    def test_rubric_8_the_duration_of_the_ktv_booking_should_be_3_hours(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The duration of the KTV booking should be 3 hours"
        assert len(result) > 0

    def test_rubric_9_the_ktv_booking_should_be_for_a_small_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV booking should be for a Small Room"
        assert len(result) > 0

    def test_rubric_10_the_ktv_booking_should_include_champagne(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV booking should include champagne"
        assert len(result) > 0

    def test_rubric_11_the_ktv_booking_should_include_snacks(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV booking should include snacks"
        assert len(result) > 0

    def test_rubric_12_the_ktv_booking_should_include_scene_decoration(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV booking should include scene decoration"
        assert len(result) > 0

    def test_rubric_13_the_ktv_reservation_time_should_be_at_2_30_pm_on_chinese_val(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV reservation time should be at 2:30 PM on Chinese Valentine\'s Day (August 29, 2025)"
        assert len(result) > 0

    def test_rubric_14_the_number_of_people_for_the_ktv_reservation_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the KTV reservation should be 2"
        assert len(result) > 0

    def test_rubric_15_the_reserved_ktv_should_be_starry_sky_ktv(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved KTV should be Starry Sky KTV"
        assert len(result) > 0
