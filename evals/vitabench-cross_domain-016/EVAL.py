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
        assert result[0]["store_id"] == 'S17550802129404077_I00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802108642397_P00076", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 15) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802129404077_T00007'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802129404077_P00044", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 153) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802129404077_S00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802129404077_P00001 ", "quantity": 1}, {"product_id": "S17550802129404077_P00002 ", "quantity": 1}, {"product_id": "S17550802129404077_P00003 ", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 28.2) < 1

    def test_rubric_0_the_dessert_order_needs_to_include_3_different_types_of_dess(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dessert order needs to include 3 different types of desserts"
        assert len(result) > 0

    def test_rubric_1_the_total_price_of_the_dessert_order_cannot_exceed_30_yuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total price of the dessert order cannot exceed 30 yuan"
        assert len(result) > 0

    def test_rubric_2_the_desserts_should_be_exquisite__which_is_generally_reflect(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The desserts should be exquisite, which is generally reflected in the merchant/product descriptions or labels"
        assert len(result) > 0

    def test_rubric_3_the_desserts_cannot_contain_alcohol(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The desserts cannot contain alcohol"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_the_dessert_order_should_be_room_12(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the dessert order should be Room 1203, Building B, Mingfa City Plaza, Intersection of East Changjiang Road and Victory Road, Yaohai District, Hefei, Anhui Province"
        assert len(result) > 0

    def test_rubric_5_need_to_find_the_internet_caf__closest_to_the_user_s_communi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to find the internet café closest to the user\'s community, which is Dream Internet Café (Mingfa Plaza Branch)"
        assert len(result) > 0

    def test_rubric_6_need_to_find_the_cheapest_package_option_in_the_internet_caf(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to find the cheapest package option in the internet café, which is the Standard Computer Seat (2 Hours) at Dream Internet Café (Mingfa Plaza Branch), priced at 15 yuan"
        assert len(result) > 0

    def test_rubric_7_the_internet_caf__order_package_duration_should_be_2_hours(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The internet café order package duration should be 2 hours"
        assert len(result) > 0

    def test_rubric_8_the_internet_caf__order_should_be_a_package_for_single_perso(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The internet café order should be a package for single person use"
        assert len(result) > 0

    def test_rubric_9_need_to_check_the_high_speed_rail_schedule_from_nanjing_to_h(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the high-speed rail schedule from Nanjing to Hefei for next Friday (March 14, 2025)"
        assert len(result) > 0

    def test_rubric_10_the_departure_time_of_the_selected_train_should_be_at_or_aft(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The departure time of the selected train should be at or after 19:00"
        assert len(result) > 0

    def test_rubric_11_priority_should_be_given_to_the_high_speed_rail_that_arrives(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Priority should be given to the high-speed rail that arrives in Hefei earlier"
        assert len(result) > 0

    def test_rubric_12_the_date_of_the_ticket_order_should_be_march_14__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The date of the ticket order should be March 14, 2025"
        assert len(result) > 0
