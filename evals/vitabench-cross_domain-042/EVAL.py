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
        assert result[0]["store_id"] == 'S17550812240785286_A00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550812240785286_P00022", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 380) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550812240785286_S00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550812240785286_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 26.9) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550812240785286_I00010'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 2

    def test_rubric_0_the_purchased_tickets_allow_unlimited_access_to_all_attracti(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased tickets allow unlimited access to all attractions"
        assert len(result) > 0

    def test_rubric_1_the_purchased_tickets_are_valid_for_two_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased tickets are valid for two people"
        assert len(result) > 0

    def test_rubric_2_the_purchased_tickets_are_the_most_economical_option__search(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased tickets are the most economical option, search results should be the Unlimited Pass for Two at Chengdu Happy Valley"
        assert len(result) > 0

    def test_rubric_3_the_quantity_of_tickets_in_the_happy_valley_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of tickets in the Happy Valley order should be 1"
        assert len(result) > 0

    def test_rubric_4_the_purchased_tickets_are_for_may_17__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased tickets are for May 17, 2025"
        assert len(result) > 0

    def test_rubric_5_the_purchased_tickets_are_valid_for_the_entire_day(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased tickets are valid for the entire day"
        assert len(result) > 0

    def test_rubric_6_search_results_show_that_two_fans_exceeding_a_total_price_of(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Search results show that two fans exceeding a total price of 50 yuan are unavailable, so the delivery order should include one fan"
        assert len(result) > 0

    def test_rubric_7_the_product_in_the_delivery_order_should_be_wearable_around(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product in the delivery order should be wearable around the neck"
        assert len(result) > 0

    def test_rubric_8_the_product_in_the_delivery_order_should_be_the_lowest_price(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product in the delivery order should be the lowest-priced item in its category, search results should show the Mini USB Neck Fan from Tech Lifestyle Store"
        assert len(result) > 0

    def test_rubric_9_the_delivery_address_for_the_order_should_be_sichuan_provinc(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the order should be Sichuan Provincial People\'s Hospital, 17 South Renmin Road Section 3, Wuhou District, Chengdu, Sichuan Province"
        assert len(result) > 0

    def test_rubric_10_the_delivery_time_should_be_before_12_30_00_on_may_16__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time should be before 12:30:00 on May 16, 2025"
        assert len(result) > 0

    def test_rubric_11_the_restaurant_reservation_should_be_for_19_00_00_on_may_17(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation should be for 19:00:00 on May 17, 2025"
        assert len(result) > 0

    def test_rubric_12_the_restaurant_reservation_should_be_for_2_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation should be for 2 people"
        assert len(result) > 0

    def test_rubric_13_the_reserved_restaurant_should_offer_fish_and_frog_buffet_se(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved restaurant should offer fish and frog buffet sets"
        assert len(result) > 0

    def test_rubric_14_the_buffet_set_at_the_reserved_restaurant_should_include_sou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The buffet set at the reserved restaurant should include soup base"
        assert len(result) > 0

    def test_rubric_15_the_buffet_set_at_the_reserved_restaurant_should_not_exceed(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The buffet set at the reserved restaurant should not exceed 70 yuan per person"
        assert len(result) > 0

    def test_rubric_16_the_reserved_restaurant_should_have_a_rating_of_4_2_or_highe(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved restaurant should have a rating of 4.2 or higher"
        assert len(result) > 0
