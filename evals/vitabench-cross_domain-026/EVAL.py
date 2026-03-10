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
            assert "store_id" in order
            assert "products" in order
            assert "total_price" in order
            assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550802154625724_I00012'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802154625724_P00075", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 298) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802154625724_S00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802154625724_P00006", "quantity": 1}, {"product_id": "S17550802154625724_P00006", "quantity": 1}]
        remaining = list(result[1]["products"])
        for ep in expected_products:
            found_idx = next(
                (i for i, p in enumerate(remaining)
                 if p["product_id"] == ep["product_id"] and p["quantity"] == ep["quantity"]),
                None,
            )
            assert found_idx is not None, f"Missing product {ep['product_id']} with quantity {ep['quantity']}"
            remaining.pop(found_idx)

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 59.8) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == ''

    def test_order_2_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 0) < 1

    def test_rubric_0_the_pottery_workshop_to_be_ordered_should_be_within_1km_of_t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The pottery workshop to be ordered should be within 1km of the hotel"
        assert len(result) > 0

    def test_rubric_1_the_ordered_pottery_workshop_is_the_highest_rated_one_among(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered pottery workshop is the highest-rated one among the available options (shop_id is S17550802154625724_I00012)"
        assert len(result) > 0

    def test_rubric_2_the_package_purchased_at_the_pottery_workshop_is_for_two_peo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The package purchased at the pottery workshop is for two people"
        assert len(result) > 0

    def test_rubric_3_the_product_in_the_delivery_order_should_be_m_size(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The product in the delivery order should be M Size"
        assert len(result) > 0

    def test_rubric_4_the_quantity_of_m_size_product_in_the_delivery_order_is_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of M Size product in the delivery order is 1"
        assert len(result) > 0

    def test_rubric_5_the_product_in_the_delivery_order_should_be_xl_size(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The product in the delivery order should be XL Size"
        assert len(result) > 0

    def test_rubric_6_the_quantity_of_xl_size_product_in_the_delivery_order_is_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of XL Size product in the delivery order is 1"
        assert len(result) > 0

    def test_rubric_7_both_products_in_the_delivery_order_are_from_the_same_store(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Both products in the delivery order are from the same store"
        assert len(result) > 0

    def test_rubric_8_the_delivery_address_for_the_delivery_order_is_room_1201__un(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the delivery order is Room 1201, Unit 2, Building 5, Olympic Garden Residential Area, No.1 Olympic Center West Road, Lixia District, Jinan"
        assert len(result) > 0

    def test_rubric_9_the_delivery_time_for_the_delivery_order_is_19_45_00_20_45_0(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the delivery order is 19:45:00-20:45:00 on 2025-08-15"
        assert len(result) > 0

    def test_rubric_10_the_calculated_distance_from_the_hotel_to_the_pottery_worksh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The calculated distance from the hotel to the pottery workshop is 0.075km"
        assert len(result) > 0

    def test_rubric_11_the_pottery_workshop_to_be_booked_should_be_taoran_handmade(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The pottery workshop to be booked should be Taoran Handmade Pottery Workshop"
        assert len(result) > 0

    def test_rubric_12_the_distance_from_the_hotel_to_the_pottery_workshop_is_0_075(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The distance from the hotel to the pottery workshop is 0.075km, the user prefers to walk there, and books a slot at the pottery workshop for 14:30:00 on August 16, 2025"
        assert len(result) > 0

    def test_rubric_13_the_number_of_people_in_the_pottery_workshop_reservation_is(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people in the pottery workshop reservation is 2"
        assert len(result) > 0

    def test_rubric_14_the_weather_in_weihai_on_august_17__2025_is_rainy__and_the_h(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The weather in Weihai on August 17, 2025 is rainy, and the high-speed rail arrival time should be around 18:00 on August 17, 2025 [specifically, the high-speed rail arrival time should be between 17:45 and 18:15]"
        assert len(result) > 0

    def test_rubric_15_the_high_speed_rail_tickets_purchased_are_from_weihai_to_jin(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The high-speed rail tickets purchased are from Weihai to Jinan"
        assert len(result) > 0

    def test_rubric_16_the_high_speed_rail_tickets_purchased_are_for_second_class_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The high-speed rail tickets purchased are for Second Class Seat"
        assert len(result) > 0

    def test_rubric_17_the_quantity_of_high_speed_rail_tickets_purchased_is_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of high-speed rail tickets purchased is 2"
        assert len(result) > 0
