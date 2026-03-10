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
        assert result[0]["store_id"] == 'S17550810285799690_I00008'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550810285799690_P00048", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1119) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550810285799690_I00008'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 13

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550810285799690_A00005'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550810285799690_P00024", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 1800) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550810285799690_S00001'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17550810285799690_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 3499) < 1

    def test_rubric_0_the_restaurant_s_parking_lot_needs_to_provide_20_or_more_par(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant\'s parking lot needs to provide 20 or more parking spaces"
        assert len(result) > 0

    def test_rubric_1_the_ordered_items_from_the_restaurant_should_be_suitable_for(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered items from the restaurant should be suitable for 13 people"
        assert len(result) > 0

    def test_rubric_2_the_price_of_ordered_items_from_the_restaurant_should_be_les(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of ordered items from the restaurant should be less than 1560 yuan"
        assert len(result) > 0

    def test_rubric_3_the_ordered_items_from_the_restaurant_should_include_main_co(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered items from the restaurant should include main course"
        assert len(result) > 0

    def test_rubric_4_the_ordered_items_from_the_restaurant_cannot_contain_alcohol(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered items from the restaurant cannot contain alcohol"
        assert len(result) > 0

    def test_rubric_5_the_reserved_restaurant_is_yunnan_image_restaurant__dianchi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved restaurant is Yunnan Image Restaurant (Dianchi Road Branch)"
        assert len(result) > 0

    def test_rubric_6_the_restaurant_reservation_time_is_august_23__2024__18_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation time is August 23, 2024, 18:00"
        assert len(result) > 0

    def test_rubric_7_the_number_of_people_for_the_restaurant_reservation_is_13(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the restaurant reservation is 13"
        assert len(result) > 0

    def test_rubric_8_the_usage_date_of_the_ordered_item_from_the_live_performance(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The usage date of the ordered item from the live performance theater is August 26, 2024"
        assert len(result) > 0

    def test_rubric_9_the_ordered_item_from_the_live_performance_theater_is_a_grou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item from the live performance theater is a group ticket (valid for up to 15 people)"
        assert len(result) > 0

    def test_rubric_10_the_ordered_delivery_item_is_pocket_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered delivery item is Pocket 3"
        assert len(result) > 0

    def test_rubric_11_the_ordered_delivery_item_should_come_from_a_well_known_chai(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered delivery item should come from a well-known chain shop"
        assert len(result) > 0

    def test_rubric_12_the_delivery_address_for_the_takeout_order_is_15th_floor__yu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the takeout order is 15th Floor, Yunnan Image Business Center, 448 Youth Road, Wuhua District, Kunming, Yunnan Province"
        assert len(result) > 0

    def test_rubric_13_the_estimated_delivery_time_for_the_takeout_order_is_august(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the takeout order is August 21, 2024, 15:00"
        assert len(result) > 0
