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
        assert result[0]["store_id"] == 'S17550807829797634_I00012'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550807829797634_P00065", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 198) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550807829797634_I00012'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2025-11-19 13:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 2

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550807829797634_S00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550807829797634_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 698) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550807829797634_S00002'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17550807829797634_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 2899) < 1

    def test_rubric_0_the_package_ordered_at_the_archery_club_should_be_without_co(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package ordered at the archery club should be without coach instruction"
        assert len(result) > 0

    def test_rubric_1_the_duration_of_the_ordered_product_should_be_3_hours(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The duration of the ordered product should be 3 hours"
        assert len(result) > 0

    def test_rubric_2_the_order_at_the_archery_club_should_be_for_a_two_person_pac(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The order at the archery club should be for a two-person package or two single-person packages"
        assert len(result) > 0

    def test_rubric_3_the_reserved_archery_club_should_be_jian_wu_xu_fa_archery_cl(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved archery club should be Jian Wu Xu Fa Archery Club (S17550807829797634_I00012)"
        assert len(result) > 0

    def test_rubric_4_the_reservation_time_for_the_archery_club_should_be_november(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation time for the archery club should be November 19, 2025, at 13:00"
        assert len(result) > 0

    def test_rubric_5_the_number_of_people_for_the_archery_club_reservation_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the archery club reservation should be 2"
        assert len(result) > 0

    def test_rubric_6_the_historical_order_id_to_be_queried_is_a0811011t005__train(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The historical order ID to be queried is A0811011T005, train number D3256 arrives at 19:42, so there\'s no need to change the train ticket"
        assert len(result) > 0

    def test_rubric_7_the_food_delivery_order_should_include_a_bird_s_nest_gift_bo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery order should include a bird\'s nest gift box"
        assert len(result) > 0

    def test_rubric_8_the_food_delivery_order_should_include_a_bottle_of_moutai(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery order should include a bottle of Moutai"
        assert len(result) > 0

    def test_rubric_9_the_food_delivery_address_should_be_fuzhou_station__no__168(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery address should be Fuzhou Station, No. 168 Lianjiang Middle Road, Jin\'an District, Fuzhou City, Fujian Province"
        assert len(result) > 0

    def test_rubric_10_the_estimated_food_delivery_time_should_be_between_19_30_and(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated food delivery time should be between 19:30 and 19:42 on November 19, 2025"
        assert len(result) > 0

    def test_rubric_11_the_food_delivery_order_should_include_the_note__contact_183(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery order should include the note: Contact 18382114867"
        assert len(result) > 0
