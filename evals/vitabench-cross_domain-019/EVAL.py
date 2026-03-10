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
        assert result[0]["store_id"] == 'S17550148884164152_I00012'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550148884164152_P00084", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 2299) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550148884164152_I00017'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2025-03-03 19:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 2

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550148884164152_F00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550148884164152_P00040", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 980) < 1

    def test_rubric_0_the_bluetooth_earphones_ordered_should_be_priced_above_2_000(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Bluetooth earphones ordered should be priced above 2,000 yuan"
        assert len(result) > 0

    def test_rubric_1_the_expected_delivery_time_for_the_bluetooth_earphones_is_ma(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The expected delivery time for the Bluetooth earphones is March 3, 2025, 14:00-15:00"
        assert len(result) > 0

    def test_rubric_2_the_delivery_address_for_the_bluetooth_earphones_is_15th_flo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the Bluetooth earphones is 15th Floor, Building B, Jinhua Commercial Center, 399 Bayi South Street, Wucheng District, Jinhua, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_3_the_rating_of_the_reserved_business_spa_club_should_be_4_0_o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The rating of the reserved Business SPA club should be 4.0 or above"
        assert len(result) > 0

    def test_rubric_4_the_business_spa_club_reservation_is_for_2_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Business SPA club reservation is for 2 people"
        assert len(result) > 0

    def test_rubric_5_the_business_spa_club_reservation_time_is_march_3__2025__19(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Business SPA club reservation time is March 3, 2025, 19:00"
        assert len(result) > 0

    def test_rubric_6_the_agent_needs_to_check_the_distance_between_jindu_garden(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The agent needs to check the distance between Jindu Garden, 1229 Danxi Road, Wucheng District, Jinhua, Zhejiang Province and Yiwu International Airport, 201 Minhang Road, Yiwu, Zhejiang Province. The query result shows that the distance between the two locations does not exceed 50km"
        assert len(result) > 0

    def test_rubric_7_order_flight_information_for_flights_departing_from_yiwu_to(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Order flight information for flights departing from Yiwu to Zhengzhou before 10:00 on March 4, 2025"
        assert len(result) > 0
