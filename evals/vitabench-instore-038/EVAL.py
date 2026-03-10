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
            if i in {0, 2}:
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
        assert shop_id == 'S17564424237133476_I00003'

    def test_order_0_has_correct_reservation_time(self):
        assert result[0].get("reservation_time") == '2023-03-24 13:00:00'

    def test_order_0_has_correct_customer_count(self):
        assert result[0].get("customer_count") == 20

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17564424237133476_I00003'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17564424237133476_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1588) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564424237133476_I00003'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 20

    def test_rubric_0_the_venue_to_be_booked_is_a_large_party_venue(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The venue to be booked is a large party venue"
        assert len(result) > 0

    def test_rubric_1_the_party_venue_should_be_equipped_with_a_projector(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The party venue should be equipped with a projector"
        assert len(result) > 0

    def test_rubric_2_the_party_venue_reservation_time_is_next_friday__march_24__2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The party venue reservation time is next Friday, March 24, 2023, at 13:00:00"
        assert len(result) > 0

    def test_rubric_3_the_party_venue_reservation_is_for_20_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The party venue reservation is for 20 people"
        assert len(result) > 0

    def test_rubric_4_the_party_venue_package_duration_should_be_5_hours(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The party venue package duration should be 5 hours"
        assert len(result) > 0

    def test_rubric_5_the_party_venue_package_should_include_unlimited_ktv_access(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The party venue package should include Unlimited KTV access"
        assert len(result) > 0

    def test_rubric_6_the_party_venue_package_should_include_unlimited_billiards_a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The party venue package should include Unlimited Billiards access"
        assert len(result) > 0

    def test_rubric_7_the_party_venue_package_should_include_unlimited_mahjong_acc(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The party venue package should include Unlimited Mahjong access"
        assert len(result) > 0

    def test_rubric_8_the_party_venue_package_should_include_unlimited_ps5_gaming(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The party venue package should include Unlimited PS5 Gaming access"
        assert len(result) > 0

    def test_rubric_9_the_party_venue_package_should_include_unlimited_board_games(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The party venue package should include Unlimited Board Games access"
        assert len(result) > 0

    def test_rubric_10_the_party_venue_to_be_booked_should_be_lepai_party_house(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The party venue to be booked should be LePai Party House"
        assert len(result) > 0

    def test_rubric_11_the_restaurant_to_be_booked_must_be_a_chinese_restaurant(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant to be booked must be a Chinese restaurant"
        assert len(result) > 0

    def test_rubric_12_the_restaurant_must_be_within_3_kilometers__inclusive__of_le(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant must be within 3 kilometers (inclusive) of LePai Party House, located at the intersection of Wangcheng Avenue and Kaixuan East Road, Xigong District, Luoyang"
        assert len(result) > 0

    def test_rubric_13_the_restaurant_must_have_a_large_private_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant must have a large private room"
        assert len(result) > 0

    def test_rubric_14_the_reservation_time_is_next_friday__march_24__2023__at_18_3(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reservation time is next Friday, March 24, 2023, at 18:30:00"
        assert len(result) > 0

    def test_rubric_15_the_reservation_is_for_20_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reservation is for 20 people"
        assert len(result) > 0
