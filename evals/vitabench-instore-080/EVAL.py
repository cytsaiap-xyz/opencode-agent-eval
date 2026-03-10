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
        assert result[0]["store_id"] == 'S17567842747473171_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567842747473171_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 138) < 1

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
        assert result[2]["store_id"] == 'S17567842747473171_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567842747473171_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 198) < 1

    def test_rubric_0_the_restaurant_for_ordering_should_be_within_2_kilometers__i(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant for ordering should be within 2 kilometers (inclusive) from Room 1203, Building A, Jianye Kaixuan Plaza, No. 59 Huayuan Road, Jinshui District, Zhengzhou"
        assert len(result) > 0

    def test_rubric_1_the_restaurant_should_be_a_northeastern_cuisine_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant should be a Northeastern cuisine restaurant"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_should_have_parking_available(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant should have parking available"
        assert len(result) > 0

    def test_rubric_3_the_restaurant_order_should_be_a_set_meal_for_two_people__no(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant order should be a set meal for two people, not two individual set meals"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_order_must_include_di_san_xian__saut_ed_potat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant order must include Di San Xian (sautéed potato, eggplant and green pepper) and Guo Bao Rou (sweet and sour pork)"
        assert len(result) > 0

    def test_rubric_5_the_reserved_restaurant_should_be_northeast_master_chef(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved restaurant should be Northeast Master Chef"
        assert len(result) > 0

    def test_rubric_6_the_restaurant_reservation_time_should_be_2023_11_24_19_00_0(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation time should be 2023-11-24 19:00:00"
        assert len(result) > 0

    def test_rubric_7_the_restaurant_reservation_should_be_for_2_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation should be for 2 people,"
        assert len(result) > 0

    def test_rubric_8_the_private_cinema_should_be_within_3_kilometers__inclusive(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The private cinema should be within 3 kilometers (inclusive) from Northeast Master Chef (Huayuan Road Branch), No. 38 Huayuan Road, Jinshui District, Zhengzhou"
        assert len(result) > 0

    def test_rubric_9_the_private_cinema_must_be_a_ranked_merchant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The private cinema must be a ranked merchant"
        assert len(result) > 0

    def test_rubric_10_the_private_cinema_order_must_include_movie_viewing_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The private cinema order must include movie viewing service and be equipped with Nintendo Switch games"
        assert len(result) > 0

    def test_rubric_11_the_private_cinema_order_should_be_for_a_duration_of_3_hours(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The private cinema order should be for a duration of 3 hours"
        assert len(result) > 0
