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
        assert result[0]["store_id"] == 'S94165448870298504_S93237'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S14166528684325946_P34171", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 34) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S26286878923282243_S58501'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S14214267117147297_P22912", "quantity": 2}, {"product_id": "S26376925645495405_P72482", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 72.56) < 1

    def test_rubric_0_the_delivery_address_for_children_s_beverage_orders_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for children\'s beverage orders should be Green Island Garden, No. 63 Hong Kong Middle Road, Shinan District, Qingdao, Shandong Province (180m walking distance from Exit A of Yan\'erdao Road Metro Station)"
        assert len(result) > 0

    def test_rubric_1_the_delivery_time_for_children_s_beverage_orders_should_be_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for children\'s beverage orders should be before 2025-06-01 00:00:00"
        assert len(result) > 0

    def test_rubric_2_the_merchant_rating_for_children_s_beverage_orders_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The merchant rating for children\'s beverage orders should be greater than or equal to 4.0"
        assert len(result) > 0

    def test_rubric_3_children_s_beverages_should_not_be_milk_or_any_product_conta(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Children\'s beverages should not be milk or any product containing milk, to avoid stomach discomfort in children"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_night_snack_orders_should_be_green(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for night snack orders should be Green Island Garden, No. 63 Hong Kong Middle Road, Shinan District, Qingdao, Shandong Province (180m walking distance from Exit A of Yan\'erdao Road Metro Station)"
        assert len(result) > 0

    def test_rubric_5_the_delivery_time_for_night_snack_orders_should_be_scheduled(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for night snack orders should be scheduled after 2025-06-01 00:00:00"
        assert len(result) > 0

    def test_rubric_6_the_merchant_rating_for_night_snack_orders_should_be_greater(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The merchant rating for night snack orders should be greater than or equal to 4.0"
        assert len(result) > 0

    def test_rubric_7_the_merchant_selected_for_night_snack_orders_should_support(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The merchant selected for night snack orders should support late-night delivery service"
        assert len(result) > 0

    def test_rubric_8_items_like_stir_fried_river_snails_in_the_night_snack_order(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Items like Stir-fried River Snails in the night snack order should be selected with mild spicy or non-spicy flavor, suitable for users with mouth ulcers"
        assert len(result) > 0
