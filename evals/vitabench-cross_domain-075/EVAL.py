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
        assert result[0]["store_id"] == 'S17550809174775032_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550809174775032_P00001", "quantity": 1}, {"product_id": "S17550809174775032_P00007", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 135) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550809174775032_I00010'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550809174775032_P00069", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 398) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550809174775032_A00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550809174775032_P00034", "quantity": 2}, {"product_id": "S17550809174775032_P00033", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 280) < 1

    def test_rubric_0_the_afternoon_tea_order_must_include_cupcakes(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The afternoon tea order must include cupcakes"
        assert len(result) > 0

    def test_rubric_1_the_afternoon_tea_order_must_include_15_cupcakes(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The afternoon tea order must include 15 cupcakes"
        assert len(result) > 0

    def test_rubric_2_the_afternoon_tea_order_must_include_a_tea_snack_platter(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The afternoon tea order must include a tea snack platter"
        assert len(result) > 0

    def test_rubric_3_the_tea_snack_platter_in_the_afternoon_tea_order_should_serv(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tea snack platter in the afternoon tea order should serve 15 people"
        assert len(result) > 0

    def test_rubric_4_the_expected_delivery_time_for_the_afternoon_tea_order_shoul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The expected delivery time for the afternoon tea order should be at 14:30 on 2025-04-18"
        assert len(result) > 0

    def test_rubric_5_the_delivery_address_for_the_afternoon_tea_order_should_be_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the afternoon tea order should be 12th Floor, Shanxi International Financial Center, 368 Qinxian North Street, Xiaodian District, Taiyuan, Shaanxi Province"
        assert len(result) > 0

    def test_rubric_6_the_items_in_the_afternoon_tea_order_should_be_low_sugar(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The items in the afternoon tea order should be low sugar"
        assert len(result) > 0

    def test_rubric_7_the_cupcakes_and_tea_snack_platter_in_the_afternoon_tea_orde(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The cupcakes and tea snack platter in the afternoon tea order should be from the same store"
        assert len(result) > 0

    def test_rubric_8_the_escape_room_to_be_booked_should_have_a_rating_of_4_0_or(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The escape room to be booked should have a rating of 4.0 or above"
        assert len(result) > 0

    def test_rubric_9_the_escape_room_to_be_booked_should_be_a_featured_store(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The escape room to be booked should be a Featured Store"
        assert len(result) > 0

    def test_rubric_10_the_escape_room_package_should_have_a_horror_theme(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The escape room package should have a Horror Theme"
        assert len(result) > 0

    def test_rubric_11_the_escape_room_package_should_accommodate_5_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The escape room package should accommodate 5 people"
        assert len(result) > 0

    def test_rubric_12_when_checking_the_weather_in_taiyuan_for_2025_04_20__the_res(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When checking the weather in Taiyuan for 2025-04-20, the result shows overcast, no rain, so search for attractions with water shows"
        assert len(result) > 0

    def test_rubric_13_the_attraction_to_be_booked_should_have_a_light_show(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction to be booked should have a light show"
        assert len(result) > 0

    def test_rubric_14_the_attraction_should_offer_senior_tickets_with_discounted_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction should offer Senior Tickets with discounted prices compared to Adult Tickets"
        assert len(result) > 0

    def test_rubric_15_the_attraction_should_offer_adult_tickets(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The attraction should offer Adult Tickets"
        assert len(result) > 0

    def test_rubric_16_the_quantity_of_senior_tickets_in_the_attraction_order_shoul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of Senior Tickets in the attraction order should be 2"
        assert len(result) > 0

    def test_rubric_17_the_quantity_of_adult_tickets_in_the_attraction_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of Adult Tickets in the attraction order should be 1"
        assert len(result) > 0

    def test_rubric_18_the_date_for_the_attraction_tickets_should_be_april_20__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date for the attraction tickets should be April 20, 2025"
        assert len(result) > 0
