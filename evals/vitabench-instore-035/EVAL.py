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
            if i in {1}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17564426054175010_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564426054175010_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 428) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564426054175010_I00001'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 4

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564426054175010_I00005'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564426054175010_P00019", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 88) < 1

    def test_rubric_0_should_check_if_there_are_outdoor_bbq_restaurants_within_20k(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Should check if there are outdoor BBQ restaurants within 20km of Room 502, Unit 1, Building 3, Zilang Mansion, 128 Gongnong Road, Chongchuan District, Nantong, Jiangsu Province (including 20km). The result is yes, so the merchant for the in-store dining order should be an outdoor BBQ restaurant"
        assert len(result) > 0

    def test_rubric_1_the_ordered_outdoor_bbq_restaurant_should_have_spacious_lawn(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered outdoor BBQ restaurant should have spacious lawn and canopy facilities"
        assert len(result) > 0

    def test_rubric_2_the_set_menu_ordered_at_the_outdoor_bbq_restaurant_should_pr(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The set menu ordered at the outdoor BBQ restaurant should provide BBQ ingredients and BBQ tools"
        assert len(result) > 0

    def test_rubric_3_the_bbq_ingredients_provided_in_the_outdoor_bbq_restaurant_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The BBQ ingredients provided in the outdoor BBQ restaurant\'s ordered set menu should not include pork"
        assert len(result) > 0

    def test_rubric_4_the_outdoor_bbq_restaurant_order_should_be_for_one_4_person(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outdoor BBQ restaurant order should be for one 4-person meal, not four individual sets"
        assert len(result) > 0

    def test_rubric_5_the_reserved_outdoor_bbq_restaurant_should_be_prairie_canopy(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved outdoor BBQ restaurant should be Prairie Canopy BBQ Camp"
        assert len(result) > 0

    def test_rubric_6_the_outdoor_bbq_restaurant_reservation_time_should_be_2024_0(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outdoor BBQ restaurant reservation time should be 2024-01-06 11:00:00"
        assert len(result) > 0

    def test_rubric_7_the_number_of_people_for_the_outdoor_bbq_restaurant_reservat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the outdoor BBQ restaurant reservation is 4"
        assert len(result) > 0

    def test_rubric_8_need_to_check_user_behavior_history_to_find_previously_visit(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check user behavior history to find previously visited family parks, with the result being Wonder Family Park; the ordered family park should be Wonder Family Park"
        assert len(result) > 0

    def test_rubric_9_need_to_check_the_bbq_order_price__with_the_result_being_not(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the BBQ order price, with the result being not more than 450 yuan; the family park order should be for a Family Package (1 Adult & 1 Child)"
        assert len(result) > 0
