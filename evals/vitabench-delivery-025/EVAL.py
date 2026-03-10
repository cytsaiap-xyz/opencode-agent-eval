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
        assert result[0]["store_id"] == 'S79679458844636948_S74671'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S29061524043408537_P69151", "quantity": 1}, {"product_id": "S17299343602389098_P63585", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 41.0) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S91621604275653436_S48003'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S33141201285943289_P89807", "quantity": 1}, {"product_id": "S95392241852672728_P68388", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 24.0) < 1

    def test_rubric_0_the_delivery_address_for_night_snack_orders_should_be_nanyan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for night snack orders should be Nanyang New Village near No.94 Tongyang Road, Liangxi District, Wuxi, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_night_snack_orders_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for night snack orders should be before 22:55 on August 23, 2024"
        assert len(result) > 0

    def test_rubric_2_the_night_snack_order_for_braised_goose_meat_and_vegetable_h(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The night snack order for braised goose meat and vegetable hearts should be from popular ranked merchants, such as Chaolin Fresh Midnight Restaurant or other stores with popular ranking labels"
        assert len(result) > 0

    def test_rubric_3_when_selecting_braised_goose_meat__the_non_spicy_flavor_shou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When selecting braised goose meat, the Non-Spicy flavor should be chosen, and when selecting vegetable hearts, the Low Oil cooking method should be chosen"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_suzhou_style_mung_bean_soup_orders(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for Suzhou-style Mung Bean Soup orders should be Nanyang New Village near No.94 Tongyang Road, Liangxi District, Wuxi, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_5_the_estimated_delivery_time_for_suzhou_style_mung_bean_soup(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for Suzhou-style Mung Bean Soup orders should be before 22:55 on August 23, 2024"
        assert len(result) > 0

    def test_rubric_6_the_suzhou_style_mung_bean_soup_order_should_include_1_regul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Suzhou-style Mung Bean Soup order should include 1 regular mung bean soup item with No Additional Ingredients"
        assert len(result) > 0

    def test_rubric_7_the_suzhou_style_mung_bean_soup_order_should_include_1_mung(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Suzhou-style Mung Bean Soup order should include 1 mung bean soup item with only Lily Bulb as an additional ingredient"
        assert len(result) > 0
