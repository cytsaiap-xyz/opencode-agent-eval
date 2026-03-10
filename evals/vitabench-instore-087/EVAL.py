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
            if i in {0}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[0]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_0_matches_expected_shop(self):
        order = result[0]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567844530668853_I00001'

    def test_order_0_has_correct_customer_count(self):
        assert result[0].get("customer_count") == 8

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17567844530668853_I00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17567844530668853_P00010", "quantity": 1}, {"product_id": "S17567844530668853_P00011", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 454) < 1

    def test_rubric_0_the_reserved_restaurant_must_have_an_elegant_environment(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant must have an elegant environment"
        assert len(result) > 0

    def test_rubric_1_the_reserved_restaurant_must_have_a_cartoon_theme(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant must have a cartoon theme"
        assert len(result) > 0

    def test_rubric_2_the_reserved_restaurant_must_be_a_family_restaurant(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant must be a family restaurant"
        assert len(result) > 0

    def test_rubric_3_the_reserved_restaurant_must_provide_birthday_celebration_se(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant must provide birthday celebration service"
        assert len(result) > 0

    def test_rubric_4_the_reserved_restaurant_must_be_within_3_kilometers__inclusi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant must be within 3 kilometers (inclusive) of Room 501, Unit 3, Building 12, Sea View Garden, 28 Victory Road, Zhifu District, Yantai"
        assert len(result) > 0

    def test_rubric_5_the_restaurant_reservation_must_be_for_8_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation must be for 8 people"
        assert len(result) > 0

    def test_rubric_6_the_restaurant_reservation_time_must_be_2026_06_13_12_00_00(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation time must be 2026-06-13 12:00:00"
        assert len(result) > 0

    def test_rubric_7_the_ordered_children_s_amusement_center_must_be_within_1_kil(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered children\'s amusement center must be within 1 kilometer (inclusive) of Children\'s Dream Fantasy Theme Restaurant, 3rd Floor, Sunshine Department Store, 156 Victory Road, Zhifu District, Yantai"
        assert len(result) > 0

    def test_rubric_8_the_ordered_amusement_center_must_have_birthday_amusement_vo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered amusement center must have birthday amusement vouchers"
        assert len(result) > 0

    def test_rubric_9_the_order_must_include_1_birthday_amusement_voucher(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order must include 1 birthday amusement voucher"
        assert len(result) > 0

    def test_rubric_10_the_ordered_amusement_center_must_have_standard_amusement_vo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered amusement center must have standard amusement vouchers"
        assert len(result) > 0

    def test_rubric_11_the_order_must_include_2_standard_amusement_vouchers(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order must include 2 standard amusement vouchers"
        assert len(result) > 0

    def test_rubric_12_the_birthday_amusement_vouchers_and_standard_amusement_vouch(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The birthday amusement vouchers and standard amusement vouchers must be from the same store"
        assert len(result) > 0
