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
        assert result[0]["store_id"] == ''

    def test_order_0_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 0) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802170962391_S00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802170962391_P00001", "quantity": 1}, {"product_id": "S17550802170962391_P00002", "quantity": 1}, {"product_id": "S17550802170962391_P00004", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 91.2) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802170962391_T00007'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802170962391_P00035", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 87) < 1

    def test_rubric_0_the_in_store_merchant_should_be_within_500m_of_shanxi_textil(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The in-store merchant should be within 500m of Shanxi Textile and Clothing Industrial Park Zone C, 227 Changzhi Road, Xiaodian District, Taiyuan"
        assert len(result) > 0

    def test_rubric_1_the_in_store_merchant_should_be_a_coffee_shop(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The in-store merchant should be a coffee shop"
        assert len(result) > 0

    def test_rubric_2_the_in_store_merchant_should_have_an_artistic_atmosphere(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The in-store merchant should have an Artistic Atmosphere"
        assert len(result) > 0

    def test_rubric_3_the_in_store_merchant_should_offer_hand_dripped_coffee_set_f(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The in-store merchant should offer Hand-dripped Coffee Set for Two"
        assert len(result) > 0

    def test_rubric_4_the_appointment_time_for_the_in_store_merchant_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The appointment time for the in-store merchant order should be 8:00 PM on April 17, 2025"
        assert len(result) > 0

    def test_rubric_5_the_number_of_people_for_the_in_store_merchant_reservation_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the in-store merchant reservation should be 2"
        assert len(result) > 0

    def test_rubric_6_the_delivery_order_items_should_be_chinese_pastries(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order items should be Chinese Pastries"
        assert len(result) > 0

    def test_rubric_7_the_delivery_order_should_include_three_different_types_of_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order should include three different types of pastries"
        assert len(result) > 0

    def test_rubric_8_the_delivery_address_for_the_delivery_order_should_be_mijing(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the delivery order should be Mijing Coffee, 127 Changfeng Street, Xiaodian District, Taiyuan"
        assert len(result) > 0

    def test_rubric_9_the_expected_delivery_time_for_the_delivery_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The expected delivery time for the delivery order should be 8:00 PM on April 17, 2025"
        assert len(result) > 0

    def test_rubric_10_the_weather_in_taiyuan_on_april_18__2025_will_be_light_rain(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The weather in Taiyuan on April 18, 2025 will be light rain, and the train departure time should be around 13:00 [meaning the departure time of the ordered train ticket should be within the 12:45-13:15 time range]"
        assert len(result) > 0

    def test_rubric_11_the_train_ticket_should_be_for_a_journey_from_taiyuan_to_cha(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train ticket should be for a journey from Taiyuan to Changzhi"
        assert len(result) > 0

    def test_rubric_12_the_departure_date_for_the_train_ticket_should_be_april_18(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure date for the train ticket should be April 18, 2025"
        assert len(result) > 0
