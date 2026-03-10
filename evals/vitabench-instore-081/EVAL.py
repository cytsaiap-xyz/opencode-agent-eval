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
            if i in {2}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17567842494216100_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567842494216100_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 172) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17567842494216100_I00002'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17567842494216100_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 128) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567842494216100_I00002'

    def test_order_2_has_correct_reservation_time(self):
        assert result[2].get("reservation_time") == '2025-03-29 20:20:00'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 1

    def test_rubric_0_on_march_29__2025__the_weather_in_luoyang_is_cloudy_without(self):
        # Structural check - the answer must contain orders that satisfy:
        # "On March 29, 2025, the weather in Luoyang is cloudy without rain, so the Korean Self-service BBQ restaurant should be within 500 meters (inclusive) of Jianxi Wanda"
        assert len(result) > 0

    def test_rubric_1_need_to_search_for_korean_self_service_bbq_restaurants_that(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to search for Korean Self-service BBQ restaurants that meet the criteria, select the one with the highest rating, which is Korean Charcoal BBQ, so the Korean Self-service BBQ restaurant order should be from Korean Charcoal BBQ"
        assert len(result) > 0

    def test_rubric_2_the_order_from_the_korean_self_service_bbq_restaurant_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The order from the Korean Self-service BBQ restaurant should be a Single Person Package"
        assert len(result) > 0

    def test_rubric_3_the_korean_self_service_bbq_restaurant_order_should_have_unl(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Korean Self-service BBQ restaurant order should have Unlimited Time"
        assert len(result) > 0

    def test_rubric_4_the_distance_from_the_nail_salon_to_jianxi_wanda_should_be_w(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The distance from the nail salon to Jianxi Wanda should be within 500m (inclusive)"
        assert len(result) > 0

    def test_rubric_5_the_nail_salon_s_closing_time_should_be_at_or_after_10_pm(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The nail salon\'s closing time should be at or after 10 PM"
        assert len(result) > 0

    def test_rubric_6_the_nail_salon_order_should_allow_style_of_your_choice(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The nail salon order should allow Style of Your Choice"
        assert len(result) > 0

    def test_rubric_7_the_nail_salon_order_should_be_a_half_tips___structure_nail(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The nail salon order should be a Half-tips + Structure Nail Package"
        assert len(result) > 0

    def test_rubric_8_the_total_expenditure_for_both_the_nail_salon_and_korean_sel(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total expenditure for both the nail salon and Korean Self-service BBQ restaurant should be within 300 yuan. The price of the items in the Korean Self-service BBQ restaurant order is 172 yuan. Therefore, the nail salon package price should be less than or equal to 128 yuan"
        assert len(result) > 0

    def test_rubric_9_the_nail_salon_should_accept_reservations(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The nail salon should accept reservations"
        assert len(result) > 0

    def test_rubric_10_the_nail_salon_that_should_be_reserved_is_fingertip_art_nail(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The nail salon that should be reserved is Fingertip Art Nail Salon"
        assert len(result) > 0

    def test_rubric_11_the_reservation_time_for_the_nail_salon_is_2025_03_29_20_20(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reservation time for the nail salon is 2025-03-29 20:20:00"
        assert len(result) > 0

    def test_rubric_12_the_number_of_people_for_the_nail_salon_reservation_is_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the nail salon reservation is 1"
        assert len(result) > 0
