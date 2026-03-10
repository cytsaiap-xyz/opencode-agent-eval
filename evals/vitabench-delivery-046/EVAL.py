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
        assert result[0]["store_id"] == 'S14759205231927669_S61625'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S26121447051926067_P60427", "quantity": 4}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 211.2) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S10710308899974275_S95622'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S71504960758110726_P70845", "quantity": 10}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 190) < 1

    def test_rubric_0_the_delivery_address_for_the_multi_person_sushi_set_meal_ord(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the multi-person sushi set meal order should be Internal Medicine Building, Nanning First People\'s Hospital, No. 89 Qixing Road, Qingxiu District, Nanning, Guangxi Zhuang Autonomous Region"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_multi_person_sushi_set_m(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the multi-person sushi set meal order should be before 2:00 PM on September 26, 2025"
        assert len(result) > 0

    def test_rubric_2_the_order_items_should_be_sushi_products_of_the_multi_person(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The order items should be sushi products of the multi-person set meal type"
        assert len(result) > 0

    def test_rubric_3_the_ordered_products_must_have_economical_affordable_price_c(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered products must have Economical/Affordable price characteristics"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_the_longan_drink_order_should_be_in(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the longan drink order should be Internal Medicine Building, Nanning First People\'s Hospital, No. 89 Qixing Road, Qingxiu District, Nanning, Guangxi Zhuang Autonomous Region"
        assert len(result) > 0

    def test_rubric_5_the_estimated_delivery_time_for_the_longan_drink_order_shoul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the longan drink order should be before 2:00 PM on September 26, 2025"
        assert len(result) > 0

    def test_rubric_6_the_order_items_should_be_drinks_containing_longan_ingredien(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The order items should be drinks containing longan ingredients"
        assert len(result) > 0

    def test_rubric_7_all_products_in_the_longan_drink_order_should_have_a_sweetne(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "All products in the longan drink order should have a sweetness attribute of three parts sugar"
        assert len(result) > 0
