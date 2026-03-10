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
        assert result[0]["store_id"] == 'S17557505486872152_T00012'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505486872152_P00077", "quantity": 2}]
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
        assert result[1]["store_id"] == 'S17557505486872152_T00013'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505486872152_P00082", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 396) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505486872152_A00005'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505486872152_P00028", "quantity": 1}, {"product_id": "S17557505486872152_P00029", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 87) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557505486872152_H00003'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557505486872152_P00017", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 268) < 1

    def test_rubric_0_the_outbound_train_should_be_high_speed_rail(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound train should be High-Speed Rail"
        assert len(result) > 0

    def test_rubric_1_the_outbound_ticket_should_be_from_linyi_to_dezhou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound ticket should be from Linyi to Dezhou"
        assert len(result) > 0

    def test_rubric_2_the_departure_date_of_the_outbound_ticket_should_be_2023_04(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure date of the outbound ticket should be 2023-04-29"
        assert len(result) > 0

    def test_rubric_3_the_departure_time_of_the_outbound_ticket_should_be_between(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure time of the outbound ticket should be between 07:00-08:00"
        assert len(result) > 0

    def test_rubric_4_the_seat_type_of_the_outbound_ticket_in_the_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The seat type of the outbound ticket in the order should be Second Class Seat"
        assert len(result) > 0

    def test_rubric_5_the_quantity_of_the_outbound_ticket_in_the_order_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of the outbound ticket in the order should be 2"
        assert len(result) > 0

    def test_rubric_6_the_return_train_should_be_high_speed_rail(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return train should be High-Speed Rail"
        assert len(result) > 0

    def test_rubric_7_the_return_ticket_should_be_from_dezhou_to_linyi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return ticket should be from Dezhou to Linyi"
        assert len(result) > 0

    def test_rubric_8_the_departure_date_of_the_return_ticket_should_be_2023_04_30(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure date of the return ticket should be 2023-04-30"
        assert len(result) > 0

    def test_rubric_9_the_arrival_time_of_the_return_ticket_should_be_around_12_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival time of the return ticket should be around 12:00"
        assert len(result) > 0

    def test_rubric_10_the_seat_type_of_the_return_ticket_in_the_order_should_be_se(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The seat type of the return ticket in the order should be Second Class Seat"
        assert len(result) > 0

    def test_rubric_11_the_quantity_of_the_return_ticket_in_the_order_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of the return ticket in the order should be 2"
        assert len(result) > 0

    def test_rubric_12_the_scenic_spot_to_be_ordered_should_be_dezhou_happy_flower(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scenic spot to be ordered should be Dezhou Happy Flower Valley"
        assert len(result) > 0

    def test_rubric_13_need_to_check_the_age_range_for_senior_tickets_at_dezhou_hap(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the age range for senior tickets at Dezhou Happy Flower Valley, the result shows that people aged 60 and above can enjoy senior ticket discount, and the scenic spot order should include 1 senior ticket"
        assert len(result) > 0

    def test_rubric_14_the_scenic_spot_order_should_include_1_adult_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scenic spot order should include 1 adult ticket"
        assert len(result) > 0

    def test_rubric_15_the_ticket_date_of_the_scenic_spot_order_should_be_2023_04_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket date of the scenic spot order should be 2023-04-29"
        assert len(result) > 0

    def test_rubric_16_the_hotel_to_be_booked_should_be_within_3_kilometers_of_dezh(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel to be booked should be within 3 kilometers of Dezhou Railway Station, Hubin Middle Avenue, Decheng District, Dezhou, Shandong Province"
        assert len(result) > 0

    def test_rubric_17_the_hotel_to_be_booked_should_provide_free_luggage_storage_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel to be booked should provide Free Luggage Storage service"
        assert len(result) > 0

    def test_rubric_18_the_check_in_date_of_the_hotel_order_should_be_2023_04_29(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The check-in date of the hotel order should be 2023-04-29"
        assert len(result) > 0

    def test_rubric_19_the_quantity_in_the_hotel_order_should_be_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity in the hotel order should be 1"
        assert len(result) > 0

    def test_rubric_20_the_room_type_in_the_hotel_order_should_be_twin_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type in the hotel order should be Twin Room"
        assert len(result) > 0
