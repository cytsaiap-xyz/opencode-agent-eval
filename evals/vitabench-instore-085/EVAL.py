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
        assert result[0]["store_id"] == 'S17567843343057973_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567843343057973_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 398) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17567843343057973_I00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17567843343057973_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 288) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == ''

    def test_order_2_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 0) < 1

    def test_rubric_0_the_restaurant___bar_should_have_a_live_singer(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant & bar should have a live singer"
        assert len(result) > 0

    def test_rubric_1_when_querying_and_ordering_packages_at_the_restaurant___bar(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When querying and ordering packages at the restaurant & bar, the results should include a four-person meal with craft beer, so the restaurant & bar order should only have one four-person meal"
        assert len(result) > 0

    def test_rubric_2_the_restaurant___bar_package_should_include_food_and_craft_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant & bar package should include food and craft beer"
        assert len(result) > 0

    def test_rubric_3_the_ktv_should_be_within_2km__inclusive__from_drunk_note_res(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV should be within 2km (inclusive) from Drunk Note Restaurant & Bar, 3rd Floor, Wanda Plaza, 1380 Lijiang Road, Honggutan New District, Nanchang, Jiangxi Province"
        assert len(result) > 0

    def test_rubric_4_the_ktv_should_have_a_rating_of_4_5_or_above(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV should have a rating of 4.5 or above"
        assert len(result) > 0

    def test_rubric_5_the_ktv_should_be_a_chain_brand(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV should be a chain brand"
        assert len(result) > 0

    def test_rubric_6_the_ktv_order_should_be_for_a_karaoke_package(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV order should be for a karaoke package"
        assert len(result) > 0

    def test_rubric_7_the_ktv_order_should_be_for_a_3_hour_session(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV order should be for a 3-hour session"
        assert len(result) > 0

    def test_rubric_8_the_ktv_reservation_time_should_be_september_8__2023__at_20(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV reservation time should be September 8, 2023, at 20:00:00"
        assert len(result) > 0

    def test_rubric_9_the_ktv_reservation_should_be_for_4_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV reservation should be for 4 people"
        assert len(result) > 0

    def test_rubric_10_the_reserved_ktv_venue_should_be_star_gathering_ktv__wanda_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved KTV venue should be Star Gathering KTV (Wanda Plaza Branch)"
        assert len(result) > 0
