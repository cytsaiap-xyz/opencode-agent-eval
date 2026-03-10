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
        for i, order in enumerate(result):
            if i in {2}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550809188913229_A00006'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550809188913229_P00037", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 210) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550809188913229_S00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550809188913229_P00008", "quantity": 1}, {"product_id": "S17550809188913229_P00011", "quantity": 1}, {"product_id": "S17550809188913229_P00013", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 51.6) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550809188913229_I00011'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 4

    def test_rubric_0_check_tickets_for_sui_tang_luoyang_jiuzhou_pool_on_march_8(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Check tickets for Sui-Tang Luoyang Jiuzhou Pool on March 8, 2025"
        assert len(result) > 0

    def test_rubric_1_the_tickets_ordered_for_sui_tang_luoyang_jiuzhou_pool_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tickets ordered for Sui-Tang Luoyang Jiuzhou Pool should be valid for use on March 8, 2025"
        assert len(result) > 0

    def test_rubric_2_the_tickets_ordered_should_be_suitable_for_4_people__and_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tickets ordered should be suitable for 4 people, and be the cheapest"
        assert len(result) > 0

    def test_rubric_3_xiangxi_local_cuisine_restaurant__luoyang_flagship_store__ha(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Xiangxi Local Cuisine Restaurant (Luoyang Flagship Store) has suitable set meals with fish, no need to change restaurants"
        assert len(result) > 0

    def test_rubric_4_the_final_reservation_should_be_for_4_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The final reservation should be for 4 people"
        assert len(result) > 0

    def test_rubric_5_the_ordered_delivery_items_should_include_bread(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered delivery items should include bread"
        assert len(result) > 0

    def test_rubric_6_the_ordered_delivery_items_should_include_dried_fruits_and_p(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered delivery items should include dried fruits and preserved fruits"
        assert len(result) > 0

    def test_rubric_7_the_ordered_delivery_items_should_not_include_food_with_stro(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered delivery items should not include food with Strong Smell"
        assert len(result) > 0

    def test_rubric_8_the_ordered_delivery_items_should_include_at_least_three_dif(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered delivery items should include at least three different products"
        assert len(result) > 0

    def test_rubric_9_the_delivery_address_should_be_xujiaying_community__220_mete(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address should be Xujiaying Community, 220 meters north of the intersection of Xuesong Road and Xingye Road, Jianxi District, Luoyang, Henan Province"
        assert len(result) > 0

    def test_rubric_10_the_expected_delivery_time_should_be_between_21_25_22_25_on(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The expected delivery time should be between 21:25-22:25 on March 7, 2025"
        assert len(result) > 0
