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
        assert result[0]["store_id"] == 'S20256588427202403_S30564'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S16953373692012650_P62169", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 39.0) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S29739462731693712_S94527'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S44724343238630030_P83860", "quantity": 1}, {"product_id": "S62192820423218074_P62016", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 20.79) < 1

    def test_rubric_0_deliver_user_s_personal_meal_order__korean_grilled_beef_rice(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Deliver user\'s personal meal order (Korean grilled beef rice bowl or spicy rice dish) to Linyi Urban Construction Group Co., Ltd., 180 meters northwest of the intersection of Xi\'an Road and Baimahe Road, Lanshan District, Linyi City, Shandong Province"
        assert len(result) > 0

    def test_rubric_1_the_delivery_time_for_user_s_personal_meal_should_be_around(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for user\'s personal meal should be around 2024-10-18 12:00:00"
        assert len(result) > 0

    def test_rubric_2_user_s_personal_meal_should_be_ordered_from_xiaohui_snack_ho(self):
        # Structural check - the answer must contain orders that satisfy:
        # "User\'s personal meal should be ordered from Xiaohui Snack House"
        assert len(result) > 0

    def test_rubric_3_the_spiciness_level_of_user_s_personal_meal_should_be_mildly(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The spiciness level of user\'s personal meal should be Mildly Spicy"
        assert len(result) > 0

    def test_rubric_4_deliver_colleague_s_meal_order__affordable_spicy_hot_pot_sin(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Deliver colleague\'s meal order (affordable spicy hot pot single meal) to Linyi Urban Construction Group Co., Ltd., 180 meters northwest of the intersection of Xi\'an Road and Baimahe Road, Lanshan District, Linyi City, Shandong Province"
        assert len(result) > 0

    def test_rubric_5_the_delivery_time_for_colleague_s_meal_should_be_between_202(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for colleague\'s meal should be between 2024-10-18 10:49:12 and 2024-10-18 12:49:12"
        assert len(result) > 0

    def test_rubric_6_the_spiciness_level_of_colleague_s_meal_should_be_extra_spic(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The spiciness level of colleague\'s meal should be Extra Spicy"
        assert len(result) > 0
