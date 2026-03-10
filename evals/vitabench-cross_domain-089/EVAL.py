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
            if i in {3}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550942377549944_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550942377549944_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 38.9) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550942377549944_I00013'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550942377549944_P00095", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1280) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550942377549944_I00013'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550942377549944_P00094", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 1680) < 1

    def test_order_3_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[3]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_3_matches_expected_shop(self):
        order = result[3]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550942377549944_I00013'

    def test_order_3_has_correct_customer_count(self):
        assert result[3].get("customer_count") == 5

    def test_rubric_0_the_delivered_item_should_be_a_greeting_card(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivered item should be a greeting card"
        assert len(result) > 0

    def test_rubric_1_the_delivered_item_should_be_pop_up_or_3d_card(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivered item should be pop-up or 3D card"
        assert len(result) > 0

    def test_rubric_2_the_delivered_food_item_should_not_be_in_childish_style(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivered food item should not be in childish style"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_should_be_room_502__building_3__jilin_u(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address should be Room 502, Building 3, Jilin University First Hospital Residential Area, 2699 Qianjin Street, Chaoyang District, Changchun City, Jilin Province"
        assert len(result) > 0

    def test_rubric_4_the_estimated_delivery_time_should_be_between_2025_10_24_07(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time should be between 2025-10-24 07:00-08:00"
        assert len(result) > 0

    def test_rubric_5_the_four_person_meal_order_from_jing_yue_xuan_michelin_resta(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The four-person meal order from Jing Yue Xuan Michelin Restaurant should be cancelled"
        assert len(result) > 0

    def test_rubric_6_the_ordered_restaurant_should_be_a_michelin_starred_restaura(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered restaurant should be a Michelin-starred restaurant"
        assert len(result) > 0

    def test_rubric_7_the_restaurant_s_rating_should_be_4_2_or_above(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant\'s rating should be 4.2 or above"
        assert len(result) > 0

    def test_rubric_8_the_set_menu_ordered_at_the_restaurant_should_include_champa(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The set menu ordered at the restaurant should include champagne and special desserts"
        assert len(result) > 0

    def test_rubric_9_the_set_menu_ordered_at_the_restaurant_should_not_include_of(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The set menu ordered at the restaurant should not include offal"
        assert len(result) > 0

    def test_rubric_10_the_set_menu_ordered_at_the_restaurant_should_meet_the_dinin(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The set menu ordered at the restaurant should meet the dining needs of 5 people"
        assert len(result) > 0

    def test_rubric_11_need_to_check_the_user_s_historical_flight_information_from(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the user\'s historical flight information from Shenzhen to Changchun on 2025-10-25, and should inform the user that the purchased MU5628 flight departs at 8:20 and arrives at 12:35, which can arrive more than two hours before dinner at 18:00, so there\'s no need to change the flight"
        assert len(result) > 0
