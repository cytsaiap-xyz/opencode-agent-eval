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
        assert result[0]["store_id"] == 'S17550802145136245_S00002'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802145136245_P00007", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 24.9) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802145136245_I00011'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802145136245_P00059", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 188) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802145136245_T00009'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802145136245_P00045", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 147.5) < 1

    def test_rubric_0_the_takeout_food_ordered_must_be_chicken_soup_rice(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The takeout food ordered must be chicken soup rice"
        assert len(result) > 0

    def test_rubric_1_the_takeout_food_ordered_must_not_contain_carrots(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The takeout food ordered must not contain carrots"
        assert len(result) > 0

    def test_rubric_2_the_price_of_the_takeout_food_should_not_exceed_25_yuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price of the takeout food should not exceed 25 yuan"
        assert len(result) > 0

    def test_rubric_3_the_takeout_order_must_be_delivered_before_2024_12_17_19_20(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The takeout order must be delivered before 2024-12-17 19:20"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_should_be_5th_floor__building_d__changz(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address should be 5th Floor, Building D, Changzhou Software Park, 9 Taihu East Road, Xinbei District, Changzhou, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_5_the_ktv_to_be_booked_should_be_located_within_3km_of_changzh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The KTV to be booked should be located within 3km of Changzhou Wanda Cinema, 4th Floor, Wanda Plaza, 123 Yanling West Road, Zhonglou District, Changzhou, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_6_the_ktv_must_have_good_sound_equipment(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The KTV must have good sound equipment"
        assert len(result) > 0

    def test_rubric_7_the_ktv_package_service_duration_should_be_3_hours(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The KTV package service duration should be 3 hours"
        assert len(result) > 0

    def test_rubric_8_the_ktv_package_specification_should_be_small_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The KTV package specification should be Small Room"
        assert len(result) > 0

    def test_rubric_9_the_train_ticket_to_be_booked_should_be_for_a_departure_on_d(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket to be booked should be for a departure on December 18, 2025"
        assert len(result) > 0

    def test_rubric_10_the_train_ticket_must_be_for_a_morning_departure(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket must be for a morning departure"
        assert len(result) > 0

    def test_rubric_11_need_to_check_for_the_shortest_morning_journey_from_changzho(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check for the shortest morning journey from Changzhou to Huai\'an, with the search result showing train G7681 taking 1 hour 15 minutes (10:05-11:20) as the shortest, and need to book this one"
        assert len(result) > 0
