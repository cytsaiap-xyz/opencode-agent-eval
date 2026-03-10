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
        assert result[0]["store_id"] == 'S72636245888181282_S54188'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S27202813520347088_P19057", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 46.0) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S29478989696606736_S98869'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S11703506162688527_P48578", "quantity": 1}, {"product_id": "S12684543222819040_P84828", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 103.6) < 1

    def test_rubric_0_the_ordered_yoshinoya_chicken_cutlet_rice_product_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered Yoshinoya chicken cutlet rice product should be Teriyaki Chicken Cutlet Rice"
        assert len(result) > 0

    def test_rubric_1_the_ordered_chicken_cutlet_rice_product_specification_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered chicken cutlet rice product specification should be small size or small bowl"
        assert len(result) > 0

    def test_rubric_2_the_delivery_address_for_the_yoshinoya_chicken_cutlet_rice_o(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Yoshinoya chicken cutlet rice order should be No. 23 Donghai West Road, Tiansheng Garden·Haiyun Urban Complex, Shinan District, Qingdao, Shandong Province"
        assert len(result) > 0

    def test_rubric_3_the_estimated_delivery_time_for_the_yoshinoya_chicken_cutlet(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the Yoshinoya chicken cutlet rice order should be around 2025-05-01 17:00:00"
        assert len(result) > 0

    def test_rubric_4_the_rating_of_the_ordered_chuozi_meat_restaurant_should_be_4(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The rating of the ordered Chuozi Meat restaurant should be 4.1 or above"
        assert len(result) > 0

    def test_rubric_5_the_chuozi_meat_order_should_include_hand_held_treasure_prod(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Chuozi Meat order should include Hand-held Treasure product"
        assert len(result) > 0

    def test_rubric_6_the_chuozi_meat_order_should_choose_cuts_that_do_not_contain(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Chuozi Meat order should choose cuts that do not contain fat"
        assert len(result) > 0

    def test_rubric_7_all_products_in_the_chuozi_meat_order_should_be_mild_spicy(self):
        # Structural check - the answer must contain orders that satisfy:
        # "All products in the Chuozi Meat order should be mild spicy"
        assert len(result) > 0

    def test_rubric_8_the_total_number_of_products_in_the_chuozi_meat_order_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total number of products in the Chuozi Meat order should be 2"
        assert len(result) > 0

    def test_rubric_9_the_delivery_address_for_the_chuozi_meat_order_should_be_no(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Chuozi Meat order should be No. 23 Donghai West Road, Tiansheng Garden·Haiyun Urban Complex, Shinan District, Qingdao, Shandong Province"
        assert len(result) > 0

    def test_rubric_10_the_estimated_delivery_time_for_the_chuozi_meat_order_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the Chuozi Meat order should be around 2025-05-01 17:00:00"
        assert len(result) > 0
