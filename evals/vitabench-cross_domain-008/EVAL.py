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
        assert result[0]["store_id"] == 'S17550802114659560_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802114659560_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 129.9) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550802114659560_I00010'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 2

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802114659560_A00005'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802114659560_P00023", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 130) < 1

    def test_rubric_0_the_delivery_order_should_be_for_a_waist_massager(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery order should be for a waist massager"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_should_be_jiazi_village__663_east_huach(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address should be Jiazi Village, 663 East Huacheng Avenue, Tianhe District, Guangzhou, Guangdong Province"
        assert len(result) > 0

    def test_rubric_2_the_estimated_delivery_time_should_be_october_27__2025__08_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time should be October 27, 2025, 08:15-09:15"
        assert len(result) > 0

    def test_rubric_3_the_reserved_restaurant_should_be_a_teahouse_serving_traditi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should be a teahouse serving Traditional Cantonese Cuisine"
        assert len(result) > 0

    def test_rubric_4_the_reserved_restaurant_should_offer_morning_tea_sets(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reserved restaurant should offer Morning Tea sets"
        assert len(result) > 0

    def test_rubric_5_the_morning_tea_set_ordered_at_the_restaurant_should_not_inc(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Morning Tea set ordered at the restaurant should not include tea fee"
        assert len(result) > 0

    def test_rubric_6_the_restaurant_reservation_should_be_for_2_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation should be for 2 people"
        assert len(result) > 0

    def test_rubric_7_the_restaurant_reservation_time_should_be_october_29__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant reservation time should be October 29, 2025, 09:30"
        assert len(result) > 0

    def test_rubric_8_the_double_ninth_chrysanthemum_exhibition_at_guangzhou_liuhu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Double Ninth Chrysanthemum Exhibition at Guangzhou Liuhua Lake Park for 2025 Double Ninth Festival will feature over 300 varieties of chrysanthemums, including traditional chrysanthemums, tall chrysanthemums, cliff chrysanthemums, and sculptural chrysanthemums, as well as intangible cultural heritage chrysanthemum tea tasting activities"
        assert len(result) > 0

    def test_rubric_9_the_ticket_price_for_the_double_ninth_chrysanthemum_exhibiti(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket price for the Double Ninth Chrysanthemum Exhibition at Guangzhou Liuhua Lake Park is 65 yuan per person"
        assert len(result) > 0

    def test_rubric_10_the_date_of_use_for_the_ordered_attraction_tickets_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The date of use for the ordered attraction tickets should be October 29, 2025"
        assert len(result) > 0

    def test_rubric_11_the_number_of_attraction_tickets_ordered_should_be_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of attraction tickets ordered should be 2"
        assert len(result) > 0
