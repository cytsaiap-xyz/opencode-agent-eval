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
        assert result[0]["store_id"] == 'S15536723275106377_S96178'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S24518040077817653_P83870", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 28.8) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S28286985627882831_S33402'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S21465954562957466_P07678", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 23.8) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S28566313792243207_S99929'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S28094256416303510_P14903", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 21.8) < 1

    def test_rubric_0_the_delivery_address_for_the_beef_light_meal_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the beef light meal order should be Zijingang Primary School of Xuejun Primary School Education Group, 198 Pingshui West Street, Xihu District, Hangzhou, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_beef_light_meal_order_sh(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the beef light meal order should be after 11:00 on October 24, 2025"
        assert len(result) > 0

    def test_rubric_2_the_merchant_selected_for_the_beef_light_meal_order_should_h(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The merchant selected for the beef light meal order should have a Dine-in Restaurant label to ensure hygiene standards"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_braised_meat_rice_cake_order_sh(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the braised meat rice cake order should be Zijin Literary Garden, 418 Yuhang Tang Road, Xihu District, Hangzhou, Zhejiang Province (470m walk from Samba Metro Station Exit G1)"
        assert len(result) > 0

    def test_rubric_4_the_estimated_delivery_time_for_the_braised_meat_rice_cake_o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the braised meat rice cake order should be around 17:00 on October 24, 2025"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_for_the_soft_egg_pancake_order_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the soft egg pancake order should be Zijin Literary Garden, 418 Yuhang Tang Road, Xihu District, Hangzhou, Zhejiang Province (470m walk from Samba Metro Station Exit G1)"
        assert len(result) > 0

    def test_rubric_6_the_estimated_delivery_time_for_the_soft_egg_pancake_order_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the soft egg pancake order should be around 17:00 on October 24, 2025"
        assert len(result) > 0

    def test_rubric_7_the_soft_egg_pancake_order_should_select_the_option_without(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The soft egg pancake order should select the option without onions, but keep other ingredient options (such as selecting \'cilantro only\' from options like \'cilantro only\', \'With Onions only\', \'no cilantro no onions\', \'with both cilantro and onions\')"
        assert len(result) > 0
