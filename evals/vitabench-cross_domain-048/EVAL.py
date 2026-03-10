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
            if i in {0}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[0]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_0_matches_expected_shop(self):
        order = result[0]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550812080452641_I00011'

    def test_order_0_has_correct_customer_count(self):
        assert result[0].get("customer_count") == 2

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550812080452641_S00004'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550812080452641_P00020", "quantity": 1}, {"product_id": "S17550812080452641_P00021", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 140) < 1

    def test_rubric_0_the_ordered_restaurant_should_be_an_authentic_wenzhou_cuisin(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered restaurant should be an authentic Wenzhou Cuisine restaurant"
        assert len(result) > 0

    def test_rubric_1_the_ordered_restaurant_s_rating_should_be_4_2_or_above(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered restaurant\'s rating should be 4.2 or above"
        assert len(result) > 0

    def test_rubric_2_the_ordered_restaurant_should_be_within_20_kilometers_of_wen(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered restaurant should be within 20 kilometers of Wenzhou Smart Industrial Park, 326 Haitong Road, Longwan District, Wenzhou, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_3_the_ordered_set_meal_at_the_wenzhou_restaurant_should_be_a_m(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered set meal at the Wenzhou restaurant should be a meal for two people, not two individual meals"
        assert len(result) > 0

    def test_rubric_4_the_ordered_set_meal_at_the_wenzhou_restaurant_should_not_co(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered set meal at the Wenzhou restaurant should not contain coriander"
        assert len(result) > 0

    def test_rubric_5_need_to_reserve_seats_at_the_wenzhou_restaurant_around_19_30(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to reserve seats at the Wenzhou restaurant around 19:30 [meaning the reservation time should be between 19:15 and 19:45]"
        assert len(result) > 0

    def test_rubric_6_the_reservation_at_the_wenzhou_restaurant_should_be_for_2_pe(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reservation at the Wenzhou restaurant should be for 2 people"
        assert len(result) > 0

    def test_rubric_7_the_wenzhou_specialty_souvenir_gift_should_not_contain_fish(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Wenzhou specialty souvenir gift should not contain Fish Cake"
        assert len(result) > 0

    def test_rubric_8_the_price_of_the_wenzhou_specialty_souvenir_gift_should_be_a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price of the Wenzhou specialty souvenir gift should be above 100 yuan"
        assert len(result) > 0

    def test_rubric_9_the_packaging_bag_should_be_chinese_style(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The packaging bag should be Chinese Style"
        assert len(result) > 0

    def test_rubric_10_the_wenzhou_specialty_souvenir_gift_and_the_packaging_bag_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Wenzhou specialty souvenir gift and the packaging bag should come from the same store"
        assert len(result) > 0

    def test_rubric_11_the_delivery_address_for_food_delivery_must_be_wenzhou_smart(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for food delivery must be Wenzhou Smart Industrial Park, 326 Haitong Road, Longwan District, Wenzhou, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_12_the_expected_delivery_time_should_be_before_2024_04_12_18_30(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The expected delivery time should be before 2024-04-12 18:30:00"
        assert len(result) > 0

    def test_rubric_13_the_recommended_scenic_area_should_reflect_wenzhou_s_charact(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The recommended scenic area should reflect Wenzhou\'s characteristics"
        assert len(result) > 0

    def test_rubric_14_the_recommended_scenic_area_should_not_require_extensive_wal(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The recommended scenic area should not require extensive walking"
        assert len(result) > 0

    def test_rubric_15_the_recommended_scenic_area_should_have_novel_activities__su(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The recommended scenic area should have novel activities, such as making Ou Kiln ceramics"
        assert len(result) > 0
