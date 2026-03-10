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
        assert result[0]["store_id"] == 'S17550809486731413_A00003'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550809486731413_P00013", "quantity": 1}, {"product_id": "S17550809486731413_P00014", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 120) < 1

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
        assert result[2]["store_id"] == 'S17550809486731413_I00008'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550809486731413_P00045", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 249) < 1

    def test_rubric_0_the_attraction_ordered_should_be_a_science_museum(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction ordered should be a science museum"
        assert len(result) > 0

    def test_rubric_1_the_attraction_ordered_should_have_interactive_devices(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction ordered should have interactive devices"
        assert len(result) > 0

    def test_rubric_2_the_ticket_date_for_the_ticket_order_should_be_july_13__2024(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket date for the ticket order should be July 13, 2024"
        assert len(result) > 0

    def test_rubric_3_the_ticket_order_should_include_one_adult_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket order should include one Adult Ticket"
        assert len(result) > 0

    def test_rubric_4_the_ticket_order_should_include_one_child_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket order should include one Child Ticket"
        assert len(result) > 0

    def test_rubric_5_the_reserved_restaurant_should_be_a_family_friendly_restaura(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved restaurant should be a Family-Friendly Restaurant"
        assert len(result) > 0

    def test_rubric_6_the_reserved_restaurant_should_have_children_s_entertainment(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved restaurant should have Children\'s Entertainment facilities"
        assert len(result) > 0

    def test_rubric_7_the_reserved_restaurant_should_offer_children_s_set_meal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved restaurant should offer Children\'s Set Meal"
        assert len(result) > 0

    def test_rubric_8_the_reserved_restaurant_should_provide_buffet_with_no_seafoo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved restaurant should provide buffet with No Seafood"
        assert len(result) > 0

    def test_rubric_9_the_restaurant_reservation_time_should_be_12_00_on_july_13(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation time should be 12:00 on July 13, 2024"
        assert len(result) > 0

    def test_rubric_10_the_restaurant_reservation_should_be_for_2_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation should be for 2 people"
        assert len(result) > 0

    def test_rubric_11_the_delivery_order_item_should_be_lego_toy(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order item should be LEGO toy"
        assert len(result) > 0

    def test_rubric_12_the_delivery_order_item_should_be_toy_car(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order item should be Toy Car"
        assert len(result) > 0

    def test_rubric_13_the_delivery_order_item_should_not_be_off_road_racing_car(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order item should not be Off-Road Racing Car"
        assert len(result) > 0

    def test_rubric_14_the_delivery_address_should_be_hailiang_ocean_joy_plaza__140(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address should be Hailiang Ocean Joy Plaza, 140 meters southeast of the intersection of Changjiang Road and Diezihudadao, Honggutan District, Nanchang, Jiangxi Province"
        assert len(result) > 0

    def test_rubric_15_the_expected_delivery_time_should_be_before_18_00_on_july_13(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The expected delivery time should be before 18:00 on July 13, 2024"
        assert len(result) > 0
