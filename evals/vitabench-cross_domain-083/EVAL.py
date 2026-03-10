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
        assert result[0]["store_id"] == 'S17550808037869920_I00015'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550808037869920_P00145", "quantity": 1}, {"product_id": "S17550808037869920_P00146", "quantity": 1}, {"product_id": "S17550808037869920_P00148", "quantity": 1}, {"product_id": "S17550808037869920_P00149", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1292) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550808037869920_S00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550808037869920_P00009", "quantity": 1}, {"product_id": "S17550808037869920_P00008", "quantity": 1}, {"product_id": "S17550808037869920_P00005", "quantity": 1}, {"product_id": "S17550808037869920_P00006", "quantity": 1}, {"product_id": "S17550808037869920_P00007", "quantity": 1}, {"product_id": "S17550808037869920_P00001", "quantity": 18}, {"product_id": "S17550808037869920_P00003", "quantity": 18}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1039) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550808037869920_T00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550808037869920_P00065", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 122.5) < 1

    def test_rubric_0_the_in_store_merchant_is_for_escape_rooms(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The in-store merchant is for escape rooms"
        assert len(result) > 0

    def test_rubric_1_the_in_store_merchant_orders_are_mystery_deduction_type(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The in-store merchant orders are mystery deduction type"
        assert len(result) > 0

    def test_rubric_2_the_in_store_merchant_orders_must_include_at_least_four_them(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The in-store merchant orders must include at least four themes of escape rooms"
        assert len(result) > 0

    def test_rubric_3_the_in_store_merchant_orders_must_accommodate_18_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The in-store merchant orders must accommodate 18 people"
        assert len(result) > 0

    def test_rubric_4_the_in_store_merchant_orders_should_be__dark_night_mansion(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The in-store merchant orders should be \"Dark Night Mansion\" Escape Room Theme (4-6 People) + \"Fatal Files\" Escape Room Theme (3-5 People) + \"Mystery City Stories\" Escape Room Theme (3-5 People) + \"Deep Sea Laboratory\" Escape Room Theme (2-4 People)"
        assert len(result) > 0

    def test_rubric_5_the_delivery_order_must_include_fried_chicken(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order must include fried chicken"
        assert len(result) > 0

    def test_rubric_6_the_quantity_of_fried_chicken_in_the_delivery_order_is_5(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of fried chicken in the delivery order is 5"
        assert len(result) > 0

    def test_rubric_7_the_delivery_order_s_fried_chicken_items_should_be_of_differ(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order\'s fried chicken items should be of different flavors"
        assert len(result) > 0

    def test_rubric_8_the_delivery_order_must_include_burgers(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order must include burgers"
        assert len(result) > 0

    def test_rubric_9_the_quantity_of_burgers_in_the_delivery_order_is_18(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of burgers in the delivery order is 18"
        assert len(result) > 0

    def test_rubric_10_the_delivery_order_must_include_cola(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order must include cola"
        assert len(result) > 0

    def test_rubric_11_the_quantity_of_colas_in_the_delivery_order_must_be_18(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of colas in the delivery order must be 18"
        assert len(result) > 0

    def test_rubric_12_the_delivery_order_s_fried_chicken__burgers__and_cola_must_c(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order\'s fried chicken, burgers, and cola must come from the same store"
        assert len(result) > 0

    def test_rubric_13_the_delivery_order_s_fried_chicken__burgers__and_cola_cannot(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order\'s fried chicken, burgers, and cola cannot come from Wallace"
        assert len(result) > 0

    def test_rubric_14_the_delivery_address_must_be_mystery_city_escape_room__10_fi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address must be Mystery City Escape Room, 10 Financial First Street, Taihu New City, Binhu District, Wuxi, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_15_the_delivery_order_s_expected_delivery_time_is_21_00_on_july(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order\'s expected delivery time is 21:00 on July 4, 2025"
        assert len(result) > 0

    def test_rubric_16_need_to_check_the_weather_in_shanghai_and_wuxi_on_july_5__20(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the weather in Shanghai and Wuxi on July 5, 2025, and the result shows that it won\'t be rainy. Therefore, a high-speed rail ticket should be ordered for around 10:00 AM on July 5, that is, the final train departure time should be between 9:45 AM and 10:15 AM]"
        assert len(result) > 0

    def test_rubric_17_the_train_ticket_should_be_from_wuxi_to_shanghai(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train ticket should be from Wuxi to Shanghai"
        assert len(result) > 0
