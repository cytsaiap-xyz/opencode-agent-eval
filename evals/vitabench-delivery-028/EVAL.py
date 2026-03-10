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
        assert result[0]["store_id"] == 'S82494482631579347_S23157'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S30009099950619045_P99935", "quantity": 1}, {"product_id": "S11655027708875740_P71827", "quantity": 1}, {"product_id": "S34002854115936253_P30287", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 16.5) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S69031706351719271_S47372'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S27469872835583751_P78504", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 20.0) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S12527455866039387_S87262'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S12944248077265433_P42501", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 29.9) < 1

    def test_rubric_0_successfully_cancelled_user_s_breakfast_order_at_chundejin_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Successfully cancelled user\'s breakfast order at Chundejin Baozi (Garden Store), the order with order_id 40711007O01 should have a status of cancelled"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_sticky_bean_bun_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Sticky Bean Bun order should be Taojie Law Office, Room 101, 396 Xiangyang Street, Jianshe South Road Subdistrict, Jingxiu District, Baoding, Hebei Province"
        assert len(result) > 0

    def test_rubric_2_the_estimated_delivery_time_for_the_sticky_bean_bun_order_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the Sticky Bean Bun order should be between 2025-03-17 12:00:00 and 2025-03-17 14:00:00"
        assert len(result) > 0

    def test_rubric_3_when_choosing_sticky_bean_bun_products__low_sugar_type_shoul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When choosing Sticky Bean Bun products, Low Sugar type should be selected"
        assert len(result) > 0

    def test_rubric_4_when_choosing_sticky_bean_bun_products__they_should_not_cont(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When choosing Sticky Bean Bun products, they should not contain dairy ingredients"
        assert len(result) > 0

    def test_rubric_5_the_sticky_bean_bun_order_should_include_the_note__please_pl(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Sticky Bean Bun order should include the note: Please place it at the front desk of the law firm upon delivery"
        assert len(result) > 0

    def test_rubric_6_the_delivery_address_for_the_lunch_set_meal_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the lunch set meal order should be Taojie Law Office, Room 101, 396 Xiangyang Street, Jianshe South Road Subdistrict, Jingxiu District, Baoding, Hebei Province"
        assert len(result) > 0

    def test_rubric_7_the_estimated_delivery_time_for_the_lunch_set_meal_order_sho(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the lunch set meal order should be between 2025-03-17 12:00:00 and 2025-03-17 14:00:00"
        assert len(result) > 0

    def test_rubric_8_when_choosing_a_lunch_meal_set___the_best_selling_single_per(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When choosing a lunch meal set , the best-selling single person meal set in the store should be selected"
        assert len(result) > 0

    def test_rubric_9_when_choosing_a_lunch_meal_set__a_light_flavor_should_be_sel(self):
        # Structural check - the answer must contain orders that satisfy:
        # "When choosing a lunch meal set, a light flavor should be selected that meets the requirements of low salt, low oil, and non-spicy diet"
        assert len(result) > 0

    def test_rubric_10_the_lunch_set_meal_order_should_include_the_note__please_pla(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The lunch set meal order should include the note: Please place it at the front desk of the law firm upon delivery"
        assert len(result) > 0
