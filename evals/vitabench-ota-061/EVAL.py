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
        assert result[0]["store_id"] == 'S17557512385846899_F00013'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557512385846899_P00101", "quantity": 5}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 6900) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557512385846899_F00014'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557512385846899_P00108", "quantity": 5}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 8250) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557512385846899_H00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557512385846899_P00033", "quantity": 1}, {"product_id": "S17557512385846899_P00034", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 1840) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557512385846899_H00002'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557512385846899_P00011", "quantity": 1}, {"product_id": "S17557512385846899_P00012", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 1700) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17557512385846899_H00003'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17557512385846899_P00016", "quantity": 1}, {"product_id": "S17557512385846899_P00017", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 1300) < 1

    def test_order_5_matches_expected_store(self):
        assert result[5]["store_id"] == 'S17557512385846899_H00008'

    def test_order_5_has_correct_products(self):
        expected_products = [{"product_id": "S17557512385846899_P00043", "quantity": 2}, {"product_id": "S17557512385846899_P00047", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[5]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_5_has_correct_total_price(self):
        assert abs(result[5]["total_price"] - 1940) < 1

    def test_order_6_matches_expected_store(self):
        assert result[6]["store_id"] == 'S17557512385846899_H00005'

    def test_order_6_has_correct_products(self):
        expected_products = [{"product_id": "S17557512385846899_P00026", "quantity": 1}, {"product_id": "S17557512385846899_P00028", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[6]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_6_has_correct_total_price(self):
        assert abs(result[6]["total_price"] - 1220) < 1

    def test_order_7_matches_expected_store(self):
        assert result[7]["store_id"] == 'S17557512385846899_H00001'

    def test_order_7_has_correct_products(self):
        expected_products = [{"product_id": "S17557512385846899_P00003", "quantity": 1}, {"product_id": "S17557512385846899_P00004", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[7]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_7_has_correct_total_price(self):
        assert abs(result[7]["total_price"] - 1700) < 1

    def test_rubric_0_the_order_status_for_order_number_s17557512385846899_o00001(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order status for order number S17557512385846899_O00001 should be cancelled"
        assert len(result) > 0

    def test_rubric_1_the_departure_city_of_the_ordered_flight_should_be_beijing(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure city of the ordered flight should be Beijing"
        assert len(result) > 0

    def test_rubric_2_the_destination_city_of_the_ordered_flight_should_be_lhasa(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The destination city of the ordered flight should be Lhasa"
        assert len(result) > 0

    def test_rubric_3_the_departure_date_of_the_ordered_flight_should_be_june_11(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date of the ordered flight should be June 11, 2024"
        assert len(result) > 0

    def test_rubric_4_the_quantity_in_the_flight_order_should_be_5(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity in the flight order should be 5"
        assert len(result) > 0

    def test_rubric_5_the_hotel_for_the_first_night_should_be_intercontinental_lha(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel for the first night should be InterContinental Lhasa Paradise"
        assert len(result) > 0

    def test_rubric_6_the_date_in_the_order_for_intercontinental_lhasa_paradise_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date in the order for InterContinental Lhasa Paradise should be 2024-06-11"
        assert len(result) > 0

    def test_rubric_7_the_order_for_intercontinental_lhasa_paradise_should_include(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order for InterContinental Lhasa Paradise should include two Twin Rooms and one King Room"
        assert len(result) > 0

    def test_rubric_8_the_hotel_for_the_second_night_should_be_atour_hotel_shigats(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel for the second night should be Atour Hotel Shigatse"
        assert len(result) > 0

    def test_rubric_9_the_date_in_the_order_for_atour_hotel_shigatse_should_be_202(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date in the order for Atour Hotel Shigatse should be 2024-06-12"
        assert len(result) > 0

    def test_rubric_10_the_order_for_atour_hotel_shigatse_should_include_one_triple(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order for Atour Hotel Shigatse should include one Triple Room and one Twin Room"
        assert len(result) > 0

    def test_rubric_11_the_hotel_for_the_third_night_should_be_vienna_hotel_gangga(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel for the third night should be Vienna Hotel Gangga"
        assert len(result) > 0

    def test_rubric_12_the_date_in_the_order_for_vienna_hotel_gangga_should_be_2024(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date in the order for Vienna Hotel Gangga should be 2024-06-13"
        assert len(result) > 0

    def test_rubric_13_the_order_for_vienna_hotel_gangga_should_include_one_triple(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order for Vienna Hotel Gangga should include one Triple Room and one Twin Room"
        assert len(result) > 0

    def test_rubric_14_the_hotel_for_the_fourth_night_should_be_highland_pearl_hote(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel for the fourth night should be Highland Pearl Hotel Coqen"
        assert len(result) > 0

    def test_rubric_15_the_date_in_the_order_for_highland_pearl_hotel_coqen_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date in the order for Highland Pearl Hotel Coqen should be 2024-06-14"
        assert len(result) > 0

    def test_rubric_16_the_order_for_highland_pearl_hotel_coqen_should_include_two(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order for Highland Pearl Hotel Coqen should include two Twin Rooms and one King Room"
        assert len(result) > 0

    def test_rubric_17_the_hotel_for_the_fifth_night_should_be_home_inn_nyima(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel for the fifth night should be Home Inn Nyima"
        assert len(result) > 0

    def test_rubric_18_the_date_in_the_order_for_home_inn_nyima_should_be_2024_06_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date in the order for Home Inn Nyima should be 2024-06-15"
        assert len(result) > 0

    def test_rubric_19_the_order_for_home_inn_nyima_should_include_one_triple_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order for Home Inn Nyima should include one Triple Room and one Twin Room"
        assert len(result) > 0

    def test_rubric_20_the_hotel_for_the_sixth_night_should_be_ji_hotel_lhasa(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel for the sixth night should be JI Hotel Lhasa"
        assert len(result) > 0

    def test_rubric_21_the_date_in_the_order_for_ji_hotel_lhasa_should_be_2024_06_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date in the order for JI Hotel Lhasa should be 2024-06-16"
        assert len(result) > 0

    def test_rubric_22_the_order_for_ji_hotel_lhasa_should_include_one_triple_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order for JI Hotel Lhasa should include one Triple Room and one Twin Room"
        assert len(result) > 0
