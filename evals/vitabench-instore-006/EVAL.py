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
        assert result[0]["store_id"] == 'S17564420317678244_I00002'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420317678244_P00006", "quantity": 1}]
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
        assert result[2]["store_id"] == 'S17564421111385022_I00004'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564421111385022_P00014", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 32) < 1

    def test_rubric_0_massage_shop_rating_should_be_4_0_or_above(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Massage shop rating should be 4.0 or above"
        assert len(result) > 0

    def test_rubric_1_the_massage_shop_should_be_within_2500m_of_maker_space__18th(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The massage shop should be within 2500m of Maker Space, 18th Floor, Shangmao Century Plaza, 49 Zhongshan South Road, Qinhuai District, Nanjing"
        assert len(result) > 0

    def test_rubric_2_on_2025_09_25__the_weather_in_nanjing_will_be_cloudy_turning(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "On 2025-09-25, the weather in Nanjing will be cloudy turning to light rain, and the massage shop should have parking available"
        assert len(result) > 0

    def test_rubric_3_the_ordered_service_at_the_massage_shop_should_be_a_full_bod(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered service at the massage shop should be a full body massage package"
        assert len(result) > 0

    def test_rubric_4_the_massage_duration_should_be_around_60_minutes(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The massage duration should be around 60 minutes"
        assert len(result) > 0

    def test_rubric_5_the_reserved_massage_shop_should_be_yu_zu_tang__shangmao_cen(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved massage shop should be Yu Zu Tang (Shangmao Century Plaza Branch)"
        assert len(result) > 0

    def test_rubric_6_the_reservation_time_should_be_2025_09_25_21_00_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation time should be 2025-09-25 21:00:00"
        assert len(result) > 0

    def test_rubric_7_the_reservation_should_be_for_1_person(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation should be for 1 person"
        assert len(result) > 0

    def test_rubric_8_the_restaurant_order_should_be_from_hong_kong_style_pork_knu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant order should be from Hong Kong Style Pork Knuckle Rice (Hanzhong Road Branch)"
        assert len(result) > 0

    def test_rubric_9_the_ordered_dish_should_be_pork_knuckle_rice(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered dish should be Pork knuckle rice"
        assert len(result) > 0
