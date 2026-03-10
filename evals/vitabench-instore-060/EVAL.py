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
        assert result[0]["store_id"] == 'S17567836638657808_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836638657808_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 128) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836638657808_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2024-06-15 14:30:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567836638657808_I00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836638657808_P00046", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 138) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17567836638657808_I00003'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17567836638657808_P00019", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 168) < 1

    def test_rubric_0_the_basketball_training_center_order_is_for_courses_targetin(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The basketball training center order is for courses targeting youth under 12 years old (including 12 years old)"
        assert len(result) > 0

    def test_rubric_1_the_basketball_training_center_order_is_coached_by_retired_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The basketball training center order is coached by Retired Basketball Coach"
        assert len(result) > 0

    def test_rubric_2_the_basketball_training_center_order_is_for_trial_class(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The basketball training center order is for Trial Class"
        assert len(result) > 0

    def test_rubric_3_the_basketball_training_center_order_price_should_be_below_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The basketball training center order price should be below 200 yuan (including 200 yuan)"
        assert len(result) > 0

    def test_rubric_4_the_reserved_basketball_training_center_should_be_xinghua_ba(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved basketball training center should be Xinghua Basketball Training Camp"
        assert len(result) > 0

    def test_rubric_5_the_reservation_time_for_the_basketball_training_center_is_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reservation time for the basketball training center is 2024-06-15 14:30:00"
        assert len(result) > 0

    def test_rubric_6_the_number_of_people_for_the_basketball_training_center_rese(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the basketball training center reservation is 1"
        assert len(result) > 0

    def test_rubric_7_the_hot_pot_restaurant_order_status_should_be_cancelled(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hot pot restaurant order status should be cancelled"
        assert len(result) > 0

    def test_rubric_8_the_ordered_restaurant_is_within_1km__including_1km__from_xi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered restaurant is within 1km (including 1km) from Xinghua Basketball Training Camp, B1 Floor, Xixi Intime City, 551 Wener West Road, West Lake District, Hangzhou"
        assert len(result) > 0

    def test_rubric_9_the_ordered_restaurant_provides_free_parking(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered restaurant provides Free Parking"
        assert len(result) > 0

    def test_rubric_10_the_ordered_restaurant_specializes_in_jiangsu_and_zhejiang_c(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered restaurant specializes in Jiangsu and Zhejiang Cuisine"
        assert len(result) > 0

    def test_rubric_11_the_restaurant_order_is_for_a_four_person_meal__not_four_ind(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant order is for a Four-person Meal, not four individual set meals"
        assert len(result) > 0

    def test_rubric_12_the_restaurant_order_must_include_fish_dishes(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant order must include Fish dishes"
        assert len(result) > 0

    def test_rubric_13_the_restaurant_order_price_should_be_within_200_yuan__includ(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant order price should be within 200 yuan (including 200 yuan)"
        assert len(result) > 0
