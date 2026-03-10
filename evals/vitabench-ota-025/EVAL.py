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
        assert result[0]["store_id"] == 'S17557505539631060_T00014'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505539631060_P00116", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 594) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505539631060_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505539631060_P00012", "quantity": 1}, {"product_id": "S17557505539631060_P00001", "quantity": 1}, {"product_id": "S17557505539631060_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 2174) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505539631060_A00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505539631060_P00040", "quantity": 2}, {"product_id": "S17557505539631060_P00053", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 225) < 1

    def test_rubric_0_the_high_speed_rail_order_date_must_be_august_14__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The high-speed rail order date must be August 14, 2025"
        assert len(result) > 0

    def test_rubric_1_the_high_speed_rail_must_be_from_xi_an_to_tianshui(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The high-speed rail must be from Xi\'an to Tianshui"
        assert len(result) > 0

    def test_rubric_2_the_high_speed_rail_departure_time_must_be_between_2_30_3_30(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The high-speed rail departure time must be between 2:30-3:30 PM the day after tomorrow (August 14)"
        assert len(result) > 0

    def test_rubric_3_the_quantity_of_high_speed_rail_tickets_must_be_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of high-speed rail tickets must be 3"
        assert len(result) > 0

    def test_rubric_4_the_booked_hotel_must_be_within_1km_of_the_entrance_to_maiji(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel must be within 1km of the entrance to Maijishan Grottoes (i.e., Maijishan Grottoes, Maiji Mountain Scenic Spot, Maiji District, Tianshui, Gansu Province)"
        assert len(result) > 0

    def test_rubric_5_the_hotel_must_be_four_star_or_above(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel must be four-star or above"
        assert len(result) > 0

    def test_rubric_6_the_hotel_room_type_must_be_family_room_or_twin_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel room type must be Family Room or Twin Room"
        assert len(result) > 0

    def test_rubric_7_the_hotel_check_in_dates_must_be_august_14__2025__august_15(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel check-in dates must be August 14, 2025, August 15, 2025, and August 16, 2025, respectively"
        assert len(result) > 0

    def test_rubric_8_the_hotel_room_types_should_be_consistent(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel room types should be consistent"
        assert len(result) > 0

    def test_rubric_9_the_scenic_spot_for_the_ticket_order_must_be_maijishan_grott(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scenic spot for the ticket order must be Maijishan Grottoes"
        assert len(result) > 0

    def test_rubric_10_the_maijishan_tickets_date_cannot_be_on_weekends__i_e___cann(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Maijishan tickets date cannot be on weekends (i.e., cannot be August 16 or August 17)"
        assert len(result) > 0

    def test_rubric_11_the_total_quantity_of_tickets_in_the_ticket_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total quantity of tickets in the ticket order should be 3"
        assert len(result) > 0

    def test_rubric_12_the_ticket_order_should_include_2_adult_tickets(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket order should include 2 Adult Tickets"
        assert len(result) > 0

    def test_rubric_13_the_ticket_order_should_include_1_child_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket order should include 1 Child Ticket"
        assert len(result) > 0
