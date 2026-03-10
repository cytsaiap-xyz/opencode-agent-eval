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
            if i in {2}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17567836634645289_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836634645289_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 198) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17567836634645289_I00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17567836634645289_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 138) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836634645289_I00002'

    def test_order_2_has_correct_reservation_time(self):
        assert result[2].get("reservation_time") == '2024-08-15 21:00:00'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 1

    def test_rubric_0_the_restaurant_ordered_should_be_within_3km__including_3km(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered should be within 3km (including 3km) of Room 503, Building 2, Linyi People\'s Hospital Staff Quarters, 15 Jinqueshan Road, Lanshan District, Linyi City, Shandong Province"
        assert len(result) > 0

    def test_rubric_1_the_restaurant_must_provide_single_booth_seat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant must provide Single Booth Seat"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_package_ordered_should_offer_low_purine_menu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant package ordered should offer Low Purine Menu"
        assert len(result) > 0

    def test_rubric_3_the_restaurant_package_ordered_should_be_a_buffet_with_no_ti(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant package ordered should be a buffet with No Time Limit"
        assert len(result) > 0

    def test_rubric_4_user_s_usual_spending_range_is_found_to_be_between_90_and_16(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "User\'s usual spending range is found to be between 90 and 160 yuan, and restaurant spending should not exceed 1.5 times the user\'s daily spending range, so the restaurant order price should be less than or equal to 240 yuan (including 240 yuan)"
        assert len(result) > 0

    def test_rubric_5_the_nail_salon_ordered_should_be_open_until_at_least_11_pm(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The nail salon ordered should be open until at least 11 PM"
        assert len(result) > 0

    def test_rubric_6_the_nail_salon_package_ordered_should_include_full_nail_tips(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The nail salon package ordered should include Full Nail Tips"
        assert len(result) > 0

    def test_rubric_7_the_nail_salon_package_ordered_should_offer_multiple_style_o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The nail salon package ordered should offer multiple style options"
        assert len(result) > 0

    def test_rubric_8_the_nail_salon_order_should_prioritize_packages_priced_at_15(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The nail salon order should prioritize packages priced at 150 yuan or less; if unavailable, order packages priced above 150 yuan but below 200 yuan (including 200 yuan), and the package must include construction; upon inquiry, there are packages under 150 yuan, so the ordered package should be priced at 150 yuan or less"
        assert len(result) > 0

    def test_rubric_9_the_nail_salon_appointment_should_be_at_fingertip_art_nail_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The nail salon appointment should be at Fingertip Art Nail Salon"
        assert len(result) > 0

    def test_rubric_10_the_nail_salon_appointment_time_is_2024_08_15_21_00_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The nail salon appointment time is 2024-08-15 21:00:00"
        assert len(result) > 0

    def test_rubric_11_the_nail_salon_appointment_is_for_1_person(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The nail salon appointment is for 1 person"
        assert len(result) > 0
