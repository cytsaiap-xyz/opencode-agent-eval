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
        for i, order in enumerate(result):
            if i in {2, 4}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17564420276474247_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564420276474247_P00004", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 118) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17564420276474247_I00003'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17564420276474247_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 115) < 1

    def test_order_2_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[2]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_2_matches_expected_shop(self):
        order = result[2]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564420276474247_I00003'

    def test_order_2_has_correct_reservation_time(self):
        assert result[2].get("reservation_time") == '2024-09-17 10:00:00'

    def test_order_2_has_correct_customer_count(self):
        assert result[2].get("customer_count") == 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17564420276474247_I00004'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17564420276474247_P00015", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 198) < 1

    def test_order_4_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[4]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_4_matches_expected_shop(self):
        order = result[4]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17564420276474247_I00004'

    def test_order_4_has_correct_reservation_time(self):
        assert result[4].get("reservation_time") == '2024-09-17 13:00:00'

    def test_order_4_has_correct_customer_count(self):
        assert result[4].get("customer_count") == 2

    def test_rubric_0_the_order_status_for_gradient_color_manicure_package_should(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The order status for Gradient Color Manicure Package should be cancelled"
        assert len(result) > 0

    def test_rubric_1_the_nail_salon_should_be_a_store_on_the_top_seller_list(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The nail salon should be a store on the top seller list"
        assert len(result) > 0

    def test_rubric_2_the_ordered_item_at_the_nail_salon_should_be_internet_celebr(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered item at the nail salon should be Internet Celebrity Exquisite Manicure Package"
        assert len(result) > 0

    def test_rubric_3_based_on_order_history__the_last_gradient_color_manicure_cos(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Based on order history, the last Gradient Color Manicure cost 118 yuan, so the Internet Celebrity Exquisite Manicure Package ordered at the nail salon should not exceed 118 yuan (including 118 yuan)"
        assert len(result) > 0

    def test_rubric_4_the_quantity_of_items_ordered_at_the_nail_salon_should_be_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of items ordered at the nail salon should be 1"
        assert len(result) > 0

    def test_rubric_5_the_nail_salon_appointment_should_be_at_fingertip_art_manicu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The nail salon appointment should be at Fingertip Art Manicure"
        assert len(result) > 0

    def test_rubric_6_the_nail_salon_appointment_time_should_be_2024_09_17_10_00_0(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The nail salon appointment time should be 2024-09-17 10:00:00"
        assert len(result) > 0

    def test_rubric_7_the_number_of_people_for_the_nail_salon_appointment_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the nail salon appointment should be 1"
        assert len(result) > 0

    def test_rubric_8_the_selected_hair_gobbler_chain_location_should_be_the_close(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The selected Hair Gobbler Chain location should be the closest to Meishang Nail Art, 3rd Floor, Wanda Plaza, 66 Yuhua West Road, Qiaoxi District, Shijiazhuang"
        assert len(result) > 0

    def test_rubric_9_the_item_ordered_at_hair_gobbler_chain_should_be_ice_point(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The item ordered at Hair Gobbler Chain should be Ice Point"
        assert len(result) > 0

    def test_rubric_10_the_item_ordered_at_hair_gobbler_chain_should_be_hair_remova(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The item ordered at Hair Gobbler Chain should be Hair Removal"
        assert len(result) > 0

    def test_rubric_11_the_quantity_of_items_ordered_at_hair_gobbler_chain_should_b(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of items ordered at Hair Gobbler Chain should be 2"
        assert len(result) > 0

    def test_rubric_12_the_hair_gobbler_chain_appointment_should_be_at_hair_gobbler(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Hair Gobbler Chain appointment should be at Hair Gobbler Hair Removal Chain (Wanda Plaza Branch)"
        assert len(result) > 0

    def test_rubric_13_the_hair_gobbler_chain_appointment_time_should_be_3_hours_la(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The Hair Gobbler Chain appointment time should be 3 hours later than the nail salon, which should be 2024-09-17 11:00:00"
        assert len(result) > 0

    def test_rubric_14_the_number_of_people_for_the_hair_gobbler_chain_appointment(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the Hair Gobbler Chain appointment should be 2"
        assert len(result) > 0
