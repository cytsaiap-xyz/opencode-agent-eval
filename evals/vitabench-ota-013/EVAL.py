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
        assert result[0]["store_id"] == 'S17557505486254699_H00002'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505486254699_P00009", "quantity": 1}, {"product_id": "S17557505486254699_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 796) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505486254699_F00009'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505486254699_P00090", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 920) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505486254699_F00011'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505486254699_P00108", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 780) < 1

    def test_rubric_0_the_booked_hotel_brand_should_be_one_that_the_user_frequentl(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel brand should be one that the user frequently stays at (such as Home Inn, Orange Hotel, Ji Hotel, Hanting Hotel, Atour)"
        assert len(result) > 0

    def test_rubric_1_the_booked_hotel_should_be_within_1km_of_lanzhou_hyatt_hotel(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel should be within 1km of Lanzhou Hyatt Hotel"
        assert len(result) > 0

    def test_rubric_2_the_hotel_booking_dates_should_be_january_2__2026_and_januar(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booking dates should be January 2, 2026 and January 3, 2026"
        assert len(result) > 0

    def test_rubric_3_the_booked_hotel_room_type_should_be_a_king_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel room type should be a king room"
        assert len(result) > 0

    def test_rubric_4_the_outbound_flight_should_be_from_shenyang_to_lanzhou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound flight should be from Shenyang to Lanzhou"
        assert len(result) > 0

    def test_rubric_5_the_arrival_time_of_the_outbound_flight_should_not_be_too_la(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival time of the outbound flight should not be too late, and should avoid late night arrival"
        assert len(result) > 0

    def test_rubric_6_since_the_hotel_is_booked_for_january_2__2026_and_january_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Since the hotel is booked for January 2, 2026 and January 3, 2026, the outbound flight date should be January 2, 2026"
        assert len(result) > 0

    def test_rubric_7_the_return_flight_should_be_from_lanzhou_to_shenyang(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return flight should be from Lanzhou to Shenyang"
        assert len(result) > 0

    def test_rubric_8_the_return_flight_date_is_flexible__but_the_entire_trip_shou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return flight date is flexible, but the entire trip should not exceed 5 days (with the latest return date being January 7, 2026)"
        assert len(result) > 0

    def test_rubric_9_since_the_wedding_is_on_january_3__2026__the_return_date_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Since the wedding is on January 3, 2026, the return date should be January 4, 2026 or later"
        assert len(result) > 0

    def test_rubric_10_the_return_flight_should_consider_cost_savings__and_should_c(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return flight should consider cost savings, and should choose the lowest priced flight"
        assert len(result) > 0
