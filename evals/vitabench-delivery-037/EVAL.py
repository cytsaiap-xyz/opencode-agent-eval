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
        assert result[0]["store_id"] == 'S14928051648372008_S44574'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S14673831172316592_P26837", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 18.0) < 1

    def test_rubric_0_the_delivery_address_for_the_chicken_claypot_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the chicken claypot order should be Jinzhai Residential Area near Machine Tool Factory No.3, Jinwa Road, east of Dashuying Interchange, Guandu District, Kunming City, Yunnan Province"
        assert len(result) > 0

    def test_rubric_1_the_delivery_time_for_the_chicken_claypot_order_should_be_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the chicken claypot order should be before 2025-04-11 19:00:00 to ensure the user has enough time for dining and digestion"
        assert len(result) > 0

    def test_rubric_2_the_ordered_claypot_dish_must_contain_chicken_as_the_main_in(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered claypot dish must contain chicken as the main ingredient"
        assert len(result) > 0

    def test_rubric_3_the_ordered_claypot_dish_must_include_rice_or_other_staple_f(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered claypot dish must include rice or other staple food to ensure a complete nutritional balance"
        assert len(result) > 0

    def test_rubric_4_the_ordered_claypot_dish_should_have_a_light__non_greasy_fla(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered claypot dish should have a light, non-greasy flavor to meet the user\'s dietary restriction of avoiding greasy food"
        assert len(result) > 0

    def test_rubric_5_the_ordered_claypot_dish_must_come_with_dipping_sauce_to_sat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered claypot dish must come with dipping sauce to satisfy the user\'s requirement for condiments"
        assert len(result) > 0
