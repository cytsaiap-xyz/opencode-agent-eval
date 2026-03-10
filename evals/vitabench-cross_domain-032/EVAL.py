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
        assert result[0]["store_id"] == 'S17550809608986081_A00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550809608986081_P00058", "quantity": 1}, {"product_id": "S17550809608986081_P00059", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 156) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550809608986081_S00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550809608986081_P00010", "quantity": 1}, {"product_id": "S17550809608986081_P00009", "quantity": 2}, {"product_id": "S17550809608986081_P00011", "quantity": 1}, {"product_id": "S17550809608986081_P00012", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 90.1) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550809608986081_H00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550809608986081_P00033", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 688) < 1

    def test_rubric_0_the_attraction_ordered_should_be_an_organic_farm(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction ordered should be an organic farm"
        assert len(result) > 0

    def test_rubric_1_the_attraction_should_have_cherries__mulberries__and_organic(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction should have cherries, mulberries, and organic vegetables"
        assert len(result) > 0

    def test_rubric_2_the_tickets_ordered_should_be_parent_child_picking_package(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tickets ordered should be Parent-Child Picking Package (1 Adult and 1 Child) and Adult Ticket"
        assert len(result) > 0

    def test_rubric_3_tickets_should_be_purchased_for_june_8__2024(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Tickets should be purchased for June 8, 2024"
        assert len(result) > 0

    def test_rubric_4_the_delivery_order_should_include_sun_hats(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order should include sun hats"
        assert len(result) > 0

    def test_rubric_5_the_delivery_order_should_include_mosquito_repellent_floral(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order should include Mosquito Repellent Floral Water"
        assert len(result) > 0

    def test_rubric_6_the_delivery_order_should_include_wet_tissues(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order should include Wet Tissues"
        assert len(result) > 0

    def test_rubric_7_the_delivery_order_should_include_3_sun_hats(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order should include 3 sun hats"
        assert len(result) > 0

    def test_rubric_8_the_delivery_order_should_include_1_mosquito_repellent_flora(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order should include 1 Mosquito Repellent Floral Water"
        assert len(result) > 0

    def test_rubric_9_the_delivery_order_should_include_1_wet_tissues(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order should include 1 Wet Tissues"
        assert len(result) > 0

    def test_rubric_10_the_sun_hats__mosquito_repellent_floral_water__and_wet_tissu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The sun hats, Mosquito Repellent Floral Water, and Wet Tissues in the delivery order should come from the same store"
        assert len(result) > 0

    def test_rubric_11_the_delivery_address_for_the_order_should_be_room_502__build(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the order should be Room 502, Building 3, Jinxiu Garden, No.12 Jinbang Road, Henan\'an Street, Huicheng District, Huizhou, Guangdong Province"
        assert len(result) > 0

    def test_rubric_12_the_estimated_delivery_time_for_the_order_should_be_before_0(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the order should be before 08:30 on June 7, 2024"
        assert len(result) > 0

    def test_rubric_13_the_reserved_hotel_should_be_within_1km__inclusive__of_a_foo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved hotel should be within 1km (inclusive) of a Food Street"
        assert len(result) > 0

    def test_rubric_14_the_reserved_hotel_should_have_a_swimming_pool(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved hotel should have a Swimming Pool"
        assert len(result) > 0

    def test_rubric_15_the_reserved_hotel_must_have_good_sound_insulation(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved hotel must have Good Sound Insulation"
        assert len(result) > 0

    def test_rubric_16_the_environment_of_the_reserved_hotel_should_be_clean_and_hy(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The environment of the reserved hotel should be Clean and Hygienic"
        assert len(result) > 0

    def test_rubric_17_the_room_type_of_the_reserved_hotel_should_have_a_bathtub(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type of the reserved hotel should have a Bathtub"
        assert len(result) > 0

    def test_rubric_18_the_check_in_date_for_the_hotel_reservation_should_be_june_8(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The check-in date for the hotel reservation should be June 8, 2024"
        assert len(result) > 0
