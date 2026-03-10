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
        assert result[0]["store_id"] == 'S17557505541891707_T00012'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505541891707_P00093", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1659) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505541891707_T00012'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505541891707_P00090", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1659) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505541891707_T00014'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505541891707_P00104", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 1659) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557505541891707_A00006'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557505541891707_P00041", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 480) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17557505541891707_H00002'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17557505541891707_P00010", "quantity": 1}, {"product_id": "S17557505541891707_P00011", "quantity": 1}, {"product_id": "S17557505541891707_P00015", "quantity": 1}, {"product_id": "S17557505541891707_P00018", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 1392) < 1

    def test_rubric_0_the_order_status_of_train_ticket_from_chengdu_to_guiyang_nor(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order status of train ticket from Chengdu to Guiyang North on July 31, 2021 should be cancelled"
        assert len(result) > 0

    def test_rubric_1_the_train_number_for_august_7__2021_should_be_g2954(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train number for August 7, 2021 should be G2954"
        assert len(result) > 0

    def test_rubric_2_the_quantity_of_train_tickets_for_august_7__2021_should_be_3(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of train tickets for August 7, 2021 should be 3"
        assert len(result) > 0

    def test_rubric_3_the_order_status_of_train_tickets_for_august_7__2021_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order status of train tickets for August 7, 2021 should be paid"
        assert len(result) > 0

    def test_rubric_4_the_train_ticket_for_august_9__2021_should_be_from_guiyang_n(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket for August 9, 2021 should be from Guiyang North to Chengdu"
        assert len(result) > 0

    def test_rubric_5_the_quantity_of_train_tickets_for_august_9__2021_should_be_3(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of train tickets for August 9, 2021 should be 3"
        assert len(result) > 0

    def test_rubric_6_the_order_status_of_train_tickets_for_august_9__2021_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order status of train tickets for August 9, 2021 should be paid"
        assert len(result) > 0

    def test_rubric_7_the_scenic_spot_ordered_should_be_libo_xiaoqikong_scenic_are(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The scenic spot ordered should be Libo Xiaoqikong Scenic Area"
        assert len(result) > 0

    def test_rubric_8_the_scenic_spot_tickets_should_include_sightseeing_bus_ticke(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The scenic spot tickets should include Sightseeing Bus tickets"
        assert len(result) > 0

    def test_rubric_9_the_quantity_of_scenic_spot_tickets_should_be_3(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of scenic spot tickets should be 3"
        assert len(result) > 0

    def test_rubric_10_the_date_of_use_for_the_scenic_spot_tickets_should_be_august(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date of use for the scenic spot tickets should be August 8, 2021"
        assert len(result) > 0

    def test_rubric_11_the_hotel_should_be_within_2km_of_guiyang_north_railway_stat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel should be within 2km of Guiyang North Railway Station"
        assert len(result) > 0

    def test_rubric_12_the_booking_dates_for_the_twin_room_in_the_hotel_order_shoul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booking dates for the Twin Room in the hotel order should be August 7, 2021 and August 8, 2021"
        assert len(result) > 0

    def test_rubric_13_the_booking_dates_for_the_king_room_in_the_hotel_order_shoul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booking dates for the King Room in the hotel order should be August 7, 2021 and August 8, 2021"
        assert len(result) > 0

    def test_rubric_14_the_hotel_budget_should_be_300_500_yuan_per_night(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel budget should be 300-500 yuan per night"
        assert len(result) > 0
