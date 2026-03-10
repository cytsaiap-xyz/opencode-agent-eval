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
        assert result[0]["store_id"] == 'S26029760355367319_S56035'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S33992586623866451_P39950", "quantity": 1}, {"product_id": "S23410007806115216_P22724", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 90.5) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S21386320899164091_S60328'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S89975760415369552_P50335", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 19.6) < 1

    def test_rubric_0_the_delivery_address_for_the_braised_goose_and_goose_liver_o(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the braised goose and goose liver order should be Linhua Road Community, No. 39 Linhua Road, Qixinggang Street, Yuzhong District, Chongqing (Next to Exit 4B of Qixinggang Metro Station)"
        assert len(result) > 0

    def test_rubric_1_the_braised_goose_and_goose_liver_order_should_include_one_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The braised goose and goose liver order should include one set menu and one individual item"
        assert len(result) > 0

    def test_rubric_2_the_delivery_time_for_the_braised_goose_and_goose_liver_orde(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the braised goose and goose liver order should be between 2025-01-01 11:30:00 and 2025-01-01 12:30:00"
        assert len(result) > 0

    def test_rubric_3_the_total_portion_of_items_in_the_braised_goose_and_goose_li(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total portion of items in the braised goose and goose liver order must be larger than a normal meal for two people, but not excessive (e.g., a meal for four would be excessive)"
        assert len(result) > 0

    def test_rubric_4_the_selected_merchant_for_the_braised_goose_and_goose_liver(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The selected merchant for the braised goose and goose liver order should have a rating higher than 4.0"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_for_the_peach_gum_and_lotus_seed_stewed(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Peach Gum and Lotus Seed Stewed Milk order should be Linhua Road Community, No. 39 Linhua Road, Qixinggang Street, Yuzhong District, Chongqing (Next to Exit 4B of Qixinggang Metro Station)"
        assert len(result) > 0

    def test_rubric_6_the_delivery_time_for_the_peach_gum_and_lotus_seed_stewed_mi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the Peach Gum and Lotus Seed Stewed Milk order should be between 2025-01-01 11:30:00 and 2025-01-01 12:30:00"
        assert len(result) > 0

    def test_rubric_7_the_items_in_the_peach_gum_and_lotus_seed_stewed_milk_order(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The items in the Peach Gum and Lotus Seed Stewed Milk order should have the hot drink attribute selected"
        assert len(result) > 0
