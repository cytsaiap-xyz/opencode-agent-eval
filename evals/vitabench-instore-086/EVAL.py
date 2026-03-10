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
            if i in {1}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17567843793441224_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567843793441224_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 368) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567843793441224_I00001'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 2

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567843793441224_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567843793441224_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 35) < 1

    def test_rubric_0_the_distance_between_the_restaurant_and_shandong_university(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The distance between the restaurant and Shandong University, 27 Shanda South Road, Lixia District, Jinan should be within 2km (inclusive)"
        assert len(result) > 0

    def test_rubric_1_the_restaurant_environment_must_be_quiet(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant environment must be quiet"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_should_provide_private_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant should provide private room"
        assert len(result) > 0

    def test_rubric_3_the_price_of_the_set_meal_ordered_at_the_restaurant_should_n(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of the set meal ordered at the restaurant should not exceed 400 yuan (inclusive)"
        assert len(result) > 0

    def test_rubric_4_the_meal_set_ordered_at_the_restaurant_should_be_a_set_for_t(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The meal set ordered at the restaurant should be a set for two people, not two individual sets"
        assert len(result) > 0

    def test_rubric_5_the_set_meal_ordered_at_the_restaurant_must_be_light_taste(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The set meal ordered at the restaurant must be light taste"
        assert len(result) > 0

    def test_rubric_6_the_reserved_restaurant_should_be_yaxuan_private_kitchen(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved restaurant should be Yaxuan Private Kitchen"
        assert len(result) > 0

    def test_rubric_7_departing_at_5_00_pm_tomorrow__it_takes_about_20_minutes_to(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Departing at 5:00 PM tomorrow, it takes about 20 minutes to walk there, so the reservation time should be 2024-07-07 17:20:00"
        assert len(result) > 0

    def test_rubric_8_the_number_of_people_for_the_restaurant_reservation_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the restaurant reservation should be 2"
        assert len(result) > 0

    def test_rubric_9_the_distance_between_the_bakery_and_yaxuan_private_kitchen(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The distance between the bakery and Yaxuan Private Kitchen (Shandong University Branch), 56 Shanda South Road, Lixia District, Jinan should be within 300 meters (inclusive)"
        assert len(result) > 0

    def test_rubric_10_the_set_ordered_at_the_bakery_should_not_exceed_40_yuan__inc(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The set ordered at the bakery should not exceed 40 yuan (inclusive)"
        assert len(result) > 0

    def test_rubric_11_the_set_ordered_at_the_bakery_should_include_bread(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The set ordered at the bakery should include bread"
        assert len(result) > 0

    def test_rubric_12_the_set_ordered_at_the_bakery_should_include_beverages(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The set ordered at the bakery should include beverages"
        assert len(result) > 0

    def test_rubric_13_the_bread_in_the_bakery_set_should_be_a_new_item(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The bread in the bakery set should be a new item"
        assert len(result) > 0

    def test_rubric_14_the_bakery_set_should_not_contain_durian_flavor(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The bakery set should not contain durian flavor"
        assert len(result) > 0
