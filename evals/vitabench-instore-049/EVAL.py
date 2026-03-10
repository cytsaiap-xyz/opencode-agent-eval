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
            if i in {1, 3}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17567836567247343_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836567247343_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 168) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836567247343_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2024-06-11 09:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567836567247343_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836567247343_P00018", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 78) < 1

    def test_order_3_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[3]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_3_matches_expected_shop(self):
        order = result[3]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836567247343_I00002'

    def test_order_3_has_correct_reservation_time(self):
        assert result[3].get("reservation_time") == '2024-06-10 10:00:00'

    def test_order_3_has_correct_customer_count(self):
        assert result[3].get("customer_count") == 1

    def test_rubric_0_the_pottery_workshop_order_should_be_a_pottery_experience_pa(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The pottery workshop order should be a pottery experience package"
        assert len(result) > 0

    def test_rubric_1_the_pottery_workshop_package_should_include_basic_operation(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The pottery workshop package should include basic operation tools"
        assert len(result) > 0

    def test_rubric_2_the_pottery_workshop_package_should_include_production_mater(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The pottery workshop package should include production materials"
        assert len(result) > 0

    def test_rubric_3_the_pottery_workshop_ordered_should_be_niba_craftsman_potter(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The pottery workshop ordered should be Niba Craftsman Pottery Workshop"
        assert len(result) > 0

    def test_rubric_4_the_pottery_workshop_booked_should_be_niba_craftsman_pottery(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The pottery workshop booked should be Niba Craftsman Pottery Workshop"
        assert len(result) > 0

    def test_rubric_5_the_number_of_people_for_the_pottery_workshop_booking_is_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the pottery workshop booking is 1"
        assert len(result) > 0

    def test_rubric_6_should_check_if_the_ordered_pottery_workshop_item_can_be_use(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should check if the ordered pottery workshop item can be used on June 10, 2024 (Dragon Boat Festival), the result is no, so the pottery workshop appointment time is June 11, 2024, 09:00"
        assert len(result) > 0

    def test_rubric_7_should_check_if_the_ordered_pottery_workshop_item_can_be_use(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should check if the ordered pottery workshop item can be used on June 10, 2024 (Dragon Boat Festival), the result is no, so need to check the user\'s behavior history, the last murder mystery game store the user played at was Immersive Murder Mystery Game (Taikoo Li Branch), so the murder mystery game store order should be Immersive Murder Mystery Game (Taikoo Li Branch)"
        assert len(result) > 0

    def test_rubric_8_the_murder_mystery_game_store_order_should_be_a_single_carpo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The murder mystery game store order should be a Single Carpool Ticket"
        assert len(result) > 0

    def test_rubric_9_the_murder_mystery_game_store_order_should_not_contain_horro(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The murder mystery game store order should not contain horror elements"
        assert len(result) > 0

    def test_rubric_10_the_murder_mystery_game_store_order_should_be_usable_on_june(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The murder mystery game store order should be usable on June 10, 2024 (Dragon Boat Festival)"
        assert len(result) > 0

    def test_rubric_11_the_murder_mystery_game_store_booked_should_be_immersive_mur(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The murder mystery game store booked should be Immersive Murder Mystery Game (Taikoo Li Branch)"
        assert len(result) > 0

    def test_rubric_12_the_murder_mystery_game_store_appointment_time_is_june_10__2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The murder mystery game store appointment time is June 10, 2024, 10:00"
        assert len(result) > 0

    def test_rubric_13_the_number_of_people_for_the_murder_mystery_game_store_booki(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the murder mystery game store booking is 1"
        assert len(result) > 0
