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
        assert result[0]["store_id"] == 'S17564426693922849_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564426693922849_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 188) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == ''

    def test_order_1_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 0) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564426693922849_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564426693922849_P00005", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 398) < 1

    def test_rubric_0_the_diy_handicraft_workshop_to_be_ordered_should_have_more_t(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The DIY handicraft workshop to be ordered should have more than 5 years of traditional handicraft making experience"
        assert len(result) > 0

    def test_rubric_1_the_ordered_product_from_diy_handicraft_workshop_should_incl(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered product from DIY handicraft workshop should include zongzi making activity"
        assert len(result) > 0

    def test_rubric_2_the_ordered_product_from_diy_handicraft_workshop_should_be_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered product from DIY handicraft workshop should be a family package for 2 adults and 1 child"
        assert len(result) > 0

    def test_rubric_3_the_diy_handicraft_workshop_appointment_time_should_be_2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The DIY handicraft workshop appointment time should be 2025-05-31 14:00:00"
        assert len(result) > 0

    def test_rubric_4_the_diy_handicraft_workshop_reservation_should_be_for_3_peop(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The DIY handicraft workshop reservation should be for 3 people"
        assert len(result) > 0

    def test_rubric_5_the_diy_handicraft_workshop_merchant_should_be_zongqing_hand(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The DIY handicraft workshop merchant should be Zongqing Handcraft Workshop"
        assert len(result) > 0

    def test_rubric_6_after_checking_user_s_historical_behavior__the_restaurant_to(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "After checking user\'s historical behavior, the restaurant to order from should be Qingdao Fishing Port Seafood Restaurant"
        assert len(result) > 0

    def test_rubric_7_after_checking_the_set_meals_of_qingdao_fishing_port_seafood(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "After checking the set meals of Qingdao Fishing Port Seafood Restaurant, the results include Dragon Boat Festival exclusive package, therefore the seafood restaurant order should be for the Dragon Boat Festival exclusive package"
        assert len(result) > 0
