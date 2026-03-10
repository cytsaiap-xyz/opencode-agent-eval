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
        assert result[0]["store_id"] == 'S17550806591392888_I00007'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550806591392888_P00053", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 458) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550806591392888_I00009'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550806591392888_P00063", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 288) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550806591392888_I00009'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 2

    def test_rubric_0_the_hanfu_store_should_be_within_1km_of_xiyuan_temple(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Hanfu store should be within 1km of Xiyuan Temple"
        assert len(result) > 0

    def test_rubric_1_the_ordered_product_from_the_hanfu_store_should_be_a_couple(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered product from the Hanfu store should be a couple photography package including styling"
        assert len(result) > 0

    def test_rubric_2_the_ordered_restaurant_should_mainly_serve_suzhou_cuisine(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered restaurant should mainly serve Suzhou Cuisine"
        assert len(result) > 0

    def test_rubric_3_the_ordered_restaurant_should_offer_free_pingtan_performance(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered restaurant should offer free Pingtan performance"
        assert len(result) > 0

    def test_rubric_4_the_ordered_restaurant_should_provide_free_pingtan_performan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered restaurant should provide free Pingtan performance between 4:00 PM and 7:30 PM"
        assert len(result) > 0

    def test_rubric_5_the_restaurant_order_should_be_for_one_couple_meal__not_two(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant order should be for one couple meal, not two individual meals"
        assert len(result) > 0

    def test_rubric_6_the_restaurant_reservation_is_for_songhelou_restaurant(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation is for Songhelou Restaurant"
        assert len(result) > 0

    def test_rubric_7_the_restaurant_reservation_time_is_september_21__2025__at_16(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation time is September 21, 2025, at 16:00"
        assert len(result) > 0

    def test_rubric_8_the_restaurant_reservation_is_for_2_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation is for 2 people"
        assert len(result) > 0

    def test_rubric_9_the_last_time_milk_tea_was_ordered_was_july_10__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The last time milk tea was ordered was July 10, 2025"
        assert len(result) > 0

    def test_rubric_10_the_last_milk_tea_order_was_more_than_one_month_before_septe(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The last milk tea order was more than one month before September 20, 2025"
        assert len(result) > 0
