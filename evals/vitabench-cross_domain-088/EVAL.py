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
            if i in {4}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550810586464916_I00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550810586464916_P00054", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 368) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550810586464916_F00006'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550810586464916_P00030", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1440) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550810586464916_F00007'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550810586464916_P00037", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 1560) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550810586464916_S00001'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17550810586464916_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 1299) < 1

    def test_order_4_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[4]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_4_matches_expected_shop(self):
        order = result[4]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550810586464916_I00013'

    def test_order_4_has_correct_customer_count(self):
        assert result[4].get("customer_count") == 6

    def test_rubric_0_the_massage_shop_should_be_within_5_5km_of_chengdu_shuangliu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The massage shop should be within 5.5km of Chengdu Shuangliu International Airport, Shuangliu District, Chengdu, Sichuan Province"
        assert len(result) > 0

    def test_rubric_1_the_order_at_the_massage_shop_should_include_food_items(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order at the massage shop should include food items"
        assert len(result) > 0

    def test_rubric_2_the_order_at_the_massage_shop_should_include_massage_service(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order at the massage shop should include massage service"
        assert len(result) > 0

    def test_rubric_3_the_order_at_the_massage_shop_should_be_suitable_for_2_peopl(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order at the massage shop should be suitable for 2 people"
        assert len(result) > 0

    def test_rubric_4_cancel_the_flight_ticket_order__flight_number_ca1832__on_sep(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Cancel the flight ticket order (flight number CA1832) on September 7, 2024 from historical orders"
        assert len(result) > 0

    def test_rubric_5_the_date_for_flight_ticket_booking_should_be_september_7__20(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date for flight ticket booking should be September 7, 2024"
        assert len(result) > 0

    def test_rubric_6_the_booked_flight_should_be_a_red_eye_flight__flight_mu2354(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked flight should be a Red-Eye Flight (flight MU2354)"
        assert len(result) > 0

    def test_rubric_7_the_number_of_flight_tickets_to_book_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of flight tickets to book should be 2"
        assert len(result) > 0

    def test_rubric_8_the_reserved_restaurant_should_be_within_5_5km_of_cr_land_pa(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should be within 5.5km of CR Land Park Mansion, 228 Huaining Road, Shushan District, Hefei, Anhui Province"
        assert len(result) > 0

    def test_rubric_9_the_reserved_restaurant_should_serve_hui_cuisine_or_cantones(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should serve Hui Cuisine or Cantonese cuisine"
        assert len(result) > 0

    def test_rubric_10_the_restaurant_reservation_time_should_be_19_00_on_september(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation time should be 19:00 on September 17, 2024"
        assert len(result) > 0

    def test_rubric_11_the_restaurant_reservation_should_be_for_6_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation should be for 6 people"
        assert len(result) > 0
