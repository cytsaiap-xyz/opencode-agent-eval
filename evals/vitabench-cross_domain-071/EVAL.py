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
        assert result[0]["store_id"] == 'S17550802154785786_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802154785786_P00001", "quantity": 1}, {"product_id": "S17550802154785786_P00002", "quantity": 1}, {"product_id": "S17550802154785786_P00003", "quantity": 2}, {"product_id": "S17550802154785786_P00004", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 119.3) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802154785786_S00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802154785786_P00001", "quantity": 1}, {"product_id": "S17550802154785786_P00002", "quantity": 1}, {"product_id": "S17550802154785786_P00003", "quantity": 2}, {"product_id": "S17550802154785786_P00004", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 119.3) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802154785786_I00012'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802154785786_P00093", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 328) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550802154785786_F00006'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17550802154785786_P00047", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 1300) < 1

    def test_order_4_matches_expected_store(self):
        assert result[4]["store_id"] == 'S17550802154785786_F00007'

    def test_order_4_has_correct_products(self):
        expected_products = [{"product_id": "S17550802154785786_P00055", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[4]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_4_has_correct_total_price(self):
        assert abs(result[4]["total_price"] - 1300) < 1

    def test_rubric_0_the_delivery_order_should_be_bbq(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery order should be BBQ"
        assert len(result) > 0

    def test_rubric_1_the_bbq_order_needs_to_include_20_skewers_in_total(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The BBQ order needs to include 20 skewers in total"
        assert len(result) > 0

    def test_rubric_2_the_bbq_order_must_include_2_types_of_vegetables(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The BBQ order must include 2 types of vegetables"
        assert len(result) > 0

    def test_rubric_3_the_bbq_order_must_include_2_types_of_meat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The BBQ order must include 2 types of meat"
        assert len(result) > 0

    def test_rubric_4_the_meat_bbq_must_only_include_different_types_of_beef(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The meat BBQ must only include different types of beef"
        assert len(result) > 0

    def test_rubric_5_the_bbq_delivery_address_must_be_room_502__building_3__city(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The BBQ delivery address must be Room 502, Building 3, City Garden Community, 28 Gongnong Road, Chongchuan District, Nantong, Jiangsu Province (user\'s residence)"
        assert len(result) > 0

    def test_rubric_6_the_bbq_order_flavor_should_be_mildly_spicy(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The BBQ order flavor should be mildly spicy"
        assert len(result) > 0

    def test_rubric_7_the_bbq_should_comply_with_the_user_s_dietary_restrictions(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The BBQ should comply with the user\'s dietary restrictions, not ordering BBQ options or side dishes containing alcohol or high purine (offal/seafood soup)"
        assert len(result) > 0

    def test_rubric_8_there_should_be_2_orders_from_lao_ma_bbq__one_of_which_shoul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "There should be 2 orders from Lao Ma BBQ, one of which should have the status of paid"
        assert len(result) > 0

    def test_rubric_9_the_paid_delivery_order_must_be_delivered_between_6_00_pm_an(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The paid delivery order must be delivered between 6:00 PM and 7:00 PM on February 18, 2025"
        assert len(result) > 0

    def test_rubric_10_there_should_be_2_orders_from_lao_ma_bbq__one_of_which_shoul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "There should be 2 orders from Lao Ma BBQ, one of which should have the status of cancelled"
        assert len(result) > 0

    def test_rubric_11_the_spa_club_should_offer_massage_and_foot_therapy_services(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The SPA club should offer massage and foot therapy services"
        assert len(result) > 0

    def test_rubric_12_the_spa_club_must_have_professional_therapists(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The SPA club must have professional therapists"
        assert len(result) > 0

    def test_rubric_13_the_spa_club_should_have_a_comfortable_environment(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The SPA club should have a comfortable environment"
        assert len(result) > 0

    def test_rubric_14_the_ordered_spa_package_must_include_full_body_massage(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered SPA package must include full body massage"
        assert len(result) > 0

    def test_rubric_15_the_ordered_spa_package_must_include_facial_care(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered SPA package must include facial care"
        assert len(result) > 0

    def test_rubric_16_the_spa_package_ordered_must_be_suitable_for_deep_relaxation(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The SPA package ordered must be suitable for deep relaxation"
        assert len(result) > 0

    def test_rubric_17_departure_and_return_dates_must_be_3_days_apart__e_g___march(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Departure and return dates must be 3 days apart (e.g., March 1 departure, March 4 return)"
        assert len(result) > 0

    def test_rubric_18_the_total_price_for_all_round_trip_tickets_should_be_less_th(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total price for all round-trip tickets should be less than 3000 yuan"
        assert len(result) > 0

    def test_rubric_19_the_departure_flight_should_be_on_or_after_march_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure flight should be on or after March 1"
        assert len(result) > 0

    def test_rubric_20_the_departure_order_s_ticket_quantity_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure order\'s ticket quantity should be 2"
        assert len(result) > 0

    def test_rubric_21_the_return_flight_ticket_should_be_on_or_before_march_7(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return flight ticket should be on or before March 7"
        assert len(result) > 0

    def test_rubric_22_the_return_order_s_ticket_quantity_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return order\'s ticket quantity should be 2"
        assert len(result) > 0
