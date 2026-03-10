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
        assert result[0]["store_id"] == 'S17550811051817692_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550811051817692_P00001", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 119.7) < 1

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
        assert result[2]["store_id"] == 'S17550811051817692_I00010'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550811051817692_P00057", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 588) < 1

    def test_rubric_0_the_dine_in_restaurant_should_be_a_hotpot_restaurant(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dine-in restaurant should be a hotpot restaurant"
        assert len(result) > 0

    def test_rubric_1_the_hotpot_restaurant_should_be_within_500_meters_of_zhongji(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotpot restaurant should be within 500 meters of Zhongjian Cloud View"
        assert len(result) > 0

    def test_rubric_2_the_hotpot_restaurant_s_environment_rating_should_be_4_2_or(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotpot restaurant\'s environment rating should be 4.2 or above"
        assert len(result) > 0

    def test_rubric_3_need_to_make_a_reservation_at_the_hotpot_restaurant_for_arou(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to make a reservation at the hotpot restaurant for around 19:45 on 2024-11-02 [meaning the reservation time should be between 19:30 and 20:00]"
        assert len(result) > 0

    def test_rubric_4_the_reservation_should_be_for_5_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reservation should be for 5 People"
        assert len(result) > 0

    def test_rubric_5_the_hotpot_restaurant_s_set_meal_should_cost_less_than_150_y(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotpot restaurant\'s set meal should cost less than 150 yuan per person, with a total price under 750 yuan"
        assert len(result) > 0

    def test_rubric_6_the_hotpot_restaurant_s_set_meal_should_not_include_seafood(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotpot restaurant\'s set meal should not include seafood (fish/shrimp/crab) dishes"
        assert len(result) > 0

    def test_rubric_7_the_delivery_order_should_be_for_medium_storage_box(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order should be for Medium Storage Box"
        assert len(result) > 0

    def test_rubric_8_the_delivery_order_should_be_sturdy_and_durable__with_labels(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order should be sturdy and durable, with labels such as Thickened, Extra Hard, PP Material, etc."
        assert len(result) > 0

    def test_rubric_9_the_storage_box_order_should_be_delivered_on_november_2__202(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The storage box order should be delivered on November 2, 2024, and should be from the closest available merchant, which should be JD Home Supermarket"
        assert len(result) > 0

    def test_rubric_10_the_delivery_address_for_the_storage_box_should_be_room_1902(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the storage box should be Room 1902, Unit 1, Building 9, Ronghui City, 2000 Olympic West Road, Lixia District, Jinan, Shandong Province"
        assert len(result) > 0

    def test_rubric_11_need_to_check_train_schedules_from_jinan_to_zibo_on_2024_11(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check train schedules from Jinan to Zibo on 2024-11-03, should provide information on trains arriving around 11:30, G167 (11:05-11:35) or G171 (10:50-11:25)"
        assert len(result) > 0

    def test_rubric_12_need_to_check_train_schedules_from_jinan_to_zibo_north_railw(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check train schedules from Jinan to Zibo North Railway Station on 2024-11-03 [result should be G167 or G169]"
        assert len(result) > 0

    def test_rubric_13_agent_needs_to_check_train_schedules_from_zibo_to_jinan_on_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Agent needs to check train schedules from Zibo to Jinan on 2024-11-05, should provide information on trains departing between 17:00-18:00, result is G258 (17:15-17:45)"
        assert len(result) > 0

    def test_rubric_14_agent_should_not_book_any_train_tickets(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Agent should not book any train tickets"
        assert len(result) > 0
