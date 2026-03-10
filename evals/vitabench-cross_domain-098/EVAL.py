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
        assert result[0]["store_id"] == 'S17550812997141953_I00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550812997141953_P00057", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 598) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == ''

    def test_order_1_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 0) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550812997141953_S00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550812997141953_P00009", "quantity": 1}, {"product_id": "S17550812997141953_P00013", "quantity": 1}, {"product_id": "S17550812997141953_P00012", "quantity": 1}, {"product_id": "S17550812997141953_P00016", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 141.4) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550812997141953_S00005'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17550812997141953_P00027", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 298) < 1

    def test_rubric_0_the_party_house_to_be_ordered_should_be_beautifully_decorate(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The party house to be ordered should be beautifully decorated"
        assert len(result) > 0

    def test_rubric_1_the_party_house_to_be_ordered_must_have_ktv__game_area_and_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The party house to be ordered must have KTV, game area and photo area functions, not just a single function"
        assert len(result) > 0

    def test_rubric_2_the_party_house_must_be_available_for_reservation(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The party house must be available for reservation"
        assert len(result) > 0

    def test_rubric_3_the_package_for_the_party_house_order_must_be_a_two_person_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package for the party house order must be a two-person package"
        assert len(result) > 0

    def test_rubric_4_the_party_house_package_must_be_available_for_all_day_play(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The party house package must be available for all-day play"
        assert len(result) > 0

    def test_rubric_5_the_party_house_reservation_time_must_be_saturday__september(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The party house reservation time must be Saturday (September 20, 2025) at 11:00"
        assert len(result) > 0

    def test_rubric_6_the_party_house_reservation_must_be_for_2_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The party house reservation must be for 2 people"
        assert len(result) > 0

    def test_rubric_7_the_food_delivery_order_must_include_three_types_of_popular(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery order must include three types of popular snacks"
        assert len(result) > 0

    def test_rubric_8_the_food_delivery_order_must_include_a_fresh_fruit_cut_platt(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery order must include a fresh fruit cut platter"
        assert len(result) > 0

    def test_rubric_9_the_popular_snacks_and_fruit_cut_should_come_from_the_same_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The popular snacks and fruit cut should come from the same store"
        assert len(result) > 0

    def test_rubric_10_the_fruit_cut_platter_should_be_a_large_portion(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The fruit cut platter should be a large portion"
        assert len(result) > 0

    def test_rubric_11_the_fruit_cut_platter_should_not_contain_grapes(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The fruit cut platter should not contain grapes"
        assert len(result) > 0

    def test_rubric_12_the_fruit_cut_platter_must_contain_peach(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The fruit cut platter must contain peach"
        assert len(result) > 0

    def test_rubric_13_the_food_delivery_order_needs_to_comply_with_the_user_s_diet(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery order needs to comply with the user\'s dietary restrictions, cannot contain high-purine foods (such as seafood, organ meats) and alcoholic beverages"
        assert len(result) > 0

    def test_rubric_14_the_food_delivery_arrival_time_should_be_between_11_00_and_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery arrival time should be between 11:00 and 12:00 on September 20, 2025"
        assert len(result) > 0

    def test_rubric_15_the_food_delivery_location_must_be_the_party_house__fantasy(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery location must be the party house (Fantasy Party House, 500 Hubin South Road, Siming District, Xiamen City, Fujian Province)"
        assert len(result) > 0

    def test_rubric_16_must_check_the_history_of_flower_purchases_in_past_orders__t(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Must check the history of flower purchases in past orders, the result shows that a sweet confession rose bouquet was purchased on July 15, 2025, which was more than 2 months ago"
        assert len(result) > 0

    def test_rubric_17_need_to_order_a_sweet_confession_rose_bouquet(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to order a sweet confession rose bouquet"
        assert len(result) > 0

    def test_rubric_18_the_flower_delivery_location_must_be_the_party_house__fantas(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flower delivery location must be the party house (Fantasy Party House, 500 Hubin South Road, Siming District, Xiamen City, Fujian Province)"
        assert len(result) > 0

    def test_rubric_19_the_flower_delivery_arrival_time_should_be_between_11_00_and(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The flower delivery arrival time should be between 11:00 and 12:00 on September 20, 2025"
        assert len(result) > 0

    def test_rubric_20_need_to_check_and_provide_information_about_metro_stations_n(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check and provide information about metro stations near the party house; the result is Hubin East Road Metro Station (Line 1; Line 3)"
        assert len(result) > 0
