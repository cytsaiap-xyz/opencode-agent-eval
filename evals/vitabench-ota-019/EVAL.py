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
        assert result[0]["store_id"] == 'S17557071544947545_T00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557071544947545_P00079", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 570) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557071544947545_A00005'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557071544947545_P00039", "quantity": 2}, {"product_id": "S17557071544947545_P00041", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 186) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557071544947545_A00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557071544947545_P00052", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 120) < 1

    def test_rubric_0_the_departure_date_of_the_ordered_train_ticket_should_be_jun(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure date of the ordered train ticket should be June 24, 2023"
        assert len(result) > 0

    def test_rubric_1_the_departure_time_of_the_ordered_train_ticket_should_be_aro(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure time of the ordered train ticket should be around 10:00"
        assert len(result) > 0

    def test_rubric_2_the_ordered_train_ticket_must_be_second_class_seat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered train ticket must be Second Class Seat"
        assert len(result) > 0

    def test_rubric_3_the_quantity_in_the_train_ticket_order_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity in the train ticket order should be 2"
        assert len(result) > 0

    def test_rubric_4_must_search_for_the_name_and_information_of_the_famous_chine(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Must search for the name and information of the famous Chinese-style immersive experience park in Hebi, which is Hebi Guling Mountain Scenic Area, a Chinese-style immersive experience park with Han and Tang dynasty culture as its theme"
        assert len(result) > 0

    def test_rubric_5_the_ticket_date_in_the_order_for_the_chinese_style_immersive(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket date in the order for the Chinese-style immersive experience park should be June 24, 2023"
        assert len(result) > 0

    def test_rubric_6_for_the_chinese_style_immersive_experience_park__must_choose(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "For the Chinese-style immersive experience park, must choose the most economical/cheapest ticket type, and the order should include 2 Adult Ticket (58*2) and 2 Senior Ticket (35*2)"
        assert len(result) > 0

    def test_rubric_7_the_scenic_spot_in_the_order_with_ticket_date_of_june_25__20(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The scenic spot in the order with ticket date of June 25, 2023 should be Yunmeng Mountain"
        assert len(result) > 0

    def test_rubric_8_must_check_the_weather_in_hebi_on_2023_06_25__which_is_moder(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Must check the weather in Hebi on 2023-06-25, which is moderate rain. Girlfriend\'s parents will not participate in the hiking activity, so the quantity of tickets in the Yunmeng Mountain order should be 2"
        assert len(result) > 0

    def test_rubric_9_the_ticket_date_in_the_yunmeng_mountain_order_should_be_june(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ticket date in the Yunmeng Mountain order should be June 25, 2023"
        assert len(result) > 0
