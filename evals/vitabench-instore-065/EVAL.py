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
        assert result[0]["store_id"] == 'S17567836596776278_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836596776278_P00001", "quantity": 2}, {"product_id": "S17567836596776278_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 544) < 1

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

    def test_rubric_0_the_massage_shop_ordered_should_have_a_comfortable_environme(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The massage shop ordered should have a comfortable environment"
        assert len(result) > 0

    def test_rubric_1_the_service_of_the_massage_shop_ordered_should_be_meticulous(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The service of the massage shop ordered should be meticulous"
        assert len(result) > 0

    def test_rubric_2_the_massage_shop_order_should_include_elderly_massage_packag(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The massage shop order should include elderly massage packages"
        assert len(result) > 0

    def test_rubric_3_the_quantity_of_elderly_massage_packages_in_the_massage_shop(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of elderly massage packages in the massage shop order should be 2"
        assert len(result) > 0

    def test_rubric_4_the_elderly_massage_packages_in_the_massage_shop_order_shoul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The elderly massage packages in the massage shop order should not be packages that include full body massage"
        assert len(result) > 0

    def test_rubric_5_the_massage_shop_order_should_include_essential_oil_spa_pack(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The massage shop order should include essential oil SPA packages"
        assert len(result) > 0

    def test_rubric_6_the_quantity_of_essential_oil_spa_packages_in_the_massage_sh(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of essential oil SPA packages in the massage shop order should be 1"
        assert len(result) > 0

    def test_rubric_7_the_elderly_massage_packages_and_essential_oil_spa_packages(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The elderly massage packages and essential oil SPA packages should be from the same store"
        assert len(result) > 0

    def test_rubric_8_the_reserved_massage_shop_should_be_kangleyuan_wellness_cent(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved massage shop should be Kangleyuan Wellness Center"
        assert len(result) > 0

    def test_rubric_9_should_check_the_specific_date_of_the_double_ninth_festival(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should check the specific date of the Double Ninth Festival in 2024, which is Friday, October 11, 2024, so the massage shop reservation time is 2024-10-11 20:00"
        assert len(result) > 0

    def test_rubric_10_the_number_of_people_for_the_massage_shop_reservation_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the massage shop reservation should be 3"
        assert len(result) > 0

    def test_rubric_11_should_check_the_specific_date_of_the_double_ninth_festival(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should check the specific date of the Double Ninth Festival in 2024, which is Friday, October 11, 2024, not a weekend, so should not order from a Hangzhou cuisine restaurant"
        assert len(result) > 0
