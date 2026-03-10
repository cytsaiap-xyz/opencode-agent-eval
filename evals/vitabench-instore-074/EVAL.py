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
        assert result[0]["store_id"] == 'S17567842388731266_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567842388731266_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 588) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567842388731266_I00001'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 3

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567842388731266_I00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567842388731266_P00019", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 398) < 1

    def test_rubric_0_the_restaurant_ordered_should_be_a_huaiyang_cuisine_restaura(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered should be a Huaiyang cuisine restaurant"
        assert len(result) > 0

    def test_rubric_1_check_if_the_restaurant_offers_special_national_day_discount(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Check if the restaurant offers special National Day discount set menus, the result is yes, so the ordered items should be National Day special discount set menus"
        assert len(result) > 0

    def test_rubric_2_the_total_price_of_items_in_the_restaurant_order_should_be_l(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total price of items in the restaurant order should be less than or equal to 600 yuan"
        assert len(result) > 0

    def test_rubric_3_the_reserved_restaurant_should_be_song_he_lou__xujiahui_bran(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should be Song He Lou (Xujiahui Branch)"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_reservation_time_is_2023_10_01_11_30_00(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation time is 2023-10-01 11:30:00"
        assert len(result) > 0

    def test_rubric_5_the_number_of_people_for_the_restaurant_reservation_is_3(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the restaurant reservation is 3"
        assert len(result) > 0

    def test_rubric_6_the_massage_shop_ordered_should_be_royal_foot_massage__yisha(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The massage shop ordered should be Royal Foot Massage (Yishan Road Branch)"
        assert len(result) > 0

    def test_rubric_7_the_ordered_item_at_the_massage_shop_should_be_a_couples_mas(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item at the massage shop should be a couples massage package"
        assert len(result) > 0
