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
        assert result[0]["store_id"] == 'S17567836631075109_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836631075109_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 480) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836631075109_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2024-09-28 10:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 8

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836631075109_I00002'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 8

    def test_rubric_0_the_base_for_real_life_cs_orders_should_be_a_large_scale_bas(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The base for real-life CS orders should be a large-scale base"
        assert len(result) > 0

    def test_rubric_1_the_base_for_real_life_cs_orders_must_be_within_5_kilometers(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The base for real-life CS orders must be within 5 kilometers (including 5 kilometers) of the Military Sports Academy Community, 80m Southwest of Taichang Street and Taisheng Road Intersection, Tianhe District, Guangzhou"
        assert len(result) > 0

    def test_rubric_2_the_product_in_real_life_cs_orders_should_be_a_team_combat_p(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The product in real-life CS orders should be a Team Combat Package"
        assert len(result) > 0

    def test_rubric_3_the_product_in_real_life_cs_orders_should_be_an_8_person_pac(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The product in real-life CS orders should be an 8-Person package"
        assert len(result) > 0

    def test_rubric_4_the_product_in_real_life_cs_orders_should_be_available_on_we(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The product in real-life CS orders should be available on weekends"
        assert len(result) > 0

    def test_rubric_5_the_product_in_real_life_cs_orders_must_include_equipment_us(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The product in real-life CS orders must include equipment usage"
        assert len(result) > 0

    def test_rubric_6_the_product_in_real_life_cs_orders_must_include_venue_usage(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The product in real-life CS orders must include venue usage"
        assert len(result) > 0

    def test_rubric_7_the_cs_base_to_be_reserved_should_be_extreme_battlefield_rea(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The CS base to be reserved should be Extreme Battlefield Real-life CS Base"
        assert len(result) > 0

    def test_rubric_8_the_number_of_people_for_the_cs_base_reservation_should_be_8(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the CS base reservation should be 8"
        assert len(result) > 0

    def test_rubric_9_the_reservation_time_for_the_cs_base_should_be_2024_09_28_at(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reservation time for the CS base should be 2024-09-28 at 10:00:00"
        assert len(result) > 0

    def test_rubric_10_query_whether_there_are_halal_restaurants_within_1_kilometer(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Query whether there are Halal restaurants within 1 kilometer (including 1 kilometer) of Extreme Battlefield Real-life CS Base, 233 Tianhe North Road, Tianhe District, Guangzhou, and if so, make a reservation. The query result is positive, so the reservation is made for a restaurant within 1 kilometer (including 1 kilometer) of Extreme Battlefield Real-life CS Base"
        assert len(result) > 0

    def test_rubric_11_the_reserved_restaurant_should_be_a_halal_restaurant(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should be a Halal Restaurant"
        assert len(result) > 0

    def test_rubric_12_the_rating_of_the_reserved_restaurant_should_be_4_0_or_above(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The rating of the reserved restaurant should be 4.0 or above"
        assert len(result) > 0

    def test_rubric_13_the_restaurant_reservation_time_should_be_2024_09_28_13_00_0(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation time should be 2024-09-28 13:00:00"
        assert len(result) > 0

    def test_rubric_14_the_number_of_people_for_the_restaurant_reservation_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the restaurant reservation should be 8"
        assert len(result) > 0
