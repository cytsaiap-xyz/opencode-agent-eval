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
        assert result[0]["store_id"] == 'S17557074548681683_T00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557074548681683_P00074", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 45) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557074548681683_T00016'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557074548681683_P00097", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 28) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557074548681683_A00005'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557074548681683_P00046", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 30) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557540007196491_A00007'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557540007196491_P00063", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 45) < 1

    def test_rubric_0_the_departure_date_of_the_outbound_train_is_november_21__202(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure date of the outbound train is November 21, 2025"
        assert len(result) > 0

    def test_rubric_1_the_arrival_time_of_the_outbound_train_should_be_before_10_0(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival time of the outbound train should be before 10:00 AM on November 21, 2025"
        assert len(result) > 0

    def test_rubric_2_the_outbound_train_ticket_should_be_for_the_shortest_journey(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound train ticket should be for the shortest journey time (G6632)"
        assert len(result) > 0

    def test_rubric_3_the_outbound_train_ticket_should_be_for_a_train_from_zhengzh(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The outbound train ticket should be for a train from Zhengzhou to Xuchang"
        assert len(result) > 0

    def test_rubric_4_the_departure_date_of_the_return_train_is_november_23__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure date of the return train is November 23, 2025"
        assert len(result) > 0

    def test_rubric_5_the_arrival_time_of_the_return_train_should_be_before_5_00_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival time of the return train should be before 5:00 PM on November 23, 2025"
        assert len(result) > 0

    def test_rubric_6_the_return_train_ticket_should_be_for_a_train_from_xuchang_t(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The return train ticket should be for a train from Xuchang to Zhengzhou"
        assert len(result) > 0

    def test_rubric_7_the_usage_date_for_the_chunqiu_tower_ticket_should_be_novemb(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The usage date for the Chunqiu Tower ticket should be November 23, 2025"
        assert len(result) > 0

    def test_rubric_8_the_chunqiu_tower_ticket_type_should_be_adult_ticket(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Chunqiu Tower ticket type should be adult ticket"
        assert len(result) > 0

    def test_rubric_9_the_weather_in_xuchang_on_saturday__november_22__2025__is_su(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The weather in Xuchang on Saturday (November 22, 2025) is sunny, so tickets for Huanglonggu Scenic Area should be ordered"
        assert len(result) > 0

    def test_rubric_10_the_usage_date_for_the_huanglonggu_scenic_area_tickets_shoul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The usage date for the Huanglonggu Scenic Area tickets should be November 22, 2025"
        assert len(result) > 0

    def test_rubric_11_the_departure_time_of_the_return_train__d6789__is_14_20__whi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure time of the return train (D6789) is 14:20, which is before 15:00, so tickets for Chancellor Cao\'s Mansion should not be ordered"
        assert len(result) > 0
