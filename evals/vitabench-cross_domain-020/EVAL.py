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
        assert result[0]["store_id"] == 'S17550802126117462_S00002'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802126117462_P00008", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 46) < 1

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
        assert result[2]["store_id"] == 'S17550802126117462_I00011'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802126117462_P00055", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 88) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550802126117462_T00006'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17550802126117462_P00026", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 152) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17550802126117462_T00007'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17550802126117462_P00031", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 112) < 1

    def test_rubric_0_the_rating_of_the_delivery_restaurant_should_be_greater_than(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The rating of the delivery restaurant should be greater than or equal to 4.3"
        assert len(result) > 0

    def test_rubric_1_the_delivery_order_should_not_be_a_set_meal_for_two(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order should not be a set meal for two"
        assert len(result) > 0

    def test_rubric_2_the_delivery_restaurant_should_offer_dine_in_service(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery restaurant should offer dine-in service"
        assert len(result) > 0

    def test_rubric_3_the_delivery_food_should_be_light_meal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery food should be Light Meal"
        assert len(result) > 0

    def test_rubric_4_the_delivery_food_should_be_highly_satiating(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery food should be Highly Satiating"
        assert len(result) > 0

    def test_rubric_5_the_delivery_food_should_be_non_spicy(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery food should be Non-spicy"
        assert len(result) > 0

    def test_rubric_6_the_delivery_should_not_contain_offal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery should not contain Offal"
        assert len(result) > 0

    def test_rubric_7_the_delivery_address_must_be_room_2503__25th_floor__times_av(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address must be Room 2503, 25th Floor, Times Avenue, No. 88 Jiefangbei Pedestrian Street, Yuzhong District, Chongqing"
        assert len(result) > 0

    def test_rubric_8_the_estimated_delivery_time_should_be_before_2026_09_07_18_0(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time should be before 2026-09-07 18:00:00"
        assert len(result) > 0

    def test_rubric_9_the_coffee_shop_should_be_open_24_hours(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The coffee shop should be open 24 Hours"
        assert len(result) > 0

    def test_rubric_10_the_coffee_shop_should_be_within_600_meters_from_room_2503(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The coffee shop should be within 600 meters from Room 2503, 25th Floor, Times Avenue, No. 88 Jiefangbei Pedestrian Street, Yuzhong District, Chongqing"
        assert len(result) > 0

    def test_rubric_11_should_not_choose_noisy_coffee_shops__such_as_those_with_ban(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Should not choose noisy coffee shops (such as those with Band Performance)"
        assert len(result) > 0

    def test_rubric_12_the_coffee_shop_should_provide_wifi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The coffee shop should provide WiFi"
        assert len(result) > 0

    def test_rubric_13_need_to_reserve_a_booth_at_the_coffee_shop_for_7pm(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to reserve a booth at the coffee shop for 7pm"
        assert len(result) > 0

    def test_rubric_14_the_reservation_at_the_coffee_shop_should_be_for_1_person(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation at the coffee shop should be for 1 person"
        assert len(result) > 0

    def test_rubric_15_the_ordered_items_should_include_two_cups_of_coffee(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered items should include two cups of coffee"
        assert len(result) > 0

    def test_rubric_16_the_ordered_items_should_be_from_maan_coffee__jiefangbei_24(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered items should be from Maan Coffee (Jiefangbei 24-Hour Branch)"
        assert len(result) > 0

    def test_rubric_17_need_to_check_the_departure_time_of_the_user_s_purchased_tic(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the departure time of the user\'s purchased ticket to Zunyi, and should inform the user that the purchased D1825 train departs from Chongqing North Railway Station at 11:25 tomorrow (2026-09-08) and arrives at Zunyi Railway Station at 12:48"
        assert len(result) > 0

    def test_rubric_18_if_the_train_departure_time_is_before_12pm__order_number_s17(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "If the train departure time is before 12pm, order number S17550802126117462_O00004 should be canceled"
        assert len(result) > 0

    def test_rubric_19_the_departure_station_for_the_train_ticket_should_be_chongqi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure station for the train ticket should be Chongqing North Railway Station"
        assert len(result) > 0

    def test_rubric_20_the_arrival_station_for_the_train_ticket_should_be_zunyi_rai(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival station for the train ticket should be Zunyi Railway Station"
        assert len(result) > 0

    def test_rubric_21_the_train_ticket_should_be_for_a_train_departing_between_13(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train ticket should be for a train departing between 13:00-15:00 on 2026-09-08"
        assert len(result) > 0
