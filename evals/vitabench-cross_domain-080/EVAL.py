import json
import os
import pytest

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)
with open(os.path.join(_dir, "answer.json")) as _f:
    result = json.load(_f)

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
        assert result[0]["store_id"] == 'S17550808014223099_A00004'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550808014223099_P00026", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 320) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550808014223099_A00004'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550808014223099_P00024", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 320) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550808014223099_I00014'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550808014223099_P00075", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 128) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550808014223099_I00012'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17550808014223099_P00065", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 128) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17550808014223099_I00016'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17550808014223099_P00085", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 88) < 1

    def test_order_5_matches_expected_store(self):
        assert result[5]["store_id"] == 'S17550808014223099_A00005'

    def test_order_5_has_correct_products(self):
        expected_products = [{"product_id": "S17550808014223099_P00032", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[5]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_5_has_correct_total_price(self):
        assert abs(result[5]["total_price"] - 180) < 1

    def test_rubric_0_the_order_status_for_the_leshan_giant_buddha_ticket_dated_ju(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order status for the Leshan Giant Buddha ticket dated June 15, 2025 should be cancelled"
        assert len(result) > 0

    def test_rubric_1_the_final_ordered_leshan_giant_buddha_scenic_spot_ticket_typ(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The final ordered Leshan Giant Buddha scenic spot ticket type should be Adult Ticket"
        assert len(result) > 0

    def test_rubric_2_the_quantity_of_tickets_in_the_final_ordered_leshan_giant_bu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of tickets in the final ordered Leshan Giant Buddha scenic spot order should be 2"
        assert len(result) > 0

    def test_rubric_3_the_order_date_for_the_final_leshan_giant_buddha_ticket_orde(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order date for the final Leshan Giant Buddha ticket order should be June 14, 2025"
        assert len(result) > 0

    def test_rubric_4_the_fried_skewer_restaurant_ordered_from_should_be_wang_hedi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The fried skewer restaurant ordered from should be Wang Hedi Fried Skewers (Leshan Flagship Store)"
        assert len(result) > 0

    def test_rubric_5_the_purchased_fried_skewer_set_meal_should_be_a_set_for_two(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The purchased fried skewer set meal should be a set for two people, not two individual meals"
        assert len(result) > 0

    def test_rubric_6_the_purchased_fried_skewer_set_meal_should_not_contain_offal(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The purchased fried skewer set meal should not contain offal"
        assert len(result) > 0

    def test_rubric_7_the_beef_restaurant_ordered_from_should_have_been_in_busines(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The beef restaurant ordered from should have been in business for 10 years or more"
        assert len(result) > 0

    def test_rubric_8_the_purchased_beef_set_meal_should_not_contain_offal(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The purchased beef set meal should not contain offal"
        assert len(result) > 0

    def test_rubric_9_the_purchased_beef_set_meal_should_be_for_two_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The purchased beef set meal should be for two people"
        assert len(result) > 0

    def test_rubric_10_the_bobo_chicken_restaurant_ordered_from_should_have_been_in(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Bobo Chicken restaurant ordered from should have been in business for 10 years or more"
        assert len(result) > 0

    def test_rubric_11_the_purchased_bobo_chicken_set_meal_should_not_contain_offal(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The purchased Bobo Chicken set meal should not contain offal"
        assert len(result) > 0

    def test_rubric_12_the_purchased_bobo_chicken_set_meal_should_not_contain_offal(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The purchased Bobo Chicken set meal should not contain offal and should be for two people"
        assert len(result) > 0

    def test_rubric_13_the_bobo_chicken_restaurant_ordered_from_should_specialize_i(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Bobo Chicken restaurant ordered from should specialize in Bobo Chicken"
        assert len(result) > 0

    def test_rubric_14_the_ordered_cruise_tickets_should_be_valid_for_evening_use(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered cruise tickets should be valid for evening use"
        assert len(result) > 0

    def test_rubric_15_the_use_date_for_the_cruise_ticket_order_should_be_june_14(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The use date for the cruise ticket order should be June 14, 2025"
        assert len(result) > 0

    def test_rubric_16_the_quantity_of_tickets_in_the_cruise_ticket_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of tickets in the cruise ticket order should be 2"
        assert len(result) > 0
