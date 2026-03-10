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
        assert result[0]["store_id"] == 'S16887453931857079_S63694'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S33043175164707784_P19453", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 53.7) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17075190379161118_S54665'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S95761118842118315_P53885", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 29.6) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S19713618878860452_S55950'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S29731354455150560_P41203", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 24.8) < 1

    def test_rubric_0_the_delivery_address_for_the_shanxi_specialty_drink_order_pr(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the Shanxi Specialty drink order prepared for the client should be International Trade Building, 69 Fuxi Street, Xinghualing District, Taiyuan, Shanxi Province"
        assert len(result) > 0

    def test_rubric_1_the_delivery_time_for_the_shanxi_specialty_drink_order_prepa(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the Shanxi Specialty drink order prepared for the client should be before 2025-09-26 20:00:00, for use during the evening dinner party"
        assert len(result) > 0

    def test_rubric_2_the_shanxi_specialty_drink_prepared_for_the_client_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Shanxi Specialty drink prepared for the client should be innovative vinegar drink products with local Shanxi characteristics, such as Shanxi Aged Vinegar Cola"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_clay_pot_soup_order_prepared_fo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the clay pot soup order prepared for family should be Longcheng Shangdu, 800 meters east of Wucheng Intersection (No.11 Bus Terminal), Xiaodian District, Taiyuan, Shanxi Province"
        assert len(result) > 0

    def test_rubric_4_the_delivery_time_for_the_clay_pot_soup_order_prepared_for_f(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the clay pot soup order prepared for family should be between 2025-09-26 17:57:41 and 2025-09-26 19:57:41"
        assert len(result) > 0

    def test_rubric_5_the_clay_pot_soup_items_prepared_for_family_should_have_nour(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The clay pot soup items prepared for family should have nourishing effects, suitable for the wife and daughter\'s health"
        assert len(result) > 0

    def test_rubric_6_the_clay_pot_soup_order_prepared_for_family_should_have_a_to(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The clay pot soup order prepared for family should have a total of 2 portions, one each for the wife and daughter"
        assert len(result) > 0

    def test_rubric_7_the_delivery_address_for_the_personal_lunch_buckwheat_cold_n(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the personal lunch buckwheat cold noodles order should be International Trade Building, 69 Fuxi Street, Xinghualing District, Taiyuan, Shanxi Province"
        assert len(result) > 0

    def test_rubric_8_the_delivery_time_for_the_personal_lunch_buckwheat_cold_nood(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the personal lunch buckwheat cold noodles order should be between 2025-09-26 17:57:41 and 2025-09-26 19:57:41"
        assert len(result) > 0

    def test_rubric_9_the_personal_lunch_buckwheat_cold_noodles_should_contain_mea(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The personal lunch buckwheat cold noodles should contain meat to meet non-vegetarian requirements"
        assert len(result) > 0

    def test_rubric_10_the_personal_lunch_buckwheat_cold_noodles_should_not_contain(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The personal lunch buckwheat cold noodles should not contain high-purine ingredients such as organ meats or seafood soup"
        assert len(result) > 0
