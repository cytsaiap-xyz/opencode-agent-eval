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
            if i in {2}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17564426772264179_I00002'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564426772264179_P00006", "quantity": 1}]
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
        assert result[1]["store_id"] == 'S17564426772264179_I00003'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17564426772264179_P00010", "quantity": 1}, {"product_id": "S17564426772264179_P00011", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 86) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564426772264179_I00003'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 2

    def test_rubric_0_based_on_available_information__the_equestrian_club_s_parent(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Based on available information, the equestrian club\'s parent-child packages have an age restriction of 5 years and above, so the recommendation should be the family park"
        assert len(result) > 0

    def test_rubric_1_the_family_park_should_be_located_within_the_city_area(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The family park should be located within the city area"
        assert len(result) > 0

    def test_rubric_2_the_family_park_should_allow_interaction_with_small_animals(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The family park should allow interaction with small animals"
        assert len(result) > 0

    def test_rubric_3_the_ordered_item_at_the_family_park_should_be_a_family_packa(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item at the family park should be a family package"
        assert len(result) > 0

    def test_rubric_4_the_ordered_item_at_the_family_park_should_include_feeding_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item at the family park should include feeding small animals"
        assert len(result) > 0

    def test_rubric_5_xibei_should_be_no_more_than_3km__including_3km__from_wonder(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Xibei should be no more than 3km (including 3km) from Wonderful Animal Kingdom Family Park, No. 18 Hong Kong Middle Road, Shinan District, Qingdao, Shandong Province"
        assert len(result) > 0

    def test_rubric_6_the_ordered_items_at_xibei_should_include_children_s_meals(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered items at Xibei should include children\'s meals"
        assert len(result) > 0

    def test_rubric_7_the_ordered_items_at_xibei_should_include_you_mian__oat_nood(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered items at Xibei should include You Mian (oat noodles)"
        assert len(result) > 0

    def test_rubric_8_children_s_meal_package_and_you_mian_should_be_from_the_same(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Children\'s meal package and You Mian should be from the same restaurant"
        assert len(result) > 0

    def test_rubric_9_the_reservation_time_for_xibei_should_be_national_day__octob(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reservation time for Xibei should be National Day (October 1, 2025) at 12:30 PM"
        assert len(result) > 0

    def test_rubric_10_the_number_of_people_for_the_xibei_reservation_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the Xibei reservation should be 2"
        assert len(result) > 0

    def test_rubric_11_the_reserved_restaurant_should_be_xibei_you_mian_village__ho(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should be Xibei You Mian Village (Hong Kong Middle Road Branch)"
        assert len(result) > 0
