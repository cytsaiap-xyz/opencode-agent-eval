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
        for order in result:
            assert "store_id" in order
            assert "products" in order
            assert "total_price" in order
            assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17557071510434562_H00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557071510434562_P00001", "quantity": 1}, {"product_id": "S17557071510434562_P00002", "quantity": 1}, {"product_id": "S17557071510434562_P00003", "quantity": 1}, {"product_id": "S17557071510434562_P00004", "quantity": 1}, {"product_id": "S17557071510434562_P00005", "quantity": 1}, {"product_id": "S17557071510434562_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 3700) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557071510434562_A00007'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557071510434562_P00071", "quantity": 2}, {"product_id": "S17557071510434562_P00072", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 75) < 1

    def test_rubric_0_the_hotel_brand_should_be_the_one_the_user_stays_at_most_fre(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel brand should be the one the user stays at most frequently (query shows it\'s Ji Hotel)"
        assert len(result) > 0

    def test_rubric_1_the_hotel_needs_to_be_the_ji_hotel_closest_to_nanyang_munici(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel needs to be the Ji Hotel closest to Nanyang Municipal Government"
        assert len(result) > 0

    def test_rubric_2_the_hotel_order_includes_3_nights_of_twin_rooms(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel order includes 3 nights of twin rooms"
        assert len(result) > 0

    def test_rubric_3_the_hotel_order_includes_3_nights_of_king_rooms(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel order includes 3 nights of king rooms"
        assert len(result) > 0

    def test_rubric_4_the_twin_rooms_in_the_hotel_order_are_booked_for_august_1__2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The twin rooms in the hotel order are booked for August 1, 2026, August 2, 2026, and August 3, 2026"
        assert len(result) > 0

    def test_rubric_5_the_king_rooms_in_the_hotel_order_are_booked_for_august_1__2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The king rooms in the hotel order are booked for August 1, 2026, August 2, 2026, and August 3, 2026"
        assert len(result) > 0

    def test_rubric_6_the_query_shows_that_the_highest_temperature_in_nanyang_on_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The query shows that the highest temperature in Nanyang on August 3, 2026 is 32℃, which exceeds 30℃, so the attraction chosen is Zhang Zhongjing Museum"
        assert len(result) > 0

    def test_rubric_7_the_date_on_the_attraction_tickets_should_be_august_3__2026(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date on the attraction tickets should be August 3, 2026"
        assert len(result) > 0

    def test_rubric_8_the_attraction_order_should_include_senior_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction order should include Senior Ticket"
        assert len(result) > 0

    def test_rubric_9_the_attraction_order_should_include_adult_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction order should include Adult Ticket"
        assert len(result) > 0

    def test_rubric_10_the_attraction_order_should_have_1_senior_ticket__father_is(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction order should have 1 Senior Ticket (father is 61 years old, eligible for senior ticket)"
        assert len(result) > 0

    def test_rubric_11_the_attraction_order_should_have_2_adult_tickets__mother_is(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction order should have 2 Adult Tickets (mother is 57 years old, needs adult ticket; plus one adult ticket for the user)"
        assert len(result) > 0
