import json
import os
import pytest

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)
with open(os.path.join(_dir, "answer.json")) as _f:
    result = json.load(_f)

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
        assert result[0]["store_id"] == 'S17550807808389466_I00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550807808389466_P00061", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 688) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550807808389466_I00010'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 7

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550807808389466_T00004'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550807808389466_P00029", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 3516) < 1

    def test_rubric_0_the_restaurant_should_be_within_1_kilometer_of_the_company_a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant should be within 1 kilometer of the company address (Room 1208, Hang Lung Plaza Office Building, 139 Renmin Middle Road, Liangxi District, Wuxi, Jiangsu Province)"
        assert len(result) > 0

    def test_rubric_1_the_restaurant_must_be_a_high_end_restaurant_with_a_rating_a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant must be a high-end restaurant with a rating above 4.7"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_should_have_a_business_banquet_tag(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant should have a Business Banquet tag"
        assert len(result) > 0

    def test_rubric_3_the_restaurant_set_menu_should_have__wealth_prosperity__or_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant set menu should have \'Wealth Prosperity\' or similar wealth symbolism"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_should_support_reservation(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant should support reservation"
        assert len(result) > 0

    def test_rubric_5_the_restaurant_set_menu_should_be_sufficient_for_7_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant set menu should be sufficient for 7 people"
        assert len(result) > 0

    def test_rubric_6_need_to_book_the_restaurant_for_noon_on_march_7__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to book the restaurant for noon on March 7, 2025"
        assert len(result) > 0

    def test_rubric_7_restaurant_reservations_should_be_for_7_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Restaurant reservations should be for 7 people"
        assert len(result) > 0

    def test_rubric_8_need_to_search_for_and_provide_high_speed_rail_schedules_fro(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to search for and provide high-speed rail schedules from Wuxi to Shenzhen after 4:00 PM on March 7, 2025, with the result showing G2382 train with Standing Ticket availability"
        assert len(result) > 0

    def test_rubric_9_need_to_search_for_and_provide_the_earliest_available_train(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to search for and provide the earliest available train on March 8, 2025, with the ordered train being G2102"
        assert len(result) > 0

    def test_rubric_10_the_high_speed_train_tickets_should_not_be_standing_tickets(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The high-speed train tickets should not be Standing Tickets"
        assert len(result) > 0

    def test_rubric_11_the_high_speed_train_tickets__destination_must_be_shenzhen(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The high-speed train tickets\' destination must be Shenzhen"
        assert len(result) > 0

    def test_rubric_12_the_order_should_be_for_2_high_speed_rtrain_tickets(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order should be for 2 high-speed rtrain tickets"
        assert len(result) > 0
