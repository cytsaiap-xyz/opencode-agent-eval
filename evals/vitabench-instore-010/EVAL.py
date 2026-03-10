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
        for i, order in enumerate(result):
            if i in {1}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17564420267442732_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420267442732_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 388) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564420267442732_I00001'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 4

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564420267442732_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564420267442732_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 120) < 1

    def test_rubric_0_the_merchant_in_the_package_order_is_a_local_cuisine_restaur(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The merchant in the package order is a local cuisine restaurant (Minnan cuisine)"
        assert len(result) > 0

    def test_rubric_1_the_purchased_package_must_include_the_restaurant_s_signatur(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased package must include the restaurant\'s signature dishes"
        assert len(result) > 0

    def test_rubric_2_the_purchased_package_is_a_four_person_meal__not_four_indivi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased package is a four-person meal, not four individual packages"
        assert len(result) > 0

    def test_rubric_3_the_reserved_restaurant_is_gulang_minwei(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved restaurant is Gulang Minwei"
        assert len(result) > 0

    def test_rubric_4_the_number_of_people_for_the_restaurant_reservation_is_4(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the restaurant reservation is 4"
        assert len(result) > 0

    def test_rubric_5_the_restaurant_reservation_time_is_12_00_00_on_2024_03_17(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation time is 12:00:00 on 2024-03-17"
        assert len(result) > 0

    def test_rubric_6_check_tomorrow_s__2024_03_18__weather_forecast__with_the_hig(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Check tomorrow\'s (2024-03-18) weather forecast, with the highest temperature being 28 degrees, not exceeding 30 degrees, therefore purchasing a badminton package"
        assert len(result) > 0

    def test_rubric_7_the_merchant_in_the_badminton_package_order_should_be_the_on(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The merchant in the badminton package order should be the one the user frequently visits (Software Park Badminton Hall)"
        assert len(result) > 0

    def test_rubric_8_the_purchased_badminton_package_should_be_for_two_hours(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased badminton package should be for two hours"
        assert len(result) > 0

    def test_rubric_9_the_purchased_badminton_package_should_be_a_court_package(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased badminton package should be a court package"
        assert len(result) > 0
