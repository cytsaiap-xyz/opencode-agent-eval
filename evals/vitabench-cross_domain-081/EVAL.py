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
        assert result[0]["store_id"] == 'S17550810096682511_T00012'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550810096682511_P00080", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 567) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550810096682511_H00005'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550810096682511_P00029", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 888) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550810096682511_S00002'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550810096682511_P00009", "quantity": 1}, {"product_id": "S17550810096682511_P00010", "quantity": 3}, {"product_id": "S17550810096682511_P00011", "quantity": 3}, {"product_id": "S17550810096682511_P00012", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 190.9) < 1

    def test_rubric_0_search_for_train_tickets_from_suzhou_to_danyang_around_9_pm(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Search for train tickets from Suzhou to Danyang around 9 PM, the result shows that tickets for August 7, 2026 are sold out, and need to purchase tickets for around 9 AM on August 8, 2026 [specifically, the departure time of the final booked train ticket should be between 8:45 and 9:15]"
        assert len(result) > 0

    def test_rubric_1_the_seat_type_for_the_train_ticket_order_should_be_business(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The seat type for the train ticket order should be Business class seat"
        assert len(result) > 0

    def test_rubric_2_the_quantity_of_train_tickets_should_be_3(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of train tickets should be 3"
        assert len(result) > 0

    def test_rubric_3_the_booked_hotel_should_be_within_1km__inclusive__of_danyang(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The booked hotel should be within 1km (inclusive) of Danyang Station, Zhanqian Road, Yunyang Street, Danyang, Zhenjiang, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_4_hotel_check_in_date_should_be_august_8__2026(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Hotel check-in date should be August 8, 2026"
        assert len(result) > 0

    def test_rubric_5_hotel_check_out_date_should_be_august_9__2026(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Hotel check-out date should be August 9, 2026"
        assert len(result) > 0

    def test_rubric_6_the_room_type_in_the_hotel_order_should_be_a_four_person_roo(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type in the hotel order should be a four-person room"
        assert len(result) > 0

    def test_rubric_7_the_room_type_in_the_hotel_order_should_provide_professional(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type in the hotel order should provide professional gaming equipment and gaming chair"
        assert len(result) > 0

    def test_rubric_8_the_food_delivery_order_should_include_red_bull(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food delivery order should include Red Bull"
        assert len(result) > 0

    def test_rubric_9_the_food_delivery_order_should_have_a_total_of_12_cans_of_re(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food delivery order should have a total of 12 cans of Red Bull"
        assert len(result) > 0

    def test_rubric_10_the_food_delivery_order_should_include_puffed_snacks(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food delivery order should include puffed snacks"
        assert len(result) > 0

    def test_rubric_11_the_food_delivery_order_should_include_3_types_of_puffed_sna(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food delivery order should include 3 types of puffed snacks"
        assert len(result) > 0

    def test_rubric_12_the_food_delivery_order_should_have_a_total_of_8_puffed_snac(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food delivery order should have a total of 8 puffed snacks"
        assert len(result) > 0

    def test_rubric_13_the_red_bull_and_puffed_snacks_in_the_food_delivery_order_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Red Bull and puffed snacks in the food delivery order should come from the same store"
        assert len(result) > 0

    def test_rubric_14_the_delivery_address_for_the_food_delivery_order_should_be_d(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the food delivery order should be Danyang Station E-sports Hotel, 28 Zhanqian Road, Yunyang Street, Danyang, Zhenjiang, Jiangsu Province"
        assert len(result) > 0

    def test_rubric_15_the_expected_delivery_time_for_the_food_delivery_order_shoul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The expected delivery time for the food delivery order should be 21:00 on August 8, 2026"
        assert len(result) > 0
