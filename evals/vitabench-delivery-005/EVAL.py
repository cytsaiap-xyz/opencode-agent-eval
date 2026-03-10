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
        assert result[0]["store_id"] == 'S25199488126977541_S02748'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S28500154039512110_P18362", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 30) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S65127841099095198_S44679'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S85468248976555661_P76180", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 24) < 1

    def test_rubric_0_the_delivery_address_for_the_beef_ball_rice_noodle_order_sho(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the beef ball rice noodle order should be Huixin Cultural Office, 1st Floor, Hengqin Innovation Way, No. 111 Tianyu Road, Xiangzhou District, Zhuhai City, Guangdong Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_beef_ball_rice_noodle_or(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the beef ball rice noodle order should be around 18:30 on February 14, 2025"
        assert len(result) > 0

    def test_rubric_2_the_beef_balls_selected_in_the_beef_ball_rice_noodle_order_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The beef balls selected in the beef ball rice noodle order should be freshly hand-pounded, and this feature should be reflected in the product label or description"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_dessert_order_should_be_huafa_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the dessert order should be Huafa Shoufu, South Side of Gang\'ao Avenue, Xiangzhou District, Zhuhai City, Guangdong Province"
        assert len(result) > 0

    def test_rubric_4_the_estimated_delivery_time_for_the_dessert_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the dessert order should be between 18:15 and 18:30 on February 14, 2025"
        assert len(result) > 0

    def test_rubric_5_a_reliable_dessert_shop_should_be_ordered_from__typically_ch(self):
        # Structural check - the answer must contain orders that satisfy:
        # "A reliable dessert shop should be ordered from, typically characterized by high ratings, Chain Store guarantee, and Authentic flavors"
        assert len(result) > 0

    def test_rubric_6_the_product_selected_in_the_dessert_order_should_contain_tar(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The product selected in the dessert order should contain taro paste elements, which should be reflected in the product name or description"
        assert len(result) > 0

    def test_rubric_7_the_ordered_dessert_should_not_be_cold(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered dessert should not be cold"
        assert len(result) > 0
