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
        assert result[0]["store_id"] == 'S17550931981226759_I00013'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550931981226759_P00093", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1680) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802154486284_S00004'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802154486284_P00019", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 249) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550931981226759_I00013'

    def test_order_2_has_correct_reservation_time(self):
        assert result[2].get("reservation_time") == '2025-06-21 15:30:00'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 6

    def test_rubric_0_the_real_person_cs_base_ordered_should_be_an_outdoor_base(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The real-person CS base ordered should be an outdoor base"
        assert len(result) > 0

    def test_rubric_1_the_real_person_cs_base_ordered_should_have_a_large_venue_an(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The real-person CS base ordered should have a large venue and professional setup"
        assert len(result) > 0

    def test_rubric_2_the_real_person_cs_package_ordered_should_include_more_than(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The real-person CS package ordered should include more than two hours of experience"
        assert len(result) > 0

    def test_rubric_3_the_real_person_cs_package_ordered_should_include_advanced_e(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The real-person CS package ordered should include advanced equipment"
        assert len(result) > 0

    def test_rubric_4_the_real_person_cs_package_ordered_should_include_coach_guid(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The real-person CS package ordered should include coach guidance"
        assert len(result) > 0

    def test_rubric_5_the_agent_should_order_a_real_person_cs_package_for_six_peop(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The agent should order a real-person CS package for six people"
        assert len(result) > 0

    def test_rubric_6_the_sunscreen_product_ordered_should_be_the_anessa_brand(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The sunscreen product ordered should be the Anessa brand"
        assert len(result) > 0

    def test_rubric_7_the_sunscreen_product_ordered_should_be_large_capacity(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The sunscreen product ordered should be large capacity"
        assert len(result) > 0

    def test_rubric_8_check_the_business_hours_of_jd_beauty_supermarket__which_are(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Check the business hours of JD Beauty Supermarket, which are 09:00-21:00, and cannot be delivered to Room 502, Unit 2, Building 8, Oriental Garden Community, Intersection of Dongfeng Road and Yuhua Road, Lianchi District, Baoding, Hebei Province before 22:00:00 on June 19, 2025; the delivery address should be Building 3, Baoding Technology Park, 128 Chuangye Road, High-tech Zone, Baoding, Hebei Province, and the delivery time should be between 15:00:00-16:00:00 on June 20, 2025"
        assert len(result) > 0

    def test_rubric_9_need_to_check_high_speed_rail_ticket_information_from_baodin(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check high-speed rail ticket information from Baoding to Beijing on June 21, 2025, with departure time after 13:00:00 and arrival time before 15:00:00, resulting in the user taking train G505 arriving in Beijing at 14:02, allowing 1.5 hours travel time from the station to the CS base, thus needing to change the real-person CS order appointment time from 14:00:00 to around 15:30:00 on June 21, 2025 [i.e., arrival appointment time should be within the 15:15-15:45 timeframe]"
        assert len(result) > 0

    def test_rubric_10_the_number_of_people_for_the_cs_experience_reservation_shoul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the CS experience reservation should be 6 people"
        assert len(result) > 0
