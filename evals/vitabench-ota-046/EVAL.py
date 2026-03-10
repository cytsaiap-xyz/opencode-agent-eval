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
        assert result[0]["store_id"] == 'S17557505486805216_T00012'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505486805216_P00107", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 195) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505486805216_T00013'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505486805216_P00122", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 195) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505486805216_H00005'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505486805216_P00037", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 788) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557505486805216_H00002'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557505486805216_P00016", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 688) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17557505486805216_H00003'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17557505486805216_P00022", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 888) < 1

    def test_rubric_0_it_will_rain_on_mount_emei_on_april_18_and_19__2027__so_trav(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "It will rain on Mount Emei on April 18 and 19, 2027, so travel should be postponed to the following weekend, with the departure train ticket date being April 23, 2027"
        assert len(result) > 0

    def test_rubric_1_the_arrival_time_of_the_departure_train_ticket_should_be_on(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival time of the departure train ticket should be on the evening of April 23, 2027"
        assert len(result) > 0

    def test_rubric_2_the_quantity_of_departure_train_tickets_should_be_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of departure train tickets should be 3"
        assert len(result) > 0

    def test_rubric_3_the_departure_train_ticket_should_be_for_a_train_from_chengd(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure train ticket should be for a train from Chengdu to Mount Emei"
        assert len(result) > 0

    def test_rubric_4_the_return_train_ticket_date_should_be_april_26__2027(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return train ticket date should be April 26, 2027"
        assert len(result) > 0

    def test_rubric_5_the_departure_time_of_the_return_train_ticket_should_be_noon(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure time of the return train ticket should be noon on April 26, 2027"
        assert len(result) > 0

    def test_rubric_6_the_quantity_of_return_train_tickets_should_be_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of return train tickets should be 3"
        assert len(result) > 0

    def test_rubric_7_the_return_train_ticket_should_be_for_a_train_from_mount_eme(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return train ticket should be for a train from Mount Emei to Chengdu"
        assert len(result) > 0

    def test_rubric_8_the_check_in_date_for_the_first_night_s_hotel_should_be_apri(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The check-in date for the first night\'s hotel should be April 23, 2027"
        assert len(result) > 0

    def test_rubric_9_the_first_night_s_hotel_should_be_at_the_foot_of_mount_emei(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The first night\'s hotel should be at the foot of Mount Emei"
        assert len(result) > 0

    def test_rubric_10_the_room_type_for_the_first_night_s_hotel_should_be_family_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type for the first night\'s hotel should be Family Suite"
        assert len(result) > 0

    def test_rubric_11_the_check_in_date_for_the_second_night_s_hotel_should_be_apr(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The check-in date for the second night\'s hotel should be April 24, 2027"
        assert len(result) > 0

    def test_rubric_12_the_second_night_s_hotel_should_be_at_leidongping(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The second night\'s hotel should be at Leidongping"
        assert len(result) > 0

    def test_rubric_13_the_room_type_for_the_second_night_s_hotel_should_be_family(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type for the second night\'s hotel should be Family Suite"
        assert len(result) > 0

    def test_rubric_14_the_check_in_date_for_the_third_night_s_hotel_should_be_apri(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The check-in date for the third night\'s hotel should be April 25, 2027"
        assert len(result) > 0

    def test_rubric_15_the_third_night_s_hotel_should_be_at_golden_summit(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The third night\'s hotel should be at Golden Summit"
        assert len(result) > 0

    def test_rubric_16_the_room_type_for_the_third_night_s_hotel_should_be_family_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type for the third night\'s hotel should be Family Suite"
        assert len(result) > 0
