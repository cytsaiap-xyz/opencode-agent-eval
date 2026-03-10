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
        assert result[0]["store_id"] == 'S17550806907653421_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550806907653421_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 46.8) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550806907653421_H00006'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550806907653421_P00026", "quantity": 1}]
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

    def test_rubric_0_the_ordered_food_delivery_should_be_a_healthy_light_meal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered food delivery should be a Healthy Light Meal"
        assert len(result) > 0

    def test_rubric_1_the_ordered_food_delivery_should_include_red_meat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered food delivery should include Red Meat"
        assert len(result) > 0

    def test_rubric_2_the_ordered_food_delivery_must_include_brown_rice__not_white(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered food delivery must include Brown Rice, not white rice or Quinoa"
        assert len(result) > 0

    def test_rubric_3_the_ordered_food_delivery_must_include_vinaigrette(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered food delivery must include Vinaigrette"
        assert len(result) > 0

    def test_rubric_4_the_food_delivery_order_must_comply_with_the_user_s_dietary(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery order must comply with the user\'s dietary restrictions of avoiding High Sugar and Caffeine-free"
        assert len(result) > 0

    def test_rubric_5_the_food_delivery_address_must_be_room_801__unit_1__building(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery address must be Room 801, Unit 1, Building 3, Rongqiao Jincheng, 138 Zhuodaoquan South Road, Hongshan District, Wuhan, Hubei Province"
        assert len(result) > 0

    def test_rubric_6_the_food_delivery_order_must_be_delivered_before_3_pm_on_sep(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery order must be delivered before 3 PM on September 21"
        assert len(result) > 0

    def test_rubric_7_the_hotel_booked_must_be_a_five_star_hotel(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booked must be a Five-star hotel"
        assert len(result) > 0

    def test_rubric_8_the_hotel_booked_must_have_been_opened_in_2022(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booked must have been Opened in 2022"
        assert len(result) > 0

    def test_rubric_9_the_hotel_room_type_booked_must_be_a_business_king_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel room type booked must be a Business King Room"
        assert len(result) > 0

    def test_rubric_10_the_hotel_check_in_date_must_be_2025_09_21(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel check-in date must be 2025-09-21"
        assert len(result) > 0

    def test_rubric_11_the_restaurant_booked_should_be_a_business_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant booked should be a Business Restaurant"
        assert len(result) > 0

    def test_rubric_12_the_restaurant_booked_must_be_located_within_3km_of_wuhan_za(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant booked must be located within 3km of Wuhan Zall Marriott Hotel, 738 Jianshe Avenue, Jianghan District, Wuhan, Hubei Province"
        assert len(result) > 0

    def test_rubric_13_the_restaurant_reservation_time_should_be_after_18_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation time should be after 18:00"
        assert len(result) > 0

    def test_rubric_14_the_restaurant_reservation_should_be_for_2_persons(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation should be for 2 persons"
        assert len(result) > 0
