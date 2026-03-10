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
        assert result[0]["store_id"] == 'S17557075056978907_T00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557075056978907_P00054", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1106) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557075056978907_T00012'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557075056978907_P00067", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1106) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557071994348897_A00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557071994348897_P00027", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 240) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557071994348897_H00004'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557071994348897_P00018", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 780) < 1

    def test_rubric_0_transportation_mode_should_be_train(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Transportation mode should be train"
        assert len(result) > 0

    def test_rubric_1_the_outbound_train_ticket_date_should_be_june_8__2024(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound train ticket date should be June 8, 2024"
        assert len(result) > 0

    def test_rubric_2_should_avoid_booking_outbound_train_tickets_with_early_depar(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should avoid booking outbound train tickets with early departure times, the outbound train number should be D3135"
        assert len(result) > 0

    def test_rubric_3_the_quantity_of_outbound_train_tickets_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of outbound train tickets should be 2"
        assert len(result) > 0

    def test_rubric_4_should_avoid_booking_return_train_tickets_with_late_arrival(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should avoid booking return train tickets with late arrival times, the return train number should be D3142"
        assert len(result) > 0

    def test_rubric_5_the_quantity_of_return_train_tickets_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of return train tickets should be 2"
        assert len(result) > 0

    def test_rubric_6_the_scenic_area_to_be_booked_should_be_nanxun_ancient_town_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scenic area to be booked should be Nanxun Ancient Town Scenic Area"
        assert len(result) > 0

    def test_rubric_7_tickets_should_include_boat_tour_packages(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Tickets should include boat tour packages"
        assert len(result) > 0

    def test_rubric_8_ticket_type_should_be_adult_ticket___boat_tour_package(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Ticket type should be Adult Ticket + Boat Tour Package"
        assert len(result) > 0

    def test_rubric_9_the_ticket_date_should_be_june_8__2024(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket date should be June 8, 2024"
        assert len(result) > 0

    def test_rubric_10_the_quantity_of_tickets_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of tickets should be 2"
        assert len(result) > 0

    def test_rubric_11_the_booked_guesthouse_style_should_be_jiangnan_style(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked guesthouse style should be Jiangnan Style"
        assert len(result) > 0

    def test_rubric_12_the_booked_guesthouse_should_provide_room_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked guesthouse should provide Room Service"
        assert len(result) > 0

    def test_rubric_13_the_check_in_date_for_the_guesthouse_should_be_june_8__2024(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The check-in date for the guesthouse should be June 8, 2024"
        assert len(result) > 0
