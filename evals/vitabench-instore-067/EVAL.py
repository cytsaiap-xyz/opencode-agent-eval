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
        assert result[0]["store_id"] == 'S17567836573372019_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836573372019_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 158) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17567836573372019_I00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17567836573372019_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 188) < 1

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
        assert result[3]["store_id"] == 'S17567836573372019_I00008'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17567836573372019_P00064", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 138) < 1

    def test_rubric_0_private_cinemas_should_have_a_romantic_environment(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Private cinemas should have a romantic environment"
        assert len(result) > 0

    def test_rubric_1_private_cinemas_should_have_private_rooms(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Private cinemas should have private rooms"
        assert len(result) > 0

    def test_rubric_2_orders_at_private_cinemas_should_be_couple_packages(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Orders at private cinemas should be couple packages"
        assert len(result) > 0

    def test_rubric_3_orders_at_private_cinemas_should_be_for_the_18_00_21_00_time(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Orders at private cinemas should be for the 18:00-21:00 time slot"
        assert len(result) > 0

    def test_rubric_4_package_orders_at_private_cinemas_should_include_snacks(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Package orders at private cinemas should include snacks"
        assert len(result) > 0

    def test_rubric_5_package_orders_at_private_cinemas_should_include_drinks(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Package orders at private cinemas should include drinks"
        assert len(result) > 0

    def test_rubric_6_package_orders_at_private_cinemas_should_not_contain_caffein(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Package orders at private cinemas should not contain caffeine"
        assert len(result) > 0

    def test_rubric_7_products_included_in_private_cinema_orders_should_be_low_in(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Products included in private cinema orders should be low in sugar"
        assert len(result) > 0

    def test_rubric_8_the_flower_shop_should_be_no_more_than_1km__inclusive__from(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flower shop should be no more than 1km (inclusive) from Starlight Private Cinema, Section B2, Xinghai Square, Shahekou District, Dalian"
        assert len(result) > 0

    def test_rubric_9_orders_at_the_flower_shop_should_be_blue_roses(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Orders at the flower shop should be blue roses"
        assert len(result) > 0

    def test_rubric_10_orders_at_the_flower_shop_should_be_bouquet_packages(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Orders at the flower shop should be bouquet packages"
        assert len(result) > 0

    def test_rubric_11_the_flower_shop_should_be_open_on_saturdays(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flower shop should be open on Saturdays"
        assert len(result) > 0

    def test_rubric_12_the_reserved_flower_shop_should_be_blue_rose_flower_shop(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved flower shop should be Blue Rose Flower Shop"
        assert len(result) > 0

    def test_rubric_13_the_flower_shop_reservation_time_should_be_17_30_00_on_2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flower shop reservation time should be 17:30:00 on 2025-04-05"
        assert len(result) > 0

    def test_rubric_14_the_flower_shop_reservation_should_be_for_1_person(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flower shop reservation should be for 1 person"
        assert len(result) > 0

    def test_rubric_15_the_restaurant_should_be_a_korean_cuisine_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant should be a Korean cuisine restaurant"
        assert len(result) > 0

    def test_rubric_16_the_restaurant_should_be_no_more_than_2km__inclusive__from_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant should be no more than 2km (inclusive) from Starlight Private Cinema, Section B2, Xinghai Square, Shahekou District, Dalian"
        assert len(result) > 0

    def test_rubric_17_the_restaurant_should_offer_a_night_view(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant should offer a night view"
        assert len(result) > 0

    def test_rubric_18_orders_at_the_restaurant_should_be_packages_for_two(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Orders at the restaurant should be packages for two"
        assert len(result) > 0

    def test_rubric_19_the_ordered_restaurant_package_should_include_beef(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered restaurant package should include beef"
        assert len(result) > 0

    def test_rubric_20_the_restaurant_order_price_should_not_exceed_160_yuan__inclu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant order price should not exceed 160 yuan (inclusive)"
        assert len(result) > 0
