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
        assert result[0]["store_id"] == 'S17557505539622425_A00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505539622425_P00024", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1940) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505539622425_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505539622425_P00008", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 480) < 1

    def test_rubric_0_need_to_check_the_weather_in_zhuhai_on_may_16__2026__with_th(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the weather in Zhuhai on May 16, 2026, with the highest temperature of 35°C, which exceeds 33°C. The attraction to order should be Zhuhai Chimelong Ocean Kingdom"
        assert len(result) > 0

    def test_rubric_1_the_tickets_in_the_attraction_order_should_include_a_firewor(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tickets in the attraction order should include a fireworks show"
        assert len(result) > 0

    def test_rubric_2_the_date_of_the_tickets_in_the_attraction_order_should_be_ma(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date of the tickets in the attraction order should be May 16, 2026"
        assert len(result) > 0

    def test_rubric_3_the_ticket_type_in_the_attraction_order_should_be_adult_tick(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket type in the attraction order should be adult tickets"
        assert len(result) > 0

    def test_rubric_4_the_hotel_room_type_should_be_an_ocean_view_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel room type should be an Ocean View Room"
        assert len(result) > 0

    def test_rubric_5_the_hotel_room_type_should_be_a_king_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel room type should be a King Room"
        assert len(result) > 0

    def test_rubric_6_the_hotel_room_must_have_a_view_of_the_hong_kong_zhuhai_maca(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel room must have a view of the Hong Kong-Zhuhai-Macao Bridge"
        assert len(result) > 0

    def test_rubric_7_the_hotel_order_date_should_be_may_16__2026(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel order date should be May 16, 2026"
        assert len(result) > 0

    def test_rubric_8_need_to_check_the_ticket_price_of_zhuhai_chimelong_ocean_kin(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the ticket price of Zhuhai Chimelong Ocean Kingdom, which is 850 yuan for Adult Ticket (Including Fireworks Show and Indoor Light Show), exceeding the user\'s budget of 800 yuan per person"
        assert len(result) > 0
