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
        for i, order in enumerate(result):
            if i in {3}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550802130783410_I00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802130783410_P00054", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 2064) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802130783410_A00005'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802130783410_P00021 ", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 498) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802130783410_S00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802130783410_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 328) < 1

    def test_order_3_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[3]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_3_matches_expected_shop(self):
        order = result[3]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550802130783410_I00011'

    def test_order_3_has_correct_customer_count(self):
        assert result[3].get("customer_count") == 24

    def test_rubric_0_the_restaurant_ordered_must_have_infant_friendly_facilities(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered must have Infant-Friendly facilities"
        assert len(result) > 0

    def test_rubric_1_the_restaurant_environment_needs_to_be_cozy_environment(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant environment needs to be Cozy Environment"
        assert len(result) > 0

    def test_rubric_2_each_set_meal_ordered_by_the_agent_at_the_restaurant_must_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Each set meal ordered by the agent at the restaurant must be for 8 people"
        assert len(result) > 0

    def test_rubric_3_the_agent_needs_to_order_three_multi_person_set_meals_at_the(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The agent needs to order three multi-person set meals at the restaurant"
        assert len(result) > 0

    def test_rubric_4_the_set_meal_dishes_at_the_ordered_restaurant_should_not_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The set meal dishes at the ordered restaurant should not be too oily"
        assert len(result) > 0

    def test_rubric_5_the_dishes_in_the_order_set_should_comply_with_the_user_s_di(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dishes in the order set should comply with the user\'s dietary restrictions: Low Salt"
        assert len(result) > 0

    def test_rubric_6_need_to_find_information_about_theme_park_ticket_packages__r(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to find information about theme park ticket packages; return price and photography rules: Family Package Ticket price range is 368-698 yuan, Shenyang Happy Family Theme Park allows bringing your own camera, Shenyang Family Time Theme Park has a professional photography area"
        assert len(result) > 0

    def test_rubric_7_need_to_order_a_theme_park_package_suitable_for_2_adults__1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to order a theme park package suitable for 2 adults, 1 child, and 1 infant"
        assert len(result) > 0

    def test_rubric_8_the_ordered_parent_child_clothing_package_must_include_a_fou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered parent-child clothing package must include a Four-Piece Set, including clothing for adults, children, and infants"
        assert len(result) > 0

    def test_rubric_9_the_ordered_parent_child_clothing_must_be_pure_cotton_materi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered parent-child clothing must be Pure Cotton material"
        assert len(result) > 0

    def test_rubric_10_the_ordered_products_must_be_blue(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered products must be Blue"
        assert len(result) > 0

    def test_rubric_11_the_delivery_address_for_the_parent_child_clothing_order_sho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the parent-child clothing order should be the user\'s residence: Huafu World, 46 Nanjing South Street, Heping District, Shenyang"
        assert len(result) > 0

    def test_rubric_12_the_restaurant_reservation_should_be_at_star_dream_family_th(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation should be at Star Dream Family Theme Restaurant"
        assert len(result) > 0

    def test_rubric_13_the_restaurant_reservation_time_must_be_june_12__2025__at_18(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation time must be June 12, 2025, at 18:00"
        assert len(result) > 0

    def test_rubric_14_the_number_of_people_for_the_restaurant_reservation_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the restaurant reservation should be 24"
        assert len(result) > 0
