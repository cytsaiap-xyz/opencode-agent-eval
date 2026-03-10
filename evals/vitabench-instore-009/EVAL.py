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
        assert result[0]["store_id"] == 'S17564420351855866_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420351855866_P00005", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 85) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564420351855866_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2024-07-13 16:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564420351855866_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564420351855866_P00008", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 68) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17564420351855866_I00003'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17564420351855866_P00012", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 58) < 1

    def test_rubric_0_the_table_tennis_hall_to_be_booked_should_be_open_24_hours(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The table tennis hall to be booked should be open 24 hours"
        assert len(result) > 0

    def test_rubric_1_the_table_tennis_hall_should_offer_a_2_hour_trial_class(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The table tennis hall should offer a 2-Hour Trial Class"
        assert len(result) > 0

    def test_rubric_2_the_table_tennis_hall_booking_time_should_be_2024_07_13_16_0(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The table tennis hall booking time should be 2024-07-13 16:00:00"
        assert len(result) > 0

    def test_rubric_3_the_number_of_people_for_the_table_tennis_hall_booking_shoul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the table tennis hall booking should be 1"
        assert len(result) > 0

    def test_rubric_4_the_table_tennis_hall_to_be_booked_should_be_star_power_tabl(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The table tennis hall to be booked should be Star Power Table Tennis Hall (Jianghan Branch)"
        assert len(result) > 0

    def test_rubric_5_the_table_tennis_hall_booking_should_be_for_a_trial_class(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The table tennis hall booking should be for a Trial Class"
        assert len(result) > 0

    def test_rubric_6_the_duration_of_use_for_the_table_tennis_hall_booking_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The duration of use for the table tennis hall booking should be 2 Hours"
        assert len(result) > 0

    def test_rubric_7_the_dumpling_order_status_should_be_cancelled(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dumpling order status should be cancelled"
        assert len(result) > 0

    def test_rubric_8_the_dessert_shop_should_be_within_500m__inclusive__from_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dessert shop should be within 500m (inclusive) from Room 501, Unit 2, Building 4, Hankou Bank Staff Quarters, 241 Xinhua Road, Jianghan District, Wuhan, Hubei Province"
        assert len(result) > 0

    def test_rubric_9_the_dessert_shop_rating_should_be_3_8_or_above(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dessert shop rating should be 3.8 or above"
        assert len(result) > 0

    def test_rubric_10_the_dessert_shop_order_should_be_for_a_cake(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dessert shop order should be for a Cake"
        assert len(result) > 0

    def test_rubric_11_the_dessert_shop_order_should_be_fruit_flavored(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dessert shop order should be Fruit flavored"
        assert len(result) > 0

    def test_rubric_12_the_dessert_shop_order_should_not_be_cheesecake_flavored(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dessert shop order should not be Cheesecake flavored"
        assert len(result) > 0
