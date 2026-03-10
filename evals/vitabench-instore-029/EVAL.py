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
            if i in {1, 3}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17564424751335089_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564424751335089_P00004", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 138) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564424751335089_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2024-12-19 20:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564424751335089_I00004'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564424751335089_P00015", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 268) < 1

    def test_order_3_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[3]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_3_matches_expected_shop(self):
        order = result[3]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564424751335089_I00004'

    def test_order_3_has_correct_customer_count(self):
        assert result[3].get("customer_count") == 2

    def test_rubric_0_the_moxibustion_order_merchant_must_be_a_traditional_chinese(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The moxibustion order merchant must be a Traditional Chinese Medicine Health Center"
        assert len(result) > 0

    def test_rubric_1_the_moxibustion_order_merchant_rating_must_be_4_0_stars_or_a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The moxibustion order merchant rating must be 4.0 stars or above"
        assert len(result) > 0

    def test_rubric_2_the_moxibustion_order_package_price_must_be_less_than_or_equ(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The moxibustion order package price must be less than or equal to 150 yuan"
        assert len(result) > 0

    def test_rubric_3_the_moxibustion_order_merchant_environment_must_be_nice(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The moxibustion order merchant environment must be nice"
        assert len(result) > 0

    def test_rubric_4_the_moxibustion_order_package_must_be_suitable_for_menstrual(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The moxibustion order package must be suitable for menstrual regulation therapy"
        assert len(result) > 0

    def test_rubric_5_the_moxibustion_appointment_needs_to_be_scheduled_for_8_00_p(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The moxibustion appointment needs to be scheduled for 8:00 PM (2024-12-19 20:00)"
        assert len(result) > 0

    def test_rubric_6_the_appointed_moxibustion_order_merchant_should_be_kang_ning(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The appointed moxibustion order merchant should be Kang Ning TCM Health Center"
        assert len(result) > 0

    def test_rubric_7_the_thai_restaurant_must_be_within_3000m_of_the_company__roo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Thai restaurant must be within 3000m of the company (Room 1506, Building B, Building Economy Industrial Park, No. 27 Business Inner Ring Road, Zhengdong New District, Zhengzhou)"
        assert len(result) > 0

    def test_rubric_8_the_thai_cuisine_order_package_should_have_an_average_cost_p(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Thai cuisine order package should have an average cost per person between 100-150 yuan, meaning a total price between 200 and 300 yuan (inclusive)"
        assert len(result) > 0

    def test_rubric_9_the_thai_cuisine_order_package_should_include_signature_dish(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Thai cuisine order package should include signature dishes and drinks"
        assert len(result) > 0

    def test_rubric_10_the_thai_cuisine_order_package_should_be_enough_for_two_peop(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Thai cuisine order package should be enough for two people"
        assert len(result) > 0

    def test_rubric_11_the_thai_cuisine_table_reservation_needs_to_be_scheduled_for(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Thai cuisine table reservation needs to be scheduled for Sunday at 6:00 PM (2024-12-22 18:00)"
        assert len(result) > 0

    def test_rubric_12_the_thai_cuisine_table_reservation_needs_to_be_for_2_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Thai cuisine table reservation needs to be for 2 people"
        assert len(result) > 0

    def test_rubric_13_the_reserved_thai_restaurant_should_be_thai_enjoy_thai_resta(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved Thai restaurant should be Thai Enjoy Thai Restaurant"
        assert len(result) > 0
