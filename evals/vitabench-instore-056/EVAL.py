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
            if i in {1}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17567836591639964_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836591639964_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 268) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836591639964_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2024-10-27 09:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 2

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567836591639964_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836591639964_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 158) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17567836591639964_I00003'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17567836591639964_P00019", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 258) < 1

    def test_rubric_0_the_go_kart_track_should_have_a_professional_track_design(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The go-kart track should have a professional track design"
        assert len(result) > 0

    def test_rubric_1_the_go_kart_track_should_be_an_outdoor_venue(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The go-kart track should be an outdoor venue"
        assert len(result) > 0

    def test_rubric_2_the_go_kart_track_should_have_commercial_areas_or_food_stree(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The go-kart track should have commercial areas or food streets nearby"
        assert len(result) > 0

    def test_rubric_3_the_go_kart_track_order_should_be_a_two_person_package(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The go-kart track order should be a Two-Person Package"
        assert len(result) > 0

    def test_rubric_4_the_go_kart_package_ordered_should_include_one_adult_and_one(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The go-kart package ordered should include One Adult and One Child racing"
        assert len(result) > 0

    def test_rubric_5_the_go_kart_track_order_should_include_safety_equipment(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The go-kart track order should include safety equipment"
        assert len(result) > 0

    def test_rubric_6_the_go_kart_track_product_ordered_should_be_available_on_wee(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The go-kart track product ordered should be available on weekends"
        assert len(result) > 0

    def test_rubric_7_the_reserved_go_kart_track_should_be_speed_star_karting_trac(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved go-kart track should be Speed Star Karting Track"
        assert len(result) > 0

    def test_rubric_8_the_go_kart_track_reservation_time_should_be_2024_10_27_09_0(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The go-kart track reservation time should be 2024-10-27 09:00:00"
        assert len(result) > 0

    def test_rubric_9_you_will_bring_your_wife_and_child__but_your_wife_doesn_t_li(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "You will bring your wife and child, but your wife doesn\'t like to participate and will take photos of you and your son from outside the track. Therefore, the go-kart track reservation should be for 2 people (you and your son)"
        assert len(result) > 0

    def test_rubric_10_the_restaurant_ordered_should_be_a_mexican_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered should be a Mexican restaurant"
        assert len(result) > 0

    def test_rubric_11_the_restaurant_order_should_include_tacos(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant order should include Tacos"
        assert len(result) > 0

    def test_rubric_12_the_restaurant_order_should_be_a_three_person_meal_package(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant order should be a three-person meal package, not multiple individual meals"
        assert len(result) > 0

    def test_rubric_13_the_park_should_be_closest_to_b1_102__sheshan_tianjie__1088(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The park should be closest to B1-102, Sheshan Tianjie, 1088 Linhu Road, Sheshan Town, Songjiang District, Shanghai"
        assert len(result) > 0

    def test_rubric_14_the_park_order_should_be_a_package_for_two_adults_and_one_ch(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The park order should be a package for two adults and one child"
        assert len(result) > 0

    def test_rubric_15_the_park_should_provide_parking_facilities(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The park should provide parking facilities"
        assert len(result) > 0
