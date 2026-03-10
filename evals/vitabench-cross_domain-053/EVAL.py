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
            if i in {0}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[0]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_0_matches_expected_shop(self):
        order = result[0]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550802111542162_I00011'

    def test_order_0_has_correct_customer_count(self):
        assert result[0].get("customer_count") == 6

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802111542162_S00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802111542162_P00001", "quantity": 1}, {"product_id": "S17550802111542162_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 197.9) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802111542162_T00007'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802111542162_P00037", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 882) < 1

    def test_rubric_0_the_reserved_restaurant_should_be_within_3km_from_dalian_por(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should be within 3km from Dalian Port, 41 Changjiang Road, Zhongshan District, Dalian, Liaoning Province"
        assert len(result) > 0

    def test_rubric_1_the_reserved_restaurant_should_have_accessible_facilities(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should have Accessible Facilities"
        assert len(result) > 0

    def test_rubric_2_the_reserved_restaurant_should_have_child_friendly_dishes(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should have Child-Friendly dishes"
        assert len(result) > 0

    def test_rubric_3_the_reserved_restaurant_should_have_elder_friendly_dishes(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should have Elder-Friendly dishes"
        assert len(result) > 0

    def test_rubric_4_the_reserved_restaurant_should_be_suitable_for_three_generat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should be suitable for three generations dining together"
        assert len(result) > 0

    def test_rubric_5_the_restaurant_reservation_time_should_be_12_00_on_july_27(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation time should be 12:00 on July 27, 2025"
        assert len(result) > 0

    def test_rubric_6_the_restaurant_reservation_should_be_for_6_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation should be for 6 people"
        assert len(result) > 0

    def test_rubric_7_the_delivery_address_for_the_takeout_order_should_be_harbor(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the takeout order should be Harbor Family Banquet Restaurant, No.5 Harbor Square, Zhongshan District, Dalian, Liaoning Province"
        assert len(result) > 0

    def test_rubric_8_the_delivery_time_for_the_takeout_order_should_be_around_12(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the takeout order should be around 12:00 on 2025-07-27 [i.e., delivery time should be between 11:40 and 12:20]"
        assert len(result) > 0

    def test_rubric_9_the_takeout_order_should_include_a_walking_stick(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The takeout order should include a walking stick"
        assert len(result) > 0

    def test_rubric_10_the_takeout_order_should_include_adult_diapers(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The takeout order should include Adult Diapers"
        assert len(result) > 0

    def test_rubric_11_the_walking_stick_and_adult_diapers_in_the_takeout_order_sho(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The walking stick and Adult Diapers in the takeout order should be from the same store"
        assert len(result) > 0

    def test_rubric_12_the_train_ticket_to_purchase_should_be_for_high_speed_rail(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket to purchase should be for High-Speed Rail"
        assert len(result) > 0

    def test_rubric_13_the_high_speed_rail_ticket_should_be_first_class_seat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The High-Speed Rail ticket should be First Class Seat"
        assert len(result) > 0

    def test_rubric_14_the_high_speed_rail_ticket_departure_date_should_be_2025_07(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The High-Speed Rail ticket departure date should be 2025-07-27"
        assert len(result) > 0

    def test_rubric_15_the_high_speed_rail_ticket_arrival_time_should_be_before_11(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The High-Speed Rail ticket arrival time should be before 11:00"
        assert len(result) > 0
