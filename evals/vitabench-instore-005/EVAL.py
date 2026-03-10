import json
import os
import pytest

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)
with open(os.path.join(_dir, "answer.json")) as _f:
    result = json.load(_f)

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
        assert result[0]["store_id"] == 'S17564420259995947_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420259995947_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 98) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564420259995947_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2025-05-03 14:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 2

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564420259995947_I00004'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564420259995947_P00015", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 118) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17564420259995947_I00004'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17564420259995947_P00014", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 138) < 1

    def test_rubric_0_must_search_for_information_about_three_types_of_sports_venu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Must search for information about three types of sports venues: badminton halls, tennis courts, and table tennis halls, and select the one closest to the user\'s home"
        assert len(result) > 0

    def test_rubric_1_the_package_in_the_sports_venue_order_should_be_usable_for_t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The package in the sports venue order should be usable for two people"
        assert len(result) > 0

    def test_rubric_2_the_package_in_the_sports_venue_order_should_include_venue_u(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The package in the sports venue order should include venue usage"
        assert len(result) > 0

    def test_rubric_3_the_package_in_the_sports_venue_order_should_include_free_eq(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The package in the sports venue order should include free equipment usage"
        assert len(result) > 0

    def test_rubric_4_the_price_of_the_package_in_the_sports_venue_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price of the package in the sports venue order should be consistent with the user\'s usual spending level (within the range of 60-100 yuan)"
        assert len(result) > 0

    def test_rubric_5_the_package_in_the_sports_venue_order_should_be_for_two_hour(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The package in the sports venue order should be for two hours"
        assert len(result) > 0

    def test_rubric_6_the_reserved_sports_venue_should_be_the_one_closest_to_the_u(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved sports venue should be the one closest to the user\'s home"
        assert len(result) > 0

    def test_rubric_7_the_reserved_sports_venue_should_be_yaohai_district_sports_c(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved sports venue should be Yaohai District Sports Center Badminton Hall"
        assert len(result) > 0

    def test_rubric_8_the_number_of_people_for_the_sports_venue_reservation_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the sports venue reservation should be 2"
        assert len(result) > 0

    def test_rubric_9_the_time_for_the_sports_venue_reservation_should_be_14_00_00(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The time for the sports venue reservation should be 14:00:00 on 2025-05-03"
        assert len(result) > 0

    def test_rubric_10_check_the_hot_pot_set_purchase_in_the_historical_orders_to_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Check the hot pot set purchase in the historical orders to see if it includes duck tongues; the search shows it does not, and the status of this order is cancelled"
        assert len(result) > 0

    def test_rubric_11_the_merchant_for_the_newly_purchased_hot_pot_set_should_be_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The merchant for the newly purchased hot pot set should be Bashu General Hot Pot (Yaohai Branch)"
        assert len(result) > 0

    def test_rubric_12_the_newly_purchased_hot_pot_set_should_include_duck_tongues(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The newly purchased hot pot set should include duck tongues"
        assert len(result) > 0

    def test_rubric_13_the_newly_purchased_hot_pot_set_should_be_a_set_for_two_peop(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The newly purchased hot pot set should be a set for two people, not two single-person sets"
        assert len(result) > 0
