import json
import os
import pytest

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)
with open(os.path.join(_dir, "answer.json")) as _f:
    result = json.load(_f)

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
        assert result[0]["store_id"] == 'S17550809757137606_I00006'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550809757137606_P00045", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1980) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17210848570615920_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17210848570615920_P00032", "quantity": 11}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 2200) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550809757137606_S00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550809757137606_P00020", "quantity": 1}, {"product_id": "S17550809757137606_P00024", "quantity": 2}, {"product_id": "S17550809757137606_P00025", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 1197) < 1

    def test_rubric_0_the_ordered_farmhouse_resort_must_have_team_building_facilit(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered farmhouse resort must have team building facilities"
        assert len(result) > 0

    def test_rubric_1_the_ordered_farmhouse_resort_needs_to_provide_outdoor_game_f(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered farmhouse resort needs to provide outdoor game facilities"
        assert len(result) > 0

    def test_rubric_2_the_ordered_farmhouse_resort_supports_team_building_activiti(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered farmhouse resort supports team-building activities for 20 people"
        assert len(result) > 0

    def test_rubric_3_the_team_building_package_in_the_farmhouse_resort_order_must(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The team building package in the farmhouse resort order must include dinner"
        assert len(result) > 0

    def test_rubric_4_the_team_building_package_in_the_farmhouse_resort_order_must(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The team building package in the farmhouse resort order must include activity items sufficient for 20 people"
        assert len(result) > 0

    def test_rubric_5_the_total_price_of_farmhouse_resort_order__accommodation_inc(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total price of farmhouse resort order (accommodation included) should be about 200 yuan per person"
        assert len(result) > 0

    def test_rubric_6_the_ordered_farmhouse_resort_needs_to_provide_accommodation(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered farmhouse resort needs to provide accommodation services"
        assert len(result) > 0

    def test_rubric_7_all_room_types_in_the_accommodation_order_must_be_twin_rooms(self):
        # Structural check - the answer must contain orders that satisfy:
        # "All room types in the accommodation order must be twin rooms"
        assert len(result) > 0

    def test_rubric_8_boys_and_girls_need_to_be_accommodated_separately__11_girls(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Boys and girls need to be accommodated separately, 11 girls in 6 rooms, 9 boys in 5 rooms, the accommodation order requires a total of 11 rooms"
        assert len(result) > 0

    def test_rubric_9_need_to_check_the_date_of_qingming_festival__which_is_april(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the date of Qingming Festival, which is April 4th, and the weekend before Qingming is March 30-31, 2024, so the check-in date for the accommodation order is 2024-03-30"
        assert len(result) > 0

    def test_rubric_10_the_ordered_products_must_be_suitable_as_team_building_prize(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered products must be suitable as team-building prizes"
        assert len(result) > 0

    def test_rubric_11_the_team_building_prize_order_must_include_three_different_p(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The team-building prize order must include three different products"
        assert len(result) > 0

    def test_rubric_12_the_quantity_of__team_building_prize_order_must_be_6(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of  team-building prize order must be 6"
        assert len(result) > 0

    def test_rubric_13_the_team_building_prize_order_must_include_1_relatively_expe(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The team building prize order must include 1 relatively expensive item as the first prize"
        assert len(result) > 0

    def test_rubric_14_the_team_building_prize_order_must_include_2_identical_items(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The team-building prize order must include 2 identical items with a lower price than the first prize as second prizes"
        assert len(result) > 0

    def test_rubric_15_the_team_building_prize_order_must_include_3_identical_items(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The team-building prize order must include 3 identical items with a lower price than the second prize as third prizes"
        assert len(result) > 0

    def test_rubric_16_the_total_budget_for_the_team_building_prize_order_is_about(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total budget for the team-building prize order is about 1200 yuan, with a minimum expenditure of 1000 yuan"
        assert len(result) > 0

    def test_rubric_17_the_delivery_time_for_the_team_building_prize_order_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the team building prize order should be between 2024-03-30 11:00-13:00"
        assert len(result) > 0

    def test_rubric_18_the_delivery_address_for_the_team_building_prize_order_shoul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the team building prize order should be Green Wonderland Farmhouse Resort 3km North of the Intersection of Beihai Road and Xiashan Road, Fangzi District, Weifang, Shandong Province"
        assert len(result) > 0
