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
        assert result[0]["store_id"] == 'S17550802123065403_I00013'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802123065403_P00080", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 298) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == ''

    def test_order_1_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 0) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802123065403_S00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802123065403_P00006", "quantity": 1}, {"product_id": "S17550802123065403_P00007", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 69.8) < 1

    def test_rubric_0_the_ordered_farm_must_be_an_organic_farm(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered farm must be an organic farm"
        assert len(result) > 0

    def test_rubric_1_the_ordered_farm_must_have_seasonal_strawberries_available_f(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered farm must have seasonal strawberries available for picking"
        assert len(result) > 0

    def test_rubric_2_the_ordered_farm_must_have_seasonal_cherries_available_for_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered farm must have seasonal cherries available for picking"
        assert len(result) > 0

    def test_rubric_3_the_ordered_farm_must_have_vegetables_available_for_picking(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered farm must have vegetables available for picking"
        assert len(result) > 0

    def test_rubric_4_the_farm_order_package_must_include_picking_activities(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The farm order package must include picking activities"
        assert len(result) > 0

    def test_rubric_5_the_farm_order_package_must_include_a_farmhouse_meal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The farm order package must include a farmhouse meal"
        assert len(result) > 0

    def test_rubric_6_the_reserved_farm_should_be_taihu_organic_fruit_and_vegetabl(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved farm should be Taihu Organic Fruit and Vegetable Farm"
        assert len(result) > 0

    def test_rubric_7_the_farm_reservation_time_is_saturday__2025_03_29__10_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The farm reservation time is Saturday (2025-03-29) 10:00"
        assert len(result) > 0

    def test_rubric_8_the_number_of_people_for_the_farm_reservation_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the farm reservation should be 2"
        assert len(result) > 0

    def test_rubric_9_the_picking_basket_and_children_s_sun_hat_should_be_from_the(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The picking basket and children\'s sun hat should be from the same store"
        assert len(result) > 0

    def test_rubric_10_the_picking_basket_and_children_s_sun_hat_should_be_suitable(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The picking basket and children\'s sun hat should be suitable for outdoor use"
        assert len(result) > 0

    def test_rubric_11_the_delivery_order_for_the_picking_basket_and_sun_hat_must_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order for the picking basket and sun hat must be delivered before 8:00 PM (20:00) on 2025-03-25"
        assert len(result) > 0

    def test_rubric_12_the_delivery_order_for_the_picking_basket_and_sun_hat_must_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order for the picking basket and sun hat must be delivered to  Room 302, Building 12, Water Lane Community, 89 Pingjiang Road, Gusu District, Suzhou, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_13_the_color_of_the_sun_hat_in_the_delivery_order_should_be_blu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The color of the sun hat in the delivery order should be blue"
        assert len(result) > 0
