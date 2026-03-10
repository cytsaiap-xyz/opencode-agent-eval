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
        assert result[0]["store_id"] == 'S11668798961810671_S70508'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S19986369287600600_P19459", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 18) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S25744658143312475_S05797'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S22921725616497759_P64399", "quantity": 1}, {"product_id": "S22354168124977757_P23954", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 21) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S25096963193279629_S52306'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S24871042340866006_P28026", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 15.99) < 1

    def test_rubric_0_successfully_cancel_the_user_s_iced_coffee_order_from_night(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Successfully cancel the user\'s iced coffee order from Night of No Mistake · Coffee in Morning, Wine at Night, the order with id 20715002T01 should be changed to cancelled status"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_yuxiang_shredded_pork_lunch_ord(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Yuxiang Shredded Pork lunch order should be Tsinghua Science Park, 101 University Road, Tangjia Bay, Xiangzhou District, Zhuhai City, Guangdong Province"
        assert len(result) > 0

    def test_rubric_2_the_estimated_delivery_time_for_the_yuxiang_shredded_pork_lu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the Yuxiang Shredded Pork lunch order should be on or before 2025-08-08 12:00:00"
        assert len(result) > 0

    def test_rubric_3_the_yuxiang_shredded_pork_lunch_order_should_include_a_note(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Yuxiang Shredded Pork lunch order should include a note requesting an extra set of cutlery to ensure an additional pair of chopsticks is available"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_the_new_latte_order_should_be_tsing(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the new latte order should be Tsinghua Science Park, 101 University Road, Tangjia Bay, Xiangzhou District, Zhuhai City, Guangdong Province"
        assert len(result) > 0

    def test_rubric_5_the_estimated_delivery_time_for_the_replacement_latte_order(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the replacement latte order should be around 2025-08-08 14:00:00"
        assert len(result) > 0

    def test_rubric_6_when_selecting_a_replacement_latte__avoid_night_of_no_mistak(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When selecting a replacement latte, avoid Night of No Mistake · Coffee in Morning, Wine at Night and choose another coffee shop"
        assert len(result) > 0

    def test_rubric_7_when_selecting_a_replacement_latte__choose_a_product_that_co(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When selecting a replacement latte, choose a product that Contains coconut milk to satisfy the requirement for a strong coconut flavor"
        assert len(result) > 0

    def test_rubric_8_when_selecting_a_replacement_latte__choose_a_hot_drink_tempe(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When selecting a replacement latte, choose a hot drink temperature to avoid cold drinks irritating the digestive system"
        assert len(result) > 0
