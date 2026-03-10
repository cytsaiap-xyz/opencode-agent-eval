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
        assert result[0]["store_id"] == 'S17557505476711665_F00008'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505476711665_P00056", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 980) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505476711665_A00005'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505476711665_P00027", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 135) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505476711665_H00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505476711665_P00009", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 880) < 1

    def test_rubric_0_the_departure_date_for_the_flight_booking_should_be_2023_08(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date for the flight booking should be 2023-08-12"
        assert len(result) > 0

    def test_rubric_1_the_destination_for_the_flight_booking_should_be_mount_wutai(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The destination for the flight booking should be Mount Wutai Airport"
        assert len(result) > 0

    def test_rubric_2_the_flight_price_should_be_around_1000_yuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The flight price should be around 1000 yuan"
        assert len(result) > 0

    def test_rubric_3_the_arrival_time_of_the_flight_should_be_before_or_at_18_00(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The arrival time of the flight should be before or at 18:00"
        assert len(result) > 0

    def test_rubric_4_choose_the_flight_with_the_shortest_flying_time__the_flight(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Choose the flight with the shortest flying time, the flight in the order should be MU2156 (flying time 1 hour 45 minutes)"
        assert len(result) > 0

    def test_rubric_5_need_to_check_if_mount_wutai_scenic_area_tickets_with_vegeta(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check if Mount Wutai Scenic Area tickets with Vegetarian Meal are available, the result is no, should purchase Regular Admission"
        assert len(result) > 0

    def test_rubric_6_the_attraction_in_the_ticket_order_should_be_mount_wutai_sce(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The attraction in the ticket order should be Mount Wutai Scenic Area"
        assert len(result) > 0

    def test_rubric_7_the_ticket_date_in_the_attraction_order_should_be_2023_08_13(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket date in the attraction order should be 2023-08-13"
        assert len(result) > 0

    def test_rubric_8_the_accommodation_type_should_be_inn(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The accommodation type should be inn"
        assert len(result) > 0

    def test_rubric_9_need_to_check_if_mount_wutai_scenic_area_tickets_with_vegeta(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check if Mount Wutai Scenic Area tickets with Vegetarian Meal are available, the result is no, the inn ordered must provide Vegetarian Food service"
        assert len(result) > 0

    def test_rubric_10_the_decoration_style_of_the_inn_should_be_zen_style(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The decoration style of the inn should be Zen Style"
        assert len(result) > 0

    def test_rubric_11_the_check_in_date_in_the_inn_order_should_be_2023_08_12(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The check-in date in the inn order should be 2023-08-12"
        assert len(result) > 0
