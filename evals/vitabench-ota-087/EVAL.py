import json
import os
import pytest

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)
with open(os.path.join(_dir, "answer.json")) as _f:
    result = json.load(_f)

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
        assert result[0]["store_id"] == 'S17557516207048450_A00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557516207048450_P00046", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 200) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557516207048450_T00010'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557516207048450_P00096", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 170) < 1

    def test_rubric_0_need_to_check_if_danxia_mountain_scenic_area_has_two_day_tic(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check if Danxia Mountain Scenic Area has two-day tickets available, the result shows no tickets available for 2025-06-14, so adult tickets should be purchased instead"
        assert len(result) > 0

    def test_rubric_1_the_ticket_date_for_the_admission_ticket_order_should_be_jun(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket date for the admission ticket order should be June 14, 2025"
        assert len(result) > 0

    def test_rubric_2_the_quantity_for_the_admission_ticket_order_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity for the admission ticket order should be 2"
        assert len(result) > 0

    def test_rubric_3_the_scenic_spot_in_the_admission_ticket_order_must_be_danxia(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The scenic spot in the admission ticket order must be Danxia Mountain Scenic Area"
        assert len(result) > 0

    def test_rubric_4_need_to_check_last_month_s_train_ticket_order_record_to_shao(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check last month\'s train ticket order record to Shaoguan, the result shows: Order ID S17557516207048450_O00001, store_id S17557516207048450_T00010, Train D7541, departing at 08:45 and arriving at 10:23, Second Class Seat for 85 yuan"
        assert len(result) > 0

    def test_rubric_5_the_train_number_in_the_train_ticket_order_must_be_train_d75(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train number in the train ticket order must be Train D7541"
        assert len(result) > 0

    def test_rubric_6_the_seat_type_in_the_train_ticket_order_must_be_second_class(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The seat type in the train ticket order must be Second Class Seat"
        assert len(result) > 0

    def test_rubric_7_the_date_in_the_train_ticket_order_must_be_june_14__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date in the train ticket order must be June 14, 2025"
        assert len(result) > 0

    def test_rubric_8_the_quantity_for_the_train_ticket_order_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity for the train ticket order should be 2"
        assert len(result) > 0

    def test_rubric_9_must_check_the_distance_from_the_railway_station__shaoguan_r(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Must check the distance from the railway station (Shaoguan Railway Station, Zhanqian Road, Zhenjiang District, Shaoguan City, Guangdong Province) to Danxia Mountain (Danxia Mountain Scenic Area, Renhua County, Shaoguan City, Guangdong Province), the result is approximately 20 kilometers"
        assert len(result) > 0
