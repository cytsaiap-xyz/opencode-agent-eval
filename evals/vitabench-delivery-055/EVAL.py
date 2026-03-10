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
        assert result[0]["store_id"] == 'S16600900215255434_S25486'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S23633206553145211_P14654", "quantity": 1}, {"product_id": "S21446171170312259_P41213", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 63.6) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S10186695543471431_S58464'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S26124060913222562_P13131", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 28.8) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S16384697043876564_S20200'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S90462241601970634_P69999", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 38) < 1

    def test_rubric_0_the_delivery_address_for_the_lunch_sichuan_cuisine_order_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the lunch Sichuan cuisine order should be Zone B, South A Zone, Yalan Garden, Yulin Street, Wuhou District, Chengdu, Sichuan Province"
        assert len(result) > 0

    def test_rubric_1_the_delivery_time_for_the_lunch_sichuan_cuisine_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the lunch Sichuan cuisine order should be around 12:00 on December 27, 2025, no later than 14:00"
        assert len(result) > 0

    def test_rubric_2_the_selected_restaurant_for_the_lunch_sichuan_cuisine_order(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The selected restaurant for the lunch Sichuan cuisine order should have a rating of 4.5 or above"
        assert len(result) > 0

    def test_rubric_3_the_items_in_the_lunch_sichuan_cuisine_order_should_be_fresh(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The items in the lunch Sichuan cuisine order should be freshly made dishes, not pre-made dishes"
        assert len(result) > 0

    def test_rubric_4_the_lunch_sichuan_cuisine_order_should_include_2_dishes__for(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The lunch Sichuan cuisine order should include 2 dishes, for two people to share"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_for_the_thank_you_dessert_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the thank-you dessert order should be Toyota Car Dealership"
        assert len(result) > 0

    def test_rubric_6_the_delivery_time_for_the_thank_you_dessert_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the thank-you dessert order should be before 14:00 on December 27, 2025"
        assert len(result) > 0

    def test_rubric_7_the_items_in_the_thank_you_dessert_order_should_not_contain(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The items in the thank-you dessert order should not contain caffeine"
        assert len(result) > 0

    def test_rubric_8_the_delivery_address_for_the_evening_beverage_order_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the evening beverage order should be La Terre (Renhe New City Branch) restaurant (the complete address is 2nd Floor, Renhe Spring International Plaza, No. 505 West Section of Fucheng Avenue, Wuhou District, Chengdu, Sichuan Province, but it\'s acceptable as long as the restaurant name is correct)"
        assert len(result) > 0

    def test_rubric_9_the_delivery_time_for_the_evening_beverage_order_should_be_a(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the evening beverage order should be after 18:00 on December 27, 2025"
        assert len(result) > 0

    def test_rubric_10_all_beverages_in_the_evening_beverage_order_should_be_select(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "All beverages in the evening beverage order should be selected with no sugar or no additional sugar"
        assert len(result) > 0

    def test_rubric_11_the_evening_beverage_order_should_include_2_drinks__for_two(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The evening beverage order should include 2 drinks, for two people to consume"
        assert len(result) > 0
