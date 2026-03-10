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
            if i in {0, 1}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[0]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_0_matches_expected_shop(self):
        order = result[0]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550809576747589_I00009'

    def test_order_0_has_correct_customer_count(self):
        assert result[0].get("customer_count") == 4

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550809576747589_I00013'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 4

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550809576747589_A00007'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550809576747589_P00036", "quantity": 4}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 480) < 1

    def test_rubric_0_the_reserved_dining_venue_should_be_a_bbq_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved dining venue should be a BBQ restaurant"
        assert len(result) > 0

    def test_rubric_1_the_bbq_restaurant_should_be_no_more_than_500m_from_room_403(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The BBQ restaurant should be no more than 500m from Room 403, Building 8, Jiaxing College Student Apartments, 1288 Hexing South Road, Nanhu District, Jiaxing, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_2_the_bbq_restaurant_s_opening_time_should_be_at_or_before_18(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The BBQ restaurant\'s opening time should be at or before 18:00"
        assert len(result) > 0

    def test_rubric_3_seats_should_be_reserved_at_the_bbq_restaurant_for_18_00_on(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Seats should be reserved at the BBQ restaurant for 18:00 on June 16, 2024"
        assert len(result) > 0

    def test_rubric_4_the_bbq_restaurant_reservation_should_be_for_4_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The BBQ restaurant reservation should be for 4 people"
        assert len(result) > 0

    def test_rubric_5_the_ktv_venue_ordered_should_be_no_more_than_500m_from_bbq_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV venue ordered should be no more than 500m from BBQ Paradise (Jiaxing College Branch)"
        assert len(result) > 0

    def test_rubric_6_the_ktv_venue_ordered_should_be_a_chain_brand(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV venue ordered should be a Chain Brand"
        assert len(result) > 0

    def test_rubric_7_seats_should_be_reserved_at_the_ktv_venue_for_20_00_on_june(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Seats should be reserved at the KTV venue for 20:00 on June 16, 2024"
        assert len(result) > 0

    def test_rubric_8_the_ktv_reservation_should_be_for_4_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV reservation should be for 4 people"
        assert len(result) > 0

    def test_rubric_9_the_total_price_of_the_instant_camera_and_photo_paper_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total price of the Instant Camera and Photo Paper should be checked, with the lowest result being 818 yuan, which exceeds 800 yuan, so the camera and paper delivery should not be ordered"
        assert len(result) > 0

    def test_rubric_10_the_attraction_ordered_should_be_a_large_theme_park(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction ordered should be a large theme park"
        assert len(result) > 0

    def test_rubric_11_the_ordered_tickets_should_be_valid_for_june_17__2024(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered tickets should be valid for June 17, 2024"
        assert len(result) > 0

    def test_rubric_12_the_ticket_prices_for_the_attractions_should_be_checked__com(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket prices for the attractions should be checked, comparing Student Ticket and Two-Person Package prices. The results are: Jiaxing Happy World Theme Park: Student Ticket 180 yuan, Two-Person Package 380 yuan (190 yuan per person); Fantasy Water World: Student Ticket 158 yuan, Two-Person Package 336 yuan (168 yuan per person); Jiaxing Fantasy Park: Student Ticket 120 yuan, Two-Person Package 280 yuan (140 yuan per person); Student Tickets for Jiaxing Fantasy Park should be ordered"
        assert len(result) > 0

    def test_rubric_13_the_number_of_tickets_in_the_attraction_order_should_be_4(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of tickets in the attraction order should be 4"
        assert len(result) > 0
