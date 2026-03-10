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
        assert result[0]["store_id"] == 'S17550808142878177_A00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550808142878177_P00021", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 260) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550808142878177_S00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550808142878177_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 25.8) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550808142878177_I00011'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550808142878177_P00070", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 798) < 1

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

    def test_rubric_0_according_to_research__vehicles_are_not_allowed_in_the_arany(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "According to research, vehicles are not allowed in the ARANYA Community, so the purchased tickets should include shuttle service"
        assert len(result) > 0

    def test_rubric_1_the_date_of_use_for_the_purchased_tickets_should_be_august_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date of use for the purchased tickets should be August 29, 2025"
        assert len(result) > 0

    def test_rubric_2_the_number_of_tickets_to_purchase_is_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of tickets to purchase is 2"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_bouquet_order_should_be_coastli(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the bouquet order should be Coastline Restaurant next to the Auditorium, ARANYA Community, Beidaihe District, Qinhuangdao, Hebei Province"
        assert len(result) > 0

    def test_rubric_4_the_delivery_time_for_the_bouquet_order_should_be_6_pm_on_au(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the bouquet order should be 6 PM on August 29, 2025"
        assert len(result) > 0

    def test_rubric_5_the_roses_in_the_ordered_bouquet_must_be_pink(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The roses in the ordered bouquet must be pink"
        assert len(result) > 0

    def test_rubric_6_the_ordered_bouquet_cannot_contain_only_roses(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered bouquet cannot contain only roses"
        assert len(result) > 0

    def test_rubric_7_the_restaurant_to_order_from_should_be_inside_the_aranya_par(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant to order from should be inside the ARANYA Park"
        assert len(result) > 0

    def test_rubric_8_the_restaurant_should_have_a_good_ambiance(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant should have a good Ambiance"
        assert len(result) > 0

    def test_rubric_9_the_meal_ordered_at_the_restaurant_should_be_a_meal_for_two(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The meal ordered at the restaurant should be a Meal for Two, not two Individual Meals"
        assert len(result) > 0

    def test_rubric_10_the_set_ordered_at_the_restaurant_should_include_alcohol(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The set ordered at the restaurant should Include Alcohol"
        assert len(result) > 0

    def test_rubric_11_the_reserved_restaurant_is_coastline_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved restaurant is Coastline Restaurant"
        assert len(result) > 0

    def test_rubric_12_the_restaurant_reservation_time_is_6_pm_on_august_29__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation time is 6 PM on August 29, 2025"
        assert len(result) > 0

    def test_rubric_13_the_number_of_people_for_the_restaurant_reservation_is_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the restaurant reservation is 2"
        assert len(result) > 0
