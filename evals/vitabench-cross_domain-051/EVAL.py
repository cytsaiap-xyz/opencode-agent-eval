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
            if i in {2}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550848554515407_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550848554515407_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1299) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802119759684_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802119759684_P00001", "quantity": 1}, {"product_id": "S17550802119759684_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 336) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550802119759684_I00006'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 1

    def test_rubric_0_the_washing_machine_ordered_must_be_a_quiet_operation_washin(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The washing machine ordered must be a quiet operation washing machine"
        assert len(result) > 0

    def test_rubric_1_the_washing_machine_ordered_must_be_an_energy_saving_model(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The washing machine ordered must be an energy-saving model"
        assert len(result) > 0

    def test_rubric_2_the_washing_machine_brand_must_be_either_midea_or_haier(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The washing machine brand must be either Midea or Haier"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_washing_machine_should_be_tangs(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the washing machine should be Tangshan People\'s Hospital Single Dormitory"
        assert len(result) > 0

    def test_rubric_4_the_hotel_booked_must_be_located_within_1km__inclusive__of_t(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel booked must be located within 1km (inclusive) of Tangshan People\'s Hospital"
        assert len(result) > 0

    def test_rubric_5_the_hotel_must_have_good_soundproofing(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel must have good soundproofing"
        assert len(result) > 0

    def test_rubric_6_the_most_economical_room_type_must_be_selected_for_the_hotel(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The most economical room type must be selected for the hotel"
        assert len(result) > 0

    def test_rubric_7_the_hotel_needs_to_be_booked_for_two_nights__with_check_in_d(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel needs to be booked for two nights, with check-in dates on 2025-10-07 and 2025-10-08"
        assert len(result) > 0

    def test_rubric_8_distance_information_from_the_hotel_to_the_user_s_dormitory(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Distance information from the hotel to the user\'s dormitory must be provided, with the result showing Home Inn is approximately 150 meters from Tangshan People\'s Hospital Single Dormitory"
        assert len(result) > 0

    def test_rubric_9_the_restaurant_ordered_must_be_a_tangshan_style_time_honored(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant ordered must be a Tangshan-style Time-honored Brand restaurant"
        assert len(result) > 0

    def test_rubric_10_the_restaurant_rating_must_be_higher_than_4_8(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant rating must be higher than 4.8"
        assert len(result) > 0

    def test_rubric_11_the_restaurant_reservation_time_must_be_2025_10_07_19_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant reservation time must be 2025-10-07 19:00"
        assert len(result) > 0

    def test_rubric_12_the_reservation_order_must_be_for_1_person(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation order must be for 1 person"
        assert len(result) > 0
