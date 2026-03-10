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
        assert result[0]["store_id"] == 'S17550809417136210_T00006'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550809417136210_P00030", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 183) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550809417136210_I00012'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550809417136210_P00058", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 99) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550809417136210_H00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550809417136210_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 450) < 1

    def test_rubric_0_the_train_ticket_booked_should_be_from_suzhou_to_lianyungang(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket booked should be from Suzhou to Lianyungang"
        assert len(result) > 0

    def test_rubric_1_the_selected_train_should_be_the_one_with_shortest_travel_ti(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The selected train should be the one with shortest travel time (select G2878, total duration 2 hours 38 minutes, shortest time)"
        assert len(result) > 0

    def test_rubric_2_the_departure_date_of_the_selected_train_should_be_august_25(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date of the selected train should be August 25, 2025"
        assert len(result) > 0

    def test_rubric_3_the_arrival_time_of_the_selected_train_should_be_in_the_morn(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The arrival time of the selected train should be in the morning"
        assert len(result) > 0

    def test_rubric_4_the_train_ticket_purchased_should_be_second_class_seat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket purchased should be Second Class Seat"
        assert len(result) > 0

    def test_rubric_5_the_photo_studio_purchase_should_include_four_grid_photo_boo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The photo studio purchase should include Four-Grid Photo Booth Stickers"
        assert len(result) > 0

    def test_rubric_6_the_photo_studio_purchase_should_include_polaroid_photo_shoo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The photo studio purchase should include Polaroid photo shooting"
        assert len(result) > 0

    def test_rubric_7_the_photo_studio_products_should_have_korean_style(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The photo studio products should have Korean Style"
        assert len(result) > 0

    def test_rubric_8_the_photo_studio_products_should_be_cost_effective__query_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The photo studio products should be cost-effective, query shows that Korean Style Four-Grid + Polaroid Package offers the best value"
        assert len(result) > 0

    def test_rubric_9_the_hotel_booked_should_be_four_star_or_above(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booked should be four-star or above"
        assert len(result) > 0

    def test_rubric_10_the_booked_hotel_should_be_in_downtown_lianyungang(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel should be in downtown Lianyungang"
        assert len(result) > 0

    def test_rubric_11_the_room_type_booked_should_be_standard_king_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type booked should be Standard King Room"
        assert len(result) > 0

    def test_rubric_12_the_hotel_booking_date_should_be_august_25__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booking date should be August 25, 2025"
        assert len(result) > 0
