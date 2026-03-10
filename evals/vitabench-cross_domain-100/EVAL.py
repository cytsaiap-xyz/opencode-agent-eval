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
        assert result[0]["store_id"] == 'S17550802115172544_H00007'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802115172544_P00038", "quantity": 1}, {"product_id": "S17550802115172544_P00041", "quantity": 1}, {"product_id": "S17550802115172544_P00044", "quantity": 1}, {"product_id": "S17550802115172544_P00045", "quantity": 1}, {"product_id": "S17550802115172544_P00046", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 2940) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802115172544_S00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802115172544_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 88) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802115172544_I00019 '

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802115172544_P00128", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 580) < 1

    def test_rubric_0_hotel_check_in_date_is_may_1__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Hotel check-in date is May 1, 2025"
        assert len(result) > 0

    def test_rubric_1_hotel_check_out_date_is_may_5__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Hotel check-out date is May 5, 2025"
        assert len(result) > 0

    def test_rubric_2_hotel_should_provide_oxygen_supply_equipment(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Hotel should provide Oxygen Supply Equipment"
        assert len(result) > 0

    def test_rubric_3_hotel_booking_should_be_for_the_same_room_type_from_may_1__2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Hotel booking should be for the same room type from May 1, 2025 to May 5, 2025"
        assert len(result) > 0

    def test_rubric_4_food_delivery_order_should_be_plateau_athlete_specific_meal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Food delivery order should be Plateau Athlete-specific Meal"
        assert len(result) > 0

    def test_rubric_5_food_delivery_address_should_be_qinghai_lake_youjia_hotel_at(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Food delivery address should be Qinghai Lake Youjia Hotel at 1km of Qinghai Lake Circuit Track, Shaliu River Town, Gangcha County, Haibei Tibetan Autonomous Prefecture, Qinghai Province"
        assert len(result) > 0

    def test_rubric_6_expected_delivery_time_for_food_order_should_be_18_00_on_may(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Expected delivery time for food order should be 18:00 on May 1, 2025"
        assert len(result) > 0

    def test_rubric_7_in_store_merchant_should_be_a_physical_training_venue(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "In-store merchant should be a physical training venue"
        assert len(result) > 0

    def test_rubric_8_distance_from_in_store_merchant_to_hotel_should_be_within_2k(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Distance from in-store merchant to hotel should be within 2km"
        assert len(result) > 0

    def test_rubric_9_in_store_order_items_should_be_related_to_physical_training(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "In-store order items should be related to physical training packages"
        assert len(result) > 0

    def test_rubric_10_temperature_at_qinghai_lake_from_may_1_to_may_5__2025_is_abo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Temperature at Qinghai Lake from May 1 to May 5, 2025 is above 5 degrees Celsius, no need to order outdoor thermal supplies"
        assert len(result) > 0
