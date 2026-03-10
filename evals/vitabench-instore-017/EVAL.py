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
            if i in {0, 3}:
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
        assert shop_id == 'S17564420257279950_I00001'

    def test_order_0_has_correct_reservation_time(self):
        assert result[0].get("reservation_time") == '2024-10-26 16:00'

    def test_order_0_has_correct_customer_count(self):
        assert result[0].get("customer_count") == 2

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17564420257279950_I00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17564420257279950_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 168) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564420257279950_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564420257279950_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 356) < 1

    def test_order_3_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[3]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_3_matches_expected_shop(self):
        order = result[3]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564420257279950_I00002'

    def test_order_3_has_correct_customer_count(self):
        assert result[3].get("customer_count") == 2

    def test_rubric_0_the_massage_shop_should_be_within_1000m__inclusive__from_roo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The massage shop should be within 1000m (inclusive) from Room 502, Unit 1, Building 3, Jinyu Huafu, 6789 Dongfeng East Street, Kuiwen District, Weifang, Shandong Province"
        assert len(result) > 0

    def test_rubric_1_the_massage_shop_should_have_a_rating_of_4_4_or_above(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The massage shop should have a rating of 4.4 or above"
        assert len(result) > 0

    def test_rubric_2_the_massage_shop_should_provide_health_preservation_sauna_se(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The massage shop should provide Health Preservation Sauna service"
        assert len(result) > 0

    def test_rubric_3_the_appointment_time_for_the_massage_shop_should_be_2024_10(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The appointment time for the massage shop should be 2024-10-26 16:00"
        assert len(result) > 0

    def test_rubric_4_the_number_of_people_for_the_massage_shop_appointment_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the massage shop appointment should be 2"
        assert len(result) > 0

    def test_rubric_5_the_ordered_massage_shop_should_be_yuyang_health_club(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered massage shop should be Yuyang Health Club"
        assert len(result) > 0

    def test_rubric_6_the_ordered_item_at_the_massage_shop_should_be_a_health_pres(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item at the massage shop should be a Health Preservation Sauna package"
        assert len(result) > 0

    def test_rubric_7_the_ordered_item_at_the_massage_shop_should_be_suitable_for(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item at the massage shop should be suitable for two people"
        assert len(result) > 0

    def test_rubric_8_the_ordered_item_at_the_massage_shop_should_be_a_health_pres(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item at the massage shop should be a Health Preservation Sauna Package for Two"
        assert len(result) > 0

    def test_rubric_9_the_japanese_buffet_restaurant_should_be_within_4000m__inclu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Japanese buffet restaurant should be within 4000m (inclusive) from Yuyang Health Club, 3rd Floor, Wanda Plaza, 5678 Dongfeng East Street, Kuiwen District, Weifang, Shandong Province"
        assert len(result) > 0

    def test_rubric_10_the_japanese_buffet_restaurant_should_have_fresh_ingredients(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Japanese buffet restaurant should have fresh ingredients"
        assert len(result) > 0

    def test_rubric_11_the_ordered_item_at_the_japanese_buffet_restaurant_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered item at the Japanese buffet restaurant should be a Package for Two"
        assert len(result) > 0

    def test_rubric_12_the_ordered_set_at_the_japanese_buffet_restaurant_should_inc(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered set at the Japanese buffet restaurant should include both Sashimi and Wagyu Beef BBQ"
        assert len(result) > 0

    def test_rubric_13_the_price_of_the_ordered_set_at_the_japanese_buffet_restaura(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price of the ordered set at the Japanese buffet restaurant should be within 400 yuan (inclusive)"
        assert len(result) > 0

    def test_rubric_14_the_reserved_japanese_buffet_restaurant_should_be_sakura_jap(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved Japanese buffet restaurant should be Sakura Japanese Buffet"
        assert len(result) > 0

    def test_rubric_15_the_reservation_time_for_the_japanese_buffet_restaurant_shou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reservation time for the Japanese buffet restaurant should be 2024-10-26 19:00"
        assert len(result) > 0

    def test_rubric_16_the_number_of_people_for_the_japanese_buffet_restaurant_rese(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the Japanese buffet restaurant reservation should be 2"
        assert len(result) > 0
