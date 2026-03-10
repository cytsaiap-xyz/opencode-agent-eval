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
        assert result[0]["store_id"] == 'S62563191519991599_S81379'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S21069456156190794_P14314", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 28.8) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S94923450644249735_S38024'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S87071804534303894_P59349", "quantity": 1}, {"product_id": "S58528214946920236_P00034", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 35.0) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S22399110519747136_S91526'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S14147194316063046_P67193", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 17.0) < 1

    def test_rubric_0_the_delivery_address_for_the_steamed_mutton_dumplings_order(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Steamed Mutton Dumplings order should be Main Hospital of the First Affiliated Hospital of Xi\'an Jiaotong University, No.277 Yanta West Road, Yanta District, Xi\'an, Shaanxi Province"
        assert len(result) > 0

    def test_rubric_1_the_estimated_delivery_time_for_the_steamed_mutton_dumplings(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the Steamed Mutton Dumplings order should be after 12:00 on September 10, 2025"
        assert len(result) > 0

    def test_rubric_2_the_steamed_mutton_dumplings_order_must_come_from_a_non_chai(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Steamed Mutton Dumplings order must come from a Non-chain Store"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_for_the_uncle_s_meat_soup_dumplings_and(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the uncle\'s meat soup dumplings and soup order should be Main Hospital of the First Affiliated Hospital of Xi\'an Jiaotong University, No.277 Yanta West Road, Yanta District, Xi\'an, Shaanxi Province"
        assert len(result) > 0

    def test_rubric_4_the_estimated_delivery_time_for_the_uncle_s_meat_soup_dumpli(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the uncle\'s meat soup dumplings and soup order should be around 12:00 on September 10, 2025"
        assert len(result) > 0

    def test_rubric_5_the_items_in_the_uncle_s_meat_soup_dumplings_and_soup_order(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The items in the uncle\'s meat soup dumplings and soup order should not be in set menu form"
        assert len(result) > 0

    def test_rubric_6_the_items_in_the_uncle_s_meat_soup_dumplings_and_soup_order(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The items in the uncle\'s meat soup dumplings and soup order should come from stores with branches in both Nanjing and Xi\'an"
        assert len(result) > 0

    def test_rubric_7_the_items_in_the_uncle_s_meat_soup_dumplings_and_soup_order(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The items in the uncle\'s meat soup dumplings and soup order must not contain seafood ingredients"
        assert len(result) > 0

    def test_rubric_8_the_delivery_address_for_the_yellow_tea_order_should_be_main(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Yellow Tea order should be Main Hospital of the First Affiliated Hospital of Xi\'an Jiaotong University, No.277 Yanta West Road, Yanta District, Xi\'an, Shaanxi Province"
        assert len(result) > 0

    def test_rubric_9_the_estimated_delivery_time_for_the_yellow_tea_order_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the Yellow Tea order should be around 12:00 on September 10, 2025"
        assert len(result) > 0

    def test_rubric_10_the_yellow_tea_order_item_specification_should_be_sugar_free(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Yellow Tea order item specification should be sugar-free (no additional sugar)"
        assert len(result) > 0
