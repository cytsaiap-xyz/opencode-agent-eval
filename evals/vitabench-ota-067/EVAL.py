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
        assert result[0]["store_id"] == 'S17557512977306832_H00003'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557512977306832_P00012", "quantity": 1}, {"product_id": "S17557512977306832_P00014", "quantity": 1}, {"product_id": "S17557512977306832_P00097", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1374) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557512977306832_A00007'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557512977306832_P00031", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 50) < 1

    def test_rubric_0_the_hotel_booked_should_support_free_cancellation(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booked should support Free cancellation"
        assert len(result) > 0

    def test_rubric_1_need_to_verify_whether_march_9__2025__march_10__2025__and_ma(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to verify whether March 9, 2025, March 10, 2025, and March 11, 2025 are statutory holidays, and the result is no, so the distance between the booked hotel and Jiefangbei Pedestrian Street, 100 Zourong Road, Yuzhong District, Chongqing should be less than or equal to 100 meters"
        assert len(result) > 0

    def test_rubric_2_the_room_type_in_the_hotel_order_should_be_twin_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type in the hotel order should be twin room"
        assert len(result) > 0

    def test_rubric_3_the_hotel_order_should_include_three_nights__which_must_be_m(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel order should include three nights, which must be March 9, 2025, March 10, 2025, and March 11, 2025 respectively"
        assert len(result) > 0

    def test_rubric_4_the_price_of_the_hotel_room_should_be_less_than_or_equal_to(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of the hotel room should be less than or equal to 500 yuan per night"
        assert len(result) > 0

    def test_rubric_5_the_attraction_booked_should_be_baiheliang_underwater_museum(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction booked should be Baiheliang Underwater Museum"
        assert len(result) > 0

    def test_rubric_6_the_ticket_date_in_the_attraction_order_should_be_march_10(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket date in the attraction order should be March 10, 2025"
        assert len(result) > 0

    def test_rubric_7_the_ticket_in_the_attraction_order_should_be_an_adult_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket in the attraction order should be an Adult ticket"
        assert len(result) > 0
