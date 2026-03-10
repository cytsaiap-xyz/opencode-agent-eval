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
        assert result[0]["store_id"] == 'S17557505482126205_T00012'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505482126205_P00070", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1256) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505482126205_T00014'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505482126205_P00080", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1258) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505482126205_H00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505482126205_P00001", "quantity": 1}, {"product_id": "S17557505482126205_P00003", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 976) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557505482126205_A00008'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557505482126205_P00051", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 25) < 1

    def test_rubric_0_the_outbound_train_is_from_qingdao_to_luohe(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound train is from Qingdao to Luohe"
        assert len(result) > 0

    def test_rubric_1_planning_to_depart_the_day_after_qixi_festival__which_falls(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Planning to depart the day after Qixi Festival, which falls on August 10, 2024, so the outbound train ticket date should be August 11, 2024"
        assert len(result) > 0

    def test_rubric_2_the_outbound_train_ticket_is_for_a_business_class_seat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound train ticket is for a Business class seat"
        assert len(result) > 0

    def test_rubric_3_the_return_train_is_from_luohe_to_qingdao(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return train is from Luohe to Qingdao"
        assert len(result) > 0

    def test_rubric_4_planning_to_depart_the_day_after_qixi_festival__which_falls(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Planning to depart the day after Qixi Festival, which falls on August 10, 2024, so the outbound date should be August 11, 2024, staying for two nights and returning on August 13, 2024"
        assert len(result) > 0

    def test_rubric_5_the_return_train_ticket_is_for_a_business_class_seat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return train ticket is for a Business class seat"
        assert len(result) > 0

    def test_rubric_6_the_departure_time_for_the_return_train_is_in_the_afternoon(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure time for the return train is in the afternoon of that day"
        assert len(result) > 0

    def test_rubric_7_planning_to_depart_the_day_after_qixi_festival__which_falls(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Planning to depart the day after Qixi Festival, which falls on August 10, 2024, staying for two nights, so the hotel booking dates should be August 11, 2024 and August 12, 2024"
        assert len(result) > 0

    def test_rubric_8_the_booked_hotel_should_be_within_3km_of_xinmart_shopping_pl(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel should be within 3km of Xinmart Shopping Plaza"
        assert len(result) > 0

    def test_rubric_9_the_total_price_for_the_two_nights_at_the_hotel_should_not_e(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total price for the two nights at the hotel should not exceed 1000 yuan"
        assert len(result) > 0

    def test_rubric_10_checking_whether_luohe_has_historical_sites__exhibition_hall(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Checking whether Luohe has historical sites, exhibition halls (museums/art galleries), natural landscapes (mountains/lakes/forests), or hot spring scenic areas (Luohe Museum matches the user\'s preferences), and the purchased ticket is for Luohe Museum"
        assert len(result) > 0

    def test_rubric_11_planning_to_depart_the_day_after_qixi_festival__which_falls(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Planning to depart the day after Qixi Festival, which falls on August 10, 2024, staying for two nights, so the return date is August 13, 2024, and the attraction ticket is booked for August 13, 2024"
        assert len(result) > 0

    def test_rubric_12_the_purchased_ticket_is_an_adult_ticket(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The purchased ticket is an adult ticket"
        assert len(result) > 0
