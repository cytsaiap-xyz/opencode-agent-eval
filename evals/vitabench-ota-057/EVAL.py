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
        assert result[0]["store_id"] == 'S17557512008539083_T00012'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557512008539083_P00082", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 402) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557512008539083_H00004'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557512008539083_P00021", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 328) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557512008539083_H00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557512008539083_P00020", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 318) < 1

    def test_rubric_0_the_departure_location_of_the_outbound_ticket_should_be_xi_a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure location of the outbound ticket should be Xi\'an"
        assert len(result) > 0

    def test_rubric_1_the_destination_of_the_outbound_ticket_should_be_jiuquan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The destination of the outbound ticket should be Jiuquan"
        assert len(result) > 0

    def test_rubric_2_the_departure_date_of_the_outbound_ticket_should_be_june_29(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date of the outbound ticket should be June 29, 2025"
        assert len(result) > 0

    def test_rubric_3_need_to_check_the_lowest_price_for_express_train_sleeper_wit(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the lowest price for Express Train sleeper within the optional range, which is 392 yuan; need to check the price information for High-speed Train Second Class Seat within the optional range, which is 402 yuan; subtract these two prices, the result is 10 yuan, meaning the price difference between the two seat types does not exceed 100 yuan, so the seat type in the ticket order should be Second Class Seat"
        assert len(result) > 0

    def test_rubric_4_the_hotel_in_the_hotel_order_for_june_29__2025_should_be_wit(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel in the hotel order for June 29, 2025 should be within 3 kilometers of Jiuquan Satellite Launch Center, Dongfeng Aerospace City, Suzhou District, Jiuquan City, Gansu Province"
        assert len(result) > 0

    def test_rubric_5_the_hotel_in_the_hotel_order_for_june_29__2025_should_offer(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel in the hotel order for June 29, 2025 should offer Laundry Service"
        assert len(result) > 0

    def test_rubric_6_the_hotel_in_the_hotel_order_for_june_29__2025_should_offer(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel in the hotel order for June 29, 2025 should offer Free Luggage Storage service"
        assert len(result) > 0

    def test_rubric_7_the_room_type_in_the_hotel_order_for_june_29__2025_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type in the hotel order for June 29, 2025 should be a King Room"
        assert len(result) > 0

    def test_rubric_8_the_hotel_in_the_hotel_order_for_june_30__2025_should_be_wit(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel in the hotel order for June 30, 2025 should be within 3 kilometers of Jiuquan Park, 1 Park Road, Suzhou District, Jiuquan City, Gansu Province"
        assert len(result) > 0

    def test_rubric_9_the_hotel_in_the_hotel_order_for_june_30__2025_should_offer(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel in the hotel order for June 30, 2025 should offer Laundry Service"
        assert len(result) > 0

    def test_rubric_10_the_hotel_in_the_hotel_order_for_june_30__2025_should_offer(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel in the hotel order for June 30, 2025 should offer Free Luggage Storage service"
        assert len(result) > 0

    def test_rubric_11_the_room_type_in_the_hotel_order_for_june_30__2025_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type in the hotel order for June 30, 2025 should be a King Room"
        assert len(result) > 0
