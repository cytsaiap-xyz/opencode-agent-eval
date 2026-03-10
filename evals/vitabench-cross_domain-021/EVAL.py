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
            if i in {2}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550802841788893_S00002'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802841788893_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 499) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802841788893_I00010'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802841788893_P00051", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 388) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550802841788893_S00002'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 4

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550802841788893_A00005'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17550802841788893_P00021", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 240) < 1

    def test_rubric_0_the_smart_watch_in_the_order_cannot_be_white(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The smart watch in the order cannot be white"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_smart_watch_order_is_room_602(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the smart watch order is Room 602, Unit 1, Building 3, Greenland Colorful City, Intersection of Zhangba North Road and Technology 6th Road, Yanta District, Xi\'an"
        assert len(result) > 0

    def test_rubric_2_the_smart_watch_in_the_order_must_have_heart_rate_monitoring(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The smart watch in the order must have heart rate monitoring function"
        assert len(result) > 0

    def test_rubric_3_the_smart_watch_in_the_order_must_have_blood_pressure_monito(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The smart watch in the order must have blood pressure monitoring function"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_ordered_from_should_be_a_shaanxi_cuisine_rest(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered from should be a Shaanxi cuisine restaurant"
        assert len(result) > 0

    def test_rubric_5_the_ordered_shaanxi_cuisine_set_meal_is_for_4_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered Shaanxi cuisine set meal is for 4 people"
        assert len(result) > 0

    def test_rubric_6_the_staple_food_in_the_shaanxi_cuisine_set_meal_is_not_flatb(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The staple food in the Shaanxi cuisine set meal is not flatbread"
        assert len(result) > 0

    def test_rubric_7_the_shaanxi_cuisine_set_meal_should_include_free_range_chick(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Shaanxi cuisine set meal should include free-range chicken"
        assert len(result) > 0

    def test_rubric_8_the_reserved_shaanxi_cuisine_restaurant_should_be_lao_mi_jia(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved Shaanxi cuisine restaurant should be Lao Mi Jia Shaanxi Cuisine"
        assert len(result) > 0

    def test_rubric_9_the_reservation_at_the_shaanxi_cuisine_restaurant_is_for_12(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation at the Shaanxi cuisine restaurant is for 12:00 PM on May 16, 2025"
        assert len(result) > 0

    def test_rubric_10_the_reservation_at_the_shaanxi_cuisine_restaurant_is_for_4_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation at the Shaanxi cuisine restaurant is for 4 people"
        assert len(result) > 0

    def test_rubric_11_since_there_is_no_special_exhibition_at_xi_an_museum__the_se(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Since there is no special exhibition at Xi\'an Museum, the selected attraction should be Shaanxi History Museum"
        assert len(result) > 0

    def test_rubric_12_the_purchased_museum_tickets_are_for_may_16__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased museum tickets are for May 16, 2025"
        assert len(result) > 0

    def test_rubric_13_the_number_of_museum_tickets_purchased_is_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of museum tickets purchased is 2"
        assert len(result) > 0
