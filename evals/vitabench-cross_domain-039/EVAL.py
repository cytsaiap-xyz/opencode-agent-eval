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
        assert result[0]["store_id"] == 'S17550810556939211_S00002'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550810556939211_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 108) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550810556939211_I00010'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550810556939211_P00054", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 108) < 1

    def test_rubric_0_delivery_address_is_jidian_internet_cafe__north_plaza_of_zhu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Delivery address is Jidian Internet Cafe, North Plaza of Zhuhai High-Speed Railway Station, 999 Yingbin South Road, Xiangzhou District, Zhuhai City, Guangdong Province"
        assert len(result) > 0

    def test_rubric_1_delivery_time_is_around_8_pm_on_february_23__2024__i_e___del(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Delivery time is around 8 PM on February 23, 2024 [i.e., delivery time should be between 7:45 PM and 8:15 PM]"
        assert len(result) > 0

    def test_rubric_2_products_in_the_delivery_order_should_not_include_toppings(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Products in the delivery order should not include toppings"
        assert len(result) > 0

    def test_rubric_3_the_ordered_product_should_contain_caffeine(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered product should contain caffeine"
        assert len(result) > 0

    def test_rubric_4_the_merchant_should_provide_24_hour_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The merchant should provide 24-Hour Service"
        assert len(result) > 0

    def test_rubric_5_the_merchant_should_have_monitors_above_200hz(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The merchant should have monitors above 200Hz"
        assert len(result) > 0

    def test_rubric_6_the_purchased_package_should_be_for_a_private_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased package should be for a private room"
        assert len(result) > 0

    def test_rubric_7_the_purchased_package_should_allow_overnight_use(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The purchased package should allow overnight use"
        assert len(result) > 0

    def test_rubric_8_by_checking_historical_orders__we_found_a_train_ticket_from(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "By checking historical orders, we found a train ticket from Zhuhai to Foshan departing at 07:25 on February 24, 2024, so the merchant should be near the high-speed railway station"
        assert len(result) > 0
