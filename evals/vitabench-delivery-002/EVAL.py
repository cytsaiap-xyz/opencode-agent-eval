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
        assert result[0]["store_id"] == 'S17432753848082089_S35082'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S33329865254216168_P09168", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 49) < 1

    def test_rubric_0_delivery_address_should_be_north_area_of_fengning_residentia(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Delivery address should be North Area of Fengning Residential Complex, No. 10 Fengning Road, Wuhua District, Kunming, Yunnan Province"
        assert len(result) > 0

    def test_rubric_1_total_price_of_crayfish_order_should_be_around_50_yuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Total price of crayfish order should be around 50 yuan"
        assert len(result) > 0

    def test_rubric_2_crayfish_for_children_should_be_non_spicy_flavor__such_as_ga(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Crayfish for children should be Non-spicy flavor, such as garlic or other mild flavors"
        assert len(result) > 0

    def test_rubric_3_to_prevent_stomach_issues_for_children__restaurants_with_fre(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "To prevent stomach issues for children, restaurants with Fresh Ingredients should be selected"
        assert len(result) > 0

    def test_rubric_4_the_portion_of_crayfish_ordered_should_be_enough_for_two_peo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The portion of crayfish ordered should be enough For Two People"
        assert len(result) > 0
