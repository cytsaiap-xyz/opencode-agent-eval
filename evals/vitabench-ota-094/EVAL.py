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
        assert result[0]["store_id"] == 'S17557516484806057_T00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557516484806057_P00064", "quantity": 5}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1490) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557516484806057_T00013'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557516484806057_P00079", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 906) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557516484806057_T00015'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557516484806057_P00089", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 268) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557516484806057_H00001'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557516484806057_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 398) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17557516484806057_A00005'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17557516484806057_P00027", "quantity": 5}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 450) < 1

    def test_rubric_0_the_outbound_train_ticket_order_should_be_from_linyi_to_qing(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound train ticket order should be from Linyi to Qingdao"
        assert len(result) > 0

    def test_rubric_1_the_outbound_train_ticket_order_should_be_high_speed_rail(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound train ticket order should be High-Speed Rail"
        assert len(result) > 0

    def test_rubric_2_the_outbound_train_ticket_order_should_arrive_before_10_30(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound train ticket order should arrive before 10:30"
        assert len(result) > 0

    def test_rubric_3_the_outbound_train_ticket_order_should_be_for_first_class_se(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound train ticket order should be for First Class Seat"
        assert len(result) > 0

    def test_rubric_4_the_outbound_train_ticket_order_should_be_for_5_tickets(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound train ticket order should be for 5 tickets"
        assert len(result) > 0

    def test_rubric_5_the_outbound_train_ticket_order_date_should_be_november_20(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound train ticket order date should be November 20, 2027"
        assert len(result) > 0

    def test_rubric_6_the_return_train_ticket_order_should_be_from_qingdao_to_liny(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return train ticket order should be from Qingdao to Linyi"
        assert len(result) > 0

    def test_rubric_7_the_return_train_ticket_order_should_be_high_speed_rail(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return train ticket order should be High-Speed Rail"
        assert len(result) > 0

    def test_rubric_8_the_return_train_ticket_order_should_be_the_last_train_depar(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return train ticket order should be the last train departing on that day"
        assert len(result) > 0

    def test_rubric_9_the_return_train_ticket_order_should_be_for_first_class_seat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return train ticket order should be for First Class Seat"
        assert len(result) > 0

    def test_rubric_10_the_return_train_ticket_order_should_be_for_3_tickets(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return train ticket order should be for 3 tickets"
        assert len(result) > 0

    def test_rubric_11_the_return_ticket_order_date_should_be_november_20__2027(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return ticket order date should be November 20, 2027"
        assert len(result) > 0

    def test_rubric_12_the_status_of_the_historical_train_ticket_order_from_linyi_t(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The status of the historical train ticket order from Linyi to Tai\'an is cancelled"
        assert len(result) > 0

    def test_rubric_13_the_booked_hotel_should_be_within_3km_of_user_s_home(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel should be within 3km of user\'s home"
        assert len(result) > 0

    def test_rubric_14_the_booked_hotel_rating_should_be_above_4_0(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel rating should be above 4.0"
        assert len(result) > 0

    def test_rubric_15_the_booked_hotel_should_include_wake_up_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked hotel should include Wake-up Service"
        assert len(result) > 0

    def test_rubric_16_the_hotel_booking_date_should_be_november_19__2027(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booking date should be November 19, 2027"
        assert len(result) > 0

    def test_rubric_17_the_hotel_booking_cost_should_not_exceed_400_yuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booking cost should not exceed 400 yuan"
        assert len(result) > 0

    def test_rubric_18_the_hotel_booking_should_be_for_a_standard_twin_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booking should be for a Standard Twin Room"
        assert len(result) > 0

    def test_rubric_19_given_the_weather_in_qingdao_on_november_20__2027_is_breeze(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Given the weather in Qingdao on November 20, 2027 is breeze, the ticket purchased should be for Laoshan Yangkou Scenic Area"
        assert len(result) > 0

    def test_rubric_20_the_purchased_tickets_should_be_for_november_20__2027(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased tickets should be for November 20, 2027"
        assert len(result) > 0

    def test_rubric_21_the_purchased_tickets_should_be_adult_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased tickets should be Adult Ticket"
        assert len(result) > 0

    def test_rubric_22_the_purchased_tickets_should_be_for_5_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased tickets should be for 5 people"
        assert len(result) > 0
