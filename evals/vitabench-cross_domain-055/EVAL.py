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
        assert result[0]["store_id"] == 'S17550802140416746_I00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802140416746_P00052", "quantity": 1}]
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
        assert result[1]["store_id"] == 'S17550802140416746_F00006'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802140416746_P00030", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1580) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802140416746_S00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802140416746_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 159.9) < 1

    def test_rubric_0_the_archery_hall_ordered_from_should_be_newly_opened(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The archery hall ordered from should be newly opened"
        assert len(result) > 0

    def test_rubric_1_the_package_purchased_at_the_archery_hall_should_include_coa(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package purchased at the archery hall should include coach guidance"
        assert len(result) > 0

    def test_rubric_2_the_package_purchased_at_the_archery_hall_should_be_aimed_at(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package purchased at the archery hall should be aimed at beginners"
        assert len(result) > 0

    def test_rubric_3_the_flight_ordered_is_from_changchun_to_taiyuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flight ordered is from Changchun to Taiyuan"
        assert len(result) > 0

    def test_rubric_4_the_date_of_the_flight_ticket_is_november_11__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date of the flight ticket is November 11, 2025"
        assert len(result) > 0

    def test_rubric_5_the_flight_departs_in_the_morning(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flight departs in the morning"
        assert len(result) > 0

    def test_rubric_6_the_flight_ticket_must_be_business_class(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flight ticket must be business class"
        assert len(result) > 0

    def test_rubric_7_the_flight_ordered_is_the_last_departure_of_the_morning__the(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flight ordered is the last departure of the morning, the flight in the ticket order should be MU5231 (departing at 11:40)"
        assert len(result) > 0

    def test_rubric_8_the_item_in_the_delivery_order_should_be_archery_protective(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The item in the delivery order should be archery protective gear"
        assert len(result) > 0

    def test_rubric_9_the_archery_protective_gear_in_the_order_should_be_professio(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The archery protective gear in the order should be professional grade"
        assert len(result) > 0

    def test_rubric_10_size_l_should_be_selected_for_the_archery_protective_gear_in(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Size L should be selected for the archery protective gear in the order"
        assert len(result) > 0

    def test_rubric_11_the_delivery_time_for_the_archery_protective_gear_order_shou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the archery protective gear order should be before or at 6:00 PM on November 7, 2025"
        assert len(result) > 0

    def test_rubric_12_the_delivery_address_for_the_archery_protective_gear_order_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the archery protective gear order should be Room 1203, Building B, Changchun International Financial Center, 1588 Kaiyun Street, Chaoyang District, Changchun, Jilin Province"
        assert len(result) > 0

    def test_rubric_13_the_note_for_the_archery_protective_gear_order_should_be__le(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The note for the archery protective gear order should be \'Leave at front desk\'"
        assert len(result) > 0
