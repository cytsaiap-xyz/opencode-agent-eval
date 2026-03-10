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
        assert result[0]["store_id"] == 'S17550802098853509_I00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802098853509_P00058", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 328) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802098853509_S00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802098853509_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 58) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550802098853509_I00011'

    def test_order_2_has_correct_reservation_time(self):
        assert result[2].get("reservation_time") == '2025-03-28 15:30:00'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 1

    def test_rubric_0_the_food_delivery_order_must_be_organic_healthy_vegetarian_c(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food delivery order must be organic healthy vegetarian cuisine"
        assert len(result) > 0

    def test_rubric_1_the_food_delivery_restaurant_must_offer_dine_in_service(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food delivery restaurant must offer dine-in service"
        assert len(result) > 0

    def test_rubric_2_the_food_delivery_ingredients_cannot_contain_broccoli(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food delivery ingredients cannot contain broccoli"
        assert len(result) > 0

    def test_rubric_3_the_food_delivery_order_cannot_include_high_purine_foods__su(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food delivery order cannot include high purine foods (such as organ meats/seafood soup/Matsutake Mushroom Soup/Kelp and Mushroom Soup, etc.)"
        assert len(result) > 0

    def test_rubric_4_the_food_delivery_order_cannot_contain_caffeine(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food delivery order cannot contain caffeine"
        assert len(result) > 0

    def test_rubric_5_the_food_delivery_order_arrival_time_should_be_around_7_30_o(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food delivery order arrival time should be around 7:30 on March 27, 2025 [i.e., the estimated delivery time is within the 7:15-7:45 interval]"
        assert len(result) > 0

    def test_rubric_6_the_food_delivery_address_is_room_1205__building_3__lead_sho(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food delivery address is Room 1205, Building 3, Lead SHOW Plaza, Quanxiu Road, Donghai Street, Fengze District, Quanzhou, Fujian Province"
        assert len(result) > 0

    def test_rubric_7_must_search_for_and_provide_information_about_high_end_bath(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Must search for and provide information about high-end bath and steam bath centers"
        assert len(result) > 0

    def test_rubric_8_the_bath_establishment_ordered_must_provide_steam_bath_rooms(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The bath establishment ordered must provide steam bath rooms and professional massage services"
        assert len(result) > 0

    def test_rubric_9_the_bath_package_ordered_should_include_multiple_therapy_ser(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The bath package ordered should include multiple therapy services such as steam bath, massage, and foot massage"
        assert len(result) > 0

    def test_rubric_10_the_bath_package_needs_to_include_face_masks(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The bath package needs to include face masks"
        assert len(result) > 0

    def test_rubric_11_the_bath_center_appointment_time_must_be_in_the_afternoon(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The bath center appointment time must be in the afternoon"
        assert len(result) > 0
