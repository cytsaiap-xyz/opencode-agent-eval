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
        for order in result:
            assert "store_id" in order
            assert "products" in order
            assert "total_price" in order
            assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550809870242807_T00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550809870242807_P00055", "quantity": 1}, {"product_id": "S17550809870242807_P00053", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 2233) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550809870242807_H00008'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550809870242807_P00041", "quantity": 2}, {"product_id": "S17550809870242807_P00042", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 592) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550809870242807_S00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550809870242807_P00012", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 15.8) < 1

    def test_rubric_0_the_high_speed_rail_ticket_must_be_dated_june_21__2026(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The high-speed rail ticket must be dated June 21, 2026"
        assert len(result) > 0

    def test_rubric_1_the_high_speed_rail_ticket_must_be_for_a_train_from_nanjing(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The high-speed rail ticket must be for a train from Nanjing to Xiangtan"
        assert len(result) > 0

    def test_rubric_2_the_high_speed_rail_ticket_s_departure_time_must_be_between(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The high-speed rail ticket\'s departure time must be between 09:00-11:00"
        assert len(result) > 0

    def test_rubric_3_need_to_check_the_shortest_travel_time_from_nanjing_to_xiang(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the shortest travel time from Nanjing to Xiangtan, which is 6 hours and 26 minutes, exceeding 5 hours, so the order should include 1 Business class seat and 1 Second class seat"
        assert len(result) > 0

    def test_rubric_4_the_hotel_must_be_located_in_yuhu_district__xiangtan_city__h(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must be located in Yuhu District, Xiangtan City, Hunan Province"
        assert len(result) > 0

    def test_rubric_5_the_hotel_rating_should_be_greater_than_or_equal_to_4_5(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel rating should be greater than or equal to 4.5"
        assert len(result) > 0

    def test_rubric_6_the_hotel_room_price_should_be_less_than_or_equal_to_180_yua(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel room price should be less than or equal to 180 yuan"
        assert len(result) > 0

    def test_rubric_7_the_number_of_hotel_rooms_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of hotel rooms should be 2"
        assert len(result) > 0

    def test_rubric_8_the_hotel_check_in_date_should_be_june_21__2026(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel check-in date should be June 21, 2026"
        assert len(result) > 0

    def test_rubric_9_the_hotel_check_out_date_should_be_june_23__2026(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel check-out date should be June 23, 2026"
        assert len(result) > 0

    def test_rubric_10_the_food_delivery_order_item_should_be_disposable_toilet_sea(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food delivery order item should be disposable toilet seat covers"
        assert len(result) > 0

    def test_rubric_11_the_number_of_disposable_toilet_seat_covers_should_be_greate(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of disposable toilet seat covers should be greater than or equal to 4"
        assert len(result) > 0

    def test_rubric_12_the_delivery_address_for_the_disposable_toilet_seat_covers_m(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the disposable toilet seat covers must be Xiangtan Oriental Hotel, No.45 Renmin Road, Yuhu District, Xiangtan, Hunan Province"
        assert len(result) > 0

    def test_rubric_13_the_estimated_delivery_time_for_the_disposable_toilet_seat_c(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the disposable toilet seat covers should be between 19:00-20:00 on 2026-06-21"
        assert len(result) > 0
