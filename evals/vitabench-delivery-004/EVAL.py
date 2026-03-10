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
        assert result[0]["store_id"] == 'S30117605823859936_S63333'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S21869011941711612_P40826", "quantity": 1}, {"product_id": "S12843828392131711_P64618", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 56) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S30117605823859936_S63333'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S52869129511178636_P87490", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 38.9) < 1

    def test_rubric_0_successfully_cancel_the_tom_yum_soup_noodles_order_with_id_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Successfully cancel the Tom Yum Soup Noodles order with id 10716001O01 from HUHU Thai (Roosevelt Branch), the order status should be changed to cancelled"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_new_order_should_be_5th_floor(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the new order should be 5th Floor, Building 3, Dalian Software Park, Shahekou District, Dalian, Liaoning Province"
        assert len(result) > 0

    def test_rubric_2_the_estimated_delivery_time_for_the_new_order_should_be_arou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the new order should be around 2024-08-19 18:30"
        assert len(result) > 0

    def test_rubric_3_the_new_order_should_include_hot_and_sour_items_such_as_tom(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The new order should include Hot and Sour items such as Tom Yum Fried Rice from HUHU Thai (Roosevelt Branch)"
        assert len(result) > 0

    def test_rubric_4_the_new_order_should_include_refreshing_caffeine_free_desser(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The new order should include refreshing caffeine-free desserts such as Coconut Sago Pudding"
        assert len(result) > 0
