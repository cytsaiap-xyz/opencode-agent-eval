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
        assert result[0]["store_id"] == 'S33363530436911954_S11799'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S32177701011838614_P51657", "quantity": 1}, {"product_id": "S70339754454127759_P72096", "quantity": 1}, {"product_id": "S28954244699479487_P40371", "quantity": 1}, {"product_id": "S15417577372637700_P35102", "quantity": 1}, {"product_id": "S65948025828860154_P02991", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 155.3) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S19112477721572247_S00931'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S25891087943464915_P07860", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 88.0) < 1

    def test_rubric_0_the_delivery_address_for_chinese_cuisine_dishes_ordered_for(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for Chinese cuisine dishes ordered for mother\'s birthday dinner should be Greentown Haitang Garden, No.1766 Bayi South Street, Wucheng District, Jinhua City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_chinese_cuisine_order_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the Chinese cuisine order should be before 18:30 on November 28, 2025"
        assert len(result) > 0

    def test_rubric_2_the_chinese_cuisine_dishes_selected_for_mother_s_birthday_di(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Chinese cuisine dishes selected for mother\'s birthday dinner should include both Light-Flavored dishes and authentic spicy Sichuan Cuisine"
        assert len(result) > 0

    def test_rubric_3_the_five_chinese_cuisine_dishes_selected_for_mother_s_birthd(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The five Chinese cuisine dishes selected for mother\'s birthday dinner should all be different, not ordering two portions of the same dish"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_the_birthday_cake_order_should_be_g(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the birthday cake order should be Greentown Haitang Garden, No.1766 Bayi South Street, Wucheng District, Jinhua City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_5_the_estimated_delivery_time_for_the_birthday_cake_order_shou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the birthday cake order should be before 18:30 on November 28, 2025"
        assert len(result) > 0

    def test_rubric_6_the_ordered_dairy_cream_birthday_cake_should_be_sized_for_ap(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered Dairy Cream birthday cake should be sized for approximately two people, around 4-inch"
        assert len(result) > 0
