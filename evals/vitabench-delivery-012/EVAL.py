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
        for order in result:
            assert "store_id" in order
            assert "products" in order
            assert "total_price" in order
            assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S22593193942613919_S60598'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S20458653256242573_P48003", "quantity": 1}, {"product_id": "S13595797233262438_P27624", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 39.6) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S26858710382003715_S84441'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S79237675029607579_P61616", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 92) < 1

    def test_rubric_0_the_delivery_address_for_the_snow_ice_order_should_be_greenl(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Snow Ice order should be Greenland Joy City, West Station Street, Honggutan District, Nanchang, Jiangxi Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_snow_ice_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the Snow Ice order should be after 11:00:00 on March 16, 2025"
        assert len(result) > 0

    def test_rubric_2_the_snow_ice_order_should_include_2_snow_ice_items__specific(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Snow Ice order should include 2 Snow Ice items, specifically Mango Red Bean flavor and Taro Paste Taro Ball flavor, to satisfy the needs of the user and her friend, one for each"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_lamb_spine_hot_pot_order_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Lamb Spine Hot Pot order should be Greenland Joy City, West Station Street, Honggutan District, Nanchang, Jiangxi Province"
        assert len(result) > 0

    def test_rubric_4_the_estimated_delivery_time_for_the_lamb_spine_hot_pot_order(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the Lamb Spine Hot Pot order should be after 11:00:00 on March 16, 2025"
        assert len(result) > 0

    def test_rubric_5_the_lamb_spine_hot_pot_order_should_include_lamb_spine_items(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Lamb Spine Hot Pot order should include Lamb Spine items weighing 2 Jin"
        assert len(result) > 0
