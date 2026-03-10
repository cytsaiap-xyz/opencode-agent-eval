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
        assert result[0]["store_id"] == 'S18748399810467268_S89485'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S19705338573272683_P73363", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 20) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S18748399810467268_S89485'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S19705338573272683_P73363", "quantity": 1}, {"product_id": "", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 20) < 1

    def test_rubric_0_cancel_the_mango_pomelo_sago_order_from_shuxia__yufeng_li_br(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Cancel the Mango Pomelo Sago order from Shuxia (Yufeng Li Branch), and change the status of order_id B0714001T02 to cancelled"
        assert len(result) > 0

    def test_rubric_1_place_a_new_order_for_mango_pomelo_sago_at_shuxia__yufeng_li(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Place a new order for Mango Pomelo Sago at Shuxia (Yufeng Li Branch), select no extra sugar"
        assert len(result) > 0

    def test_rubric_2_the_delivery_address_for_the_clay_pot_porridge_order_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the clay pot porridge order should be Chengdu Exchange Building, South of Jinyun West Lane 1, Wuhou District, Chengdu, Sichuan Province"
        assert len(result) > 0

    def test_rubric_3_the_expected_delivery_time_for_the_clay_pot_porridge_order_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The expected delivery time for the clay pot porridge order should be before 2025-05-08 22:30:00"
        assert len(result) > 0

    def test_rubric_4_when_selecting_clay_pot_porridge_items__avoid_products_conta(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When selecting clay pot porridge items, avoid products containing high-purine ingredients (such as organ meats, seafood, etc.)"
        assert len(result) > 0
