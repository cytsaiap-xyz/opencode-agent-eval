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
        assert result[0]["store_id"] == 'S31217774473889900_S25934'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S39235400686545422_P17041", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 98.0) < 1

    def test_rubric_0_the_ordered_birthday_cake_must_not_contain_mango_ingredients(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered birthday cake must not contain mango ingredients"
        assert len(result) > 0

    def test_rubric_1_the_ordered_birthday_cake_should_be_low_sugar_or_xylitol_typ(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered birthday cake should be low-sugar or xylitol type"
        assert len(result) > 0

    def test_rubric_2_the_ordered_birthday_cake_should_be_suitable_for_2_people_to(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered birthday cake should be suitable for 2 people to share (such as 4-6 inch cake)"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_birthday_cake_order_should_be_c(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the birthday cake order should be Chengfatou Zhujian Yajun, Rongning Road, Sanlitun Street, Zhengding County, Shijiazhuang, Hebei Province"
        assert len(result) > 0

    def test_rubric_4_the_estimated_delivery_time_for_the_birthday_cake_order_shou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the birthday cake order should be before 2025-10-01 15:00:00"
        assert len(result) > 0
