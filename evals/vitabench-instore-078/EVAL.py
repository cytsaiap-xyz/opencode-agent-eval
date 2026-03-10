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
            if i in {1, 2}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17567842118828934_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567842118828934_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 198) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567842118828934_I00001'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 8

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567842118828934_I00006'

    def test_order_2_has_correct_reservation_time(self):
        assert result[2].get("reservation_time") == '2024-05-25 20:00:00'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 6

    def test_rubric_0_the_restaurant_ordered_should_be_within_3km__inclusive__of_r(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered should be within 3km (inclusive) of Room 503, Unit 2, Building 6, Henghua Garden, 28 Youyi Road, Hexi District, Tianjin"
        assert len(result) > 0

    def test_rubric_1_the_restaurant_ordered_should_be_top_rated(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered should be Top-rated"
        assert len(result) > 0

    def test_rubric_2_the_merchant_in_the_order_should_be_a_fujian_cuisine_restaur(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The merchant in the order should be a Fujian cuisine restaurant"
        assert len(result) > 0

    def test_rubric_3_the_search_shows_no_4_person_meal_that_includes_both_yellow(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The search shows no 4-person meal that includes both yellow croaker rice cake and geoduck jelly, so the ordered item should be a set meal for 2-3 people that includes both yellow croaker rice cake and geoduck jelly, rather than multiple individual set meals"
        assert len(result) > 0

    def test_rubric_4_the_reserved_restaurant_should_be_fujian_aming_seafood_resta(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should be Fujian Aming Seafood Restaurant"
        assert len(result) > 0

    def test_rubric_5_the_restaurant_reservation_time_should_be_2024_05_25_17_30_0(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation time should be 2024-05-25 17:30:00"
        assert len(result) > 0

    def test_rubric_6_the_number_of_people_for_the_restaurant_reservation_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the restaurant reservation should be 8"
        assert len(result) > 0

    def test_rubric_7_the_reserved_tea_house_should_be_anxin_tea_house(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved tea house should be Anxin Tea House"
        assert len(result) > 0

    def test_rubric_8_the_tea_house_reservation_time_should_be_2024_05_25_20_00_00(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea house reservation time should be 2024-05-25 20:00:00"
        assert len(result) > 0

    def test_rubric_9_the_number_of_people_for_the_tea_house_reservation_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the tea house reservation should be 6"
        assert len(result) > 0
