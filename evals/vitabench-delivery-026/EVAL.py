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
        assert result[0]["store_id"] == 'S13446654125504467_S94507'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S30851657772923813_P84076", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 19.0) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S14040631712091225_S61822'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S15117001798616133_P52715", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 38.0) < 1

    def test_rubric_0_the_delivery_address_for_the_beef_rice_bowl_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the beef rice bowl order should be Henan Digital Certificate Authentication Center, Building 2, Future International, No. 26 Business Inner Ring Road, Jinshui District, Zhengzhou City, Henan Province"
        assert len(result) > 0

    def test_rubric_1_the_delivery_time_for_the_beef_rice_bowl_order_should_be_bef(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the beef rice bowl order should be before 2024-11-28 20:00:00"
        assert len(result) > 0

    def test_rubric_2_when_selecting_beef_rice_bowl_products__items_containing_org(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When selecting beef rice bowl products, items containing organ meats should be avoided"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_flat_white_coffee_order_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the flat white coffee order should be Henan Digital Certificate Authentication Center, Building 2, Future International, No. 26 Business Inner Ring Road, Jinshui District, Zhengzhou City, Henan Province"
        assert len(result) > 0

    def test_rubric_4_the_delivery_time_for_the_flat_white_coffee_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the flat white coffee order should be before 2024-11-28 20:00:00"
        assert len(result) > 0

    def test_rubric_5_when_selecting_flat_white_coffee__dark_roast_types_such_as_d(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When selecting flat white coffee, dark roast types such as Dark Roast Flat White should be avoided"
        assert len(result) > 0

    def test_rubric_6_when_selecting_flat_white_coffee__it_should_be_served_hot(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When selecting flat white coffee, it should be served hot"
        assert len(result) > 0
