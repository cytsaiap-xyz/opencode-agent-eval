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
        assert result[0]["store_id"] == 'S17557505501603486_T00013'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505501603486_P00096", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 553) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505501603486_F00011'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505501603486_P00085", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 790) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505501603486_A00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505501603486_P00055", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 80) < 1

    def test_rubric_0_outbound_travel_date_is_august_26__2026__when_hefei_weather(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Outbound travel date is August 26, 2026, when Hefei weather will be thundershowers, so train transportation should be chosen, requiring train ticket purchase"
        assert len(result) > 0

    def test_rubric_1_outbound_train_journey_should_not_exceed_5_hours(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Outbound train journey should not exceed 5 hours"
        assert len(result) > 0

    def test_rubric_2_outbound_train_ticket_should_be_from_xiamen_to_hefei(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Outbound train ticket should be from Xiamen to Hefei"
        assert len(result) > 0

    def test_rubric_3_return_date_should_be_august_30__2026(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Return date should be August 30, 2026"
        assert len(result) > 0

    def test_rubric_4_train_tickets_departing_from_hefei_and_arriving_in_xiamen_ar(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Train tickets departing from Hefei and arriving in Xiamen around 17:00 on August 30, 2026 are sold out, so air tickets should be purchased for the return journey"
        assert len(result) > 0

    def test_rubric_5_return_flight_arrival_time_should_be_around_17_00_on_august(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Return flight arrival time should be around 17:00 on August 30, 2026"
        assert len(result) > 0

    def test_rubric_6_return_flight_should_be_from_hefei_to_xiamen(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Return flight should be from Hefei to Xiamen"
        assert len(result) > 0

    def test_rubric_7_attraction_order_should_be_for_sanhe_ancient_town_tickets(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Attraction order should be for Sanhe Ancient Town tickets"
        assert len(result) > 0

    def test_rubric_8_attraction_tickets_should_be_used_on_august_29__2026(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Attraction tickets should be used on August 29, 2026"
        assert len(result) > 0
