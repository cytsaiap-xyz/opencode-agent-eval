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
        assert result[0]["store_id"] == 'S17564420238894988_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420238894988_P00001", "quantity": 1}, {"product_id": "S17564420238894988_P00002", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 369.7) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564420238894988_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2024-09-14 10:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564420238894988_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564420238894988_P00008", "quantity": 1}]
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
        assert shop_id == 'S17564420238894988_I00002'

    def test_order_3_has_correct_reservation_time(self):
        assert result[3].get("reservation_time") == '2024-09-14 11:00:00'

    def test_order_3_has_correct_customer_count(self):
        assert result[3].get("customer_count") == 2

    def test_rubric_0_the_package_ordered_from_a_pet_grooming_store_must_be_availa(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package ordered from a pet grooming store must be available for dogs"
        assert len(result) > 0

    def test_rubric_1_pet_grooming_store_rating_must_be_4_5_stars_or_higher(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Pet grooming store rating must be 4.5 stars or higher"
        assert len(result) > 0

    def test_rubric_2_pet_grooming_store_order_must_include_bath___grooming_servic(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Pet grooming store order must include bath + grooming service"
        assert len(result) > 0

    def test_rubric_3_pet_grooming_store_order_must_be_show_grade_washing_and_care(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Pet grooming store order must be show-grade washing and care service"
        assert len(result) > 0

    def test_rubric_4_pet_grooming_store_order_must_include_imported_dog_treat_can(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Pet grooming store order must include imported dog treat canned food"
        assert len(result) > 0

    def test_rubric_5_pet_grooming_store_order_must_include_6_cans_of_dog_food(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Pet grooming store order must include 6 cans of dog food"
        assert len(result) > 0

    def test_rubric_6_pet_grooming_appointment_time_must_be_10_00_am(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Pet grooming appointment time must be 10:00 AM"
        assert len(result) > 0

    def test_rubric_7_the_reserved_pet_grooming_business_should_be_noble_pet_spa_c(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved pet grooming business should be Noble Pet SPA Club"
        assert len(result) > 0

    def test_rubric_8_the_western_restaurant_must_be_located_within_1km_of_the_pet(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The western restaurant must be located within 1km of the pet grooming store (Noble Pet SPA Club, 1st Floor, Zhengshang Bozuan Commercial Plaza, Intersection of Tanggong West Road and Kaixuan East Road, Xigong District, Luoyang)"
        assert len(result) > 0

    def test_rubric_9_the_western_restaurant_order_must_be_a_set_meal_for_two__not(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The western restaurant order must be a set meal for two, not two individual meals"
        assert len(result) > 0

    def test_rubric_10_the_western_restaurant_set_meal_for_two_must_not_contain_bee(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The western restaurant set meal for two must not contain beef (friend\'s dietary restriction)"
        assert len(result) > 0

    def test_rubric_11_the_western_restaurant_set_meal_for_two_must_not_contain_caf(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The western restaurant set meal for two must not contain caffeine (user is allergic), choosing a set meal labeled as caffeine-free"
        assert len(result) > 0

    def test_rubric_12_the_western_restaurant_order_must_be_a_beautiful_meal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The western restaurant order must be a Beautiful Meal"
        assert len(result) > 0

    def test_rubric_13_western_restaurant_reservation_time_must_be_11_00_am(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Western restaurant reservation time must be 11:00 AM"
        assert len(result) > 0

    def test_rubric_14_western_restaurant_reservation_must_be_for_2_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Western restaurant reservation must be for 2 people"
        assert len(result) > 0

    def test_rubric_15_the_reserved_western_restaurant_should_be_milano_western_res(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved western restaurant should be Milano Western Restaurant"
        assert len(result) > 0
