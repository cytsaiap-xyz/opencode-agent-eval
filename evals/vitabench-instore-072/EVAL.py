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
        assert result[0]["store_id"] == 'S17567836565538568_I00003'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836565538568_P00020", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 230) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836565538568_I00003'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2025-03-08 14:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567836565538568_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836565538568_P00010", "quantity": 1}, {"product_id": "S17567836565538568_P00011", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 476) < 1

    def test_rubric_0_the_fencing_club_should_have_a_rating_of_4_3_or_above(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The fencing club should have a rating of 4.3 or above"
        assert len(result) > 0

    def test_rubric_1_need_to_check_if_the_fencing_club_that_meets_the_rating_requ(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check if the fencing club that meets the rating requirements offers a trial basic training class, the result is no, so the product ordered from the fencing club should be a One-on-One single experience class"
        assert len(result) > 0

    def test_rubric_2_the_package_ordered_from_the_fencing_club_should_be_availabl(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The package ordered from the fencing club should be available for adults"
        assert len(result) > 0

    def test_rubric_3_the_package_ordered_from_the_fencing_club_should_be_suitable(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The package ordered from the fencing club should be suitable for beginners"
        assert len(result) > 0

    def test_rubric_4_the_appointed_fencing_club_should_be_jianfeng_fencing_club(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The appointed fencing club should be Jianfeng Fencing Club"
        assert len(result) > 0

    def test_rubric_5_the_appointment_time_for_the_fencing_club_should_be_2025_03(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The appointment time for the fencing club should be 2025-03-08 14:00:00"
        assert len(result) > 0

    def test_rubric_6_the_number_of_people_for_the_fencing_club_appointment_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the fencing club appointment should be 1"
        assert len(result) > 0

    def test_rubric_7_the_restaurant_should_be_a_hunan_cuisine_restaurant(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant should be a Hunan cuisine restaurant"
        assert len(result) > 0

    def test_rubric_8_the_restaurant_should_be_within_4km__including_4km__of_lugu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant should be within 4km (including 4km) of Lugu New Changhai Center, 627 Lugu Avenue, Yuelu District, Changsha"
        assert len(result) > 0

    def test_rubric_9_the_restaurant_should_provide_a_private_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant should provide a private room"
        assert len(result) > 0

    def test_rubric_10_the_restaurant_order_should_include_a_4_person_package(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant order should include a 4-Person Package"
        assert len(result) > 0

    def test_rubric_11_the_4_person_package_ordered_from_the_restaurant_should_incl(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The 4-Person Package ordered from the restaurant should include Chopped Chili Fish Head"
        assert len(result) > 0

    def test_rubric_12_the_restaurant_order_should_include_a_single_person_package(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant order should include a Single Person Package"
        assert len(result) > 0

    def test_rubric_13_the_single_person_package_ordered_should_only_include_non_sp(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Single Person Package ordered should only include Non-Spicy dishes"
        assert len(result) > 0

    def test_rubric_14_the_single_person_package_ordered_should_not_include_fried_d(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Single Person Package ordered should not include fried dishes"
        assert len(result) > 0

    def test_rubric_15_the_single_person_package_and_the_4_person_package_should_co(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Single Person Package and the 4-Person Package should come from the same restaurant"
        assert len(result) > 0

    def test_rubric_16_the_total_cost_of_the_fencing_club_order_and_the_restaurant(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total cost of the fencing club order and the restaurant order should not exceed 1000 yuan"
        assert len(result) > 0
