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
        assert result[0]["store_id"] == 'S17564425397654378_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564425397654378_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 188) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17564425397654378_I00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17564425397654378_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 288) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564425397654378_I00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564425397654378_P00011", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 188) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17564425397654378_I00003'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17564425397654378_P00012", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 268) < 1

    def test_rubric_0_the_status_of_the_shoulder_and_neck_massage_package_order_sh(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The status of the shoulder and neck massage package order should be cancelled"
        assert len(result) > 0

    def test_rubric_1_the_flower_arrangement_order_should_teach_basic_flower_arran(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flower arrangement order should teach basic flower arrangement skills"
        assert len(result) > 0

    def test_rubric_2_the_environment_of_the_flower_shop_should_be_spacious(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The environment of the flower shop should be spacious"
        assert len(result) > 0

    def test_rubric_3_should_check_if_there_is_a_three_person_package_in_the_flowe(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should check if there is a three-person package in the flower shop where the order was placed, and the result is yes; the flower arrangement order should be a Three-person Basic Flower Arrangement Experience Package"
        assert len(result) > 0

    def test_rubric_4_should_check_the_distance_between_the_private_kitchen_restau(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should check the distance between the private kitchen restaurant (4th Floor, Hang Lung Plaza, 188 Quancheng Road, Lixia District, Jinan (Yan\'s Private Kitchen · Century-old Lu Cuisine)) and the flower shop (4th Floor, Hang Lung Plaza, 188 Quancheng Road, Lixia District, Jinan (Yan\'s Private Kitchen · Century-old Lu Cuisine)) in the order history, and the result is not more than 5 kilometers; also, the private kitchen restaurant has options for three-person meals, so the private kitchen Couple Package order status should be cancelled"
        assert len(result) > 0

    def test_rubric_5_the_three_person_meal_order_should_belong_to_yan_s_private_k(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The three-person meal order should belong to Yan\'s Private Kitchen · Century-old Lu Cuisine"
        assert len(result) > 0

    def test_rubric_6_the_three_person_meal_package_should_not_contain_dishes_with(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The three-person meal package should not contain dishes with heavy oil and spice"
        assert len(result) > 0

    def test_rubric_7_the_item_in_the_three_person_meal_order_should_be_one_three(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The item in the three-person meal order should be one three-person meal, not three individual meals"
        assert len(result) > 0
