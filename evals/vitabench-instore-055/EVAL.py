import json
import os
import pytest
from solution import solve

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)

result = solve()
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
        assert result[0]["store_id"] == 'S17567836570014111_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836570014111_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 999) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836570014111_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2024-02-14 15:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 2

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567836570014111_I00004'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836570014111_P00019", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 988) < 1

    def test_order_3_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[3]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_3_matches_expected_shop(self):
        order = result[3]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836570014111_I00004'

    def test_order_3_has_correct_customer_count(self):
        assert result[3].get("customer_count") == 2

    def test_rubric_0_the_booked_spa_should_have_european_style_decoration(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked spa should have European style decoration"
        assert len(result) > 0

    def test_rubric_1_the_spa_package_should_include_a_couple_suite(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The spa package should include a couple suite"
        assert len(result) > 0

    def test_rubric_2_the_spa_package_should_include_full_body_essential_oil_massa(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The spa package should include full body essential oil massage"
        assert len(result) > 0

    def test_rubric_3_the_spa_package_should_provide_petal_bath_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The spa package should provide petal bath service"
        assert len(result) > 0

    def test_rubric_4_the_spa_package_should_be_available_for_two_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The spa package should be available for two people"
        assert len(result) > 0

    def test_rubric_5_the_reserved_spa_should_be_dream_paris_spa_club(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved spa should be Dream Paris Spa Club"
        assert len(result) > 0

    def test_rubric_6_the_spa_reservation_time_should_be_2024_02_14_15_00_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The spa reservation time should be 2024-02-14 15:00:00"
        assert len(result) > 0

    def test_rubric_7_the_number_of_people_for_the_spa_reservation_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the spa reservation should be 2"
        assert len(result) > 0

    def test_rubric_8_the_restaurant_should_be_a_french_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant should be a French restaurant"
        assert len(result) > 0

    def test_rubric_9_the_restaurant_should_have_music_performance(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant should have music performance"
        assert len(result) > 0

    def test_rubric_10_the_restaurant_package_should_be_a_couple_dining_option(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant package should be a couple dining option"
        assert len(result) > 0

    def test_rubric_11_the_restaurant_package_should_have_escargot_not_included(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant package should have Escargot not included"
        assert len(result) > 0

    def test_rubric_12_the_total_cost_of_the_spa_order_and_restaurant_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total cost of the spa order and restaurant order should not exceed 2000 yuan"
        assert len(result) > 0

    def test_rubric_13_the_reserved_restaurant_should_be_blue_moon_french_restauran(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved restaurant should be Blue Moon French Restaurant"
        assert len(result) > 0

    def test_rubric_14_the_restaurant_reservation_time_should_be_2024_02_14_19_00_0(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation time should be 2024-02-14 19:00:00"
        assert len(result) > 0

    def test_rubric_15_the_number_of_people_for_the_restaurant_reservation_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the restaurant reservation should be 2"
        assert len(result) > 0
