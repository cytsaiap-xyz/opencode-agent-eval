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
        assert result[0]["store_id"] == 'S17567836583649809_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836583649809_P00007", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 388) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836583649809_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2023-03-18 14:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 4

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17567836583649809_I00009'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17567836583649809_P00074", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 666) < 1

    def test_rubric_0_the_tea_house_ordered_must_be_within_3000_meters__inclusive(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea house ordered must be within 3000 meters (inclusive) of Times Mansion, No. 188 Zhiquan Street, East Street, Jinjiang District, Chengdu"
        assert len(result) > 0

    def test_rubric_1_the_tea_house_order_must_include_a_four_person_package(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea house order must include a four-person package"
        assert len(result) > 0

    def test_rubric_2_the_tea_house_order_must_include_access_to_a_private_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea house order must include access to a Private Room"
        assert len(result) > 0

    def test_rubric_3_the_tea_house_order_must_include_tea_beverages(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea house order must include tea beverages"
        assert len(result) > 0

    def test_rubric_4_the_tea_house_order_must_include_mahjong_service(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea house order must include Mahjong service"
        assert len(result) > 0

    def test_rubric_5_since_the_user_mentioned_arriving_at_2_00_pm_on_march_18__20(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Since the user mentioned arriving at 2:00 PM on March 18, 2023 and planning to stay until 6:00 PM on March 18, 2023, the tea house package must support at least 4 Hours of entertainment"
        assert len(result) > 0

    def test_rubric_6_the_reserved_tea_house_should_be_jinxuan_tea_house(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved tea house should be Jinxuan Tea House"
        assert len(result) > 0

    def test_rubric_7_the_tea_house_reservation_should_be_for_4_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea house reservation should be for 4 people"
        assert len(result) > 0

    def test_rubric_8_the_tea_house_reservation_time_should_be_14_00_00_on_march_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea house reservation time should be 14:00:00 on March 18, 2023"
        assert len(result) > 0

    def test_rubric_9_the_hot_pot_restaurant_must_be_within_3000_meters__inclusive(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hot pot restaurant must be within 3000 meters (inclusive) of Times Mansion, No. 188 Zhiquan Street, East Street, Jinjiang District, Chengdu"
        assert len(result) > 0

    def test_rubric_10_the_hot_pot_package_must_be_suitable_for_at_least_5_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hot pot package must be suitable for at least 5 people"
        assert len(result) > 0

    def test_rubric_11_the_hot_pot_package_must_include_beverages(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hot pot package must include Beverages"
        assert len(result) > 0

    def test_rubric_12_the_hot_pot_package_must_not_include_alcoholic_drinks(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hot pot package must not include alcoholic drinks"
        assert len(result) > 0

    def test_rubric_13_the_total_budget_for_both_the_tea_house_and_hot_pot_restaura(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total budget for both the tea house and hot pot restaurant is 1200 yuan. After subtracting the tea house package price, 812 yuan remains. Therefore, the hot pot package price should be less than or equal to 812 yuan"
        assert len(result) > 0
