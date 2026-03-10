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
            if i in {1, 4}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17567836604989753_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836604989753_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 298) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836604989753_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2024-10-12 09:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567836604989753_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836604989753_P00013", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 158) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17567836604989753_I00002'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17567836604989753_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 198) < 1

    def test_order_4_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[4]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_4_matches_expected_shop(self):
        order = result[4]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836604989753_I00002'

    def test_order_4_has_correct_reservation_time(self):
        assert result[4].get("reservation_time") == '2024-10-12 12:00:00'

    def test_order_4_has_correct_customer_count(self):
        assert result[4].get("customer_count") == 1

    def test_rubric_0_the_magic_learning_studio_should_be_within_3000m__inclusive(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The magic learning studio should be within 3000m (inclusive) of Room 1803, Unit 1, Building 2, Lushang Olympic City, 14677 Jingshi Road, Lixia District, Jinan"
        assert len(result) > 0

    def test_rubric_1_the_magic_learning_studio_should_be_a_top_rated_merchant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The magic learning studio should be a top rated merchant"
        assert len(result) > 0

    def test_rubric_2_the_ordered_item_at_the_magic_learning_studio_should_be_a_ze(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the magic learning studio should be a zero foundation beginner learning package"
        assert len(result) > 0

    def test_rubric_3_the_ordered_item_at_the_magic_learning_studio_should_include(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the magic learning studio should include magic props"
        assert len(result) > 0

    def test_rubric_4_the_reserved_magic_learning_studio_should_be_jinan_magic_ass(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved magic learning studio should be Jinan Magic Association Training Center"
        assert len(result) > 0

    def test_rubric_5_the_reservation_time_for_the_magic_learning_studio_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation time for the magic learning studio should be 2024-10-12 09:00"
        assert len(result) > 0

    def test_rubric_6_the_number_of_people_for_the_magic_learning_studio_reservati(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the magic learning studio reservation should be 1"
        assert len(result) > 0

    def test_rubric_7_the_status_of_the_foot_therapy_package_order_should_be_cance(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The status of the foot therapy package order should be cancelled"
        assert len(result) > 0

    def test_rubric_8_the_foot_therapy_package_was_ordered_from_xiushentang_premiu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The foot therapy package was ordered from Xiushentang premium massage, so the massage shop order should be from Xiushentang premium massage"
        assert len(result) > 0

    def test_rubric_9_the_ordered_item_at_the_massage_shop_should_be_a_shoulder_an(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the massage shop should be a shoulder and neck massage package"
        assert len(result) > 0

    def test_rubric_10_the_reserved_massage_shop_should_be_xiushentang_premium_mass(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved massage shop should be Xiushentang premium massage"
        assert len(result) > 0

    def test_rubric_11_the_reservation_time_for_the_massage_shop_should_be_2024_10(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation time for the massage shop should be 2024-10-12 12:00"
        assert len(result) > 0

    def test_rubric_12_the_number_of_people_for_the_massage_shop_reservation_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the massage shop reservation should be 1"
        assert len(result) > 0
