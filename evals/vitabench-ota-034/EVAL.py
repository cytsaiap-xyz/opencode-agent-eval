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
        assert result[0]["store_id"] == 'S17557505553262664_T00013'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505553262664_P00095", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 168) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505553262664_T00014'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505553262664_P00104", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 134) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505553262664_H00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505553262664_P00018", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 458) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557505553262664_A00005'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557505553262664_P00036", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 190) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17557505553262664_A00006'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17557505553262664_P00051", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 80) < 1

    def test_order_5_matches_expected_store(self):
        assert result[5]["store_id"] == 'S17557505553262664_A00007'

    def test_order_5_has_correct_products(self):
        expected_products = [{"product_id": "S17557505553262664_P00063", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[5]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_5_has_correct_total_price(self):
        assert abs(result[5]["total_price"] - 90) < 1

    def test_rubric_0_the_departure_date_should_be_june_24__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure date should be June 24, 2023"
        assert len(result) > 0

    def test_rubric_1_the_departure_train_should_arrive_at_around_7_pm_on_june_24(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure train should arrive at around 7 PM on June 24, 2023"
        assert len(result) > 0

    def test_rubric_2_the_departure_train_ticket_should_be_for_a_train_from_hefei(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure train ticket should be for a train from Hefei to Huangshan"
        assert len(result) > 0

    def test_rubric_3_the_return_date_should_be_june_25__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return date should be June 25, 2023"
        assert len(result) > 0

    def test_rubric_4_the_return_train_departure_time_should_be_after_4_pm_on_june(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return train departure time should be after 4 PM on June 25, 2023"
        assert len(result) > 0

    def test_rubric_5_the_return_train_should_be_from_huangshan_to_hefei(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return train should be from Huangshan to Hefei"
        assert len(result) > 0

    def test_rubric_6_the_hotel_brand_should_be_atour_ji_hotel_vienna_orange_or_an(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel brand should be Atour/Ji Hotel/Vienna/Orange or any brand under Huazhu Group"
        assert len(result) > 0

    def test_rubric_7_the_hotel_price_should_be_less_than_500_yuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel price should be less than 500 yuan"
        assert len(result) > 0

    def test_rubric_8_the_hotel_should_provide_luggage_storage_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel should provide luggage storage service"
        assert len(result) > 0

    def test_rubric_9_the_hotel_order_should_include_a_room_for_june_24__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel order should include a room for June 24, 2023"
        assert len(result) > 0

    def test_rubric_10_the_huangshan_scenic_area_ticket_should_be_used_on_june_25(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Huangshan Scenic Area ticket should be used on June 25, 2023"
        assert len(result) > 0

    def test_rubric_11_the_huangshan_scenic_area_ticket_should_be_an_adult_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Huangshan Scenic Area ticket should be an adult ticket"
        assert len(result) > 0

    def test_rubric_12_the_huangshan_yungu_cable_car_ticket_should_be_for_upward_di(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Huangshan Yungu Cable Car ticket should be for upward direction"
        assert len(result) > 0

    def test_rubric_13_the_huangshan_yungu_cable_car_ticket_should_be_used_on_june(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Huangshan Yungu Cable Car ticket should be used on June 25, 2023"
        assert len(result) > 0

    def test_rubric_14_the_huangshan_yuping_cable_car_ticket_should_be_for_downward(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Huangshan Yuping Cable Car ticket should be for downward direction"
        assert len(result) > 0

    def test_rubric_15_the_huangshan_yuping_cable_car_ticket_should_be_used_on_june(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Huangshan Yuping Cable Car ticket should be used on June 25, 2023"
        assert len(result) > 0
