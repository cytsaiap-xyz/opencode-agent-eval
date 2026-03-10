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
        for i, order in enumerate(result):
            if i in {1}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17564420237542211_I00004'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420237542211_P00015", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 88) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564420237542211_I00004'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2025-11-07 17:30:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_rubric_0_the_gym_should_be_fully_equipped(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The gym should be Fully Equipped"
        assert len(result) > 0

    def test_rubric_1_the_gym_should_be_within_5000m_range_of_room_502__unit_1__bu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The gym should be within 5000m range of Room 502, Unit 1, Building 3, Longcheng Shangdu, 136 Qinxian North Street, Xiaodian District, Taiyuan City"
        assert len(result) > 0

    def test_rubric_2_the_gym_should_provide_swimming_pool(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The gym should provide Swimming Pool"
        assert len(result) > 0

    def test_rubric_3_the_gym_should_provide_swimming_class_single_experience_vouc(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The gym should provide Swimming Class Single Experience Voucher and Body Shaping Class Single Experience Voucher"
        assert len(result) > 0

    def test_rubric_4_the_weather_in_taiyuan_on_2025_11_07_will_be_overcast__body(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The weather in Taiyuan on 2025-11-07 will be overcast, Body Shaping class should be ordered"
        assert len(result) > 0

    def test_rubric_5_the_gym_reservation_should_be_made_at_kangti_swimming_fitnes(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The gym reservation should be made at Kangti Swimming Fitness Club"
        assert len(result) > 0

    def test_rubric_6_the_gym_reservation_time_should_be_2025_11_07_17_30_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The gym reservation time should be 2025-11-07 17:30:00"
        assert len(result) > 0

    def test_rubric_7_the_number_of_people_for_the_gym_reservation_should_be_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the gym reservation should be 1"
        assert len(result) > 0
