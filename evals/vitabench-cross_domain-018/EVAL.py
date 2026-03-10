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
            if i in {3}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550802116123836_I00008'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802116123836_P00044", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 2988) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802091124808_S00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550848565247521_P00007", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 13999) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802116123836_A00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802116123836_P00003", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 150) < 1

    def test_order_3_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[3]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_3_matches_expected_shop(self):
        order = result[3]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550802116123836_I00008'

    def test_order_3_has_correct_customer_count(self):
        assert result[3].get("customer_count") == 2

    def test_rubric_0_the_restaurant_ordered_must_be_a_michelin_restaurant(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered must be a Michelin restaurant"
        assert len(result) > 0

    def test_rubric_1_need_to_check_the_highest_per_capita_michelin_set_meal__the(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the highest per capita Michelin set meal, the result is from Nebula, so the ordered set meal must be from Nebula"
        assert len(result) > 0

    def test_rubric_2_the_ordered_restaurant_must_provide_a_romantic_and_private_d(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered restaurant must provide a romantic and private dining environment"
        assert len(result) > 0

    def test_rubric_3_the_set_meal_in_the_restaurant_order_must_have_auspicious_me(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The set meal in the restaurant order must have auspicious meaning"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_order_set_meal_must_avoid_high_purine_foods(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant order set meal must avoid high purine foods (such as offal/seafood soup), and must avoid foods or drinks containing alcohol"
        assert len(result) > 0

    def test_rubric_5_the_ordered_phone_must_be_the_latest_iphone_model(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered phone must be the latest iPhone model"
        assert len(result) > 0

    def test_rubric_6_the_ordered_phone_must_have_1tb_of_storage(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered phone must have 1TB of storage"
        assert len(result) > 0

    def test_rubric_7_the_phone_should_be_in_stock(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The phone should be in stock"
        assert len(result) > 0

    def test_rubric_8_the_phone_should_be_blue(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The phone should be blue"
        assert len(result) > 0

    def test_rubric_9_the_delivery_address_for_the_phone_order_must_be_nebula__100(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the phone order must be Nebula, 100 Nanguan Street, Beilin District, Xi\'an, Shaanxi Province"
        assert len(result) > 0

    def test_rubric_10_the_delivery_time_for_the_phone_order_must_be_the_evening_of(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the phone order must be the evening of July 18, 2025"
        assert len(result) > 0

    def test_rubric_11_must_check_the_theme_of_xi_an_art_museum_s_current_exhibitio(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Must check the theme of Xi\'an Art Museum\'s current exhibition, the result is that there are modern art related exhibitions"
        assert len(result) > 0

    def test_rubric_12_the_number_of_tickets_in_the_art_museum_order_must_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of tickets in the art museum order must be 2"
        assert len(result) > 0

    def test_rubric_13_check_the_opening_hours_of_xi_an_art_museum__the_result_show(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Check the opening hours of Xi\'an Art Museum, the result shows that it\'s open until 17:00, so the date of the art museum ticket must be on a weekend"
        assert len(result) > 0

    def test_rubric_14_the_restaurant_reservation_time_must_be_friday_evening__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation time must be Friday evening (2025-07-18)"
        assert len(result) > 0

    def test_rubric_15_the_reserved_restaurant_must_be_nebula(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant must be Nebula"
        assert len(result) > 0
