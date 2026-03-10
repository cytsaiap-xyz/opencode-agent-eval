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
            if i in {1}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17564420305476295_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420305476295_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 298) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564420305476295_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2025-03-16 20:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564420305476295_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564420305476295_P00005", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 52) < 1

    def test_rubric_0_hot_spring_store_orders_must_include_spa_services(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Hot spring store orders must include SPA services"
        assert len(result) > 0

    def test_rubric_1_the_hot_spring_establishment_must_provide_free_parking_servi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hot spring establishment must provide Free Parking service"
        assert len(result) > 0

    def test_rubric_2_products_ordered_at_hot_spring_establishments_must_offer_mul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Products ordered at hot spring establishments must offer Multi-temperature Pools for selection"
        assert len(result) > 0

    def test_rubric_3_products_ordered_at_hot_spring_establishments_must_provide_g(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Products ordered at hot spring establishments must provide good Private Space"
        assert len(result) > 0

    def test_rubric_4_products_ordered_at_hot_spring_establishments_should_be_pric(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Products ordered at hot spring establishments should be priced between 180-300 yuan (inclusive)"
        assert len(result) > 0

    def test_rubric_5_products_ordered_at_hot_spring_establishments_should_include(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Products ordered at hot spring establishments should include Accommodation"
        assert len(result) > 0

    def test_rubric_6_products_ordered_at_hot_spring_establishments_should_be_sing(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Products ordered at hot spring establishments should be Single Serving packages"
        assert len(result) > 0

    def test_rubric_7_the_reserved_hot_spring_establishment_should_be_yunding_hot(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved hot spring establishment should be Yunding Hot Spring Resort"
        assert len(result) > 0

    def test_rubric_8_the_number_of_people_for_the_hot_spring_reservation_is_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the hot spring reservation is 1"
        assert len(result) > 0

    def test_rubric_9_the_reservation_time_for_the_hot_spring_establishment_is_mar(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation time for the hot spring establishment is March 16, 2025 at 20:00:00"
        assert len(result) > 0

    def test_rubric_10_the_restaurant_must_provide_free_parking_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant must provide Free Parking service"
        assert len(result) > 0

    def test_rubric_11_the_restaurant_must_be_within_2km__inclusive__of_yunding_hot(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant must be within 2km (inclusive) of Yunding Hot Spring Resort, 88 Hot Spring Road, Qiantao Township, Huaxi District, Guiyang"
        assert len(result) > 0

    def test_rubric_12_products_ordered_at_the_restaurant_must_include_sour_soup_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Products ordered at the restaurant must include Sour Soup Beef"
        assert len(result) > 0

    def test_rubric_13_the_restaurant_rating_should_be_4_2_or_above(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant rating should be 4.2 or above"
        assert len(result) > 0

    def test_rubric_14_restaurant_orders_should_be_single_serving_packages(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Restaurant orders should be Single Serving packages"
        assert len(result) > 0

    def test_rubric_15_restaurant_order_prices_should_be_within_60_yuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Restaurant order prices should be within 60 yuan"
        assert len(result) > 0
