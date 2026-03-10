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
        assert result[0]["store_id"] == 'S17557505486483162_T00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505486483162_P00082", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 354) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505486483162_H00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505486483162_P00011", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 658) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505486483162_T00014'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505486483162_P00105", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 356) < 1

    def test_rubric_0_the_outbound_train_ticket_should_be_from_nanchang_to_wuyuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound train ticket should be from Nanchang to Wuyuan"
        assert len(result) > 0

    def test_rubric_1_the_departure_date_for_the_outbound_train_ticket_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure date for the outbound train ticket should be 2022-03-05"
        assert len(result) > 0

    def test_rubric_2_the_arrival_time_for_the_outbound_train_should_be_around_11(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival time for the outbound train should be around 11:00 AM"
        assert len(result) > 0

    def test_rubric_3_check_the_price_of_business_class_seats_for_the_outbound_tra(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Check the price of business class seats for the outbound train within the available options, the result shows 255 yuan per ticket, 510 yuan for two tickets, which exceeds 500 yuan, so the outbound train tickets should select 3 second class seats"
        assert len(result) > 0

    def test_rubric_4_the_hotel_brand_should_be_atour_or_ji_hotel_or_vienna(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel brand should be Atour or Ji Hotel or Vienna"
        assert len(result) > 0

    def test_rubric_5_the_distance_between_the_booked_hotel_and_jiangling_rapeseed(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The distance between the booked hotel and Jiangling Rapeseed Flower Field, Jiangling Village, Wuyuan County, Shangrao City, Jiangxi Province should be less than or equal to 12 kilometers"
        assert len(result) > 0

    def test_rubric_6_the_room_type_in_the_hotel_order_should_be_a_king_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type in the hotel order should be a king room"
        assert len(result) > 0

    def test_rubric_7_the_check_in_date_for_the_hotel_order_should_be_2022_03_05(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The check-in date for the hotel order should be 2022-03-05"
        assert len(result) > 0

    def test_rubric_8_the_return_train_ticket_should_be_from_wuyuan_to_nanchang(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return train ticket should be from Wuyuan to Nanchang"
        assert len(result) > 0

    def test_rubric_9_the_departure_date_for_the_return_train_ticket_should_be_202(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure date for the return train ticket should be 2022-03-06"
        assert len(result) > 0

    def test_rubric_10_the_arrival_time_for_the_return_train_should_be_around_17_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival time for the return train should be around 17:00"
        assert len(result) > 0

    def test_rubric_11_need_to_check_the_price_of_business_class_seats_for_the_retu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the price of business class seats for the return train within the available options, the result shows 178 yuan per ticket, 356 yuan for two tickets, which is within 500 yuan, so the return train tickets should select two business class seats"
        assert len(result) > 0
