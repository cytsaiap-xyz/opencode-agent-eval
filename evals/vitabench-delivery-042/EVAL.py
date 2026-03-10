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
        assert result[0]["store_id"] == 'S16397977979949275_S31031'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S29243685947942659_P16634", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 32) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S18439376674920482_S13973'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S16344074169041072_P77071", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 28) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S14058772949030407_S32078'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S10503479207992409_P98431", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 29.76) < 1

    def test_rubric_0_need_to_cancel_the_order_containing_stinky_tofu_from_tianma(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to cancel the order containing stinky tofu from Tianma Prince Stinky Tofu store, update the status of order with order_id 80716002T01 to cancelled"
        assert len(result) > 0

    def test_rubric_1_the_newly_placed_snack_order_should_be_from_tianma_prince_st(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The newly placed snack order should be from Tianma Prince Stinky Tofu"
        assert len(result) > 0

    def test_rubric_2_the_newly_placed_combo_snack_set_should_avoid_foods_with_str(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The newly placed combo snack set should avoid foods with strong odors, such as stinky tofu and other fermented snacks"
        assert len(result) > 0

    def test_rubric_3_the_estimated_delivery_time_of_the_newly_placed_snack_order(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time of the newly placed snack order should be before 2025-05-17 18:00:00"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_the_beverage_order_should_be_hunan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the beverage order should be Hunan TV Program Production Center (North Area), 60 meters southwest of the intersection of Anju Road and Guixin Road, Kaifu District, Changsha City, Hunan Province"
        assert len(result) > 0

    def test_rubric_5_the_estimated_delivery_time_for_the_beverage_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the beverage order should be before 2025-05-17 18:00:00"
        assert len(result) > 0

    def test_rubric_6_the_beverage_order_should_be_placed_from_liangguo_ba__hengda(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The beverage order should be placed from Liangguo Ba (Hengda Yayuan Branch)"
        assert len(result) > 0

    def test_rubric_7_the_delivery_address_for_spicy_chicken_stir_fried_noodles_or(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for Spicy Chicken Stir-fried Noodles order should be Hunan TV Program Production Center (North Area), 60 meters southwest of the intersection of Anju Road and Guixin Road, Kaifu District, Changsha City, Hunan Province"
        assert len(result) > 0

    def test_rubric_8_the_estimated_delivery_time_for_the_spicy_chicken_stir_fried(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the Spicy Chicken Stir-fried Noodles order should be before 2025-05-17 18:00:00"
        assert len(result) > 0

    def test_rubric_9_the_product_brand_of_the_spicy_chicken_stir_fried_noodles_or(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The product brand of the Spicy Chicken Stir-fried Noodles order should be Korean Samyang"
        assert len(result) > 0
