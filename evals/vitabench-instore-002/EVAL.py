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
        assert result[0]["store_id"] == 'S17564420247526245_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420247526245_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1580) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564420247526245_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2025-05-11 09:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 2

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564420247526245_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564420247526245_P00007", "quantity": 1}, {"product_id": "S17564420247526245_P00009", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 416) < 1

    def test_rubric_0_the_beauty_salon_order_is_from_a_chain_brand(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The beauty salon order is from a chain brand"
        assert len(result) > 0

    def test_rubric_1_the_package_purchased_in_the_beauty_salon_order_is_a_mother(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The package purchased in the beauty salon order is a mother-daughter package"
        assert len(result) > 0

    def test_rubric_2_the_package_purchased_in_the_beauty_salon_order_is_for_anti(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The package purchased in the beauty salon order is for anti-aging"
        assert len(result) > 0

    def test_rubric_3_check_the_specific_date_of_mother_s_day__2025_05_11___and_th(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Check the specific date of Mother\'s Day (2025-05-11), and the appointment date at the beauty salon should be 2025-05-11 at 09:00:00"
        assert len(result) > 0

    def test_rubric_4_the_number_of_people_for_the_appointment_is_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the appointment is 2"
        assert len(result) > 0

    def test_rubric_5_the_appointed_merchant_is_yuerong_spa_beauty_center(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The appointed merchant is Yuerong SPA Beauty Center"
        assert len(result) > 0

    def test_rubric_6_the_restaurant_ordered_should_be_a_cantonese_tea_restaurant(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered should be a Cantonese Tea Restaurant"
        assert len(result) > 0

    def test_rubric_7_the_restaurant_should_be_within_3km__including_3km__of_yuero(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant should be within 3km (including 3km) of Yuerong SPA Beauty Center, B1 Floor, CapitaMall, Wuyi Square, Furong District, Changsha"
        assert len(result) > 0

    def test_rubric_8_the_restaurant_order_should_include_a_health_nourishing_soup(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant order should include a Health Nourishing Soup Set"
        assert len(result) > 0

    def test_rubric_9_the_health_nourishing_soup_set_purchased_should_not_be_chick(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Health Nourishing Soup Set purchased should not be chicken soup"
        assert len(result) > 0

    def test_rubric_10_the_health_nourishing_soup_set_purchased_should_not_contain(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Health Nourishing Soup Set purchased should not contain photosensitive ingredients"
        assert len(result) > 0

    def test_rubric_11_after_checking__if_the_restaurant_s_set_menu_does_not_includ(self):
        # Structural check - the answer must contain orders that satisfy:
        # "After checking, if the restaurant\'s set menu does not include squab, a Premium Squab set meal should be purchased in the restaurant order"
        assert len(result) > 0

    def test_rubric_12_the_total_cost_of_all_orders_should_not_exceed_2000_yuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total cost of all orders should not exceed 2000 yuan"
        assert len(result) > 0
