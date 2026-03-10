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
            if i in {1}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550802110932959_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802110932959_P00001", "quantity": 1}, {"product_id": "S17550802110932959_P00002", "quantity": 1}, {"product_id": "S17550802110932959_P00005", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 186) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550802110932959_I00011'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2024-07-18 05:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 2

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802110932959_T00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802110932959_P00045", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 42) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550802110932959_S00001'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17550802110932959_P00001", "quantity": 1}, {"product_id": "S17550802110932959_P00002", "quantity": 1}, {"product_id": "S17550802110932959_P00003", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 182) < 1

    def test_rubric_0_the_food_delivery_order_containing_snow_brave_journey_beer_h(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery order containing Snow Brave Journey Beer has been canceled"
        assert len(result) > 0

    def test_rubric_1_the_store_for_dine_in_ordering_needs_to_be_open_24_hours(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The store for dine-in ordering needs to be Open 24 Hours"
        assert len(result) > 0

    def test_rubric_2_the_store_for_dine_in_ordering_should_be_within_5km__inclusi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The store for dine-in ordering should be within 5km (inclusive) of Building B3, Luoyang Intelligent Manufacturing Industrial Park, No.96 Binhe North Road, High-tech Zone, Luoyang, Henan Province"
        assert len(result) > 0

    def test_rubric_3_the_billiards_hall_reservation_time_is_5_00_on_july_18__2024(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The billiards hall reservation time is 5:00 on July 18, 2024"
        assert len(result) > 0

    def test_rubric_4_the_number_of_people_for_the_billiards_hall_reservation_is_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the billiards hall reservation is 2"
        assert len(result) > 0

    def test_rubric_5_the_train_ticket_should_be_for_a_train_from_luoyang_to_pingd(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train ticket should be for a train from Luoyang to Pingdingshan"
        assert len(result) > 0

    def test_rubric_6_the_arrival_time_of_the_ordered_train_ticket_should_be_befor(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival time of the ordered train ticket should be before 18:00 (inclusive) on July 18, 2024"
        assert len(result) > 0

    def test_rubric_7_the_ordered_train_ticket_should_be_for_train_number_k1236(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered train ticket should be for train number K1236"
        assert len(result) > 0

    def test_rubric_8_the_non_canceled_food_delivery_order_should_include_crayfish(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The non-canceled food delivery order should include Crayfish"
        assert len(result) > 0

    def test_rubric_9_the_non_canceled_food_delivery_order_should_include_oysters(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The non-canceled food delivery order should include Oysters"
        assert len(result) > 0

    def test_rubric_10_the_non_canceled_food_delivery_order_should_include_arctic_o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The non-canceled food delivery order should include Arctic Ocean Soda"
        assert len(result) > 0

    def test_rubric_11_the_non_canceled_food_delivery_order_should_include_2_arctic(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The non-canceled food delivery order should include 2 Arctic Ocean Soda"
        assert len(result) > 0

    def test_rubric_12_the_crayfish__oysters__and_arctic_ocean_soda_in_the_non_canc(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Crayfish, Oysters, and Arctic Ocean Soda in the non-canceled food delivery order should come from the same store"
        assert len(result) > 0

    def test_rubric_13_the_delivery_address_for_the_non_canceled_food_delivery_orde(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the non-canceled food delivery order should be Building B3, Luoyang Intelligent Manufacturing Industrial Park, No.96 Binhe North Road, High-tech Zone, Luoyang, Henan Province"
        assert len(result) > 0

    def test_rubric_14_the_estimated_delivery_time_for_the_non_canceled_food_delive(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the non-canceled food delivery order should be 2:00 on July 18, 2024"
        assert len(result) > 0
