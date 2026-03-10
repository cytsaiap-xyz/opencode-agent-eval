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
        assert result[0]["store_id"] == 'S14869188927748166_S56333'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S11290194455544313_P61785", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 88.0) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S14913462339481426_S95816'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S82609394899889132_P42592", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 88.0) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S31962114888131936_S05343'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S52821417266607384_P33294", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 17.88) < 1

    def test_rubric_0_the_anniversary_cake_order_should_select_products_with_high(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The anniversary cake order should select products with high cost-effectiveness"
        assert len(result) > 0

    def test_rubric_1_the_delivery_time_for_the_anniversary_cake_order_should_be_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the anniversary cake order should be before 18:00:00 on May 20, 2025"
        assert len(result) > 0

    def test_rubric_2_the_delivery_address_for_the_anniversary_cake_order_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the anniversary cake order should be Oasis Garden, No. 133 Minzu Avenue, Qingxiu District, Nanning, Guangxi Zhuang Autonomous Region"
        assert len(result) > 0

    def test_rubric_3_the_products_in_the_dinner_set_meal_order_should_have_appeti(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The products in the dinner set meal order should have appetizing effects"
        assert len(result) > 0

    def test_rubric_4_the_products_in_the_dinner_set_meal_order_should_be_small_po(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The products in the dinner set meal order should be small portions"
        assert len(result) > 0

    def test_rubric_5_the_delivery_time_for_the_dinner_set_meal_order_should_be_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the dinner set meal order should be before 18:00:00 on May 20, 2025"
        assert len(result) > 0

    def test_rubric_6_the_delivery_address_for_the_dinner_set_meal_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the dinner set meal order should be Oasis Garden, No. 133 Minzu Avenue, Qingxiu District, Nanning, Guangxi Zhuang Autonomous Region"
        assert len(result) > 0

    def test_rubric_7_the_lunch_rice_noodle_roll_order_should_note__less_sauce(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The lunch rice noodle roll order should note \'less sauce\'"
        assert len(result) > 0

    def test_rubric_8_the_lunch_rice_noodle_roll_should_be_of_beef_and_egg_flavor(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The lunch rice noodle roll should be of beef and egg flavor"
        assert len(result) > 0

    def test_rubric_9_the_delivery_time_for_the_lunch_rice_noodle_roll_order_shoul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the lunch rice noodle roll order should be within 11:00:00-12:00:00 on May 20, 2025"
        assert len(result) > 0

    def test_rubric_10_the_delivery_address_for_the_lunch_rice_noodle_roll_order_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the lunch rice noodle roll order should be Mingmen Tianjing, No. 157 Minzu Avenue, Qingxiu District, Nanning, Guangxi Zhuang Autonomous Region"
        assert len(result) > 0
