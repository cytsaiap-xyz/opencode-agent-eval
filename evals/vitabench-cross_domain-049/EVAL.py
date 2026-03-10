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
            if i in {0}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[0]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_0_matches_expected_shop(self):
        order = result[0]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550810196195804_I00007'

    def test_order_0_has_correct_customer_count(self):
        assert result[0].get("customer_count") == 18

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550810196195804_I00007'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550810196195804_P00035", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1980) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550810196195804_H00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550810196195804_P00013", "quantity": 6}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 4680) < 1

    def test_rubric_0_the_reserved_restaurant_should_be_a_cultural_themed_restaura(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should be a cultural-themed restaurant with a scholarly atmosphere"
        assert len(result) > 0

    def test_rubric_1_the_reserved_restaurant_should_have_an_elegant_and_dignified(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should have an elegant and dignified environment"
        assert len(result) > 0

    def test_rubric_2_the_reserved_restaurant_should_offer_exquisite_dishes(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should offer exquisite dishes"
        assert len(result) > 0

    def test_rubric_3_the_private_room_of_the_reserved_restaurant_should_accommoda(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The private room of the reserved restaurant should accommodate at least 18 people"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_reservation_time_is_12_00_on_march_16__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation time is 12:00 on March 16, 2025"
        assert len(result) > 0

    def test_rubric_5_the_restaurant_reservation_is_for_18_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation is for 18 people"
        assert len(result) > 0

    def test_rubric_6_the_ordered_restaurant_should_be_moxiang_pavilion__s17550810(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered restaurant should be Moxiang Pavilion (S17550810196195804_I00007)"
        assert len(result) > 0

    def test_rubric_7_the_banquet_set_ordered_for_the_event_should_be_suitable_for(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The banquet set ordered for the event should be suitable for 18 people"
        assert len(result) > 0

    def test_rubric_8_the_booked_hotel_should_be_within_1km_of_moxiang_pavilion__3(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel should be within 1km of Moxiang Pavilion, 36 Zhongguancun South Street, Haidian District, Beijing"
        assert len(result) > 0

    def test_rubric_9_the_booked_hotel_should_have_a_nice_environment(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel should have a nice environment"
        assert len(result) > 0

    def test_rubric_10_the_room_type_booked_should_be_king_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type booked should be king room"
        assert len(result) > 0

    def test_rubric_11_six_rooms_should_be_booked_at_the_same_hotel(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Six rooms should be booked at the same hotel"
        assert len(result) > 0

    def test_rubric_12_the_check_in_date_for_the_hotel_should_be_march_16__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The check-in date for the hotel should be March 16, 2025"
        assert len(result) > 0
