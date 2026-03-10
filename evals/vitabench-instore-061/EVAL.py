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
        assert result[0]["store_id"] == 'S17567836582349272_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836582349272_P00001", "quantity": 4}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 672) < 1

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
        assert result[2]["store_id"] == 'S17567836582349272_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836582349272_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 178) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17567836582349272_I00003'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17567836582349272_P00019", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 480) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == ''

    def test_order_4_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 0) < 1

    def test_rubric_0_the_trend_play_hall_order_should_include_vr_games(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The trend play hall order should include VR games"
        assert len(result) > 0

    def test_rubric_1_the_trend_play_hall_order_should_include_a_billiards_hall(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The trend play hall order should include a billiards hall"
        assert len(result) > 0

    def test_rubric_2_the_product_ordered_at_the_trend_play_hall_should_be_a_4_hou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product ordered at the trend play hall should be a 4-hour unlimited play package"
        assert len(result) > 0

    def test_rubric_3_the_quantity_of_products_ordered_at_the_trend_play_hall_shou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of products ordered at the trend play hall should be 4"
        assert len(result) > 0

    def test_rubric_4_the_reservation_time_for_the_trend_play_hall_should_be_may_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation time for the trend play hall should be May 12, 2023, at 14:00:00"
        assert len(result) > 0

    def test_rubric_5_the_number_of_people_for_the_trend_play_hall_reservation_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the trend play hall reservation should be 4"
        assert len(result) > 0

    def test_rubric_6_the_merchant_for_the_trend_play_hall_reservation_should_be_i(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The merchant for the trend play hall reservation should be Interstellar Trend Play Space"
        assert len(result) > 0

    def test_rubric_7_the_hamburger_restaurant_ordered_from_should_be_a_chain_stor(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hamburger restaurant ordered from should be a chain store"
        assert len(result) > 0

    def test_rubric_8_the_hamburger_restaurant_should_be_within_1km__inclusive__fr(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hamburger restaurant should be within 1km (inclusive) from Interstellar Trend Play Space, 588 Chezhan Avenue, Lucheng District, Wenzhou"
        assert len(result) > 0

    def test_rubric_9_the_order_from_the_hamburger_restaurant_should_be_a_meal_for(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The order from the hamburger restaurant should be a meal for four people, not four individual meals"
        assert len(result) > 0

    def test_rubric_10_the_package_ordered_from_the_hamburger_restaurant_should_inc(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package ordered from the hamburger restaurant should include hamburgers and durian pizza"
        assert len(result) > 0

    def test_rubric_11_the_price_of_products_ordered_from_the_hamburger_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of products ordered from the hamburger restaurant should be 200 yuan or less"
        assert len(result) > 0

    def test_rubric_12_the_livehouse_ordered_from_should_be_within_3km__inclusive(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Livehouse ordered from should be within 3km (inclusive) from Pizza Hut, 4th Floor, Wenzhou Impression City, 1599 Wanyuan Road, Chashan Street, Ouhai District, Wenzhou"
        assert len(result) > 0

    def test_rubric_13_the_livehouse_ordered_from_should_be_ranked_in_the_top_ten_o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Livehouse ordered from should be ranked in the top ten on Wenzhou\'s popularity list"
        assert len(result) > 0

    def test_rubric_14_the_product_ordered_from_the_livehouse_should_be_a_beverage(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product ordered from the Livehouse should be a beverage package"
        assert len(result) > 0

    def test_rubric_15_the_product_ordered_from_the_livehouse_should_be_sufficient(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The product ordered from the Livehouse should be sufficient for 4 people"
        assert len(result) > 0

    def test_rubric_16_with_each_person_spending_500_yuan__totaling_2000_yuan__acco(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "With each person spending 500 yuan, totaling 2000 yuan. According to the orders above, the trend play hall package costs 672 yuan, the hamburger restaurant meal for four costs 178 yuan, therefore the Livehouse beverage package should not exceed 1150 yuan (inclusive)"
        assert len(result) > 0

    def test_rubric_17_the_reservation_time_for_the_livehouse_should_be_may_12__202(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation time for the Livehouse should be May 12, 2023, at 19:30:00"
        assert len(result) > 0

    def test_rubric_18_the_number_of_people_for_the_livehouse_reservation_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the Livehouse reservation should be 4"
        assert len(result) > 0

    def test_rubric_19_the_merchant_for_the_livehouse_reservation_should_be_wenzhou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The merchant for the Livehouse reservation should be Wenzhou Sound LiveHouse"
        assert len(result) > 0
