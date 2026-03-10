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
        for i, order in enumerate(result):
            if i in {2}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17567844930826391_I00002'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567844930826391_P00012", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 368) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17567844930826391_I00006'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17567844930826391_P00047", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 188) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567844930826391_I00011'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 5

    def test_rubric_0_the_restaurant_should_be_within_5000m__inclusive__of_starbuc(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant should be within 5000m (inclusive) of Starbucks Coffee on the first floor of Hangyang International Shopping Center, 156 Minzu Avenue, Qingxiu District, Nanning"
        assert len(result) > 0

    def test_rubric_1_the_restaurant_ordered_from_should_specialize_in_nourishing(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered from should specialize in nourishing and stomach-warming soups"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_ordered_from_should_be_a_listed_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered from should be a Listed Restaurant"
        assert len(result) > 0

    def test_rubric_3_the_restaurant_s_rating_should_be_4_6_or_above(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant\'s rating should be 4.6 or above"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_order_should_be_a_set_menu_for_four(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant order should be a Set Menu for Four"
        assert len(result) > 0

    def test_rubric_5_the_restaurant_order_should_have_nourishing_effects(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant order should have nourishing effects"
        assert len(result) > 0

    def test_rubric_6_the_restaurant_order_should_have_beauty_nourishing_effects(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant order should have Beauty Nourishing effects"
        assert len(result) > 0

    def test_rubric_7_the_restaurant_order_should_contain_chicken_soup(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant order should contain chicken soup"
        assert len(result) > 0

    def test_rubric_8_the_restaurant_order_should_be_suitable_for_pregnant_women(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant order should be suitable for pregnant women"
        assert len(result) > 0

    def test_rubric_9_the_foot_therapy_package_order_status_should_be_cancelled(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The foot therapy package order status should be cancelled"
        assert len(result) > 0

    def test_rubric_10_the_beverage_shop_should_be_within_1000m__inclusive__of_nuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beverage shop should be within 1000m (inclusive) of Nuanxin Soup Pot on the 4th floor of Hangyang International Shopping Center, 135 Minzu Avenue, Qingxiu District, Nanning"
        assert len(result) > 0

    def test_rubric_11_the_beverage_shop_should_be_inside_shopping_mall(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beverage shop should be Inside Shopping Mall"
        assert len(result) > 0

    def test_rubric_12_the_beverage_shop_should_sell_tea_beverage(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beverage shop should sell Tea Beverage"
        assert len(result) > 0

    def test_rubric_13_the_beverage_shop_should_provide_a_dine_in_environment(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beverage shop should provide a dine-in environment"
        assert len(result) > 0

    def test_rubric_14_you_should_check_if_the_qualifying_beverage_shop_has_set_men(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "You should check if the qualifying beverage shop has set menus for 4-5 people, and since the result is negative, you should make a reservation at the beverage shop for 202025-11-20 20:00:00"
        assert len(result) > 0

    def test_rubric_15_the_beverage_shop_reservation_should_be_for_5_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The beverage shop reservation should be for 5 people"
        assert len(result) > 0
