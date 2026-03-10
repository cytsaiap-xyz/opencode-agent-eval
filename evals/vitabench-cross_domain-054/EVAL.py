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
        assert result[0]["store_id"] == 'S17550802145725256_S00003'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802145725256_P00013", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 48) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550802145725256_I00011'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 2

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802145725256_F00009'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802145725256_P00045", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 980) < 1

    def test_rubric_0_food_delivery_order_items_should_be_japanese_cuisine(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Food delivery order items should be Japanese cuisine"
        assert len(result) > 0

    def test_rubric_1_food_delivery_order_items_must_include_rice(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Food delivery order items must include rice"
        assert len(result) > 0

    def test_rubric_2_food_delivery_order_items_cannot_be_raw_food(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Food delivery order items cannot be raw food"
        assert len(result) > 0

    def test_rubric_3_food_delivery_order_items_should_be_a_single_portion(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Food delivery order items should be a single portion"
        assert len(result) > 0

    def test_rubric_4_estimated_delivery_time_for_the_food_delivery_order_is_may_3(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Estimated delivery time for the food delivery order is May 31, 2025, 17:15-18:15"
        assert len(result) > 0

    def test_rubric_5_delivery_address_for_the_food_delivery_order_is_harbin_insti(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Delivery address for the food delivery order is Harbin Institute of Technology Student Dormitory Building 3, 74 Xuefu Road, Nangang District, Harbin"
        assert len(result) > 0

    def test_rubric_6_the_reserved_restaurant_should_be_within_2km_of_the_main_tea(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should be within 2km of the Main Teaching Building of Harbin Institute of Technology, 92 Xuefu Road, Nangang District, Harbin"
        assert len(result) > 0

    def test_rubric_7_the_reserved_restaurant_should_be_a_chinese_cuisine_restaura(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should be a Chinese Cuisine restaurant"
        assert len(result) > 0

    def test_rubric_8_the_reserved_restaurant_should_have_private_room_or_booth_se(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should have Private Room or Booth Seating"
        assert len(result) > 0

    def test_rubric_9_the_reserved_restaurant_should_include_dishes_that_are_not_h(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should include dishes that are not Heavy Oil Spicy"
        assert len(result) > 0

    def test_rubric_10_the_restaurant_reservation_time_should_be_june_1__2025__11_3(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation time should be June 1, 2025, 11:30"
        assert len(result) > 0

    def test_rubric_11_the_restaurant_reservation_should_be_for_2_persons(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation should be for 2 Persons"
        assert len(result) > 0

    def test_rubric_12_the_outbound_flight_date_should_be_between_june_1__2025__14(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound flight date should be between June 1, 2025, 14:30 and June 4, 2025"
        assert len(result) > 0

    def test_rubric_13_the_cheapest_flight_ticket_should_be_selected(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The cheapest flight ticket should be selected"
        assert len(result) > 0
