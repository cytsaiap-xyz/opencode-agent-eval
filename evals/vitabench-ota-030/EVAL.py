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
        assert result[0]["store_id"] == 'S17557506430524719_T00012'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557506430524719_P00090", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 336) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557506430524719_T00014'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557506430524719_P00102", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 350) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557506430524719_H00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557506430524719_P00003", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 768) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557506430524719_A00005'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557506430524719_P00036", "quantity": 1}, {"product_id": "S17557506430524719_P00037", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 300) < 1

    def test_rubric_0_the_departure_date_should_be_april_12__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure date should be April 12, 2025"
        assert len(result) > 0

    def test_rubric_1_the_departure_train_should_not_be_scheduled_too_early_in_the(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure train should not be scheduled too early in the day"
        assert len(result) > 0

    def test_rubric_2_the_departure_train_ticket_should_be_from_nanchang_to_wuyi_m(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure train ticket should be from Nanchang to Wuyi Mountain"
        assert len(result) > 0

    def test_rubric_3_the_number_of_departure_train_tickets_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of departure train tickets should be 2"
        assert len(result) > 0

    def test_rubric_4_the_return_date_should_be_april_13__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return date should be April 13, 2025"
        assert len(result) > 0

    def test_rubric_5_the_return_train_should_not_be_scheduled_to_arrive_too_late(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return train should not be scheduled to arrive too late"
        assert len(result) > 0

    def test_rubric_6_the_return_train_should_be_from_wuyi_mountain_to_nanchang(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return train should be from Wuyi Mountain to Nanchang"
        assert len(result) > 0

    def test_rubric_7_the_number_of_return_train_tickets_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of return train tickets should be 2"
        assert len(result) > 0

    def test_rubric_8_the_booked_hotel_should_feature_local_tea_culture(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel should feature local tea culture"
        assert len(result) > 0

    def test_rubric_9_the_hotel_price_should_be_between_500_1000_yuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel price should be between 500-1000 yuan"
        assert len(result) > 0

    def test_rubric_10_the_hotel_room_type_should_be_a_twin_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel room type should be a twin room"
        assert len(result) > 0

    def test_rubric_11_the_hotel_should_provide_robot_food_delivery_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel should provide Robot Food Delivery service"
        assert len(result) > 0

    def test_rubric_12_the_hotel_reservation_should_include_a_room_for_april_12__20(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel reservation should include a room for April 12, 2025"
        assert len(result) > 0

    def test_rubric_13_the_attraction_to_be_booked_should_be_the_wuyi_mountain_ecol(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction to be booked should be the Wuyi Mountain Ecological Tea Garden"
        assert len(result) > 0

    def test_rubric_14_the_attraction_tickets_should_include_tea_making_experience(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction tickets should include tea-making experience"
        assert len(result) > 0

    def test_rubric_15_the_number_of_attraction_tickets_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of attraction tickets should be 2"
        assert len(result) > 0

    def test_rubric_16_the_date_of_use_for_the_attraction_tickets_should_be_april_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date of use for the attraction tickets should be April 13, 2025"
        assert len(result) > 0
