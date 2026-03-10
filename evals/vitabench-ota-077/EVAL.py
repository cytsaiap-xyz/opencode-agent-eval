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
        assert result[0]["store_id"] == 'S17557515627777726_A00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557515627777726_P00024", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 268) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557515627777726_H00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557515627777726_P00008", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 380) < 1

    def test_rubric_0_must_provide_information_about_hongcun_s_main_attractions__h(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Must provide information about Hongcun\'s main attractions (Hongcun Scenic Area, Moon Pond, South Lake)"
        assert len(result) > 0

    def test_rubric_1_need_to_check_huangshan_s_weather_for_saturday__july_22__202(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check Huangshan\'s weather for Saturday (July 22, 2023), which is sunny, 20-26℃. Since it won\'t rain on Saturday, the ticket order needs to include rafting"
        assert len(result) > 0

    def test_rubric_2_need_to_compare_the_prices_of_separately_purchasing_hongcun(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to compare the prices of separately purchasing Hongcun attraction tickets and rafting adult tickets, versus purchasing Adult Ticket + Rafting Package; the result shows the package is cheaper, so the ticket order type must be Adult Ticket + Rafting Package"
        assert len(result) > 0

    def test_rubric_3_the_ticket_order_s_date_of_use_must_be_july_22__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket order\'s date of use must be July 22, 2023"
        assert len(result) > 0

    def test_rubric_4_must_check_the_nearest_railway_station_to_hongcun__with_resu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Must check the nearest railway station to Hongcun, with results showing Huangshan North Railway Station, approximately 24.5km away"
        assert len(result) > 0

    def test_rubric_5_accommodation_must_be_a_traditional_inn_within_hongcun_ancie(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Accommodation must be a Traditional Inn within Hongcun ancient village"
        assert len(result) > 0

    def test_rubric_6_the_inn_s_checkout_time_must_be_after_14_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The inn\'s checkout time must be after 14:00"
        assert len(result) > 0

    def test_rubric_7_the_inn_s_check_in_date_must_be_july_22__2023(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The inn\'s check-in date must be July 22, 2023"
        assert len(result) > 0
