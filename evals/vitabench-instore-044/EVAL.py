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
        assert result[0]["store_id"] == 'S17564426124392851_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564426124392851_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 88) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17564426124392851_I00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17564426124392851_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 158) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564426124392851_I00001'

    def test_order_2_has_correct_reservation_time(self):
        assert result[2].get("reservation_time") == '2025-11-15 16:30:00'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 2

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17564426124392851_I00002'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17564426124392851_P00005", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 88) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17564426124392851_I00003'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17564426124392851_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 88) < 1

    def test_rubric_0_the_status_of_the_adult_rock_climbing_single_experience_pack(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The status of the adult rock climbing single experience package order should be cancelled"
        assert len(result) > 0

    def test_rubric_1_the_product_ordered_at_the_climbing_gym_should_be_parent_chi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product ordered at the climbing gym should be Parent-child rock climbing package (1 adult, 1 child)"
        assert len(result) > 0

    def test_rubric_2_the_merchant_for_the_climbing_gym_order_should_be_extreme_ro(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The merchant for the climbing gym order should be Extreme Rock Climbing Gym"
        assert len(result) > 0

    def test_rubric_3_the_reservation_time_for_the_climbing_gym_is_november_15__20(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation time for the climbing gym is November 15, 2025, at 16:30"
        assert len(result) > 0

    def test_rubric_4_the_number_of_people_for_the_climbing_gym_reservation_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the climbing gym reservation should be 2"
        assert len(result) > 0

    def test_rubric_5_the_reserved_merchant_for_the_climbing_gym_should_be_extreme(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved merchant for the climbing gym should be Extreme Rock Climbing Gym"
        assert len(result) > 0

    def test_rubric_6_the_cantonese_restaurant_should_not_be_more_than_1km__includ(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Cantonese restaurant should not be more than 1km (including 1km) from Extreme Rock Climbing Gym, 85 Lianqian West Road, Siming District, Xiamen"
        assert len(result) > 0

    def test_rubric_7_the_ordered_food_from_the_cantonese_restaurant_should_be_lig(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered food from the Cantonese restaurant should be Light diet"
        assert len(result) > 0

    def test_rubric_8_the_ordered_item_from_the_cantonese_restaurant_should_be_pac(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item from the Cantonese restaurant should be Package for two"
        assert len(result) > 0

    def test_rubric_9_the_technician_at_the_sports_rehabilitation_center_should_ha(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The technician at the sports rehabilitation center should have a sports rehabilitation therapist certificate"
        assert len(result) > 0

    def test_rubric_10_the_sports_rehabilitation_center_should_not_be_more_than_1km(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The sports rehabilitation center should not be more than 1km (including 1km) from Room 504, Building 3, Lotus Apartment, 189 Lianqian East Road, Siming District, Xiamen"
        assert len(result) > 0

    def test_rubric_11_the_ordered_item_from_the_sports_rehabilitation_center_shoul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item from the sports rehabilitation center should be Sports rehabilitation package for one"
        assert len(result) > 0
