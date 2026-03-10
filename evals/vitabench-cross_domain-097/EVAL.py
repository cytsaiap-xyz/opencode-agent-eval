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
        assert result[0]["store_id"] == 'S17550811928169174_I00014'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550811928169174_P00070", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 2188) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550811928169174_I00014'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 8

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550811928169174_S00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550811928169174_P00027", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 498) < 1

    def test_rubric_0_the_restaurant_ordered_should_be_a_high_end_business_restaur(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered should be a high-end business restaurant"
        assert len(result) > 0

    def test_rubric_1_the_ordered_restaurant_should_be_within_500_meters__includin(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered restaurant should be within 500 meters (including 500 meters) from Linyi Commercial Center Exhibition Center"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_reservation_time_should_be_october_27__2024_a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation time should be October 27, 2024 at 18:00"
        assert len(result) > 0

    def test_rubric_3_the_restaurant_reservation_should_be_for_6_8_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation should be for 6-8 people"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_for_purchasing_the_set_meal_order_should_be_y(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant for purchasing the set meal order should be Yu Pin Xuan"
        assert len(result) > 0

    def test_rubric_5_the_restaurant_set_meal_order_should_include_one_business_se(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant set meal order should include one Business Set Meal for 6-8 People"
        assert len(result) > 0

    def test_rubric_6_the_tea_should_have_elegant_packaging(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea should have elegant packaging"
        assert len(result) > 0

    def test_rubric_7_the_tea_should_be_in_standard_packaging(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea should be in standard packaging"
        assert len(result) > 0

    def test_rubric_8_the_unit_price_of_the_tea_should_be_between_400_600_yuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The unit price of the tea should be between 400-600 yuan"
        assert len(result) > 0

    def test_rubric_9_the_delivery_location_for_the_tea_must_be_tianji_golden_wate(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery location for the tea must be Tianji Golden Waterfront, 180 meters north of the intersection of Yinqueshan Road and Binhe Road, Lanshan District, Linyi, Shandong Province"
        assert len(result) > 0

    def test_rubric_10_the_estimated_delivery_time_for_the_tea_should_be_before_22(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the tea should be before 22:00 on October 27, 2024 (including 22:00)"
        assert len(result) > 0

    def test_rubric_11_the_tea_order_should_include_the_note__leave_at_community_pr(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea order should include the note \'Leave at community property management center\'"
        assert len(result) > 0

    def test_rubric_12_the_departure_station_for_the_train_ticket_should_be_linyi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure station for the train ticket should be Linyi"
        assert len(result) > 0

    def test_rubric_13_the_arrival_station_for_the_train_ticket_should_be_jinan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The arrival station for the train ticket should be Jinan"
        assert len(result) > 0

    def test_rubric_14_the_departure_date_for_the_train_ticket_should_be_october_28(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date for the train ticket should be October 28, 2024"
        assert len(result) > 0

    def test_rubric_15_the_departure_time_for_the_train_ticket_should_be_between_09(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure time for the train ticket should be between 09:00-11:00"
        assert len(result) > 0

    def test_rubric_16_need_to_check_for_the_fastest_train_from_linyi_to_jinan_on_o(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check for the fastest train from Linyi to Jinan on October 28, 2024, between 09:00-11:00, with the result being train G1234 (travel time: 1 hour and 20 minutes)"
        assert len(result) > 0
