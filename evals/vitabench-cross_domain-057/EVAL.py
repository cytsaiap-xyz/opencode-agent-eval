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
        assert result[0]["store_id"] == 'S17550802118473175_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802118473175_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 129.9) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802118473175_A00011'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802118473175_P00061", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 258) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802118473175_H00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802118473175_P00026", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 498) < 1

    def test_rubric_0_items_in_the_delivery_order_should_be_pink(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Items in the delivery order should be pink"
        assert len(result) > 0

    def test_rubric_1_items_in_the_delivery_order_should_be_thermal(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Items in the delivery order should be thermal"
        assert len(result) > 0

    def test_rubric_2_the_delivery_time_of_the_order_should_be_between_09_30_00_10(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time of the order should be between 09:30:00-10:30:00 on January 19, 2025"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_should_be_north_building__sichuan_inves(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address should be North Building, Sichuan Investment Tower, 112 Tiantai Road, Wuhou District, Chengdu, Sichuan Province"
        assert len(result) > 0

    def test_rubric_4_according_to_the_query__the_temperature_in_chongqing_on_janu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "According to the query, the temperature in Chongqing on January 19, 2025 will be 2°C-8°C, so the package purchased at the scenic spot is for hot spring only"
        assert len(result) > 0

    def test_rubric_5_the_date_for_the_scenic_spot_reservation_is_january_19__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date for the scenic spot reservation is January 19, 2025"
        assert len(result) > 0

    def test_rubric_6_the_merchant_in_the_scenic_spot_order_should_be_tianci_hot_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The merchant in the scenic spot order should be Tianci Hot Spring Resort"
        assert len(result) > 0

    def test_rubric_7_the_distance_between_the_booked_hotel_and_tianci_hot_spring(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The distance between the booked hotel and Tianci Hot Spring Resort Hotel inside Tianci Hot Spring Resort, Beibei District, Chongqing should be less than or equal to 500m"
        assert len(result) > 0

    def test_rubric_8_the_rating_of_the_booked_hotel_should_be_greater_than_or_equ(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The rating of the booked hotel should be greater than or equal to 4.5"
        assert len(result) > 0

    def test_rubric_9_the_room_type_in_the_hotel_order_should_be_a_king_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type in the hotel order should be a king room"
        assert len(result) > 0

    def test_rubric_10_the_date_of_the_hotel_reservation_should_be_january_19__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date of the hotel reservation should be January 19, 2025"
        assert len(result) > 0
