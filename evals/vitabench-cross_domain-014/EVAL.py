import json
import os
import pytest
from solution import solve

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)

result = solve()
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
        assert result[0]["store_id"] == 'S17550802091124808_I00009'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802091124808_P00049", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 188) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802091124808_S00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802091124808_P00002", "quantity": 1}, {"product_id": "S17550802091124808_P00005", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 25.8) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802091124808_A00007'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802091124808_P00037", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 20) < 1

    def test_rubric_0_the_ordered_caf__should_be_a_pet_caf(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered café should be a pet café"
        assert len(result) > 0

    def test_rubric_1_the_pet_caf__ordered_should_include_cats__corgi_and_rabbit(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The pet café ordered should include cats, Corgi and Rabbit"
        assert len(result) > 0

    def test_rubric_2_the_pet_caf__package_should_include_two_beverages_and_at_lea(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The pet café package should include two Beverages and at least 2 hours of pet interaction time"
        assert len(result) > 0

    def test_rubric_3_the_delivery_order_should_include_at_least_ten_small_packs_o(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order should include at least ten small packs of Pocket Tissues"
        assert len(result) > 0

    def test_rubric_4_the_delivery_order_should_include_one_pack_of_disinfectant_w(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery order should include one pack of Disinfectant Wipes"
        assert len(result) > 0

    def test_rubric_5_the_delivery_products_should_come_from_the_same_store(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery products should come from the same store"
        assert len(result) > 0

    def test_rubric_6_the_delivery_address_should_be_wanda_residence_east_zone__88(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address should be Wanda Residence East Zone, 888 Maocheng Middle Road, Yinzhou District, Ningbo, Zhejiang Province (470m walk from Siming Middle Road Metro Station Exit A1)"
        assert len(result) > 0

    def test_rubric_7_the_estimated_delivery_time_should_be_before_1_pm_on_april_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time should be before 1 PM on April 28, 2025"
        assert len(result) > 0

    def test_rubric_8_the_ordered_attraction_should_be_the_one_closest_to_cute_pet(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered attraction should be the one closest to Cute Pet Paradise Café (id: S17550802091124808_A00007)"
        assert len(result) > 0

    def test_rubric_9_admission_ticket_for_april_28__2025_should_be_purchased(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Admission Ticket for April 28, 2025 should be purchased"
        assert len(result) > 0
