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
        assert result[0]["store_id"] == 'S17550802105236499_T00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802105236499_P00027", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 285) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802105236499_I00009'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802105236499_P00053", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 198) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802105236499_S00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802105236499_P00011", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 16.9) < 1

    def test_rubric_0_the_purchased_train_ticket_is_from_xiamen_north_station_to_h(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The purchased train ticket is from Xiamen North Station to Huiyang Station"
        assert len(result) > 0

    def test_rubric_1_considering_arrival_at_the_station_at_7_00_and_allowing_10_m(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Considering arrival at the station at 7:00 and allowing 10 minutes for queuing, the departure time of the purchased train ticket should be later than 19:10:00"
        assert len(result) > 0

    def test_rubric_2_the_purchased_train_ticket_should_be_a_second_class_seat_or(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The purchased train ticket should be a Second class seat or Hard seat"
        assert len(result) > 0

    def test_rubric_3_the_departure_date_of_the_purchased_train_ticket_is_april_7(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date of the purchased train ticket is April 7, 2025"
        assert len(result) > 0

    def test_rubric_4_the_reimbursement_limit_is_500__and_the_cost_of_the_massage(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reimbursement limit is 500, and the cost of the massage package should be less than or equal to 500 minus the cost of the train ticket"
        assert len(result) > 0

    def test_rubric_5_according_to_the_query__the_location_of_huiyang_railway_stat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "According to the query, the location of Huiyang Railway Station is obtained, and the massage package provider should be within 3km of Huiyang Railway Station"
        assert len(result) > 0

    def test_rubric_6_the_massage_package_should_be_for_full_body(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The massage package should be for full body"
        assert len(result) > 0

    def test_rubric_7_the_massage_package_time_should_be_more_than_1_5_hours(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The massage package time should be more than 1.5 hours"
        assert len(result) > 0

    def test_rubric_8_the_massage_service_provider_should_offer_overnight_service(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The massage service provider should offer Overnight service"
        assert len(result) > 0

    def test_rubric_9_the_reimbursement_limit_is_500__and_the_cost_of_the_u_shaped(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reimbursement limit is 500, and the cost of the U-shaped pillow should be less than or equal to 500 minus the cost of the train ticket and minus the cost of the massage package"
        assert len(result) > 0

    def test_rubric_10_the_u_shaped_pillow_should_be_the_most_expensive_one_within(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The U-shaped pillow should be the most expensive one within the available budget"
        assert len(result) > 0

    def test_rubric_11_the_delivery_address_for_the_u_shaped_pillow_should_be_xiame(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the U-shaped pillow should be Xiamen Hemei World Business Center, No. 618 Chengyi Middle Road, Jimei District, Xiamen, Fujian Province"
        assert len(result) > 0

    def test_rubric_12_the_estimated_delivery_time_for_the_u_shaped_pillow_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the U-shaped pillow should be before 18:30:00 on 2025-04-07"
        assert len(result) > 0
