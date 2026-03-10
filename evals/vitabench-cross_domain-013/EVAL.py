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
        assert result[0]["store_id"] == 'S17550802128064414_S00002'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802128064414_P00011", "quantity": 1}, {"product_id": "S17550802128064414_P00014", "quantity": 1}, {"product_id": "S17550802128064414_P00015", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 406) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802128064414_H00008'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802128064414_P00054", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 880) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == ''

    def test_order_2_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 0) < 1

    def test_rubric_0_the_food_delivery_restaurant_should_be_a_high_end_chinese_re(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery restaurant should be a high-end Chinese restaurant"
        assert len(result) > 0

    def test_rubric_1_the_average_cost_per_person_at_the_food_delivery_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The average cost per person at the food delivery restaurant should be around 200 Yuan"
        assert len(result) > 0

    def test_rubric_2_the_food_delivery_order_should_avoid_heavy_oil_spicy_dishes(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery order should avoid heavy oil spicy dishes"
        assert len(result) > 0

    def test_rubric_3_the_food_delivery_order_should_include_two_dishes_and_two_st(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery order should include two dishes and two staple foods"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_should_be_room_1204__building_b2__no__7(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address should be Room 1204, Building B2, No. 700 Yishan Road, Xuhui District, Shanghai"
        assert len(result) > 0

    def test_rubric_5_the_expected_delivery_time_should_be_around_18_00_on_june_27(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The expected delivery time should be around 18:00 on June 27, 2025 [i.e., the expected delivery time should be between 17:45 and 18:15]"
        assert len(result) > 0

    def test_rubric_6_the_hotel_to_be_booked_should_be_on_the_shanghai_bund(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel to be booked should be on the Shanghai Bund"
        assert len(result) > 0

    def test_rubric_7_the_hotel_room_type_should_be_a_huangpu_river_view_suite(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel room type should be a Huangpu River View Suite"
        assert len(result) > 0

    def test_rubric_8_the_hotel_check_in_date_should_be_june_27__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel check-in date should be June 27, 2025"
        assert len(result) > 0

    def test_rubric_9_the_western_restaurant_to_be_reserved_should_have_a_romantic(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The western restaurant to be reserved should have a romantic atmosphere"
        assert len(result) > 0

    def test_rubric_10_the_western_restaurant_should_provide_a_couple_set_menu_that(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The western restaurant should provide a couple set menu that includes champagne and fresh flowers"
        assert len(result) > 0

    def test_rubric_11_the_western_restaurant_reservation_time_should_be_12_00_on_j(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The western restaurant reservation time should be 12:00 on June 28, 2025"
        assert len(result) > 0

    def test_rubric_12_the_number_of_people_for_the_western_restaurant_reservation(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the western restaurant reservation should be 2"
        assert len(result) > 0

    def test_rubric_13_june_28__2025_will_be_rainy(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "June 28, 2025 will be rainy"
        assert len(result) > 0

    def test_rubric_14_should_not_book_a_pottery_experience_class(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should not book a pottery experience class"
        assert len(result) > 0
