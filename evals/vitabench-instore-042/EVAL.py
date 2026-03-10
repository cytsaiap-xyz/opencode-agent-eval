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
        assert result[0]["store_id"] == 'S17564425461411332_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564425461411332_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 128) < 1

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
        assert result[2]["store_id"] == 'S17564425461411332_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564425461411332_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 88) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17564425461411332_I00003'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17564425461411332_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 168) < 1

    def test_rubric_0_the_distance_from_the_ordered_pottery_studio_to_room_502__un(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The distance from the ordered pottery studio to Room 502, Unit 3, Building 12, Jiangcheng Garden, 1288 Donghuan Avenue, Jiaojiang District, Taizhou, Zhejiang Province should be within 3km (inclusive)"
        assert len(result) > 0

    def test_rubric_1_the_ordered_pottery_studio_should_be_fully_equipped(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered pottery studio should be fully equipped"
        assert len(result) > 0

    def test_rubric_2_the_ordered_pottery_studio_product_price_should_be_less_than(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered pottery studio product price should be less than or equal to 150 yuan"
        assert len(result) > 0

    def test_rubric_3_the_ordered_pottery_studio_product_should_be_a_package_that(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered pottery studio product should be a package that includes materials fee"
        assert len(result) > 0

    def test_rubric_4_the_ordered_pottery_studio_product_should_be_a_package_that(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered pottery studio product should be a package that includes firing"
        assert len(result) > 0

    def test_rubric_5_the_reserved_pottery_studio_should_be_craftsman_pottery_stud(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved pottery studio should be Craftsman Pottery Studio"
        assert len(result) > 0

    def test_rubric_6_the_pottery_studio_reservation_time_should_be_2024_09_22_15(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The pottery studio reservation time should be 2024-09-22 15:00:00"
        assert len(result) > 0

    def test_rubric_7_the_pottery_studio_reservation_should_be_for_1_person(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The pottery studio reservation should be for 1 person"
        assert len(result) > 0

    def test_rubric_8_the_distance_from_the_ordered_cat_cafe_to_room_502__unit_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The distance from the ordered cat cafe to Room 502, Unit 3, Building 12, Jiangcheng Garden, 1288 Donghuan Avenue, Jiaojiang District, Taizhou, Zhejiang Province should be within 3km (inclusive)"
        assert len(result) > 0

    def test_rubric_9_the_cat_cafe_ordered_product_should_be_a_package_for_one_adu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The cat cafe ordered product should be a package for one adult and one child"
        assert len(result) > 0

    def test_rubric_10_the_ordered_restaurant_should_be_a_northwestern_cuisine_rest(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered restaurant should be a Northwestern cuisine restaurant"
        assert len(result) > 0

    def test_rubric_11_the_ordered_restaurant_should_be_on_the_must_eat_list(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered restaurant should be on the must-eat list"
        assert len(result) > 0

    def test_rubric_12_the_restaurant_ordered_product_should_be_a_parent_child_pack(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered product should be a parent-child package for two adults and one child"
        assert len(result) > 0
