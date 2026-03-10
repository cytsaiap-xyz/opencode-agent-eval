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
            if i in {1, 2}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17567836603457926_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17567836603457926_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 158) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836603457926_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2024-10-24 15:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17567836452455124_I00004'

    def test_order_2_has_correct_reservation_time(self):
        assert result[2].get("reservation_time") == '2024-10-24 15:00:00'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17567836603457926_I00002'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17567836603457926_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 168) < 1

    def test_rubric_0_diy_perfume_shop_s_rating_should_be_4_0_or_above(self):
        # Structural check - the answer must contain orders that satisfy:
        # "DIY perfume shop\'s rating should be 4.0 or above"
        assert len(result) > 0

    def test_rubric_1_diy_perfume_shop_should_be_in_the_top_five_of_the_highest_ra(self):
        # Structural check - the answer must contain orders that satisfy:
        # "DIY perfume shop should be in the top five of the highest rated stores"
        assert len(result) > 0

    def test_rubric_2_the_ordered_product_at_the_diy_perfume_shop_should_be_suitab(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered product at the DIY perfume shop should be suitable for beginners"
        assert len(result) > 0

    def test_rubric_3_the_ordered_product_at_the_diy_perfume_shop_should_include_t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered product at the DIY perfume shop should include teacher guidance"
        assert len(result) > 0

    def test_rubric_4_the_price_of_the_ordered_product_at_the_diy_perfume_shop_sho(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price of the ordered product at the DIY perfume shop should not exceed 200 yuan (including 200 yuan)"
        assert len(result) > 0

    def test_rubric_5_the_ordered_product_at_the_diy_perfume_shop_should_be_the_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered product at the DIY perfume shop should be the beginner perfume making starter package"
        assert len(result) > 0

    def test_rubric_6_the_appointment_time_for_the_diy_perfume_shop_should_be_octo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The appointment time for the DIY perfume shop should be October 24, 2024, at 15:00:00"
        assert len(result) > 0

    def test_rubric_7_the_number_of_people_for_the_diy_perfume_shop_appointment_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the DIY perfume shop appointment should be 1 person"
        assert len(result) > 0

    def test_rubric_8_the_diy_perfume_shop_appointment_should_be_at_fragrance_enco(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The DIY perfume shop appointment should be at Fragrance Encounter DIY Perfume Studio"
        assert len(result) > 0

    def test_rubric_9_the_reservation_order_for_suran_anti_aging_center__arc_de_tr(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The reservation order for Suran Anti-aging Center (Arc de Triomphe Store) (S17567836452455124_I00004) should have a status of cancelled"
        assert len(result) > 0

    def test_rubric_10_the_restaurant_order_should_include_both_italian_meat_pizza(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant order should include both Italian meat pizza and black pepper steak"
        assert len(result) > 0

    def test_rubric_11_the_restaurant_order_should_be_a_set_for_two__not_two_indivi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant order should be a set for two, not two individual sets"
        assert len(result) > 0

    def test_rubric_12_the_price_of_the_ordered_restaurant_meal_should_not_exceed_2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price of the ordered restaurant meal should not exceed 200 yuan (including 200 yuan)"
        assert len(result) > 0
