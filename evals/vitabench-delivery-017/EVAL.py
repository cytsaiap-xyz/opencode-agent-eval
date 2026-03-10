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
        assert result[0]["store_id"] == 'S18559624638967307_S15514'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S18619197879317469_P91776", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 21.00) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S10578855038572520_S10983'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S57131084038540049_P83923", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 39.00) < 1

    def test_rubric_0_the_delivery_address_for_the_milk_tea_order_should_be_wanda(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Milk Tea order should be Wanda Plaza, No. 130 Ma\'anshan Road, Baohe District, Hefei, Anhui Province (Hefei Baohe Branch)"
        assert len(result) > 0

    def test_rubric_1_the_expected_delivery_time_for_the_milk_tea_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The expected delivery time for the Milk Tea order should be before 12:00 on September 13, 2025"
        assert len(result) > 0

    def test_rubric_2_the_ordered_milk_tea_should_be_gardenia_flavored(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered Milk Tea should be Gardenia flavored"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_mango_sticky_rice_should_be_tri(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Mango Sticky Rice should be Triumphal Arch Phase I, Intersection of Jiahe Road and Qianshan Road, Shushan District, Hefei, Anhui Province"
        assert len(result) > 0

    def test_rubric_4_the_expected_delivery_time_for_the_noon_mango_sticky_rice_or(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The expected delivery time for the noon Mango Sticky Rice order should be before 14:00 on September 13, 2025"
        assert len(result) > 0

    def test_rubric_5_the_mango_sticky_rice_should_be_iced(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Mango Sticky Rice should be iced"
        assert len(result) > 0
