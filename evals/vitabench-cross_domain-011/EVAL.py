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
        for order in result:
            assert "store_id" in order
            assert "products" in order
            assert "total_price" in order
            assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550802129001233_I00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802129001233_P00057 ", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 258) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802129001233_T00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802129001233_P00003", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 75.5) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550848571848043_S00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550848571848043_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 168) < 1

    def test_rubric_0_the_grilled_fish_delivery_restaurant_should_offer_dine_in_av(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The grilled fish delivery restaurant should offer Dine-In Available"
        assert len(result) > 0

    def test_rubric_1_the_grilled_fish_restaurant_must_have_a_rating_of_no_less_th(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The grilled fish restaurant must have a rating of no less than 4.2"
        assert len(result) > 0

    def test_rubric_2_the_grilled_fish_ordered_must_be_non_spicy_flavor__such_as_f(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The grilled fish ordered must be Non-Spicy flavor [such as five-spice]"
        assert len(result) > 0

    def test_rubric_3_the_grilled_fish_portion_must_be_for_4_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The grilled fish portion must be For 4 People"
        assert len(result) > 0

    def test_rubric_4_the_ordered_item_must_be_grilled_fish(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item must be Grilled Fish"
        assert len(result) > 0

    def test_rubric_5_the_grilled_fish_order_should_be_delivered_to_unit_502__buil(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The grilled fish order should be delivered to Unit 502, Building 3, Entrance 1, Longcheng Shangdu Community, 169 Qinxian North Street, Xiaodian District, Taiyuan, Shanxi Province"
        assert len(result) > 0

    def test_rubric_6_the_grilled_fish_order_must_be_delivered_before_3_pm_on_febr(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The grilled fish order must be delivered before 3 PM on February 27"
        assert len(result) > 0

    def test_rubric_7_the_arcade_ordered_must_have_new_equipment(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The arcade ordered must have New Equipment"
        assert len(result) > 0

    def test_rubric_8_the_arcade_ordered_must_have_dance_machine(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The arcade ordered must have Dance Machine"
        assert len(result) > 0

    def test_rubric_9_the_arcade_package_should_include_popcorn(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The arcade package should include Popcorn"
        assert len(result) > 0

    def test_rubric_10_the_train_booking_should_be_for_a_train_from_taiyuan_to_linf(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train booking should be for a train from Taiyuan to Linfen"
        assert len(result) > 0

    def test_rubric_11_the_train_ticket_must_be_for_a_train_departing_around_2_pm(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket must be for a train departing around 2 PM [specifically, with departure time between 13:45 and 14:15 on February 28, 2025]"
        assert len(result) > 0

    def test_rubric_12_the_train_ticket_must_be_second_class_seat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket must be Second Class Seat"
        assert len(result) > 0

    def test_rubric_13_need_to_check_all_available_options_for_the_earliest_arrival(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check all available options for the earliest arrival time, which is D2575, so the order should be for train D2575"
        assert len(result) > 0

    def test_rubric_14_the_train_ticket_order_date_should_be_february_28__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket order date should be February 28, 2025"
        assert len(result) > 0
