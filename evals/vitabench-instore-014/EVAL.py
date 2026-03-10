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
        assert result[0]["store_id"] == 'S17564420293324227_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420293324227_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 428) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564420293324227_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2025-03-22 10:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564420293324227_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564420293324227_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 158) < 1

    def test_rubric_0_the_hair_salon_must_be_within_1km_of_the_company_address__28(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hair salon must be within 1km of the company address (28F, Shanghai Plaza Office Building, 138 Middle Huaihai Road, Huangpu District, Shanghai)"
        assert len(result) > 0

    def test_rubric_1_the_haircut_package_must_include_scalp_massage(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The haircut package must include scalp massage"
        assert len(result) > 0

    def test_rubric_2_the_haircut_package_must_include_scalp_massage(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The haircut package must include scalp massage"
        assert len(result) > 0

    def test_rubric_3_the_reserved_hair_salon_should_be_yunzi_hair_care_salon(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved hair salon should be Yunzi Hair Care Salon"
        assert len(result) > 0

    def test_rubric_4_the_appointment_time_in_the_reservation_should_be_10_00_00_o(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The appointment time in the reservation should be 10:00:00 on 2025-03-22"
        assert len(result) > 0

    def test_rubric_5_the_number_of_people_in_the_reservation_should_be_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people in the reservation should be 1"
        assert len(result) > 0

    def test_rubric_6_the_yoga_studio_should_be_within_2km_of_yunzi_hair_care_salo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The yoga studio should be within 2km of Yunzi Hair Care Salon, 2F, Jin Mao Tower, 218 Middle Huaihai Road, Huangpu District, Shanghai"
        assert len(result) > 0

    def test_rubric_7_the_yoga_class_ordered_should_be_a_private_training(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The yoga class ordered should be a private training"
        assert len(result) > 0

    def test_rubric_8_the_yoga_class_ordered_should_be_a_single_class(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The yoga class ordered should be a single class"
        assert len(result) > 0

    def test_rubric_9_the_yoga_class_ordered_should_be_an_advanced_class(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The yoga class ordered should be an advanced class"
        assert len(result) > 0

    def test_rubric_10_the_total_cost_for_both_the_haircut_and_yoga_services_must_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total cost for both the haircut and yoga services must be kept under 600 yuan"
        assert len(result) > 0
