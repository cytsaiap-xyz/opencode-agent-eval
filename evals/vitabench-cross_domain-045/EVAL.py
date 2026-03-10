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
        assert result[0]["store_id"] == 'S17550812360469447_T00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550812360469447_P00020", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 84) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550812360469447_I00013'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550812360469447_P00072", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 398) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550812360469447_S00004'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550812360469447_P00015", "quantity": 1}, {"product_id": "S17550812360469447_P00016", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 72.7) < 1

    def test_rubric_0_the_departure_station_of_the_ordered_train_should_be_xuzhou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure station of the ordered train should be Xuzhou"
        assert len(result) > 0

    def test_rubric_1_the_arrival_station_of_the_ordered_train_should_be_zaozhuang(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival station of the ordered train should be Zaozhuang"
        assert len(result) > 0

    def test_rubric_2_check_whether_labor_day_this_year_falls_on_a_weekend__the_re(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Check whether Labor Day this year falls on a weekend, the result shows that May 1, 2025 is a Thursday, not on a weekend, so the train ticket should be for April 26, 2025"
        assert len(result) > 0

    def test_rubric_3_the_departure_time_of_the_train_ticket_should_be_april_26__2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure time of the train ticket should be April 26, 2025, 9:00-10:00"
        assert len(result) > 0

    def test_rubric_4_the_train_ticket_should_be_second_class_seat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train ticket should be second-class seat"
        assert len(result) > 0

    def test_rubric_5_the_quantity_of_train_tickets_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of train tickets should be 2"
        assert len(result) > 0

    def test_rubric_6_the_distance_between_the_workshop_store_and_zaozhuang_statio(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The distance between the workshop store and Zaozhuang Station should be within 5000m"
        assert len(result) > 0

    def test_rubric_7_the_workshop_order_package_should_be_couple_rings_diy_experi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The workshop order package should be couple rings DIY experience"
        assert len(result) > 0

    def test_rubric_8_the_couple_rings_in_the_workshop_order_package_should_have_r(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The couple rings in the workshop order package should have relief design"
        assert len(result) > 0

    def test_rubric_9_the_couple_rings_in_the_workshop_order_package_should_have_f(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The couple rings in the workshop order package should have fingerprint imprinting"
        assert len(result) > 0

    def test_rubric_10_the_instant_film_should_be_white_background(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The instant film should be white background"
        assert len(result) > 0

    def test_rubric_11_the_instant_film_and_marker_should_come_from_the_same_store(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The instant film and marker should come from the same store"
        assert len(result) > 0

    def test_rubric_12_the_delivery_address_for_the_instant_film_and_marker_must_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the instant film and marker must be Heartfelt DIY Workshop, No.89 Jianshe Road, Shizhong District, Zaozhuang, Shandong Province"
        assert len(result) > 0

    def test_rubric_13_the_estimated_delivery_time_for_the_instant_film_and_marker(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the instant film and marker should be between 10:30-11:30 on April 26, 2025"
        assert len(result) > 0
