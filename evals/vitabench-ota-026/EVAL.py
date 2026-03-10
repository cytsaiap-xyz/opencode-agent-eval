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
        assert result[0]["store_id"] == 'S17557505543387920_F00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505543387920_P00089", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1520) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505543387920_F00014'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505543387920_P00121", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 890) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505543387920_F00011'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505543387920_P00102", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 1590) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557505543387920_H00002'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557505543387920_P00017", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 680) < 1

    def test_rubric_0_the_forum_will_be_held_on_may_5__2025__if_traveling_to_hulun(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The forum will be held on May 5, 2025. If traveling to Hulunbuir before the forum, one should travel from Taizhou to Hulunbuir (Hailar) on May 3, 2025, from Hulunbuir (Hailar) to Hohhot on May 4, 2025, and from Hohhot back to Taizhou on May 6, 2025. If traveling to Hulunbuir after the forum, one should travel from Taizhou to Hohhot on May 4, 2025, from Hohhot to Hulunbuir (Hailar) on May 6, 2025, and from Hulunbuir (Hailar) back to Taizhou on May 7, 2025. After calculation, if traveling to Hulunbuir before the forum, the total airfare would be 4000 yuan; if traveling to Hulunbuir after the forum, the total airfare would be 4250 yuan. Therefore, one should travel to Hulunbuir before the forum."
        assert len(result) > 0

    def test_rubric_1_the_first_flight_should_be_from_taizhou_to_hulunbuir__hailar(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The first flight should be from Taizhou to Hulunbuir (Hailar)"
        assert len(result) > 0

    def test_rubric_2_the_departure_date_of_the_first_flight_should_be_may_3__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date of the first flight should be May 3, 2025"
        assert len(result) > 0

    def test_rubric_3_the_seat_type_for_the_first_flight_should_be_economy_class(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The seat type for the first flight should be Economy Class"
        assert len(result) > 0

    def test_rubric_4_the_second_flight_should_be_from_hulunbuir__hailar__to_hohho(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The second flight should be from Hulunbuir (Hailar) to Hohhot"
        assert len(result) > 0

    def test_rubric_5_the_departure_date_of_the_second_flight_should_be_may_4__202(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date of the second flight should be May 4, 2025"
        assert len(result) > 0

    def test_rubric_6_the_seat_type_for_the_second_flight_should_be_economy_class(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The seat type for the second flight should be Economy Class"
        assert len(result) > 0

    def test_rubric_7_the_third_flight_should_be_from_hohhot_to_taizhou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The third flight should be from Hohhot to Taizhou"
        assert len(result) > 0

    def test_rubric_8_the_departure_date_of_the_third_flight_should_be_may_6__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date of the third flight should be May 6, 2025"
        assert len(result) > 0

    def test_rubric_9_the_seat_type_for_the_third_flight_should_be_economy_class(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The seat type for the third flight should be Economy Class"
        assert len(result) > 0

    def test_rubric_10_the_accommodation_order_should_book_a_yurt(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The accommodation order should book a Yurt"
        assert len(result) > 0

    def test_rubric_11_the_accommodation_order_should_include_a_room_for_may_3__202(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The accommodation order should include a room for May 3, 2025"
        assert len(result) > 0
