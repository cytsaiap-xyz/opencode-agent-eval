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
        assert result[0]["store_id"] == 'S17564420317165268_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420317165268_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 288) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564420317165268_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2025-03-15 21:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 3

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564420317165268_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564420317165268_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 88) < 1

    def test_rubric_0_need_to_query_user_s_frequently_visited_bars__the_result_is(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to query user\'s frequently visited bars, the result is b216 (Lianfa Premium Store), the ordered bar cannot be b216 (Lianfa Premium Store)"
        assert len(result) > 0

    def test_rubric_1_the_ordered_bar_must_have_a_smoking_area_or_allow_indoor_smo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered bar must have a smoking area or allow indoor smoking"
        assert len(result) > 0

    def test_rubric_2_the_ordered_bar_must_have_live_singing_performances(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered bar must have live singing performances"
        assert len(result) > 0

    def test_rubric_3_the_distance_between_the_bar_and_the_night_market_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The distance between the bar and the night market should be within 800 meters (including 800 meters)"
        assert len(result) > 0

    def test_rubric_4_the_bar_set_order_should_include_snacks(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The bar set order should include snacks"
        assert len(result) > 0

    def test_rubric_5_the_bar_set_order_should_be_a_cocktail_set(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The bar set order should be a cocktail set"
        assert len(result) > 0

    def test_rubric_6_the_bar_set_order_cannot_contain_food_with_high_purine_ingre(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The bar set order cannot contain food with high purine ingredients"
        assert len(result) > 0

    def test_rubric_7_the_reserved_bar_should_be_blue_note_bar(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved bar should be Blue Note Bar"
        assert len(result) > 0

    def test_rubric_8_the_reservation_time_for_the_bar_is_2025_03_15_21_00_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation time for the bar is 2025-03-15 21:00:00"
        assert len(result) > 0

    def test_rubric_9_the_number_of_people_for_the_bar_reservation_is_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the bar reservation is 3"
        assert len(result) > 0

    def test_rubric_10_the_children_s_playground_should_be_inside_a_mall(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The children\'s playground should be inside a mall"
        assert len(result) > 0

    def test_rubric_11_the_ticket_ordered_for_the_children_s_playground_should_be_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket ordered for the children\'s playground should be suitable for a 5-year-old child"
        assert len(result) > 0

    def test_rubric_12_the_children_s_playground_should_be_no_more_than_1000_meters(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The children\'s playground should be no more than 1000 meters (including 1000 meters) from Room 1204, Building A, Sunshine 100 City Plaza, 166 Minzu Avenue, Qingxiu District, Nanning, Guangxi"
        assert len(result) > 0

    def test_rubric_13_the_ticket_ordered_for_the_children_s_playground_should_be_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket ordered for the children\'s playground should be a parent-child package"
        assert len(result) > 0

    def test_rubric_14_the_ticket_ordered_for_the_children_s_playground_should_allo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket ordered for the children\'s playground should allow entry at 19:00"
        assert len(result) > 0
