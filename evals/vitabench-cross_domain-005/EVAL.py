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
        assert result[0]["store_id"] == 'S17550802124707160_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802124707160_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 12.9) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == ''

    def test_order_1_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 0) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802124707160_T00007'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802124707160_P00036", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 89) < 1

    def test_rubric_0_the_items_in_the_rice_ball_order_should_not_contain_sauce(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The items in the Rice Ball order should not contain sauce"
        assert len(result) > 0

    def test_rubric_1_the_delivery_time_in_the_rice_ball_order_should_be_before_18(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time in the Rice Ball order should be before 18:30:00 on 2025-06-20"
        assert len(result) > 0

    def test_rubric_2_the_delivery_address_for_the_rice_ball_order_is_mycott_inter(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the Rice Ball order is Mycott International Building, No.63 Maidi Road, Huicheng District, Huizhou, Guangdong"
        assert len(result) > 0

    def test_rubric_3_the_item_in_the_rice_ball_order_should_be_chicken_strips_pur(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The item in the Rice Ball order should be Chicken Strips Purple Rice Ball flavor"
        assert len(result) > 0

    def test_rubric_4_the_reservation_time_in_the_haidilao_order_should_be_22_00_0(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation time in the Haidilao order should be 22:00:00 on 2025-06-20"
        assert len(result) > 0

    def test_rubric_5_the_number_of_people_for_the_haidilao_reservation_is_6(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the Haidilao reservation is 6"
        assert len(result) > 0

    def test_rubric_6_the_merchant_in_the_haidilao_order_should_be_haidilao(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The merchant in the Haidilao order should be Haidilao"
        assert len(result) > 0

    def test_rubric_7_the_merchant_in_the_haidilao_order_should_be_the_branch_clos(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The merchant in the Haidilao order should be the branch closest to the Sports Center (query shows it\'s Haidilao Hotpot (Dongguan Sports Center))"
        assert len(result) > 0

    def test_rubric_8_based_on_the_query__there_is_no_direct_train_from_huizhou_to(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Based on the query, there is no direct train from Huizhou to Shenzhen Airport, so a train from Huizhou to Shenzhen North should be ordered"
        assert len(result) > 0

    def test_rubric_9_to_pick_someone_up_at_the_airport_at_10_00__one_needs_to_arr(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "To pick someone up at the airport at 10:00, one needs to arrive at Shenzhen North Station one and a half hours in advance, so the arrival time of the train in the order should be before 08:30:00 on 2025-06-22"
        assert len(result) > 0

    def test_rubric_10_the_high_speed_rail_ticket_price_should_not_exceed_100_yuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The high-speed rail ticket price should not exceed 100 yuan"
        assert len(result) > 0
