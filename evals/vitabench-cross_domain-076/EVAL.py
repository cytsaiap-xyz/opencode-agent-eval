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
        for i, order in enumerate(result):
            if i in {1}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550807000722555_I00009'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550807000722555_P00061", "quantity": 7}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 686) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550807000722555_I00009'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2025-07-05 14:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 7

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550807000722555_S00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550806479682269_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 399) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550807000722555_F00005'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 1680) < 1

    def test_rubric_0_the_in_store_merchant_should_be_a_murder_mystery_game_venue(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The in-store merchant should be a murder mystery game venue"
        assert len(result) > 0

    def test_rubric_1_the_ordered_product_from_the_in_store_merchant_must_be_a_mur(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered product from the in-store merchant must be a murder mystery game with campus background"
        assert len(result) > 0

    def test_rubric_2_the_ordered_product_from_the_in_store_merchant_must_be_a_7_p(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered product from the in-store merchant must be a 7-player script"
        assert len(result) > 0

    def test_rubric_3_the_ordered_package_from_the_in_store_merchant_must_have_at(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered package from the in-store merchant must have at least two female character roles"
        assert len(result) > 0

    def test_rubric_4_the_ordered_product_from_the_in_store_merchant_should_be_7_p(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered product from the in-store merchant should be 7 portions"
        assert len(result) > 0

    def test_rubric_5_the_murder_mystery_game_activity_must_end_before_17_00__and(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The murder mystery game activity must end before 17:00, and the ordered product duration is 2.5 hours, so the in-store merchant reservation time should be earlier than 14:30 on July 5, 2025"
        assert len(result) > 0

    def test_rubric_6_the_number_of_people_for_the_in_store_merchant_reservation_i(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the in-store merchant reservation is 7"
        assert len(result) > 0

    def test_rubric_7_need_to_provide_the_duration_information_of_the_murder_myste(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to provide the duration information of the murder mystery game in the order, the duration of \"Youth Mystery\" is 2.5 hours"
        assert len(result) > 0

    def test_rubric_8_the_ordered_product_in_the_delivery_order_should_be_a_gold_n(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered product in the delivery order should be a gold nib fountain pen"
        assert len(result) > 0

    def test_rubric_9_the_ordered_product_in_the_delivery_order_cannot_be_parker_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered product in the delivery order cannot be Parker brand"
        assert len(result) > 0

    def test_rubric_10_the_estimated_delivery_time_for_the_ordered_product_in_the_d(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the ordered product in the delivery order is before 11:15 AM on July 4, 2025"
        assert len(result) > 0

    def test_rubric_11_the_delivery_address_for_the_ordered_product_in_the_delivery(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the ordered product in the delivery order is Room 302, Building 5, East Garden Community, Huazhong University of Science and Technology, 1037 Luoyu Road, Hongshan District, Wuhan, Hubei Province"
        assert len(result) > 0

    def test_rubric_12_the_ordered_flight_ticket_should_be_for_a_flight_from_wuhan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered flight ticket should be for a flight from Wuhan to Beijing"
        assert len(result) > 0

    def test_rubric_13_the_departure_date_of_the_ordered_flight_ticket_should_be_ju(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date of the ordered flight ticket should be July 7, 2025"
        assert len(result) > 0

    def test_rubric_14_the_ordered_flight_ticket_should_be_business_class(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered flight ticket should be business class"
        assert len(result) > 0

    def test_rubric_15_the_price_of_the_ordered_flight_ticket_should_be_less_than_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price of the ordered flight ticket should be less than 1800 yuan"
        assert len(result) > 0

    def test_rubric_16_the_total_budget_for_in_store_merchant_order_and_delivery_or(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total budget for in-store merchant order and delivery order must not exceed 1200 yuan"
        assert len(result) > 0
