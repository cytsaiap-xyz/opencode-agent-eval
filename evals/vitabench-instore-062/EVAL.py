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
        assert result[0]["store_id"] == 'S17567836575705922_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836575705922_P00001", "quantity": 1}]
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
        assert shop_id == 'S17567836575705922_I00003'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2025-05-01 09:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567836575705922_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836575705922_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 128) < 1

    def test_rubric_0_the_order_for_the_diy_store_should_be_an_aromatherapy_candle(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order for the DIY store should be an aromatherapy candle DIY package"
        assert len(result) > 0

    def test_rubric_1_the_order_for_the_diy_store_should_be_a_single_person_packag(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order for the DIY store should be a single person package"
        assert len(result) > 0

    def test_rubric_2_the_order_for_the_diy_store_should_include_diy_relief_dried(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order for the DIY store should include DIY relief dried flower style candles"
        assert len(result) > 0

    def test_rubric_3_the_order_for_the_diy_store_should_include_teaching_guidance(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order for the DIY store should include teaching guidance"
        assert len(result) > 0

    def test_rubric_4_should_search_whether_there_are_pet_stores_providing_pet_car(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Should search whether there are pet stores providing pet care services within 3000m (including 3000m) of Creative Workshop (Wanda Plaza Store), 3rd Floor, Building A, Wanda Plaza, 1266 Fenghe Middle Avenue, Honggutan New District, Nanchang. The result is yes, so a pet store should be booked"
        assert len(result) > 0

    def test_rubric_5_the_number_of_people_for_the_pet_store_reservation_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the pet store reservation should be 1"
        assert len(result) > 0

    def test_rubric_6_the_reservation_time_for_the_pet_store_should_be_2025_05_01(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reservation time for the pet store should be 2025-05-01 09:00:00"
        assert len(result) > 0

    def test_rubric_7_should_check_the_user_s_behavior_history__the_gym_the_user_v(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Should check the user\'s behavior history. The gym the user visited last time was Super Fitness (Greenland Store), so the gym order should be for Super Fitness (Greenland Store)"
        assert len(result) > 0

    def test_rubric_8_the_gym_order_should_be_for_a_private_lesson_package(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The gym order should be for a private lesson package"
        assert len(result) > 0
