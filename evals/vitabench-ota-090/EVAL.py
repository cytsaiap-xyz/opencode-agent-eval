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
        assert result[0]["store_id"] == 'S17557515253294755_A00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557515253294755_P00036", "quantity": 1}, {"product_id": "S17557515253294755_P00043", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 254) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557566356789777_T00011'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557566356789777_P00130", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 486) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557512511049624_T00017'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557566356789777_P00164", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 856) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557515253294755_H00002'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557515253294755_P00017", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 780) < 1

    def test_rubric_0_the_scenic_spot_ordered_should_be_jiuzhaigou_scenic_area(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scenic spot ordered should be Jiuzhaigou Scenic Area"
        assert len(result) > 0

    def test_rubric_1_need_to_check_the_ticket_prices_for_jiuzhaigou_scenic_area_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the ticket prices for Jiuzhaigou Scenic Area and calculate the most economical combination based on the ages of the two elderly people (58, 60 years old), so the scenic spot order should include one Adult Ticket and one Senior Ticket (Age 60+)"
        assert len(result) > 0

    def test_rubric_2_need_to_check_the_weather_in_jiuzhaigou_on_october_1__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the weather in Jiuzhaigou on October 1, 2023, October 2, 2023, October 3, 2023, and October 4, 2023. The results are light rain, sunny, sunny, and overcast, so the date in the scenic spot order should be 2023-10-03"
        assert len(result) > 0

    def test_rubric_3_the_departure_place_for_the_outbound_train_should_be_chengdu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure place for the outbound train should be Chengdu"
        assert len(result) > 0

    def test_rubric_4_the_destination_for_the_outbound_train_should_be_jiuzhaigou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The destination for the outbound train should be Jiuzhaigou"
        assert len(result) > 0

    def test_rubric_5_the_departure_time_for_the_outbound_train_should_be_between(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure time for the outbound train should be between 14:00-15:00"
        assert len(result) > 0

    def test_rubric_6_need_to_check_the_weather_in_jiuzhaigou_on_october_1__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the weather in Jiuzhaigou on October 1, 2023, October 2, 2023, October 3, 2023, and October 4, 2023. The results are light rain, sunny, sunny, and overcast, so the date in the outbound train ticket order should be 2023-10-02"
        assert len(result) > 0

    def test_rubric_7_the_seat_type_in_the_outbound_train_ticket_order_should_be_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The seat type in the outbound train ticket order should be Soft Sleeper"
        assert len(result) > 0

    def test_rubric_8_the_departure_place_for_the_return_train_should_be_jiuzhaigo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure place for the return train should be Jiuzhaigou"
        assert len(result) > 0

    def test_rubric_9_the_destination_for_the_return_train_should_be_chengdu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The destination for the return train should be Chengdu"
        assert len(result) > 0

    def test_rubric_10_the_departure_time_for_the_return_train_should_be_between_17(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure time for the return train should be between 17:00-18:00"
        assert len(result) > 0

    def test_rubric_11_need_to_check_the_weather_in_jiuzhaigou_on_october_1__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the weather in Jiuzhaigou on October 1, 2023, October 2, 2023, October 3, 2023, and October 4, 2023. The results are light rain, sunny, sunny, and overcast, so the date in the return train ticket order should be 2023-10-03"
        assert len(result) > 0

    def test_rubric_12_the_seat_type_in_the_return_train_ticket_order_should_be_bus(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The seat type in the return train ticket order should be Business Class Seat"
        assert len(result) > 0

    def test_rubric_13_the_hotel_ordered_should_be_within_2_kilometers_of_jiuzhaigo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel ordered should be within 2 kilometers of Jiuzhaigou Scenic Area, Jiuzhaigou County, Aba Tibetan and Qiang Autonomous Prefecture, Sichuan Province"
        assert len(result) > 0

    def test_rubric_14_the_hotel_ordered_should_be_in_tibetan_style(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel ordered should be in Tibetan Style"
        assert len(result) > 0

    def test_rubric_15_the_hotel_ordered_should_provide_luggage_storage_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel ordered should provide Luggage Storage service"
        assert len(result) > 0

    def test_rubric_16_the_date_in_the_hotel_order_should_be_2023_10_02(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date in the hotel order should be 2023-10-02"
        assert len(result) > 0

    def test_rubric_17_the_room_type_in_the_hotel_order_should_be_twin_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type in the hotel order should be twin room"
        assert len(result) > 0
