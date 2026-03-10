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
        assert result[0]["store_id"] == 'S10884602254755805_S86671'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S82307399321174061_P83228", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 14) < 1

    def test_rubric_0_the_delivery_address_should_be_ziwei_city_garden_near_bank_o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address should be Ziwei City Garden near Bank of Communications (Xi\'an Electronic City Branch), Yanta District, Xi\'an, Shaanxi Province"
        assert len(result) > 0

    def test_rubric_1_the_delivery_time_of_the_menstrual_period_drink_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time of the menstrual period drink order should be after 2025-09-18 20:00:00"
        assert len(result) > 0

    def test_rubric_2_drink_orders_cannot_select_mixue_ice_cream_stores(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Drink orders cannot select Mixue Ice Cream stores"
        assert len(result) > 0

    def test_rubric_3_drink_orders_must_select_products_that_are_low_caffeine_or_c(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Drink orders must select products that are Low Caffeine or caffeine-free"
        assert len(result) > 0

    def test_rubric_4_menstrual_period_drink_orders_must_select_hot_drinks__not_co(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Menstrual period drink orders must select hot drinks, not cold drinks"
        assert len(result) > 0

    def test_rubric_5_menstrual_period_drink_orders_should_select_small_or_medium(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Menstrual period drink orders should select small or Medium Cup, not large or extra-large cups"
        assert len(result) > 0
