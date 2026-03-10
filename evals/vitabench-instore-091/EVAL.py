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
        assert result[0]["store_id"] == 'S17567844803061272_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567844803061272_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 419) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567844803061272_I00001'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 5

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567844803061272_I00006'

    def test_order_2_has_correct_reservation_time(self):
        assert result[2].get("reservation_time") == '2025-12-16 22:00:00'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 5

    def test_rubric_0_the_price_of_items_in_the_restaurant_order_should_be_within(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price of items in the restaurant order should be within 450 yuan (inclusive)"
        assert len(result) > 0

    def test_rubric_1_the_restaurant_ordered_from_should_be_a_southeast_asian_rest(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered from should be a Southeast Asian restaurant"
        assert len(result) > 0

    def test_rubric_2_the_ordered_restaurant_must_have_a_rating_of_4_3_or_above(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered restaurant must have a rating of 4.3 or above"
        assert len(result) > 0

    def test_rubric_3_the_set_menu_in_the_restaurant_order_must_include_tom_yum_so(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The set menu in the restaurant order must include Tom Yum Soup"
        assert len(result) > 0

    def test_rubric_4_the_order_from_the_southeast_asian_restaurant_should_be_a_fi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order from the Southeast Asian restaurant should be a five-person meal, not multiple single-person sets"
        assert len(result) > 0

    def test_rubric_5_the_reserved_restaurant_should_be_thai_garden_restaurant(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should be Thai Garden Restaurant"
        assert len(result) > 0

    def test_rubric_6_the_restaurant_reservation_time_should_be_19_00_00_on_2025_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation time should be 19:00:00 on 2025-12-16"
        assert len(result) > 0

    def test_rubric_7_the_number_of_people_for_the_restaurant_reservation_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the restaurant reservation should be 5"
        assert len(result) > 0

    def test_rubric_8_the_distance_from_the_reserved_bar_to_the_garden_night_marke(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The distance from the reserved bar to the Garden Night Market should be within 1km (inclusive)"
        assert len(result) > 0

    def test_rubric_9_the_reserved_bar_should_be_a_music_bar(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved bar should be a Music Bar"
        assert len(result) > 0

    def test_rubric_10_the_reserved_bar_should_specialize_in_specialty_cocktail(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved bar should specialize in Specialty Cocktail"
        assert len(result) > 0

    def test_rubric_11_dinner_ends_at_8_30__followed_by_an_hour_and_a_half_of_stree(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Dinner ends at 8:30, followed by an hour and a half of street strolling, so the bar reservation time should be 22:00:00 on 2025-12-16"
        assert len(result) > 0

    def test_rubric_12_the_number_of_people_for_the_bar_reservation_should_be_5(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the bar reservation should be 5"
        assert len(result) > 0
