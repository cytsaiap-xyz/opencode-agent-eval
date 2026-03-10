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
        assert result[0]["store_id"] == 'S25381701465595981_S98282'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S57892083557412990_P58196", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 60) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S23249297713141485_S15240'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S23098322117622348_P79075", "quantity": 10}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 30) < 1

    def test_rubric_0_the_black_sesame_product_ordered_from_honeymoon_dessert_shou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Black Sesame product ordered from Honeymoon Dessert should be selected with hot drink attribute, suitable for cold stomach conditions"
        assert len(result) > 0

    def test_rubric_1_the_honeymoon_dessert_store_ordered_from_should_be_honeymoon(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Honeymoon Dessert store ordered from should be Honeymoon Dessert (Dalian CapitaMall Peace Plaza Second Store)"
        assert len(result) > 0

    def test_rubric_2_the_delivery_address_for_black_sesame_order_should_be_dalian(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for Black Sesame order should be Dalian Software Park, 160 meters northeast of the intersection of Huangpu Road and Shuxiang Street, Shahekou District, Dalian, Liaoning Province"
        assert len(result) > 0

    def test_rubric_3_the_estimated_delivery_time_for_black_sesame_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for Black Sesame order should be before 2025-05-08 20:00:00, ensuring the user can enjoy it before working overtime"
        assert len(result) > 0

    def test_rubric_4_the_quantity_of_black_sesame_order_should_be_3_portions(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of Black Sesame order should be 3 portions"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_for_corn_cake_products_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for Corn Cake products order should be Dalian Software Park, 160 meters northeast of the intersection of Huangpu Road and Shuxiang Street, Shahekou District, Dalian, Liaoning Province"
        assert len(result) > 0

    def test_rubric_6_the_estimated_delivery_time_for_corn_cake_products_order_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for Corn Cake products order should be before 2025-05-08 20:00:00"
        assert len(result) > 0

    def test_rubric_7_the_order_quantity_of_corn_cake_products_should_be_10_pieces(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The order quantity of Corn Cake products should be 10 pieces, meeting the stocking needs"
        assert len(result) > 0
