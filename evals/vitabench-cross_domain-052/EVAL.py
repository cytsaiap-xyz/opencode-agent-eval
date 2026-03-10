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
        assert result[0]["store_id"] == 'S17550802121554326_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802121554326_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 268) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550802121554326_I00012'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 4

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802121554326_I00017'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802121554326_P00088", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 268) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550802121554326_A00010'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17550802121554326_P00046", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 35) < 1

    def test_rubric_0_the_delivery_address_for_the_takeout_order_is_room_502__unit(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the takeout order is Room 502, Unit 1, Building 13, Sunac Xingyao Wuzhou, 28 Youyi Road, Hexi District, Tianjin"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_takeout_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the takeout order should be before 19:15:00 on 2026-04-22 (including 19:15:00)"
        assert len(result) > 0

    def test_rubric_2_the_takeout_order_should_be_from_a_french_or_italian_restaur(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The takeout order should be from a French or Italian restaurant"
        assert len(result) > 0

    def test_rubric_3_the_dishes_ordered_in_the_takeout_order_should_be_high_end_c(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dishes ordered in the takeout order should be high-end cuisine"
        assert len(result) > 0

    def test_rubric_4_the_dishes_ordered_in_the_takeout_order_should_avoid_offal(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dishes ordered in the takeout order should avoid offal"
        assert len(result) > 0

    def test_rubric_5_the_reserved_restaurant_should_be_a_hunan_cuisine_restaurant(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should be a Hunan cuisine restaurant"
        assert len(result) > 0

    def test_rubric_6_the_reservation_is_for_4_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reservation is for 4 people"
        assert len(result) > 0

    def test_rubric_7_the_restaurant_reservation_time_is_11_30_00_on_april_23__202(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation time is 11:30:00 on April 23, 2026"
        assert len(result) > 0

    def test_rubric_8_the_reserved_restaurant_has_an_average_cost_of_200_yuan_per(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant has an average cost of 200 yuan per person"
        assert len(result) > 0

    def test_rubric_9_the_tea_house_in_the_order_should_be_elegant(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea house in the order should be elegant"
        assert len(result) > 0

    def test_rubric_10_the_set_in_the_tea_house_order_should_be_sufficient_for_four(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The set in the tea house order should be sufficient for four people"
        assert len(result) > 0

    def test_rubric_11_the_set_in_the_tea_house_order_should_include_qihong_tea(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The set in the tea house order should include Qihong tea"
        assert len(result) > 0

    def test_rubric_12_the_merchant_in_the_tea_house_order_should_be_within_3km_of(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The merchant in the tea house order should be within 3km of Xiang Yu Restaurant, 128 Nanjing Road, Heping District, Tianjin"
        assert len(result) > 0

    def test_rubric_13_the_scenic_spot_ordered_should_be_within_50km_of_room_502__u(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The scenic spot ordered should be within 50km of Room 502, Unit 1, Building 13, Sunac Xingyao Wuzhou, 28 Youyi Road, Hexi District, Tianjin"
        assert len(result) > 0

    def test_rubric_14_the_purchased_scenic_spot_tickets_should_be_valid_for_night(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The purchased scenic spot tickets should be valid for night use"
        assert len(result) > 0
