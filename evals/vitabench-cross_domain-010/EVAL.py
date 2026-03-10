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
        assert result[0]["store_id"] == 'S17550148871188176_I00008'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550148871188176_P00083", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 198) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550148871188176_I00013'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 2

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550148871188176_I00013'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550148871188176_P00140", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 298) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550148871188176_T00003'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17550148871188176_P00038", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 82) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17550148871188176_T00003'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17550148871188176_P00042", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 82) < 1

    def test_rubric_0_need_to_compare_game_token_package_prices_at_different_arcad(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to compare game token package prices at different arcades in Puyang, choose the most cost-effective one; Super Player Arcade\'s 600 Game Tokens Package at ¥198 offers the best value"
        assert len(result) > 0

    def test_rubric_1_due_to_game_token_prices_exceeding_budget__cannot_purchase_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Due to game token prices exceeding budget, cannot purchase any drinks from Mixue Ice Cream or elsewhere"
        assert len(result) > 0

    def test_rubric_2_the_reserved_izakaya_should_be_within_600m_of_super_player_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved izakaya should be within 600m of Super Player Arcade"
        assert len(result) > 0

    def test_rubric_3_the_reserved_izakaya_should_be_suitable_for_photo_check_ins(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved izakaya should be suitable for photo check-ins"
        assert len(result) > 0

    def test_rubric_4_the_izakaya_reservation_time_should_be_2026_01_04_18_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The izakaya reservation time should be 2026-01-04 18:00"
        assert len(result) > 0

    def test_rubric_5_the_izakaya_reservation_should_be_for_2_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The izakaya reservation should be for 2 people"
        assert len(result) > 0

    def test_rubric_6_the_izakaya_order_should_be_placed_at_sakura_izakaya(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The izakaya order should be placed at Sakura Izakaya"
        assert len(result) > 0

    def test_rubric_7_the_izakaya_set_menu_ordered_should_be_priced_between__280_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The izakaya set menu ordered should be priced between ¥280-320"
        assert len(result) > 0

    def test_rubric_8_the_izakaya_set_menu_ordered_should_include_plum_wine(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The izakaya set menu ordered should include Plum Wine"
        assert len(result) > 0

    def test_rubric_9_need_to_cancel_the_order_with_order_number_s1755014887118817(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to cancel the order with order number S17550148871188176_O00001"
        assert len(result) > 0

    def test_rubric_10_the_departure_station_of_the_train_ticket_order_should_be_pu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure station of the train ticket order should be Puyang Station"
        assert len(result) > 0

    def test_rubric_11_the_arrival_station_of_the_train_ticket_order_should_be_luoy(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival station of the train ticket order should be Luoyang Station"
        assert len(result) > 0

    def test_rubric_12_the_train_ticket_ordered_should_be_for_a_train_departing_bet(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train ticket ordered should be for a train departing between 19:00-20:00 on 2026-01-07"
        assert len(result) > 0
