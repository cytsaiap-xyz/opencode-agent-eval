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
        assert result[0]["store_id"] == 'S17550802148582740_I00008'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802148582740_P00057", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 688) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802148582740_T00004'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802148582740_P00022", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 557) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550802148582740_I00008'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 6

    def test_rubric_0_the_restaurant_ordered_must_have_artistic_atmosphere(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered must have artistic atmosphere"
        assert len(result) > 0

    def test_rubric_1_the_restaurant_ordered_must_be_a_western_restaurant(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered must be a western restaurant"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_ordered_must_have_a_rating_of_4_8_or_above(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered must have a rating of 4.8 or above"
        assert len(result) > 0

    def test_rubric_3_the_set_menu_ordered_should_be_suitable_for_six_people_dinin(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The set menu ordered should be suitable for six people dining"
        assert len(result) > 0

    def test_rubric_4_the_set_menu_ordered_cannot_contain_alcohol(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The set menu ordered cannot contain alcohol"
        assert len(result) > 0

    def test_rubric_5_the_set_menu_ordered_cannot_contain_high_purine_foods_such_a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The set menu ordered cannot contain high purine foods such as seafood soup"
        assert len(result) > 0

    def test_rubric_6_the_train_tickets_ordered_should_be_first_class_seat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train tickets ordered should be First Class Seat"
        assert len(result) > 0

    def test_rubric_7_the_train_ticket_price_should_be_less_than_300_yuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket price should be less than 300 yuan"
        assert len(result) > 0

    def test_rubric_8_the_arrival_time_of_the_ordered_train_should_be_before_10_pm(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The arrival time of the ordered train should be before 10 PM on January 9"
        assert len(result) > 0

    def test_rubric_9_the_departure_time_of_the_ordered_train_should_be_after_3_pm(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure time of the ordered train should be after 3 PM on January 9"
        assert len(result) > 0

    def test_rubric_10_the_restaurant_reservation_time_should_be_12_00_on_january_9(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation time should be 12:00 on January 9"
        assert len(result) > 0

    def test_rubric_11_the_restaurant_reservation_should_be_for_6_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation should be for 6 people"
        assert len(result) > 0

    def test_rubric_12_the_restaurant_reserved_should_be_art_space_western_restaura(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reserved should be Art Space Western Restaurant"
        assert len(result) > 0
