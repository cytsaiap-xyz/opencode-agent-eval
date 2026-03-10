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
        assert result[0]["store_id"] == 'S17564425438695955_I00002'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564425438695955_P00009", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 98) < 1

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
        assert result[2]["store_id"] == 'S17564425438695955_I00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564425438695955_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 68) < 1

    def test_rubric_0_should_check_if_the_previously_visited_tea_house__mingyue_te(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should check if the previously visited tea house (Mingyue Tea House) has tea ceremony training packages, with the result being none; therefore, the ordered merchant should not be the previously visited tea house"
        assert len(result) > 0

    def test_rubric_1_the_ordered_tea_house_should_have_a_decoration_style_similar(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered tea house should have a decoration style similar to the previously visited tea house"
        assert len(result) > 0

    def test_rubric_2_the_ordered_tea_house_package_should_be_in_a_partitioned_pri(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered tea house package should be in a partitioned private room"
        assert len(result) > 0

    def test_rubric_3_the_ordered_tea_house_package_duration_should_be_2_hours(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered tea house package duration should be 2 hours"
        assert len(result) > 0

    def test_rubric_4_need_to_check_the_user_s_usual_spending_range__which_is_betw(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the user\'s usual spending range, which is between 60 and 120 yuan; the ordered tea house package price should be between 60 and 120 yuan (inclusive)"
        assert len(result) > 0

    def test_rubric_5_the_ordered_tea_house_package_should_include_tea_ceremony_tr(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered tea house package should include tea ceremony training"
        assert len(result) > 0

    def test_rubric_6_the_reserved_tea_house_should_be_tianxiang_tea_house(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved tea house should be Tianxiang Tea House"
        assert len(result) > 0

    def test_rubric_7_the_tea_house_reservation_time_should_be_2024_09_14_09_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tea house reservation time should be 2024-09-14 09:00"
        assert len(result) > 0

    def test_rubric_8_the_tea_house_reservation_should_be_for_1_person(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tea house reservation should be for 1 person"
        assert len(result) > 0

    def test_rubric_9_the_ordered_sichuan_restaurant_package_should_be_a_strong_fl(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered Sichuan restaurant package should be a strong flavor package"
        assert len(result) > 0

    def test_rubric_10_the_ordered_sichuan_restaurant_package_should_include_kung_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered Sichuan restaurant package should include Kung Pao Chicken"
        assert len(result) > 0

    def test_rubric_11_the_ordered_sichuan_restaurant_package_should_be_a_single_me(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered Sichuan restaurant package should be a single meal"
        assert len(result) > 0

    def test_rubric_12_need_to_search_for_qualifying_sichuan_restaurants_and_select(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to search for qualifying Sichuan restaurants and select the one closest to Tianxiang Tea House, with the result being Shuxiangyuan Sichuan Restaurant; the Sichuan restaurant order should be placed at Shuxiangyuan Sichuan Restaurant"
        assert len(result) > 0
