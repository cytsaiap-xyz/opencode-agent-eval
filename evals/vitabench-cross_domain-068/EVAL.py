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
        assert result[0]["store_id"] == 'S17550802180171503_I00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802180171503_P00053", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 888) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550802180171503_I00010'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 8

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802180171503_S00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802180171503_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 198) < 1

    def test_rubric_0_the_restaurant_ordered_from_must_offer_traditional_huaiyang(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered from must offer traditional Huaiyang Cuisine"
        assert len(result) > 0

    def test_rubric_1_the_restaurant_ordered_from_must_be_a_time_honored_brand(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered from must be a Time-honored Brand"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_s_set_menu_must_include_crab_roe_lion_s_head(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant\'s set menu must include Crab Roe Lion\'s Head Meatballs"
        assert len(result) > 0

    def test_rubric_3_the_restaurant_s_set_menu_must_include_longevity_noodles(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant\'s set menu must include Longevity Noodles"
        assert len(result) > 0

    def test_rubric_4_the_restaurant_should_have_private_rooms(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant should have Private Rooms"
        assert len(result) > 0

    def test_rubric_5_the_merchant_to_be_reserved_should_be_huaiyang_fu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The merchant to be reserved should be Huaiyang Fu"
        assert len(result) > 0

    def test_rubric_6_need_to_check_the_specific_date_of_winter_solstice__with_the(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the specific date of Winter Solstice, with the result being December 21, 2025, and the order reservation date should be December 23, 2025"
        assert len(result) > 0

    def test_rubric_7_the_number_of_diners_for_the_reservation_should_be_8(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of diners for the reservation should be 8"
        assert len(result) > 0

    def test_rubric_8_the_reservation_time_should_be_11_00_am(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reservation time should be 11:00 AM"
        assert len(result) > 0

    def test_rubric_9_the_product_to_be_ordered_should_be_a_tea_pet_ornament(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The product to be ordered should be a Tea Pet Ornament"
        assert len(result) > 0

    def test_rubric_10_the_ordered_product_must_match_with_purple_clay_tea_set__the(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered product must match with Purple Clay Tea Set, therefore a Purple Clay Material Tea Pet must be chosen"
        assert len(result) > 0

    def test_rubric_11_the_ordered_tea_pet_must_have_meanings_of_prolonging_life_an(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered Tea Pet must have meanings of Prolonging Life and Health"
        assert len(result) > 0

    def test_rubric_12_the_tea_pet_order_should_be_delivered_to_room_502__building(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Tea Pet order should be delivered to Room 502, Building 3, Zhongxing Mingyuan, 328 Didang Lake Road, Yuecheng District, Shaoxing, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_13_need_to_inquire_and_provide_information_about_the_botanical(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to inquire and provide information about the Botanical Garden ticket prices and senior discount policy; the result shows that Shaoxing Botanical Garden Adult Ticket is 30 yuan, Senior Ticket is 15 yuan, 50% cheaper than Adult Ticket"
        assert len(result) > 0

    def test_rubric_14_need_to_return_the_botanical_garden_opening_hours__opening_h(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to return the Botanical Garden opening hours; opening hours are 08:30-17:00, not later than 17:00, no need to book tickets in advance"
        assert len(result) > 0
