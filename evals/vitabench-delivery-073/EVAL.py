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
        assert result[0]["store_id"] == 'S26065627586369062_S23399'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S18192528497455031_P17757", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 22.99) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S18286164646930495_S16514'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S22810519353730742_P56607", "quantity": 1}, {"product_id": "S23661573642546781_P96011", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 20.6) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S89411709014069985_S86114'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S28817184822656220_P10240", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 22) < 1

    def test_rubric_0_the_delivery_address_for_the_golden_soup_five_grain_fish_noo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Golden Soup Five-Grain Fish Noodles order should be A1 Tower, Tengfei Innovation Park, 160 meters southeast of the intersection of Xinping Street and Ruoshui Road, Huqiu District, Suzhou, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_1_the_delivery_time_for_the_golden_soup_five_grain_fish_noodle(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the Golden Soup Five-Grain Fish Noodles order should be before 2026-05-11 11:00:00"
        assert len(result) > 0

    def test_rubric_2_the_fish_noodles_item_in_the_golden_soup_five_grain_fish_noo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The fish noodles item in the Golden Soup Five-Grain Fish Noodles order should select the option with soup and noodles separated"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_snack_order_should_be_a1_tower(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the snack order should be A1 Tower, Tengfei Innovation Park, 160 meters southeast of the intersection of Xinping Street and Ruoshui Road, Huqiu District, Suzhou, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_4_the_delivery_time_for_the_snack_order_should_be_before_2026(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the snack order should be before 2026-05-11 11:00:00"
        assert len(result) > 0

    def test_rubric_5_the_pineapple_bun_item_in_the_snack_order_should_select_the(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The pineapple bun item in the snack order should select the version without butter"
        assert len(result) > 0

    def test_rubric_6_the_snack_order_should_have_a_total_of_2_items__both_from_de(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The snack order should have a total of 2 items, both from De Fa Cai Chaozhou Porridge Tea Restaurant (Suzhou Hengyi Plaza Branch)"
        assert len(result) > 0

    def test_rubric_7_the_delivery_address_for_the_percent_tea_fresh_milk_tea_orde(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Percent Tea fresh milk tea order should be A1 Tower, Tengfei Innovation Park, 160 meters southeast of the intersection of Xinping Street and Ruoshui Road, Huqiu District, Suzhou, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_8_the_delivery_time_for_the_percent_tea_fresh_milk_tea_order_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the Percent Tea fresh milk tea order should be before 2026-05-11 11:00:00"
        assert len(result) > 0

    def test_rubric_9_the_milk_tea_item_with_pistachio_cheese_and_water_chestnut_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The milk tea item with Pistachio Cheese and Water Chestnut Balls in the Percent Tea fresh milk tea order should select half sugar sweetness"
        assert len(result) > 0
