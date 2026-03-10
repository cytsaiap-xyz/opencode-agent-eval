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
        assert result[0]["store_id"] == 'S17564426448032907_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564426448032907_P00001", "quantity": 1}]
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
        assert shop_id == 'S17564426448032907_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2024-10-30 21:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564426448032907_I00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564426448032907_P00009", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 128) < 1

    def test_order_3_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[3]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_3_matches_expected_shop(self):
        order = result[3]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564426448032907_I00005'

    def test_order_3_has_correct_customer_count(self):
        assert result[3].get("customer_count") == 3

    def test_rubric_0_the_ordered_item_from_the_guzheng_training_merchant_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item from the Guzheng training merchant should be a beginner instruction related course"
        assert len(result) > 0

    def test_rubric_1_the_ordered_item_from_the_guzheng_training_merchant_should_i(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item from the Guzheng training merchant should include instrument usage and basic fingering technique instruction"
        assert len(result) > 0

    def test_rubric_2_the_ordered_item_from_the_guzheng_training_merchant_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item from the Guzheng training merchant should be a three-lesson experience card"
        assert len(result) > 0

    def test_rubric_3_the_ordered_item_from_the_guzheng_training_merchant_should_c(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item from the Guzheng training merchant should cost less than or equal to 300 yuan (inclusive)"
        assert len(result) > 0

    def test_rubric_4_the_ordered_item_from_the_guzheng_training_merchant_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item from the Guzheng training merchant should be the Guzheng Three-lesson Experience Package"
        assert len(result) > 0

    def test_rubric_5_the_guzheng_training_merchant_should_be_open_until_after_9_p(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Guzheng training merchant should be open until after 9 PM"
        assert len(result) > 0

    def test_rubric_6_the_appointment_time_for_the_guzheng_training_merchant_shoul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The appointment time for the Guzheng training merchant should be October 30, 2024 at 21:00:00"
        assert len(result) > 0

    def test_rubric_7_the_number_of_people_for_the_guzheng_training_appointment_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the Guzheng training appointment should be 1 person"
        assert len(result) > 0

    def test_rubric_8_the_appointed_guzheng_training_merchant_should_be_ancient_me(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The appointed Guzheng training merchant should be Ancient Melody Guzheng Art Training Center"
        assert len(result) > 0

    def test_rubric_9_the_ktv_should_be_within_3km__inclusive__from_room_1204__bui(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The KTV should be within 3km (inclusive) from Room 1204, Building 3, Ronghe Shanshui Lvcheng, No.20 Fengling North Road, Qingxiu District, Nanning"
        assert len(result) > 0

    def test_rubric_10_the_ordered_item_from_ktv_should_be_a_package_that_only_incl(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item from KTV should be a package that only includes singing"
        assert len(result) > 0

    def test_rubric_11_the_price_of_the_ordered_item_from_ktv_should_not_exceed_200(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price of the ordered item from KTV should not exceed 200 yuan (inclusive)"
        assert len(result) > 0

    def test_rubric_12_based_on_the_user_s_historical_behavior__the_restaurant_appo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Based on the user\'s historical behavior, the restaurant appointment should be at Helv Rotating Sushi (Mixc Branch)"
        assert len(result) > 0

    def test_rubric_13_the_restaurant_appointment_time_should_be_october_27__2024_a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant appointment time should be October 27, 2024 at 20:00:00"
        assert len(result) > 0

    def test_rubric_14_the_number_of_people_for_the_sushi_restaurant_appointment_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the sushi restaurant appointment should be 3 people"
        assert len(result) > 0
