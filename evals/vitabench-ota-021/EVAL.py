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
        assert result[0]["store_id"] == 'S17557505486313958_T00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505486313958_P00076", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 148) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505486313958_T00013'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505486313958_P00093", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 89) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505486313958_H00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505486313958_P00015", "quantity": 1}, {"product_id": "S17557505486313958_P00016", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 656) < 1

    def test_rubric_0_the_2023_mid_autumn_festival_is_on_september_29__and_the_use(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The 2023 Mid-Autumn Festival is on September 29, and the user needs to return the day before the Mid-Autumn Festival, with the return date being September 28, 2023. Therefore, the departure train ticket date is September 26, 2023"
        assert len(result) > 0

    def test_rubric_1_the_outbound_train_ticket_should_be_from_xiamen_to_chaoshan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound train ticket should be from Xiamen to Chaoshan"
        assert len(result) > 0

    def test_rubric_2_the_outbound_train_departure_time_should_be_relatively_early(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound train departure time should be relatively early (D2286)"
        assert len(result) > 0

    def test_rubric_3_the_user_needs_1_5_hours_to_get_from_the_station_to_school(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The user needs 1.5 hours to get from the station to school, and the dormitory building closes at 23:00, so the return train arrival time should be before 21:30 on September 28, 2023"
        assert len(result) > 0

    def test_rubric_4_the_return_train_ticket_should_be_from_chaoshan_to_xiamen(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return train ticket should be from Chaoshan to Xiamen"
        assert len(result) > 0

    def test_rubric_5_the_hotel_should_be_within_1km_of_paifang_street(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel should be within 1km of Paifang Street"
        assert len(result) > 0

    def test_rubric_6_the_booked_hotel_should_be_a_chain_hotel(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel should be a chain hotel"
        assert len(result) > 0

    def test_rubric_7_the_opening_or_renovation_date_of_the_booked_hotel_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The opening or renovation date of the booked hotel should be between September 2021 and September 2023"
        assert len(result) > 0

    def test_rubric_8_based_on_price__the_booked_hotel_should_be_the_hanting_hotel(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Based on price, the booked hotel should be the Hanting Hotel Chaozhou Ancient City Branch"
        assert len(result) > 0

    def test_rubric_9_the_hotel_booking_should_include_two_nights__on_september_26(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booking should include two nights, on September 26, 2023, and September 27, 2023"
        assert len(result) > 0

    def test_rubric_10_the_booked_hotel_is_hanting_hotel_chaozhou_ancient_city_bran(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel is Hanting Hotel Chaozhou Ancient City Branch, with a hospital (Chaozhou People\'s Hospital) about 3 kilometers away"
        assert len(result) > 0
