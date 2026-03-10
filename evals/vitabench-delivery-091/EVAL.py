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
        assert result[0]["store_id"] == 'S30041269188859918_S18118'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S23785211641758589_P58323", "quantity": 2}, {"product_id": "S16307685929834239_P63079", "quantity": 1}, {"product_id": "S20095944891750071_P71251", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 174.6) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S30083969521409190_S86523'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S15458733652995175_P00321", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 24) < 1

    def test_rubric_0_the_delivery_address_for_the_dinner_order_should_be_room_502(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the dinner order should be Room 502, Building 3, Evergrande Oasis, Intersection of Richu Road and Binzhi Road, Feidong County, Hefei, Anhui Province"
        assert len(result) > 0

    def test_rubric_1_the_expected_delivery_time_for_the_dinner_order_should_be_ar(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The expected delivery time for the dinner order should be around 2025-09-26 19:30:00"
        assert len(result) > 0

    def test_rubric_2_xiao_cai_yuan_new_hui_cuisine_should_be_selected_as_the_merc(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Xiao Cai Yuan New Hui Cuisine should be selected as the merchant  for the dinner order"
        assert len(result) > 0

    def test_rubric_3_the_dinner_order_should_include_2_single_person_set_meals(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dinner order should include 2 single-person set meals"
        assert len(result) > 0

    def test_rubric_4_the_total_number_of_items_in_the_dinner_order_should_be_3(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total number of items in the dinner order should be 3"
        assert len(result) > 0

    def test_rubric_5_the_dinner_order_needs_to_include_a_note_requesting_two_sets(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dinner order needs to include a note requesting two sets of disposable tableware"
        assert len(result) > 0

    def test_rubric_6_the_delivery_address_for_the_pot_stickers_order_for_tomorrow(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the pot stickers order for tomorrow\'s breakfast should be Room 502, Building 3, Evergrande Oasis, Intersection of Richu Road and Binzhi Road, Feidong County, Hefei, Anhui Province"
        assert len(result) > 0

    def test_rubric_7_feishu_pot_stickers_should_be_selected_as_the_merchant_for_t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Feishu Pot Stickers should be selected as the merchant for tomorrow\'s breakfast needs"
        assert len(result) > 0

    def test_rubric_8_the_pot_stickers_order_should_not_include_any_products_other(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The pot stickers order should not include any products other than pot stickers"
        assert len(result) > 0
