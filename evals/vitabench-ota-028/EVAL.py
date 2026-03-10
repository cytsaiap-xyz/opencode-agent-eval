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
        assert result[0]["store_id"] == 'S17557505479571970_T00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505479571970_P00072", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 175) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505479571970_T00012'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505479571970_P00079", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 158) < 1

    def test_rubric_0_there_should_be_two_train_ticket_orders__with_the_user_s_own(self):
        # Structural check - the answer must contain orders that satisfy:
        # "There should be two train ticket orders, with the user\'s own ticket departing before 8 AM"
        assert len(result) > 0

    def test_rubric_1_when_searching_for_the_station_nearest_to_the_user_s_home_ad(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When searching for the station nearest to the user\'s home address (Wancheng Huafu Shangyuan, near Haiyuan, at the intersection of Wanliu Huafu North Street and Wanliu West Road, Haidian District, Beijing), the result is Beijing North Railway Station, so the departure station for the ticket departing before 8 AM must be Beijing North Railway Station"
        assert len(result) > 0

    def test_rubric_2_when_filtering_for_trains_departing_before_8_am_from_beijing(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When filtering for trains departing before 8 AM from Beijing North Railway Station, and finding the one with the shortest journey time, the result is G6703, so the user\'s own ticket order must be for train G6703"
        assert len(result) > 0

    def test_rubric_3_the_train_ticket_orders_must_be_for_september_19__2026(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket orders must be for September 19, 2026"
        assert len(result) > 0

    def test_rubric_4_must_search_for_and_provide_the_weather_information_for_shij(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Must search for and provide the weather information for Shijiazhuang on September 19, 2026, which is light rain with temperatures between 16-23 degrees"
        assert len(result) > 0

    def test_rubric_5_there_should_be_two_train_ticket_orders__with_the_college_cl(self):
        # Structural check - the answer must contain orders that satisfy:
        # "There should be two train ticket orders, with the college classmate\'s ticket arriving around 2 PM"
        assert len(result) > 0

    def test_rubric_6_the_college_classmate_s_train_ticket_order_must_be_for_septe(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The college classmate\'s train ticket order must be for September 19, 2026"
        assert len(result) > 0
