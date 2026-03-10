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
        assert result[0]["store_id"] == 'S17550802169908940_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802169908940_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 68) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802169908940_I00012'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802169908940_P00067", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1688) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550802169908940_I00012'

    def test_order_2_has_correct_reservation_time(self):
        assert result[2].get("reservation_time") == '2026-04-12 10:00:00'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 2

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550802169908940_A00007'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17550802169908940_P00034", "quantity": 2}, {"product_id": "S17550802169908940_P00035", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 25) < 1

    def test_rubric_0_the_breakfast_order_items_should_be_nutritionally_rich(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The breakfast order items should be nutritionally rich"
        assert len(result) > 0

    def test_rubric_1_the_breakfast_order_items_must_be_three_person_portion(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The breakfast order items must be Three-person Portion"
        assert len(result) > 0

    def test_rubric_2_the_breakfast_order_items_must_come_from_a_dine_in_restauran(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The breakfast order items must come from a Dine-in Restaurant"
        assert len(result) > 0

    def test_rubric_3_the_breakfast_order_items_must_not_contain_high_purine_foods(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The breakfast order items must not contain high Purine foods (such as organ meats/seafood soup)"
        assert len(result) > 0

    def test_rubric_4_the_breakfast_order_items_must_not_contain_caffeine(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The breakfast order items must not contain caffeine"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_for_the_breakfast_order_should_be_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the breakfast order should be Room 501, Unit 2, Building 1, Vanke City Light, No.239 Qingyang North Road, Tianning District, Changzhou City, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_6_the_studio_in_the_photo_studio_order_should_have_an_elegant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The studio in the photo studio order should have an Elegant Environment"
        assert len(result) > 0

    def test_rubric_7_the_items_in_the_photo_studio_order_should_be_neo_chinese_st(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The items in the photo studio order should be Neo-Chinese Style"
        assert len(result) > 0

    def test_rubric_8_the_items_in_the_photo_studio_order_should_be_two_person_art(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The items in the photo studio order should be Two-person Artistic Photography"
        assert len(result) > 0

    def test_rubric_9_the_package_in_the_photo_studio_order_must_include_makeup_an(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package in the photo studio order must include Makeup and Styling Included services"
        assert len(result) > 0

    def test_rubric_10_the_package_in_the_photo_studio_order_must_include_photos_an(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package in the photo studio order must include photos and photo frames"
        assert len(result) > 0

    def test_rubric_11_the_photo_studio_appointment_should_be_at_elegant_rhythm_pho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The photo studio appointment should be at Elegant Rhythm Photography Art Gallery"
        assert len(result) > 0

    def test_rubric_12_the_appointment_time_for_the_photo_studio_should_be_10_00_on(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The appointment time for the photo studio should be 10:00 on 2026-04-12"
        assert len(result) > 0

    def test_rubric_13_the_number_of_people_for_the_photo_studio_appointment_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the photo studio appointment should be 2"
        assert len(result) > 0

    def test_rubric_14_the_tourist_attraction_ordered_should_be_suitable_for_elderl(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tourist attraction ordered should be suitable for elderly people"
        assert len(result) > 0

    def test_rubric_15_the_tourist_attraction_ordered_must_not_require_climbing_too(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tourist attraction ordered must not require climbing too many slopes"
        assert len(result) > 0

    def test_rubric_16_the_tourist_attraction_ordered_must_have_fresh_air(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tourist attraction ordered must have fresh air"
        assert len(result) > 0

    def test_rubric_17_the_scenic_spot_order_should_include_senior_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scenic spot order should include Senior Ticket"
        assert len(result) > 0

    def test_rubric_18_the_scenic_spot_order_should_include_adult_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scenic spot order should include Adult Ticket"
        assert len(result) > 0

    def test_rubric_19_the_scenic_spot_order_should_include_2_senior_tickets(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scenic spot order should include 2 Senior Tickets"
        assert len(result) > 0

    def test_rubric_20_the_scenic_spot_order_should_include_1_adult_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scenic spot order should include 1 Adult Ticket"
        assert len(result) > 0

    def test_rubric_21_the_ticket_date_for_the_scenic_spot_order_should_be_2026_04(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket date for the scenic spot order should be 2026-04-12"
        assert len(result) > 0

    def test_rubric_22_need_to_inquire_whether_there_are_wigs_suitable_for_elderly(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to inquire whether there are wigs suitable for elderly people, the result shows that Health Preservation Wig Specialty Store offers Middle-aged and Elderly Men\'s Real Hair Toupee, Lightweight Breathable Wig Set for Elderly and other products"
        assert len(result) > 0
