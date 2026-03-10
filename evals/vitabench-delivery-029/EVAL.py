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
        assert result[0]["store_id"] == 'S23597952404471978_S32268'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S26405762812607500_P84518", "quantity": 1}, {"product_id": "S31379212894739768_P71880", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 19.6) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S14430480741096540_S15798'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S26182418190845124_P94217", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 26.9) < 1

    def test_rubric_0_add_note_to_the_handmade_spicy_strips_order_with_order_id_40(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Add note to the handmade spicy strips order with order_id 40711008O01: Extra spicy, thanks"
        assert len(result) > 0

    def test_rubric_1_the_ordered_pork_sandwich_and_rice_skin_noodles_must_be_in_m(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered pork sandwich and rice skin noodles must be in meal set form, not as individual items"
        assert len(result) > 0

    def test_rubric_2_the_expected_delivery_time_for_the_pork_sandwich_and_rice_sk(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The expected delivery time for the pork sandwich and rice skin noodles order should be before 12:00:00 on June 24, 2026"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_pork_sandwich_and_rice_skin_noo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the pork sandwich and rice skin noodles order should be ZTO Express Xigong Branch 3, No. 3 Jiankang East Road, Xigong District, Luoyang, Henan Province"
        assert len(result) > 0
