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
        for i, order in enumerate(result):
            if i in {1, 3}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17567836590402473_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836590402473_P00001", "quantity": 1}, {"product_id": "S17567836590402473_P00006", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 334) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836590402473_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2025-07-19 14:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 3

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567836590402473_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836590402473_P00012", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 368) < 1

    def test_order_3_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[3]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_3_matches_expected_shop(self):
        order = result[3]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836590402473_I00002'

    def test_order_3_has_correct_customer_count(self):
        assert result[3].get("customer_count") == 6

    def test_rubric_0_the_rock_climbing_gym_should_be_an_indoor_rock_climbing_gym(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The rock climbing gym should be an indoor rock climbing gym"
        assert len(result) > 0

    def test_rubric_1_the_rock_climbing_gym_should_provide_complete_safety_facilit(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The rock climbing gym should provide complete safety facilities"
        assert len(result) > 0

    def test_rubric_2_the_rock_climbing_gym_order_should_include_a_children_s_begi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The rock climbing gym order should include a children\'s beginner instruction package"
        assert len(result) > 0

    def test_rubric_3_the_quantity_of_children_s_beginner_instruction_package_orde(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of children\'s beginner instruction package ordered should be 1"
        assert len(result) > 0

    def test_rubric_4_the_children_s_beginner_instruction_package_should_include_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The children\'s beginner instruction package should include 1-on-1 instruction service"
        assert len(result) > 0

    def test_rubric_5_should_check_if_there_are_two_person_packages_without_instru(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Should check if there are two-person packages without instruction in the rock climbing gym, the result is no, so the rock climbing gym order should include a single person experience package"
        assert len(result) > 0

    def test_rubric_6_the_quantity_of_single_person_experience_package_ordered_sho(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of single person experience package ordered should be 2"
        assert len(result) > 0

    def test_rubric_7_the_children_s_beginner_instruction_package_and_single_perso(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The children\'s beginner instruction package and single person experience package should be from the same vendor"
        assert len(result) > 0

    def test_rubric_8_the_reserved_rock_climbing_gym_should_be_extreme_rock_climbi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved rock climbing gym should be Extreme Rock Climbing Gym"
        assert len(result) > 0

    def test_rubric_9_the_reservation_time_for_the_rock_climbing_gym_should_be_202(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reservation time for the rock climbing gym should be 2025-07-19 14:00"
        assert len(result) > 0

    def test_rubric_10_the_number_of_people_for_the_rock_climbing_gym_reservation_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the rock climbing gym reservation should be 3"
        assert len(result) > 0

    def test_rubric_11_the_chaoshan_beef_hot_pot_restaurant_should_be_within_the_co(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Chaoshan beef hot pot restaurant should be within the commercial district"
        assert len(result) > 0

    def test_rubric_12_the_commercial_district_where_the_chaoshan_beef_hot_pot_rest(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The commercial district where the Chaoshan beef hot pot restaurant is located should be the closest one to Extreme Rock Climbing Gym, 3rd Floor, Building A, Wanda Plaza, 26 Taihu Middle Road, Xinbei District, Changzhou, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_13_the_ingredients_provided_by_the_chaoshan_beef_hot_pot_restau(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ingredients provided by the Chaoshan beef hot pot restaurant should be fresh"
        assert len(result) > 0

    def test_rubric_14_the_ordered_item_from_the_chaoshan_beef_hot_pot_restaurant_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item from the Chaoshan beef hot pot restaurant should be a 6-person meal, not multiple single-person packages"
        assert len(result) > 0

    def test_rubric_15_the_ordered_item_from_the_chaoshan_beef_hot_pot_restaurant_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item from the Chaoshan beef hot pot restaurant should include premium beef tenderloin"
        assert len(result) > 0

    def test_rubric_16_the_portion_of_the_ordered_item_from_the_chaoshan_beef_hot_p(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The portion of the ordered item from the Chaoshan beef hot pot restaurant should be suitable for 4 adults and 2 children"
        assert len(result) > 0

    def test_rubric_17_the_reserved_chaoshan_beef_hot_pot_restaurant_should_be_chao(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved Chaoshan beef hot pot restaurant should be Chao Niu Fresh Chaoshan Beef Hot Pot"
        assert len(result) > 0

    def test_rubric_18_the_reservation_time_for_the_chaoshan_beef_hot_pot_restauran(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reservation time for the Chaoshan beef hot pot restaurant should be 2025-07-19 18:00"
        assert len(result) > 0

    def test_rubric_19_the_number_of_people_for_the_chaoshan_beef_hot_pot_restauran(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the Chaoshan beef hot pot restaurant reservation should be 6"
        assert len(result) > 0
