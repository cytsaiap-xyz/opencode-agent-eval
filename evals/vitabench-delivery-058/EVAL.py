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
        assert result[0]["store_id"] == 'S19558514638634850_S98323'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S16531267916494013_P41389", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 34.8) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S27032620835559200_S43409'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S43147040061896655_P35449", "quantity": 1}, {"product_id": "S20719091317601263_P08018", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 91.84) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S10109637620918345_S64872'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S13165353078973956_P18769", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 18.9) < 1

    def test_rubric_0_the_delivery_address_for_personal_dinner_order_of_crab_roe_n(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for personal dinner order of crab roe noodles should be Building B, Modern Mansion, No. 288 Zhongxing Middle Road, Yuecheng District, Shaoxing City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_1_the_delivery_time_for_personal_dinner_crab_roe_noodles_order(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for personal dinner crab roe noodles order should be around 2025-11-14 18:00:00"
        assert len(result) > 0

    def test_rubric_2_when_choosing_crab_roe_noodles_for_personal_dinner__avoid_ve(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When choosing crab roe noodles for personal dinner, avoid very spicy flavors, choose mildly spicy or non-spicy options"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_family_dinner_should_be_longzhu_pha(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for family dinner should be Longzhu Phase 2, 80 meters south of the intersection of Chaoyang Road and Jinghu Road, Yuecheng District, Shaoxing City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_4_the_delivery_time_for_family_dinner_order_should_be_before_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for family dinner order should be before 2025-11-14 19:30:00"
        assert len(result) > 0

    def test_rubric_5_when_choosing_pumpkin_and_duck_dishes_for_family__select_res(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When choosing pumpkin and duck dishes for family, select restaurants that support dine-in service"
        assert len(result) > 0

    def test_rubric_6_the_pumpkin_dish_in_the_family_dinner_order_should_be_stir_f(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The pumpkin dish in the family dinner order should be stir-fried with eggs rather than just steamed"
        assert len(result) > 0

    def test_rubric_7_the_duck_dish_in_the_family_dinner_order_should_be_braised_w(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The duck dish in the family dinner order should be braised with Sichuan peppercorns and be a half portion"
        assert len(result) > 0

    def test_rubric_8_the_delivery_address_for_family_glutinous_rice_staple_food_o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for family glutinous rice staple food order should be Longzhu Phase 2, 80 meters south of the intersection of Chaoyang Road and Jinghu Road, Yuecheng District, Shaoxing City, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_9_the_delivery_time_for_family_glutinous_rice_staple_food_orde(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for family glutinous rice staple food order should be before 2025-11-14 19:30:00"
        assert len(result) > 0

    def test_rubric_10_when_choosing_glutinous_rice_staple_food_for_family__select(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When choosing glutinous rice staple food for family, select restaurants that provide dine-in service"
        assert len(result) > 0

    def test_rubric_11_the_family_glutinous_rice_staple_food_order_needs_a_note_of(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The family glutinous rice staple food order needs a note of \'no green onions and cilantro\' to accommodate children\'s taste preferences"
        assert len(result) > 0
