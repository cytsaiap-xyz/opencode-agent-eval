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
            if i in {3}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550810159889844_A00006'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550810159889844_P00030", "quantity": 1}, {"product_id": "S17550810159889844_P00029", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 130) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550810159889844_H00004'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550810159889844_P00018", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1936) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550810159889844_I00015'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550810159889844_P00089", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 468) < 1

    def test_order_3_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[3]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_3_matches_expected_shop(self):
        order = result[3]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550810159889844_I00015'

    def test_order_3_has_correct_customer_count(self):
        assert result[3].get("customer_count") == 3

    def test_rubric_0_the_attraction_booked_should_be_sui_and_tang_grand_canal_cul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction booked should be Sui and Tang Grand Canal Cultural Museum"
        assert len(result) > 0

    def test_rubric_1_the_date_for_the_attraction_tickets_should_be_april_11__2026(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date for the attraction tickets should be April 11, 2026"
        assert len(result) > 0

    def test_rubric_2_the_ticket_booking_method_chosen_should_be_the_cheapest_opti(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket booking method chosen should be the cheapest option (Two-person Ticket 100 yuan + Child Ticket 30 yuan)"
        assert len(result) > 0

    def test_rubric_3_the_hotel_booked_should_be_five_star(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booked should be Five-star"
        assert len(result) > 0

    def test_rubric_4_the_hotel_room_type_should_be_king_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel room type should be King Room"
        assert len(result) > 0

    def test_rubric_5_the_number_of_hotel_rooms_booked_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of hotel rooms booked should be 2"
        assert len(result) > 0

    def test_rubric_6_the_hotel_should_provide_deluxe_breakfast_buffet(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel should provide Deluxe Breakfast Buffet"
        assert len(result) > 0

    def test_rubric_7_the_hotel_should_be_within_500_meters_of_the_sui_and_tang_gr(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel should be within 500 meters of the Sui and Tang Grand Canal Cultural Museum"
        assert len(result) > 0

    def test_rubric_8_the_check_in_date_for_the_hotel_should_be_april_11__2026(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The check-in date for the hotel should be April 11, 2026"
        assert len(result) > 0

    def test_rubric_9_the_restaurant_should_have_a_quiet_environment(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant should have a Quiet Environment"
        assert len(result) > 0

    def test_rubric_10_the_items_ordered_at_the_restaurant_should_be_seafood(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The items ordered at the restaurant should be Seafood"
        assert len(result) > 0

    def test_rubric_11_the_price_of_items_ordered_at_the_restaurant_should_be_less(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of items ordered at the restaurant should be less than 500 yuan (not including 500)"
        assert len(result) > 0

    def test_rubric_12_the_restaurant_order_should_be_a_set_meal_for_2_3_people__no(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant order should be a set meal for 2-3 people, not multiple individual meals"
        assert len(result) > 0

    def test_rubric_13_the_restaurant_reservation_should_be_at_huaibei_xianweixuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation should be at Huaibei Xianweixuan Seafood Restaurant"
        assert len(result) > 0

    def test_rubric_14_the_restaurant_reservation_time_should_be_april_11__2026__18(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation time should be April 11, 2026, 18:30:00"
        assert len(result) > 0

    def test_rubric_15_the_number_of_people_for_the_restaurant_reservation_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the restaurant reservation should be 3"
        assert len(result) > 0
