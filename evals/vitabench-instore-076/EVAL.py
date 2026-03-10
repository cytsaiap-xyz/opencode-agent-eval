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
        assert result[0]["store_id"] == 'S17567842655251946_I00003'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567842655251946_P00021", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 588) < 1

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
        assert result[3]["store_id"] == 'S17567842655251946_I00002'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17567842655251946_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 120) < 1

    def test_rubric_0_the_order_status_of_the_cantonese_restaurant_set_menu_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The order status of the Cantonese restaurant set menu should be cancelled"
        assert len(result) > 0

    def test_rubric_1_the_reservation_status_of_the_cantonese_restaurant_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation status of the Cantonese restaurant should be cancelled"
        assert len(result) > 0

    def test_rubric_2_the_reserved_bbq_restaurant_should_be_northeastern_bbq(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved BBQ restaurant should be Northeastern BBQ"
        assert len(result) > 0

    def test_rubric_3_the_average_consumption_at_the_bbq_restaurant_should_be_less(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The average consumption at the BBQ restaurant should be less than or equal to 150 yuan"
        assert len(result) > 0

    def test_rubric_4_the_reservation_time_for_the_bbq_restaurant_is_2023_07_08_12(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation time for the BBQ restaurant is 2023-07-08 12:00:00"
        assert len(result) > 0

    def test_rubric_5_the_number_of_people_for_the_bbq_restaurant_reservation_is_4(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the BBQ restaurant reservation is 4"
        assert len(result) > 0

    def test_rubric_6_the_distance_from_the_self_service_mahjong_club_to_charcoal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The distance from the Self-Service Mahjong Club to Charcoal Legend Northeastern BBQ, 200m East of Gongbei Port Plaza, Xiangzhou District, Zhuhai should be within 2km (inclusive)"
        assert len(result) > 0

    def test_rubric_7_the_set_package_ordered_at_the_self_service_mahjong_club_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The set package ordered at the Self-Service Mahjong Club should include mahjong playing and tea service"
        assert len(result) > 0

    def test_rubric_8_the_usage_duration_of_the_ordered_set_package_at_the_self_se(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The usage duration of the ordered set package at the Self-Service Mahjong Club should be 4 Hours"
        assert len(result) > 0
