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
        assert result[0]["store_id"] == 'S17550148885477543_I00009'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550148885477543_P00076", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 428) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802121746337_S00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802121746337_P00001", "quantity": 1}, {"product_id": "S17550802121746337_P00002", "quantity": 1}, {"product_id": "S17550802121746337_P00003", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 49.2) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550148885477543_T00005'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802121746337_P00024", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 294) < 1

    def test_rubric_0_the_ktv_ordered_should_be_a_chain_ktv(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV ordered should be a chain KTV"
        assert len(result) > 0

    def test_rubric_1_the_ktv_room_ordered_should_be_a_luxury_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV room ordered should be a luxury room"
        assert len(result) > 0

    def test_rubric_2_the_guild_has_9_core_members__plus_the_user__there_are_10_pe(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The guild has 9 core members, plus the user, there are 10 people in total for the gathering, but 1 person is abroad and cannot come, so the room ordered should accommodate 9 people"
        assert len(result) > 0

    def test_rubric_3_the_cost_per_person_cannot_exceed_50__with_9_people__so_the(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The cost per person cannot exceed 50, with 9 people, so the KTV package price cannot exceed 450 yuan"
        assert len(result) > 0

    def test_rubric_4_the_ktv_ordered_should_have_professional_sound_system(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV ordered should have professional sound system"
        assert len(result) > 0

    def test_rubric_5_the_ktv_package_should_be_available_before_10_00_pm(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The KTV package should be available before 10:00 PM"
        assert len(result) > 0

    def test_rubric_6_need_to_check_the_subway_station_near_the_ktv__and_the_resul(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Need to check the subway station near the KTV, and the result is Yaner Island Road Station (Line 2)"
        assert len(result) > 0

    def test_rubric_7_the_delivery_order_includes_throat_lozenges(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order includes throat lozenges"
        assert len(result) > 0

    def test_rubric_8_the_delivery_order_includes_honey(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order includes honey"
        assert len(result) > 0

    def test_rubric_9_the_delivery_order_includes_throat_protection_spray(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order includes throat protection spray"
        assert len(result) > 0

    def test_rubric_10_the_three_delivery_items_must_be_ordered_from_the_same_store(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The three delivery items must be ordered from the same store"
        assert len(result) > 0

    def test_rubric_11_the_delivery_address_for_the_ordered_items_is_star_party_ktv(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the ordered items is Star Party KTV (Qingdao Mykal Store), 6F, Mykal (Qingdao Main Store), 69 Hong Kong Middle Road, Shinan District, Qingdao, Shandong Province"
        assert len(result) > 0

    def test_rubric_12_the_estimated_delivery_time_for_the_ordered_items_is_between(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time for the ordered items is between 17:00:00-18:00:00 on 2025-11-03"
        assert len(result) > 0

    def test_rubric_13_the_total_price_of_the_ordered_items_for_delivery_does_not_e(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total price of the ordered items for delivery does not exceed 50 yuan"
        assert len(result) > 0

    def test_rubric_14_the_arrival_time_of_the_booked_train_tickets_should_be_in_th(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The arrival time of the booked train tickets should be in the morning of 2025-11-03"
        assert len(result) > 0

    def test_rubric_15_the_booked_tickets_cannot_be_no_seat_type(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked tickets cannot be No Seat type"
        assert len(result) > 0

    def test_rubric_16_the_booked_tickets_should_be_student_tickets(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked tickets should be student tickets"
        assert len(result) > 0

    def test_rubric_17_the_booked_tickets_are_from_jinan_to_qingdao(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The booked tickets are from Jinan to Qingdao"
        assert len(result) > 0

    def test_rubric_18_the_quantity_of_train_tickets_order_is_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of train tickets order is 3"
        assert len(result) > 0
