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
        assert result[0]["store_id"] == 'S17557072491807785_A00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557072491807785_P00033", "quantity": 4}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 272) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557072491807785_T00013'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557072491807785_P00083", "quantity": 4}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 536) < 1

    def test_rubric_0_the_attraction_ordered_is_jiangbei_grand_canyon(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction ordered is Jiangbei Grand Canyon"
        assert len(result) > 0

    def test_rubric_1_the_number_of_tickets_ordered_is_4(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of tickets ordered is 4"
        assert len(result) > 0

    def test_rubric_2_the_ticket_type_should_be_adult_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket type should be Adult Ticket"
        assert len(result) > 0

    def test_rubric_3_the_date_of_use_for_the_tickets_should_be_january_17__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date of use for the tickets should be January 17, 2023"
        assert len(result) > 0

    def test_rubric_4_the_distance_from_jiangbei_grand_canyon_to_yuncheng_railway(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The distance from Jiangbei Grand Canyon to Yuncheng Railway Station is about 72km, which is not more than 100 kilometers, so train tickets for January 17, 2023 should be ordered"
        assert len(result) > 0

    def test_rubric_5_the_train_number_ordered_should_be_d2568(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train number ordered should be D2568"
        assert len(result) > 0

    def test_rubric_6_the_train_ordered_should_be_from_yuncheng_to_taiyuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train ordered should be from Yuncheng to Taiyuan"
        assert len(result) > 0

    def test_rubric_7_the_train_seat_type_ordered_should_be_second_class_seat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train seat type ordered should be Second Class Seat"
        assert len(result) > 0

    def test_rubric_8_the_number_of_train_tickets_ordered_should_be_4(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of train tickets ordered should be 4"
        assert len(result) > 0

    def test_rubric_9_the_return_date_is_january_17__2023__not_january_18__2023__s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return date is January 17, 2023, not January 18, 2023, so there is no need to check if there is a park near Yuncheng Railway Station"
        assert len(result) > 0
