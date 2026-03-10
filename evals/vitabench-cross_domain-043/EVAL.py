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
        assert result[0]["store_id"] == 'S17550942368098473_I00012'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550942368098473_P00089", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 588) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550942368098473_S00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550942368098473_P00002", "quantity": 4}, {"product_id": "S17550942368098473_P00003", "quantity": 8}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 142.4) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550942368098473_H00008'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550942368098473_P00056", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 516) < 1

    def test_rubric_0_the_trampoline_park_ordered_should_have_complete_facilities(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The trampoline park ordered should have complete facilities"
        assert len(result) > 0

    def test_rubric_1_the_trampoline_park_ordered_should_offer_activities_of_varyi(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The trampoline park ordered should offer activities of varying difficulty levels"
        assert len(result) > 0

    def test_rubric_2_the_trampoline_park_ordered_should_have_professional_safety(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The trampoline park ordered should have professional safety measures"
        assert len(result) > 0

    def test_rubric_3_the_package_ordered_at_the_trampoline_park_should_include_co(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package ordered at the trampoline park should include coaching services"
        assert len(result) > 0

    def test_rubric_4_the_package_ordered_at_the_trampoline_park_should_include_sa(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package ordered at the trampoline park should include safety equipment"
        assert len(result) > 0

    def test_rubric_5_the_package_ordered_at_the_trampoline_park_should_include_mu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package ordered at the trampoline park should include multiple trampoline experiences"
        assert len(result) > 0

    def test_rubric_6_the_package_ordered_at_the_trampoline_park_should_be_suitabl(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The package ordered at the trampoline park should be suitable for a group of four people"
        assert len(result) > 0

    def test_rubric_7_the_electrolyte_drink_should_be_caffeine_free(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The electrolyte drink should be caffeine-free"
        assert len(result) > 0

    def test_rubric_8_the_electrolyte_drink_should_not_contain_mango(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The electrolyte drink should not contain mango"
        assert len(result) > 0

    def test_rubric_9_need_to_purchase_4_bottles_of_electrolyte_drink(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to purchase 4 bottles of electrolyte drink"
        assert len(result) > 0

    def test_rubric_10_the_energy_bars_should_be_caffeine_free(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The energy bars should be caffeine-free"
        assert len(result) > 0

    def test_rubric_11_the_energy_bars_should_not_contain_mango(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The energy bars should not contain mango"
        assert len(result) > 0

    def test_rubric_12_need_to_purchase_at_least_8_energy_bars(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to purchase at least 8 energy bars"
        assert len(result) > 0

    def test_rubric_13_the_delivery_store_s_business_hours_should_be_after_23_37_21(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery store\'s business hours should be after 23:37:21 or before 10:00:00"
        assert len(result) > 0

    def test_rubric_14_the_electrolyte_drinks_and_energy_bars_should_come_from_prem(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The electrolyte drinks and energy bars should come from Premium Sports Nutrition Store"
        assert len(result) > 0

    def test_rubric_15_need_to_check_premium_sports_nutrition_store_s_delivery_time(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check Premium Sports Nutrition Store\'s delivery time, which is 08:30-20:30 (currently not available), estimated delivery time should be before 2026-04-04 10:00:00"
        assert len(result) > 0

    def test_rubric_16_the_delivery_address_must_be_room_203__building_12__jiangbin(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address must be Room 203, Building 12, Jiangbin Garden, Hongjia Street, Jiaojiang District, Taizhou, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_17_need_to_check_if_feiyue_trampoline_sports_park_has_shower_fa(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check if Feiyue Trampoline Sports Park has shower facilities, the result is no, so need to find hotels within 500m (inclusive) of Room 203, Building 12, Jiangbin Garden, Hongjia Street, Jiaojiang District, Taizhou, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_18_the_hotel_ordered_should_have_good_soundproofing(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel ordered should have good soundproofing"
        assert len(result) > 0

    def test_rubric_19_the_hotel_room_date_should_be_for_2026_04_04(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel room date should be for 2026-04-04"
        assert len(result) > 0

    def test_rubric_20_after_comparing_the_prices_of_twin_rooms_and_king_rooms_at_h(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "After comparing the prices of twin rooms and king rooms at hotels meeting the conditions, should order the more economical Hanting Hotel (Taizhou Jiangbin Garden)-Standard Twin Room (258 yuan)"
        assert len(result) > 0
