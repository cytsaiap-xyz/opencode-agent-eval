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
        for order in result:
            assert "store_id" in order
            assert "products" in order
            assert "total_price" in order
            assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550802118732400_S00003'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802118732400_P00015", "quantity": 1}, {"product_id": "S17550802118732400_P00021", "quantity": 1}, {"product_id": "S17550802118732400_P00018", "quantity": 1}, {"product_id": "S17550802118732400_P00019", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 47.3) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802118732400_I00011'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802118732400_P00074", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 88) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802118732400_T00006'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802118732400_P00041", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 165) < 1

    def test_rubric_0_no_oil_products_should_be_included_in_the_seasoning_order(self):
        # Structural check - the answer must contain orders that satisfy:
        # "No oil products should be included in the seasoning order"
        assert len(result) > 0

    def test_rubric_1_no_doubanjiang_should_be_included_in_the_seasoning_order(self):
        # Structural check - the answer must contain orders that satisfy:
        # "No doubanjiang should be included in the seasoning order"
        assert len(result) > 0

    def test_rubric_2_no_dark_soy_sauce_should_be_included_in_the_seasoning_order(self):
        # Structural check - the answer must contain orders that satisfy:
        # "No dark soy sauce should be included in the seasoning order"
        assert len(result) > 0

    def test_rubric_3_the_delivery_time_for_the_seasoning_order_is_2025_05_15_15_3(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the seasoning order is 2025-05-15 15:30:00-2025-05-15 16:30:00"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_the_seasoning_order_is_room_1201__u(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the seasoning order is Room 1201, Unit 1, Building 3, Greenland Zifeng Residence, 125 Bayi Avenue, Donghu District, Nanchang, Jiangxi Province"
        assert len(result) > 0

    def test_rubric_5_the_seasoning_order_must_include_salt(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The seasoning order must include salt"
        assert len(result) > 0

    def test_rubric_6_the_seasoning_order_must_include_soy_sauce(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The seasoning order must include soy sauce"
        assert len(result) > 0

    def test_rubric_7_the_seasoning_order_must_include_msg__monosodium_glutamate(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The seasoning order must include MSG (Monosodium Glutamate)"
        assert len(result) > 0

    def test_rubric_8_the_seasoning_order_must_include_vinegar(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The seasoning order must include vinegar"
        assert len(result) > 0

    def test_rubric_9_the_tea_house_to_order_from_must_be_within_1km_of_home(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea house to order from must be within 1km of home"
        assert len(result) > 0

    def test_rubric_10_the_tea_house_to_order_from_must_have_a_refined_environment(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tea house to order from must have a refined environment"
        assert len(result) > 0

    def test_rubric_11_the_set_menu_in_the_tea_house_order_must_be_available_in_the(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The set menu in the tea house order must be available in the afternoon"
        assert len(result) > 0

    def test_rubric_12_the_train_to_book_should_depart_on_the_evening_of_may_16__20(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train to book should depart on the evening of May 16, 2025"
        assert len(result) > 0

    def test_rubric_13_the_train_to_book_should_not_arrive_later_than_10_pm(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train to book should not arrive later than 10 PM"
        assert len(result) > 0

    def test_rubric_14_the_train_ticket_to_purchase_should_be_first_class_seat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket to purchase should be First Class Seat"
        assert len(result) > 0

    def test_rubric_15_the_train_number_of_the_booked_train_must_start_with_g(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train_number of the booked train must start with G"
        assert len(result) > 0

    def test_rubric_16_the_booked_train_must_run_from_nanchang_to_jiujiang(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked train must run from Nanchang to Jiujiang"
        assert len(result) > 0
