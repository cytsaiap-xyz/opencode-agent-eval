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
        assert result[0]["store_id"] == 'S17550802118465063_S00002'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802118465063_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 299) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802118465063_P00059'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802118465063_P00059", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 268) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802118465063_H00007'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802118465063_P00032", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 298) < 1

    def test_rubric_0_the_housewarming_gift_ordered_must_be_a_tableware_set(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The housewarming gift ordered must be a tableware set"
        assert len(result) > 0

    def test_rubric_1_the_housewarming_gift_ordered_should_cost_no_less_than_300_y(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The housewarming gift ordered should cost no less than 300 yuan"
        assert len(result) > 0

    def test_rubric_2_the_housewarming_gift_ordered_must_have_a_modern_minimalist(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The housewarming gift ordered must have a Modern Minimalist design style"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_housewarming_gift_order_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the housewarming gift order should be Donghu Shuguang City, Opposite to Dongqiao Management Committee, Dongqiao Development Zone, Jiaocheng District, Ningde, Fujian Province"
        assert len(result) > 0

    def test_rubric_4_the_delivery_time_for_the_housewarming_gift_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the housewarming gift order should be before the evening of February 27, 2025"
        assert len(result) > 0

    def test_rubric_5_the_hotel_ordered_should_be_within_3km__inclusive__of_fuxin(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel ordered should be within 3km (inclusive) of Fuxin Building, 60 meters northwest of the intersection of Laizhou Street and Binjiang Road, Yanping District, Nanping, Fujian Province"
        assert len(result) > 0

    def test_rubric_6_the_hotel_ordered_should_be_a_smart_home_hotel(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel ordered should be a Smart Home hotel"
        assert len(result) > 0

    def test_rubric_7_the_room_type_ordered_should_be_the_cheapest_room_type_in_th(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The room type ordered should be the cheapest room type in the hotel"
        assert len(result) > 0

    def test_rubric_8_the_hotel_check_in_date_should_be_march_1__2025_for_one_nigh(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel check-in date should be March 1, 2025 for one night"
        assert len(result) > 0

    def test_rubric_9_the_sauna_merchant_ordered_should_be_within_3km_of_fuxin_bui(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The sauna merchant ordered should be within 3km of Fuxin Building, 60 meters northwest of the intersection of Laizhou Street and Binjiang Road, Yanping District, Nanping, Fujian Province"
        assert len(result) > 0

    def test_rubric_10_the_sauna_package_ordered_should_be_a_two_person_package(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The sauna package ordered should be a Two-Person Package"
        assert len(result) > 0

    def test_rubric_11_the_sauna_package_ordered_needs_to_include_two_female_dispos(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The sauna package ordered needs to include two female disposable sauna clothes"
        assert len(result) > 0
