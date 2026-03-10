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
        assert result[0]["store_id"] == 'S17550802127823540_I00015'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802127823540_P00114", "quantity": 5}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1990) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802127823540_S00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802127823540_P00006", "quantity": 5}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 244.5) < 1

    def test_rubric_0_the_ordered_moxibustion_package_duration_must_be_between_60(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered moxibustion package duration must be between 60-90 minutes"
        assert len(result) > 0

    def test_rubric_1_the_moxibustion_package_should_be_exactly_enough_for_5_peopl(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The moxibustion package should be exactly enough for 5 people, no more no less"
        assert len(result) > 0

    def test_rubric_2_the_moxibustion_package_must_be_a_suspended_moxibustion_serv(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The moxibustion package must be a suspended moxibustion service"
        assert len(result) > 0

    def test_rubric_3_the_delivery_restaurant_must_support_night_delivery(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery restaurant must support night delivery"
        assert len(result) > 0

    def test_rubric_4_the_delivery_restaurant_should_have_a_rating_of_4_5_or_above(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery restaurant should have a rating of 4.5 or above"
        assert len(result) > 0

    def test_rubric_5_the_ordered_delivery_food_must_be_low_sodium_light_food(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered delivery food must be low-sodium light food"
        assert len(result) > 0

    def test_rubric_6_the_ordered_delivery_food_must_not_affect_reaction_speed__an(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered delivery food must not affect reaction speed, and cannot contain alcohol or irritating ingredients"
        assert len(result) > 0

    def test_rubric_7_the_delivery_order_needs_to_include_5_individual_meals(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery order needs to include 5 individual meals"
        assert len(result) > 0

    def test_rubric_8_the_delivery_address_should_be_hangzhou_atour_hotel__sports(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address should be Hangzhou Atour Hotel (Sports Center Branch), 3800 Moganshan Road, Gongshu District, Hangzhou"
        assert len(result) > 0
