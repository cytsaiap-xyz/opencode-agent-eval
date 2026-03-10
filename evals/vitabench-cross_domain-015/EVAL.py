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
        assert result[0]["store_id"] == 'S17550802108642397_I00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802108642397_P00076", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1838) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802108642397_S00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802108642397_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 598) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802108642397_F00007'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802108642397_P00043", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 560) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == ''

    def test_order_3_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 0) < 1

    def test_rubric_0_the_ktv_ordered_must_have_private_rooms_that_can_accommodate(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV ordered must have private rooms that can accommodate 10 people"
        assert len(result) > 0

    def test_rubric_1_the_ktv_ordered_must_be_open_24_hours(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV ordered must be open 24 hours"
        assert len(result) > 0

    def test_rubric_2_the_ktv_package_ordered_must_include_champagne(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV package ordered must include champagne"
        assert len(result) > 0

    def test_rubric_3_the_ktv_package_ordered_must_be_applicable_for_entry_at_8_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV package ordered must be applicable for entry at 8:00 PM"
        assert len(result) > 0

    def test_rubric_4_the_dessert_ordered_must_be_suitable_for_10_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dessert ordered must be suitable for 10 people"
        assert len(result) > 0

    def test_rubric_5_the_dessert_package_ordered_must_include_at_least_4_types_of(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dessert package ordered must include at least 4 types of desserts"
        assert len(result) > 0

    def test_rubric_6_the_dessert_ordered_should_match_the_user_s_dietary_preferen(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dessert ordered should match the user\'s dietary preference: avoiding high sugar"
        assert len(result) > 0

    def test_rubric_7_the_delivery_address_for_the_dessert_order_should_be_golden(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the dessert order should be Golden Age KTV, 89 Jiefang Road, Quanshan District, Xuzhou"
        assert len(result) > 0

    def test_rubric_8_the_delivery_time_for_the_dessert_order_should_be_between_8(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the dessert order should be between 8-9 PM on August 7, 2025"
        assert len(result) > 0

    def test_rubric_9_the_total_price_for_ktv_and_dessert_orders_should_be_less_th(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total price for KTV and dessert orders should be less than 3000 yuan"
        assert len(result) > 0

    def test_rubric_10_must_check_flight_prices_from_guangzhou_to_xuzhou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Must check flight prices from Guangzhou to Xuzhou"
        assert len(result) > 0

    def test_rubric_11_the_departure_time_of_the_flight_ordered_should_be_between_j(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure time of the flight ordered should be between July 30 and August 8, 2025"
        assert len(result) > 0

    def test_rubric_12_the_flight_ordered_cannot_be_a_red_eye_flight(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flight ordered cannot be a red-eye flight"
        assert len(result) > 0

    def test_rubric_13_the_flight_ticket_price_cannot_exceed_564_yuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flight ticket price cannot exceed 564 yuan"
        assert len(result) > 0

    def test_rubric_14_the_flight_number_in_the_flight_order_should_be_mu5321(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flight number in the flight order should be MU5321"
        assert len(result) > 0

    def test_rubric_15_the_date_of_the_flight_order_should_be_august_3__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date of the flight order should be August 3, 2025"
        assert len(result) > 0

    def test_rubric_16_the_ktv_reserved_is_golden_age_ktv(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV reserved is Golden Age KTV"
        assert len(result) > 0

    def test_rubric_17_the_ktv_reservation_time_is_8_00_pm_on_august_7__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV reservation time is 8:00 PM on August 7, 2025"
        assert len(result) > 0
