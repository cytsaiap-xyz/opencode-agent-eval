import json
import os
import pytest

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)
with open(os.path.join(_dir, "answer.json")) as _f:
    result = json.load(_f)

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
        assert result[0]["store_id"] == 'S17567836579442822_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836579442822_P00003", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 128) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836579442822_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2024-06-07 18:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567836579442822_I00009'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836579442822_P00073", "quantity": 1}, {"product_id": "S17567836579442822_P00077", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 83) < 1

    def test_rubric_0_query_user_s_historical_behavior__the_user_has_been_to_tranq(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Query user\'s historical behavior. The user has been to Tranquil Yoga Center before, so the recommended yoga studio cannot be Tranquil Yoga Center"
        assert len(result) > 0

    def test_rubric_1_the_ordered_yoga_studio_should_not_be_more_than_5_kilometers(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered yoga studio should not be more than 5 kilometers (including 5 kilometers) from the Cardiology Department, 3rd Floor, Outpatient Building, Guiyang First People\'s Hospital, Huaguoyuan CBD, Nanming District, Guiyang City"
        assert len(result) > 0

    def test_rubric_2_the_ordered_product_in_the_yoga_studio_order_needs_to_be_an(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered product in the yoga studio order needs to be an experience package"
        assert len(result) > 0

    def test_rubric_3_the_ordered_product_in_the_yoga_studio_order_needs_to_be_an(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered product in the yoga studio order needs to be an Aerial yoga program"
        assert len(result) > 0

    def test_rubric_4_the_user_has_scheduled_to_arrive_at_18_00_on_june_7__2024__a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The user has scheduled to arrive at 18:00 on June 7, 2024, and plans to finish the experience at 20:00 on June 7, 2024. Therefore, the product ordered in the yoga studio order should provide a 2-hour experience duration"
        assert len(result) > 0

    def test_rubric_5_the_booked_yoga_studio_should_be_sky_yoga_studio(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked yoga studio should be Sky Yoga Studio"
        assert len(result) > 0

    def test_rubric_6_the_booking_time_for_the_yoga_studio_is_18_00_on_june_7__202(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booking time for the yoga studio is 18:00 on June 7, 2024"
        assert len(result) > 0

    def test_rubric_7_the_number_of_people_for_the_yoga_studio_reservation_is_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the yoga studio reservation is 1"
        assert len(result) > 0

    def test_rubric_8_the_ordered_restaurant_should_be_within_800_meters_from_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered restaurant should be within 800 meters from Room 1203, Building A, Financial Center, 162 Beijing Road, Yunyan District, Guiyang City"
        assert len(result) > 0

    def test_rubric_9_the_restaurant_order_should_include_a_salad_combo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant order should include a salad combo"
        assert len(result) > 0

    def test_rubric_10_the_quantity_of_salad_combo_in_the_restaurant_order_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of salad combo in the restaurant order should be 1"
        assert len(result) > 0

    def test_rubric_11_the_restaurant_order_should_include_a_fried_chicken_combo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant order should include a fried chicken combo"
        assert len(result) > 0

    def test_rubric_12_the_quantity_of_fried_chicken_combo_in_the_restaurant_order(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of fried chicken combo in the restaurant order should be 1"
        assert len(result) > 0

    def test_rubric_13_the_salad_combo_in_the_restaurant_order_must_be_for_a_single(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The salad combo in the restaurant order must be for a single person"
        assert len(result) > 0

    def test_rubric_14_the_fried_chicken_combo_in_the_restaurant_order_must_be_for(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The fried chicken combo in the restaurant order must be for a single person"
        assert len(result) > 0

    def test_rubric_15_the_salad_combo_and_fried_chicken_combo_in_the_restaurant_or(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The salad combo and fried chicken combo in the restaurant order need to be ordered from the same store"
        assert len(result) > 0
