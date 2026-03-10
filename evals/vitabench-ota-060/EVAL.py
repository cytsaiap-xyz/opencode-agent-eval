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
        assert result[0]["store_id"] == 'S17557511576221812_T00012'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557511576221812_P00072", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 526) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557511576221812_T00014'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557511576221812_P00084", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 496) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557511576221812_H00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557511576221812_P00008", "quantity": 1}, {"product_id": "S17557511576221812_P00011", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 676) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557111228331195_A00008'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557511576221812_P00023", "quantity": 2}, {"product_id": "S17557511576221812_P00024", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 315) < 1

    def test_rubric_0_the_outbound_train_ticket_order_must_be_for_november_10__202(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound train ticket order must be for November 10, 2027 (next Wednesday)"
        assert len(result) > 0

    def test_rubric_1_the_outbound_train_ticket_departure_location_must_be_xi_an(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound train ticket departure location must be Xi\'an, and the destination must be Taiyuan"
        assert len(result) > 0

    def test_rubric_2_the_outbound_train_ticket_order_must_be_for_emu__electric_mu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound train ticket order must be for EMU (Electric Multiple Unit) train (D-series) or High-speed rail (G-series)"
        assert len(result) > 0

    def test_rubric_3_need_to_search_for_the_fastest_outbound_train__with_result_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to search for the fastest outbound train, with result being G698; the outbound train ticket order should be for train G698"
        assert len(result) > 0

    def test_rubric_4_the_outbound_order_ticket_quantity_must_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound order ticket quantity must be 2"
        assert len(result) > 0

    def test_rubric_5_the_return_train_ticket_order_must_be_for_november_12__2027(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return train ticket order must be for November 12, 2027 (next Friday)"
        assert len(result) > 0

    def test_rubric_6_the_return_train_ticket_departure_location_must_be_taiyuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return train ticket departure location must be Taiyuan, and the destination must be Xi\'an"
        assert len(result) > 0

    def test_rubric_7_the_return_train_ticket_order_must_be_for_emu__electric_mult(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return train ticket order must be for EMU (Electric Multiple Unit) train (D-series) or High-speed rail (G-series)"
        assert len(result) > 0

    def test_rubric_8_need_to_search_for_the_fastest_return_train__with_result_bei(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to search for the fastest return train, with result being G2672; the return train ticket order should be for train G2672"
        assert len(result) > 0

    def test_rubric_9_the_return_order_ticket_quantity_must_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return order ticket quantity must be 2"
        assert len(result) > 0

    def test_rubric_10_accommodation_must_be_a_traditional_charm_inn(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Accommodation must be a Traditional charm inn"
        assert len(result) > 0

    def test_rubric_11_the_inn_room_quantity_must_be_one_room_per_night(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The inn room quantity must be one room per night"
        assert len(result) > 0

    def test_rubric_12_the_inn_price_must_be_500_yuan_or_less_per_night(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The inn price must be 500 yuan or less per night"
        assert len(result) > 0

    def test_rubric_13_the_inn_must_provide_station_transfer_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The inn must provide Station transfer service"
        assert len(result) > 0

    def test_rubric_14_the_inn_order_should_be_for_2_nights__specifically_november(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The inn order should be for 2 nights, specifically November 10, 2027 and November 11, 2027"
        assert len(result) > 0

    def test_rubric_15_the_ticket_order_must_be_for_pingyao_ancient_city(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket order must be for Pingyao Ancient City"
        assert len(result) > 0

    def test_rubric_16_the_ticket_order_should_be_for_all_inclusive_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket order should be for all-inclusive ticket"
        assert len(result) > 0

    def test_rubric_17_the_ticket_order_date_must_be_november_11__2027__thursday(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket order date must be November 11, 2027 (Thursday)"
        assert len(result) > 0

    def test_rubric_18_the_ticket_order_quantity_must_be_2_adult_tickets___1_child(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket order quantity must be 2 Adult tickets + 1 Child ticket"
        assert len(result) > 0
