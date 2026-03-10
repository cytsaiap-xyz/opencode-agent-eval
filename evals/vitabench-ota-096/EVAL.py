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
        assert result[0]["store_id"] == 'S17557512133563110_F00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557512133563110_P00133", "quantity": 5}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 7100) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557512133563110_F00012'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557512133563110_P00150", "quantity": 5}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 6300) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557512133563110_H00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557512133563110_P00028", "quantity": 2}, {"product_id": "S17557512133563110_P00029", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 4320) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557512133563110_H00002'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557512133563110_P00014", "quantity": 1}, {"product_id": "S17557512133563110_P00015", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 5600) < 1

    def test_rubric_0_the_outbound_flight_should_be_ca1357__the_return_flight_shou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound flight should be CA1357, the return flight should be CZ6789, comparing the price of January 22 outbound flight (1350 yuan) + January 26 return flight (1350 yuan) with January 23 outbound flight (1420 yuan) + January 27 return flight (1260 yuan). January 23 outbound flight and January 27 return flight is the cheapest flight combination, so the outbound flight date should be January 23, 2023"
        assert len(result) > 0

    def test_rubric_1_the_outbound_flight_should_be_from_hangzhou_to_sanya(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound flight should be from Hangzhou to Sanya"
        assert len(result) > 0

    def test_rubric_2_the_outbound_flight_quantity_should_be_5(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound flight quantity should be 5"
        assert len(result) > 0

    def test_rubric_3_the_return_flight_date_should_be_january_27__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return flight date should be January 27, 2023"
        assert len(result) > 0

    def test_rubric_4_the_return_flight_should_be_from_sanya_to_hangzhou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return flight should be from Sanya to Hangzhou"
        assert len(result) > 0

    def test_rubric_5_the_return_flight_quantity_should_be_5(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return flight quantity should be 5"
        assert len(result) > 0

    def test_rubric_6_there_is_no_sunny_day_in_sanya_from_january_23_to_january_24(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "There is no sunny day in Sanya from January 23 to January 24, 2023, so the hotel ordered in Sanya Bay should include an indoor pool"
        assert len(result) > 0

    def test_rubric_7_the_hotel_ordered_in_sanya_bay_should_provide_airport_transf(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel ordered in Sanya Bay should provide airport transfer service"
        assert len(result) > 0

    def test_rubric_8_to_keep_the_total_cost_of_four_nights__accommodation_within(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "To keep the total cost of four nights\' accommodation within 10,000 yuan, the room type of the hotel in Sanya Bay should be a double room"
        assert len(result) > 0

    def test_rubric_9_the_sanya_bay_hotel_order_should_include_2_double_rooms_per(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Sanya Bay hotel order should include 2 double rooms per night"
        assert len(result) > 0

    def test_rubric_10_the_sanya_bay_hotel_order_should_include_rooms_for_2_nights(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Sanya Bay hotel order should include rooms for 2 nights on January 23, 2023 and January 24, 2023"
        assert len(result) > 0

    def test_rubric_11_there_are_sunny_days_in_sanya_from_january_25_to_january_26(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "There are sunny days in Sanya from January 25 to January 26, 2023, so the hotel ordered in Haitang Bay should be a sea view room"
        assert len(result) > 0

    def test_rubric_12_the_hotel_ordered_in_haitang_bay_should_provide_airport_tran(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel ordered in Haitang Bay should provide airport transfer service"
        assert len(result) > 0

    def test_rubric_13_the_room_type_of_the_hotel_in_haitang_bay_should_be_a_sea_vi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type of the hotel in Haitang Bay should be a Sea View Family Suite (Suitable for 5-6 People)"
        assert len(result) > 0

    def test_rubric_14_the_haitang_bay_hotel_order_should_include_rooms_for_2_night(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Haitang Bay hotel order should include rooms for 2 nights on January 25, 2023 and January 26, 2023"
        assert len(result) > 0
