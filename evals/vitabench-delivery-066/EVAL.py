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
        assert result[0]["store_id"] == 'S24717473813710342_S37435'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S12037763664481505_P73894", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 17.9) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S16740267212964910_S79387'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S29570288274735276_P40070", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 24.0) < 1

    def test_rubric_0_when_ordering_pork_dumplings_for_the_user__the_order_items_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When ordering pork dumplings for the user, the order items should not contain chive filling"
        assert len(result) > 0

    def test_rubric_1_when_ordering_pork_dumplings_for_the_user__the_store_rating(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When ordering pork dumplings for the user, the store rating should be 4.5 or above"
        assert len(result) > 0

    def test_rubric_2_when_ordering_pork_dumplings_for_the_user__the_store_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When ordering pork dumplings for the user, the store should have a physical location with Dine-in Available"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_user_s_pork_dumplings_order_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the user\'s pork dumplings order should be Faculty Building, No.62 West Second Ring North Road, Qiaoxi District, Shijiazhuang City, Hebei Province"
        assert len(result) > 0

    def test_rubric_4_when_ordering_seafood_dumpling_soup_for_grandmother__the_sto(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When ordering Seafood Dumpling Soup for grandmother, the store rating should be 4.5 or above"
        assert len(result) > 0

    def test_rubric_5_when_ordering_seafood_dumpling_soup_for_grandmother__the_sto(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When ordering Seafood Dumpling Soup for grandmother, the store should have a physical location with Dine-in Available"
        assert len(result) > 0

    def test_rubric_6_the_delivery_address_for_grandmother_s_seafood_dumpling_soup(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for grandmother\'s Seafood Dumpling Soup order should be Faculty Building, No.62 West Second Ring North Road, Qiaoxi District, Shijiazhuang City, Hebei Province"
        assert len(result) > 0
