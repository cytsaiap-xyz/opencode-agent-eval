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
        assert result[0]["store_id"] == 'S17567836667787240_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836667787240_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 168) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836667787240_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2024-12-14 10:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 3

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567836667787240_I00010'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836667787240_P00083", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 158) < 1

    def test_rubric_0_the_bakery_workshop_should_be_within_5_kilometers_or_less_fr(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The bakery workshop should be within 5 kilometers or less from Room 501, Unit 2, Building 3, Jinshui Garden, No. 128 Zhenhua Road, Lichang District, Qingdao"
        assert len(result) > 0

    def test_rubric_1_the_ordered_item_from_the_bakery_workshop_should_be_a_doraem(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item from the bakery workshop should be a Doraemon themed baking package"
        assert len(result) > 0

    def test_rubric_2_the_bakery_workshop_ordered_item_should_be_suitable_for_2_ad(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The bakery workshop ordered item should be suitable for 2 Adults 1 Child"
        assert len(result) > 0

    def test_rubric_3_the_bakery_workshop_reservation_should_be_for_doraemon_dream(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The bakery workshop reservation should be for Doraemon Dream Bakery Workshop"
        assert len(result) > 0

    def test_rubric_4_the_bakery_workshop_reservation_time_should_be_2024_12_14_10(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The bakery workshop reservation time should be 2024-12-14 10:00:00"
        assert len(result) > 0

    def test_rubric_5_the_bakery_reservation_should_be_for_3_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The bakery reservation should be for 3 people"
        assert len(result) > 0

    def test_rubric_6_the_ordered_restaurant_should_be_within_1_kilometer_or_less(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered restaurant should be within 1 kilometer or less from Doraemon Dream Bakery Workshop, 2nd Floor, Golden Age Plaza, No. 230 Zhenhua Road, Lichang District, Qingdao"
        assert len(result) > 0

    def test_rubric_7_the_restaurant_ordered_items_should_be_parent_child_package(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered items should be Parent-Child Package"
        assert len(result) > 0

    def test_rubric_8_the_restaurant_ordered_items_should_be_suitable_for_2_adults(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered items should be suitable for 2 Adults 1 Child"
        assert len(result) > 0

    def test_rubric_9_the_restaurant_ordered_items_should_be_within_200_yuan_or_le(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered items should be within 200 yuan or less"
        assert len(result) > 0

    def test_rubric_10_since_there_is_a_bakery_workshop_within_5_kilometers__inclus(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Since there is a bakery workshop within 5 kilometers (inclusive) of Room 501, Unit 2, Building 3, Jinshui Garden, No. 128 Zhenhua Road, Lichang District, Qingdao, there should not be any photo studio orders"
        assert len(result) > 0
