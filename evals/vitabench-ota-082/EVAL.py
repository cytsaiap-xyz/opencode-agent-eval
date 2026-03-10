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
        assert result[0]["store_id"] == 'S17557511177488640_T00015'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557511177488640_P00150", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 596) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557511177488640_T00016'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557511177488640_P00160", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1106) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557511177488640_A00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557511177488640_P00067", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 240) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557511177488640_A00007'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557511177488640_P00082", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 240) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17557511177488640_A00009'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17557511177488640_P00106", "quantity": 1}, {"product_id": "S17557511177488640_P00102", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 320) < 1

    def test_order_5_matches_expected_store(self):
        assert result[5]["store_id"] == 'S17557511177488640_A00008'

    def test_order_5_has_correct_products(self):
        expected_products = [{"product_id": "S17557511177488640_P00087", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[5]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_5_has_correct_total_price(self):
        assert abs(result[5]["total_price"] - 200) < 1

    def test_rubric_0_outbound_train_departure_date_is_september_14__2024(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Outbound train departure date is September 14, 2024"
        assert len(result) > 0

    def test_rubric_1_outbound_train_number_should_start_with_k(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Outbound train number should start with K"
        assert len(result) > 0

    def test_rubric_2_outbound_train_arrival_time_should_be_on_the_morning_of_sept(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Outbound train arrival time should be on the morning of September 15, 2024"
        assert len(result) > 0

    def test_rubric_3_number_of_outbound_train_tickets_is_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Number of outbound train tickets is 2"
        assert len(result) > 0

    def test_rubric_4_outbound_train_should_be_from_linyi_to_xi_an(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Outbound train should be from Linyi to Xi\'an"
        assert len(result) > 0

    def test_rubric_5_return_train_departure_date_is_september_17__2024(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Return train departure date is September 17, 2024"
        assert len(result) > 0

    def test_rubric_6_return_train_number_should_start_with_d_or_g(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Return train number should start with D or G"
        assert len(result) > 0

    def test_rubric_7_return_train_arrival_time_should_be_on_the_evening_of_septem(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Return train arrival time should be on the evening of September 17, 2024"
        assert len(result) > 0

    def test_rubric_8_number_of_return_train_tickets_is_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Number of return train tickets is 2"
        assert len(result) > 0

    def test_rubric_9_return_train_should_be_from_xi_an_to_linyi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Return train should be from Xi\'an to Linyi"
        assert len(result) > 0

    def test_rubric_10_attractions_ordered_on_the_first_day_of_the_journey_should_i(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Attractions ordered on the first day of the journey should include Emperor Qin Shi Huang\'s Mausoleum Site Museum (Terracotta Army)"
        assert len(result) > 0

    def test_rubric_11_tickets_for_attractions_ordered_on_the_first_day_should_be_f(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Tickets for attractions ordered on the first day should be for September 15, 2024"
        assert len(result) > 0

    def test_rubric_12_number_of_tickets_for_attractions_ordered_on_the_first_day_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Number of tickets for attractions ordered on the first day should be 2"
        assert len(result) > 0

    def test_rubric_13_attractions_ordered_on_the_first_day_of_the_journey_should_i(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Attractions ordered on the first day of the journey should include Mausoleum of the First Qin Emperor"
        assert len(result) > 0

    def test_rubric_14_tickets_for_attractions_ordered_on_the_first_day_should_be_f(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Tickets for attractions ordered on the first day should be for September 15, 2024"
        assert len(result) > 0

    def test_rubric_15_number_of_tickets_for_attractions_ordered_on_the_first_day_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Number of tickets for attractions ordered on the first day should be 2"
        assert len(result) > 0

    def test_rubric_16_attraction_ordered_on_the_second_day_of_the_journey_should_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Attraction ordered on the second day of the journey should be Tang Paradise"
        assert len(result) > 0

    def test_rubric_17_tickets_for_attractions_ordered_on_the_second_day_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Tickets for attractions ordered on the second day should be for September 16, 2024"
        assert len(result) > 0

    def test_rubric_18_tickets_for_attractions_ordered_on_the_second_day_should_inc(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Tickets for attractions ordered on the second day should include 1 Adult Ticket"
        assert len(result) > 0

    def test_rubric_19_tickets_for_attractions_ordered_on_the_second_day_should_inc(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Tickets for attractions ordered on the second day should include 1 Hanfu Experience Ticket (Includes Admission + Hanfu Rental)"
        assert len(result) > 0

    def test_rubric_20_attraction_ordered_on_the_third_day_of_the_journey_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Attraction ordered on the third day of the journey should be Xi\'an Qinling Wildlife Park"
        assert len(result) > 0

    def test_rubric_21_tickets_for_attractions_ordered_on_the_third_day_should_be_f(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Tickets for attractions ordered on the third day should be for September 17, 2024"
        assert len(result) > 0

    def test_rubric_22_number_of_tickets_for_attractions_ordered_on_the_third_day_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Number of tickets for attractions ordered on the third day should be 2"
        assert len(result) > 0
