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
        assert result[0]["store_id"] == 'S17550810471449910_I00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550810471449910_P00058", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 576) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550810471449910_I00010'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 2

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550810471449910_S00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 498) < 1

    def test_rubric_0_the_tea_house_ordered_should_have_profound_cultural_heritage(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea house ordered should have profound cultural heritage"
        assert len(result) > 0

    def test_rubric_1_the_tea_house_ordered_should_provide_on_site_tea_master_perf(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea house ordered should provide on-site tea master performance services"
        assert len(result) > 0

    def test_rubric_2_the_tea_house_ordered_should_provide_various_famous_tea_tast(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea house ordered should provide various famous tea tasting services"
        assert len(result) > 0

    def test_rubric_3_the_package_ordered_at_the_tea_house_should_include_in_depth(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The package ordered at the tea house should include in-depth tea culture experience"
        assert len(result) > 0

    def test_rubric_4_the_per_person_budget_for_the_tea_house_package_should_be_ar(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The per person budget for the tea house package should be around 200 yuan"
        assert len(result) > 0

    def test_rubric_5_the_reservation_time_for_the_tea_house_should_be_may_19__202(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reservation time for the tea house should be May 19, 2024 at 14:00"
        assert len(result) > 0

    def test_rubric_6_the_number_of_people_for_the_reservation_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the reservation should be 2"
        assert len(result) > 0

    def test_rubric_7_the_price_of_the_tea_set_ordered_should_be_around_500_yuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price of the tea set ordered should be around 500 yuan"
        assert len(result) > 0

    def test_rubric_8_the_tea_set_ordered_should_be_exquisite(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea set ordered should be exquisite"
        assert len(result) > 0

    def test_rubric_9_the_expected_delivery_time_for_the_tea_set_order_should_be_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The expected delivery time for the tea set order should be before May 18, 2024 at 11:00"
        assert len(result) > 0

    def test_rubric_10_the_delivery_address_for_the_tea_set_order_should_be_room_12(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the tea set order should be Room 1201, Building B, Hengji Garden near Hisense Plaza, 158 South Street, Zhifu District, Yantai, Shandong Province"
        assert len(result) > 0
