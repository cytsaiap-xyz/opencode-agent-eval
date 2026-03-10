import json
import os
import pytest
from solution import solve

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)

result = solve()
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
        assert result[0]["store_id"] == 'S17550809460281769_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550809460281769_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 68) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550809460281769_T00006'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550809460281769_P00027", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1288) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550809460281769_I00015'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 1

    def test_rubric_0_the_merchant_in_the_food_delivery_order_must_offer_dine_in_s(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The merchant in the food delivery order must offer dine-in service"
        assert len(result) > 0

    def test_rubric_1_the_food_delivery_order_must_be_for_chicken_with_pig_stomach(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery order must be for Chicken with Pig Stomach"
        assert len(result) > 0

    def test_rubric_2_the_food_delivery_items_must_not_contain_scallions(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The food delivery items must not contain scallions"
        assert len(result) > 0

    def test_rubric_3_the_price_of_items_in_the_food_delivery_order_must_be_50_yua(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of items in the food delivery order must be 50 yuan or more"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_the_food_order_must_be_building_12(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address for the food order must be Building 12, 3rd Floor, Zone C, Nanning Software Park, No.15 Innovation Road, High-tech Zone, Xixiangtang District, Nanning, Guangxi Zhuang Autonomous Region"
        assert len(result) > 0

    def test_rubric_5_the_delivery_time_for_the_food_order_should_be_before_12_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery time for the food order should be before 12:00 on May 19, 2025"
        assert len(result) > 0

    def test_rubric_6_the_train_ticket_must_be_for_the_shortest_journey_time__and(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train ticket must be for the shortest journey time, and the train should be G1256"
        assert len(result) > 0

    def test_rubric_7_if_no_suitable_high_speed_train_tickets_are_available_the_da(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "If no suitable High-Speed Train tickets are available the day before Dragon Boat Festival (2025-05-30), then the train ticket purchase date should be May 29, 2025"
        assert len(result) > 0

    def test_rubric_8_the_train_ticket_should_be_for_business_class_seat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train ticket should be for Business Class Seat"
        assert len(result) > 0

    def test_rubric_9_the_reserved_bar_must_provide_live_music_performance(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved bar must provide Live Music performance"
        assert len(result) > 0

    def test_rubric_10_the_reserved_bar_must_offer_exquisite_cocktail(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved bar must offer Exquisite Cocktail"
        assert len(result) > 0

    def test_rubric_11_the_reserved_bar_must_offer_solo_drinking_set(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved bar must offer Solo Drinking Set"
        assert len(result) > 0

    def test_rubric_12_the_bar_s_solo_drinking_set_should_include_appetizers(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The bar\'s Solo Drinking Set should include Appetizers"
        assert len(result) > 0

    def test_rubric_13_the_bar_reservation_time_should_be_20_00_on_may_19__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The bar reservation time should be 20:00 on May 19, 2025"
        assert len(result) > 0

    def test_rubric_14_the_bar_reservation_should_be_for_1_person(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The bar reservation should be for 1 person"
        assert len(result) > 0
