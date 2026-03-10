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
        assert result[0]["store_id"] == 'S17557112364479019_T00012'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557548456137169_P00068", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 4050) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505487758769_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505487758769_P00012", "quantity": 1}, {"product_id": "S17557505487758769_P00002", "quantity": 1}, {"product_id": "S17557505487758769_P00006", "quantity": 1}, {"product_id": "S17557505487758769_P00003", "quantity": 1}, {"product_id": "S17557505487758769_P00001", "quantity": 1}, {"product_id": "S17557505487758769_P00005", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 3400) < 1

    def test_rubric_0_the_departure_must_be_from_nanning__user_s_residence(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure must be from Nanning (user\'s residence)"
        assert len(result) > 0

    def test_rubric_1_the_destination_must_be_yan_an(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The destination must be Yan\'an"
        assert len(result) > 0

    def test_rubric_2_the_arrival_time_must_be_october_8__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival time must be October 8, 2023"
        assert len(result) > 0

    def test_rubric_3_need_to_check_train_tickets_first__with_the_result_showing_t(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check train tickets first, with the result showing that the train journey takes more than 12 hours, so air travel must be chosen instead of train"
        assert len(result) > 0

    def test_rubric_4_the_flight_ticket_should_be_for_the_shortest_flight__which_i(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flight ticket should be for the shortest flight, which is CA1834"
        assert len(result) > 0

    def test_rubric_5_the_quantity_for_the_flight_ticket_order_should_be_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity for the flight ticket order should be 3"
        assert len(result) > 0

    def test_rubric_6_the_homestay_booking_must_be_a_renovated_traditional_cave_dw(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The homestay booking must be a renovated traditional Cave Dwelling homestay"
        assert len(result) > 0

    def test_rubric_7_the_homestay_booking_must_preserve_architectural_features(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The homestay booking must preserve architectural features"
        assert len(result) > 0

    def test_rubric_8_the_homestay_booking_must_have_modern_amenities(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The homestay booking must have Modern Amenities"
        assert len(result) > 0

    def test_rubric_9_the_homestay_booking_must_include_3_nights_in_a_twin_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The homestay booking must include 3 nights in a twin room"
        assert len(result) > 0

    def test_rubric_10_the_homestay_booking_must_include_3_nights_in_a_king_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The homestay booking must include 3 nights in a king room"
        assert len(result) > 0

    def test_rubric_11_the_check_in_dates_for_the_twin_room_must_be_october_8__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The check-in dates for the twin room must be October 8, 2023, October 9, 2023, and October 10, 2023 respectively"
        assert len(result) > 0

    def test_rubric_12_the_check_in_dates_for_the_king_room_must_be_october_8__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The check-in dates for the king room must be October 8, 2023, October 9, 2023, and October 10, 2023 respectively"
        assert len(result) > 0

    def test_rubric_13_need_to_inquire_about_all_youth_related_scenic_spots__with_r(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to inquire about all youth-related scenic spots, with results showing Yan\'an Youth Museum and Yan\'an Rural Life Experience Park including historical sites such as schools, supply and marketing cooperatives, or collective farm sites from that era"
        assert len(result) > 0
