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
        assert result[0]["store_id"] == 'S17567836570522520_I00004'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836570522520_P00032", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1088) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836570522520_I00004'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2024-02-11 09:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 3

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567836570522520_I00009 '

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836570522520_P00073", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 198) < 1

    def test_rubric_0_the_distance_from_the_hot_spring_establishment_to_no__18__se(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The distance from the hot spring establishment to No. 18, Section 2, Hongxing Road, Jinjiang District, Chengdu, Sichuan Province (450 meters walk from Exit A of City Second Hospital Metro Station) should be within 20km (including 20km)"
        assert len(result) > 0

    def test_rubric_1_the_hot_spring_establishment_rating_should_be_5_0(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hot spring establishment rating should be 5.0"
        assert len(result) > 0

    def test_rubric_2_the_hot_spring_establishment_should_have_a_parking_lot(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hot spring establishment should have a Parking lot"
        assert len(result) > 0

    def test_rubric_3_the_ordered_item_price_at_the_hot_spring_establishment_can_e(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item price at the hot spring establishment can exceed 1000 yuan"
        assert len(result) > 0

    def test_rubric_4_the_ordered_item_at_the_hot_spring_establishment_should_be_a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item at the hot spring establishment should be a Family hot spring package"
        assert len(result) > 0

    def test_rubric_5_the_reserved_hot_spring_establishment_should_be_jinjiang_hot(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved hot spring establishment should be Jinjiang Hot Spring Club"
        assert len(result) > 0

    def test_rubric_6_the_reservation_time_for_the_hot_spring_establishment_is_202(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reservation time for the hot spring establishment is 2024-02-11 09:00:00"
        assert len(result) > 0

    def test_rubric_7_the_number_of_people_for_the_hot_spring_reservation_is_3(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the hot spring reservation is 3"
        assert len(result) > 0

    def test_rubric_8_there_is_a_game_hall_within_10km__including_10km__of_jinjian(self):
        # Structural check - the answer must contain orders that satisfy:
        # "There is a Game hall within 10km (including 10km) of Jinjiang Hot Spring Club, Chenglong Road, Jinjiang District, Chengdu, therefore the establishment to order from should be the Game hall"
        assert len(result) > 0

    def test_rubric_9_the_ordered_item_from_the_game_hall_should_be_a_newcomer_exp(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item from the Game hall should be a Newcomer experience package"
        assert len(result) > 0
