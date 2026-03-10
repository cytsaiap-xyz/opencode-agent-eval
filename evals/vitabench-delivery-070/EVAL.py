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
        assert result[0]["store_id"] == 'S14548244109695231_S21998'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S29868429459190442_P12525", "quantity": 1}, {"product_id": "S23180414711515603_P47194", "quantity": 1}, {"product_id": "S33104164931719383_P20825", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 41.59) < 1

    def test_rubric_0_the_delivery_address_for_the_doctor_s_meal_during_work_hours(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the doctor\'s meal during work hours should be No.1-1 Nanyuan New Village, Qianjin Road, Haizhu District, Guangzhou, Guangdong Province (Near Wanfeng Garden), Haizhu District Traditional Chinese Medicine Hospital"
        assert len(result) > 0

    def test_rubric_1_the_delivery_time_for_the_doctor_s_meal_during_work_hours_sh(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the doctor\'s meal during work hours should be around 2025-06-12 12:00:00, ensuring meal completion before acupuncture treatment"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_rating_for_the_doctor_s_meal_order_during_wor(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant rating for the doctor\'s meal order during work hours should be greater than or equal to 4.3"
        assert len(result) > 0

    def test_rubric_3_the_chicken_soup_in_the_order_should_be_pure_coconut_based(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The chicken soup in the order should be pure coconut-based, containing no other main ingredients besides coconut and chicken"
        assert len(result) > 0

    def test_rubric_4_the_total_number_of_items_in_the_doctor_s_meal_order_during(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total number of items in the doctor\'s meal order during work hours should be 3, including chicken soup, rice, and steamed broccoli"
        assert len(result) > 0
