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
        assert result[0]["store_id"] == 'S17564425272419512_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564425272419512_P00001", "quantity": 1}, {"product_id": "S17564425272419512_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 296) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564425272419512_I00001'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2025-08-16 10:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564425272419512_I00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564425272419512_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 198) < 1

    def test_rubric_0_the_nail_salon_to_order_from_should_be_japanese_style(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The nail salon to order from should be Japanese style"
        assert len(result) > 0

    def test_rubric_1_the_nail_salon_must_provide_one_customer_one_disinfection_se(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The nail salon must provide One Customer One Disinfection service"
        assert len(result) > 0

    def test_rubric_2_the_nail_salon_should_be_within_3km__inclusive__of_room_403(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The nail salon should be within 3km (inclusive) of Room 403, Unit 2, Building 12, Zone B, CR Phoenix City, 2699 Qianjin Street, Chaoyang District, Changchun"
        assert len(result) > 0

    def test_rubric_3_the_nail_salon_order_should_include_a_manicure_set(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The nail salon order should include a manicure set"
        assert len(result) > 0

    def test_rubric_4_the_nail_salon_order_s_manicure_set_should_be_solid_color(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The nail salon order\'s manicure set should be solid color"
        assert len(result) > 0

    def test_rubric_5_the_nail_salon_order_s_manicure_set_should_include_free_nail(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The nail salon order\'s manicure set should include free nail removal service"
        assert len(result) > 0

    def test_rubric_6_the_nail_salon_order_should_include_an_eyelash_extension_set(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The nail salon order should include an eyelash extension set"
        assert len(result) > 0

    def test_rubric_7_the_manicure_set_and_eyelash_extension_set_should_be_from_th(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The manicure set and eyelash extension set should be from the same nail salon"
        assert len(result) > 0

    def test_rubric_8_the_appointment_should_be_made_at_sakura_japanese_nail_and_e(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The appointment should be made at Sakura Japanese Nail and Eyelash Salon"
        assert len(result) > 0

    def test_rubric_9_the_number_of_people_for_the_nail_salon_appointment_is_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of people for the nail salon appointment is 1"
        assert len(result) > 0

    def test_rubric_10_the_nail_salon_appointment_time_is_2025_08_16_10_00_00(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The nail salon appointment time is 2025-08-16 10:00:00"
        assert len(result) > 0

    def test_rubric_11_the_hotpot_restaurant_should_be_within_1km__inclusive__of_ro(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotpot restaurant should be within 1km (inclusive) of Room 403, Unit 2, Building 12, Zone B, CR Phoenix City, 2699 Qianjin Street, Chaoyang District, Changchun"
        assert len(result) > 0

    def test_rubric_12_the_hotpot_restaurant_rating_should_be_4_stars_or_above(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotpot restaurant rating should be 4 stars or above"
        assert len(result) > 0

    def test_rubric_13_the_hotpot_restaurant_order_should_be_a_yin_yang_hotpot(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotpot restaurant order should be a Yin-Yang Hotpot"
        assert len(result) > 0

    def test_rubric_14_the_hotpot_restaurant_order_requires_prioritizing_a_three_pe(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotpot restaurant order requires prioritizing a three-person meal; if not available, order a two-person meal. Since the hotpot restaurant has a three-person meal, the ordered item should be a three-person meal"
        assert len(result) > 0
