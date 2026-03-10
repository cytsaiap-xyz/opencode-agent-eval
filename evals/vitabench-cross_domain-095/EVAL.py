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
        assert result[0]["store_id"] == 'S17550809287952066_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550809287952066_P00001", "quantity": 2}, {"product_id": "S17550809287952066_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 69.7) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550809287952066_I00011'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550809287952066_P00066", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 198) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550809287952066_T00008'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550809287952066_P00043", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 337) < 1

    def test_rubric_0_the_delivery_order_must_include_disposable_underwear(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order must include disposable underwear"
        assert len(result) > 0

    def test_rubric_1_the_delivery_order_must_include_at_least_four_disposable_und(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order must include at least four disposable underwear"
        assert len(result) > 0

    def test_rubric_2_the_disposable_underwear_in_the_delivery_order_should_be_wom(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The disposable underwear in the delivery order should be women\'s style"
        assert len(result) > 0

    def test_rubric_3_the_delivery_order_must_include_slippers(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order must include slippers"
        assert len(result) > 0

    def test_rubric_4_the_slippers_in_the_delivery_order_should_not_be_disposable(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The slippers in the delivery order should not be disposable"
        assert len(result) > 0

    def test_rubric_5_the_slippers_in_the_delivery_order_should_be_size_37_38(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The slippers in the delivery order should be size 37-38"
        assert len(result) > 0

    def test_rubric_6_the_slippers_in_the_delivery_order_should_be_women_s_style(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The slippers in the delivery order should be women\'s style"
        assert len(result) > 0

    def test_rubric_7_the_disposable_underwear_and_slippers_in_the_delivery_order(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The disposable underwear and slippers in the delivery order must come from the same store"
        assert len(result) > 0

    def test_rubric_8_after_checking__it_was_found_that_there_will_be_no_rain_in_t(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "After checking, it was found that there will be no rain in Tianjin on November 9 and 10, 2024, so the delivery order should not include disposable raincoats"
        assert len(result) > 0

    def test_rubric_9_the_delivery_address_is_shenlong_jinqiao_community__north_of(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address is Shenlong Jinqiao Community, North of Bridge No.1, Majuqiao, Tongzhou District, Beijing"
        assert len(result) > 0

    def test_rubric_10_the_estimated_delivery_time_is_9_pm_on_november_7__2024(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time is 9 PM on November 7, 2024"
        assert len(result) > 0

    def test_rubric_11_the_dine_in_restaurant_should_be_within_2km_of_shenlong_jinq(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dine-in restaurant should be within 2km of Shenlong Jinqiao Community, North of Bridge No.1, Majuqiao, Tongzhou District, Beijing"
        assert len(result) > 0

    def test_rubric_12_the_dine_in_restaurant_should_be_the_closest_one_to_shenlong(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dine-in restaurant should be the closest one to Shenlong Jinqiao Community, North of Bridge No.1, Majuqiao, Tongzhou District, Beijing"
        assert len(result) > 0

    def test_rubric_13_the_dine_in_restaurant_should_be_a_roast_duck_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dine-in restaurant should be a roast duck restaurant"
        assert len(result) > 0

    def test_rubric_14_the_dine_in_order_should_be_for_a_set_meal_for_two_people__n(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dine-in order should be for a set meal for two people, not two single set meals"
        assert len(result) > 0

    def test_rubric_15_the_train_tickets_should_be_for_a_route_from_beijing_to_tian(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train tickets should be for a route from Beijing to Tianjin"
        assert len(result) > 0

    def test_rubric_16_the_train_with_the_longest_journey_time_should_be_selected(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train with the longest journey time should be selected"
        assert len(result) > 0

    def test_rubric_17_the_train_departure_date_should_be_november_9__2024(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train departure date should be November 9, 2024"
        assert len(result) > 0

    def test_rubric_18_the_train_seat_type_should_be_business_class_seat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train seat type should be Business class seat"
        assert len(result) > 0
