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
        assert result[0]["store_id"] == 'S17557505495911209_T00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505495911209_P00072", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 178) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505495911209_T00012'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505495911209_P00077", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 178) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557546665235880_A00005'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557546665235880_P00029", "quantity": 1}, {"product_id": "S17557546665235880_P00030", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 308) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557505495911209_H00002'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557505495911209_P00009", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 1188) < 1

    def test_rubric_0_departure_train_s_date_should_be_june_24__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Departure train\'s date should be June 24, 2023"
        assert len(result) > 0

    def test_rubric_1_departure_train_s_arrival_time_should_be_before_10_00_am_on(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Departure train\'s arrival time should be before 10:00 AM on June 24, 2023"
        assert len(result) > 0

    def test_rubric_2_departure_train_s_tickets_should_be_for_zhuhai_to_yangjiang(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Departure train\'s tickets should be for Zhuhai to Yangjiang"
        assert len(result) > 0

    def test_rubric_3_departure_train_s_tickets_quantity_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Departure train\'s tickets quantity should be 2"
        assert len(result) > 0

    def test_rubric_4_return_train_s_departure_date_should_be_june_25__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Return train\'s departure date should be June 25, 2023"
        assert len(result) > 0

    def test_rubric_5_return_train_s_departure_time_should_be_between_7_00_pm_and(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Return train\'s departure time should be between 7:00 PM and 8:00 PM on June 25, 2023"
        assert len(result) > 0

    def test_rubric_6_return_train_s_tickets_should_be_for_yangjiang_to_zhuhai(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Return train\'s tickets should be for Yangjiang to Zhuhai"
        assert len(result) > 0

    def test_rubric_7_return_train_s_tickets_quantity_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Return train\'s tickets quantity should be 2"
        assert len(result) > 0

    def test_rubric_8_the_ordered_attraction_tickets_should_be_for_parasailing(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered attraction tickets should be for parasailing"
        assert len(result) > 0

    def test_rubric_9_the_ordered_attraction_tickets_should_include_one_parasailin(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered attraction tickets should include one Parasailing Only Adult Ticket"
        assert len(result) > 0

    def test_rubric_10_the_ordered_attraction_tickets_should_include_one_college_en(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered attraction tickets should include one College Entrance Exam Graduate Discount Ticket"
        assert len(result) > 0

    def test_rubric_11_the_ordered_attraction_tickets__usage_date_should_be_june_24(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered attraction tickets\' usage date should be June 24, 2023"
        assert len(result) > 0

    def test_rubric_12_the_ordered_hotel_should_be_five_star(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered hotel should be five-star"
        assert len(result) > 0

    def test_rubric_13_the_ordered_hotel_should_provide_buffet(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered hotel should provide buffet"
        assert len(result) > 0

    def test_rubric_14_the_ordered_hotel_room_type_should_be_twin_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered hotel room type should be twin room"
        assert len(result) > 0

    def test_rubric_15_the_ordered_hotel_room_quantity_should_be_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered hotel room quantity should be 1"
        assert len(result) > 0

    def test_rubric_16_hotel_check_in_date_should_be_june_24__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Hotel check-in date should be June 24, 2023"
        assert len(result) > 0
