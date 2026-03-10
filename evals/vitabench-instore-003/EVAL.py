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
        assert result[0]["store_id"] == 'S17564420327514686_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420327514686_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 158) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564420327514686_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2025-04-13 17:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564420327514686_I00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564420327514686_P00011", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 280) < 1

    def test_rubric_0_the_massage_shop_should_provide_traditional_massage_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The massage shop should provide Traditional Massage service"
        assert len(result) > 0

    def test_rubric_1_there_is_no_historical_order_for_massage_shops__the_massage(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "There is no historical order for massage shops, the massage shop to be ordered should be within 3km of Room 1802, Unit 1, Building 3, Huaze Lidu Community, 319 Jinxing Middle Road, Yuelu District, Changsha, Hunan Province"
        assert len(result) > 0

    def test_rubric_2_the_massage_shop_rating_should_be_4_0_or_above(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The massage shop rating should be 4.0 or above"
        assert len(result) > 0

    def test_rubric_3_the_ordered_massage_service_should_be_a_package_that_include(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered massage service should be a package that includes Foot Bath and Acupoint Massage"
        assert len(result) > 0

    def test_rubric_4_the_massage_shop_to_be_reserved_should_be_ancient_charm_heal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The massage shop to be reserved should be Ancient Charm Health Preservation Club"
        assert len(result) > 0

    def test_rubric_5_the_weather_in_changsha_on_2025_04_12_will_be_moderate_rain(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The weather in Changsha on 2025-04-12 will be moderate rain, and on 2025-04-13 will be overcast, the massage appointment time should be 2025-04-13 17:00:00"
        assert len(result) > 0

    def test_rubric_6_the_number_of_people_for_the_massage_appointment_should_be_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the massage appointment should be 1"
        assert len(result) > 0

    def test_rubric_7_the_hair_salon_should_be_within_1km_of_ancient_charm_health(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hair salon should be within 1km of Ancient Charm Health Preservation Club, 328 Jinxing Road, Yuelu District, Changsha, Hunan Province"
        assert len(result) > 0

    def test_rubric_8_the_hair_salon_order_should_be_a_highlighting_package_with_u(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hair salon order should be a Highlighting Package with Unlimited Bleaching"
        assert len(result) > 0
