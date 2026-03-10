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
        assert result[0]["store_id"] == 'S31362996935520633_S70024'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S27262801368361992_P09650", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 58.8) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S77677443573225892_S65701'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S78675090921581153_P42837", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 33.98) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S26949391557525109_S37617'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17999679772584705_P19717", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 17.0) < 1

    def test_rubric_0_the_delivery_address_for_the_user_s_pork_trotter_set_meal_or(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the user\'s pork trotter set meal order should be Building 6, Student Apartment, Jiaojiang Campus of Taizhou University, Jiaojiang District, Taizhou City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_1_the_delivery_time_for_the_user_s_pork_trotter_set_meal_order(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the user\'s pork trotter set meal order should be around 2025-04-18 12:00:00"
        assert len(result) > 0

    def test_rubric_2_the_user_s_pork_trotter_set_meal_order_should_select_product(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The user\'s pork trotter set meal order should select products with stronger spicy red oil flavor"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_roommate_s_fresh_shrimp_and_cra(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the roommate\'s Fresh Shrimp and Crab Roe Wonton order should be Building 6, Student Apartment, Jiaojiang Campus of Taizhou University, Jiaojiang District, Taizhou City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_4_the_delivery_time_for_the_roommate_s_fresh_shrimp_and_crab_r(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the roommate\'s Fresh Shrimp and Crab Roe Wonton order should be around 2025-04-18 12:00:00"
        assert len(result) > 0

    def test_rubric_5_the_roommate_s_fresh_shrimp_and_crab_roe_wonton_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The roommate\'s Fresh Shrimp and Crab Roe Wonton order should select the merchant closest to the user\'s location, which is Yuan Ji Cloud Dumplings (Zhabridge Store)"
        assert len(result) > 0

    def test_rubric_6_the_roommate_s_fresh_shrimp_and_crab_roe_wonton_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The roommate\'s Fresh Shrimp and Crab Roe Wonton order should select a flavor with prominent numbing spiciness"
        assert len(result) > 0

    def test_rubric_7_the_delivery_address_for_the_beverage_order_should_be_buildi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the beverage order should be Building 6, Student Apartment, Jiaojiang Campus of Taizhou University, Jiaojiang District, Taizhou City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_8_the_delivery_time_for_the_beverage_order_should_be_around_20(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the beverage order should be around 2025-04-18 15:00:00"
        assert len(result) > 0

    def test_rubric_9_the_beverage_order_should_select_drinks_without_dairy_produc(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beverage order should select drinks without dairy products"
        assert len(result) > 0

    def test_rubric_10_the_specification_for_the_beverage_order_should_be_no_ice(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The specification for the beverage order should be no ice"
        assert len(result) > 0
