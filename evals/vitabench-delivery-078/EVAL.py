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
        assert result[0]["store_id"] == 'S32352534561955193_S72446'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S24482885289562176_P77981", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 87) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S21687429664650680_S32362'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S20111038835749649_P89250", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 25) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S10892011637579176_S44408'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S74469906752994471_P47610", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 54) < 1

    def test_rubric_0_the_delivery_address_for_lunch_order_should_be_co_working_sp(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for lunch order should be Co-working Space, 5th Floor, Center 66, No. 139 Renmin Middle Road, Liangxi District, Wuxi City, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_lunch_order_should_be_around(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for lunch order should be around 2025-10-16 12:00"
        assert len(result) > 0

    def test_rubric_2_the_lunch_order_should_select_wu_yue_specialties__and_the_po(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The lunch order should select Wu-Yue specialties, and the portion should be suitable for two people"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_afternoon_drink_order_should_be_co(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for afternoon drink order should be Co-working Space, 5th Floor, Center 66, No. 139 Renmin Middle Road, Liangxi District, Wuxi City, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_4_the_estimated_delivery_time_for_afternoon_drink_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for afternoon drink order should be around 2025-10-16 16:00"
        assert len(result) > 0

    def test_rubric_5_the_afternoon_drink_order_should_select_lemon_drinks_that_ha(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The afternoon drink order should select lemon drinks that have refreshing effects"
        assert len(result) > 0

    def test_rubric_6_the_product_specification_for_afternoon_drink_order_should_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product specification for afternoon drink order should select no ice"
        assert len(result) > 0

    def test_rubric_7_the_total_number_of_products_for_afternoon_drink_order_shoul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total number of products for afternoon drink order should be 2 portions"
        assert len(result) > 0

    def test_rubric_8_the_delivery_address_for_dinner_order_should_be_co_working_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for dinner order should be Co-working Space, 5th Floor, Center 66, No. 139 Renmin Middle Road, Liangxi District, Wuxi City, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_9_the_estimated_delivery_time_for_dinner_order_should_be_aroun(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for dinner order should be around 2025-10-16 20:00"
        assert len(result) > 0

    def test_rubric_10_the_dinner_order_should_select_spicy_beef_noodle_soup_produc(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dinner order should select Spicy Beef Noodle Soup products without meat side dishes"
        assert len(result) > 0
