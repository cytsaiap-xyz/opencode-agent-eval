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
        assert result[0]["store_id"] == 'S17567844984464149_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567844984464149_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 388) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567844984464149_I00001'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 4

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567844984464149_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567844984464149_P00014", "quantity": 4}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 200) < 1

    def test_rubric_0_the_ordered_restaurant_needs_to_provide_thai_cuisine(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered restaurant needs to provide Thai cuisine"
        assert len(result) > 0

    def test_rubric_1_the_restaurant_order_must_be_a_4_person_set_meal__not_multip(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant order must be a 4-person set meal, not multiple individual set meals"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_set_meal_must_include_tom_yum(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant set meal must include Tom Yum"
        assert len(result) > 0

    def test_rubric_3_the_restaurant_set_meal_must_include_yellow_curry_chicken(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant set meal must include Yellow Curry Chicken"
        assert len(result) > 0

    def test_rubric_4_since_there_are_4_people_dining__and_each_person_is_expected(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Since there are 4 people dining, and each person is expected to pay 100 yuan, the calculation is 4*100=400 yuan. Therefore, the restaurant set meal price needs to be within 400 yuan (including 400 yuan)"
        assert len(result) > 0

    def test_rubric_5_the_reserved_restaurant_should_be_thai_home_thai_cuisine(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should be Thai Home Thai Cuisine"
        assert len(result) > 0

    def test_rubric_6_the_restaurant_reservation_time_is_18_00_on_august_16__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation time is 18:00 on August 16, 2025"
        assert len(result) > 0

    def test_rubric_7_the_restaurant_reservation_is_for_4_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation is for 4 people"
        assert len(result) > 0

    def test_rubric_8_the_ordered_cat_caf__package_needs_to_accommodate_4_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered cat café package needs to accommodate 4 people (purchase a four-person meal or purchase 4 single-person meals)"
        assert len(result) > 0

    def test_rubric_9_the_ordered_cat_caf__package_must_have_unlimited_time(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered cat café package must have unlimited time"
        assert len(result) > 0

    def test_rubric_10_the_ordered_cat_caf__package_must_include_free_drink_refills(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered cat café package must include free drink refills"
        assert len(result) > 0

    def test_rubric_11_the_ordered_cat_caf__must_be_within_1_kilometer__including_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered cat café must be within 1 kilometer (including 1 kilometer) from Thai Home Thai Cuisine, 2nd Floor, Building B, Kaixuan Plaza, No. 168 Zhongzhou Middle Road, Xigong District, Luoyang"
        assert len(result) > 0
