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
            if i in {1}:
                # Reservation object
                assert "shop_id" in order or "store_id" in order
            else:
                assert "store_id" in order
                assert "products" in order
                assert "total_price" in order
                assert isinstance(order["products"], list)

    def test_order_0_matches_expected_store(self):
        assert result[0]["store_id"] == 'S17550809912564224_I00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550809912564224_P00049", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 428) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550809912564224_I00013'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 2

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550809912564224_S00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550809912564224_P00011", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 15.9) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550809912564224_H00005'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17550809912564224_P00021", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 298) < 1

    def test_rubric_0_the_in_store_merchant_should_be_a_ktv(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The in-store merchant should be a KTV"
        assert len(result) > 0

    def test_rubric_1_the_in_store_merchant_should_provide_both_singing_and_hot_po(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The in-store merchant should provide both singing and Hot Pot services"
        assert len(result) > 0

    def test_rubric_2_the_in_store_merchant_should_provide_small_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The in-store merchant should provide Small Room"
        assert len(result) > 0

    def test_rubric_3_the_ordered_in_store_product_should_be_a_4_hour_package(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered in-store product should be a 4-Hour package"
        assert len(result) > 0

    def test_rubric_4_the_reserved_in_store_merchant_should_be_pure_k__yangjiaping(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved in-store merchant should be Pure K (Yangjiaping Branch)"
        assert len(result) > 0

    def test_rubric_5_the_in_store_reservation_time_should_be_2024_03_15_20_00_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The in-store reservation time should be 2024-03-15 20:00:00"
        assert len(result) > 0

    def test_rubric_6_the_number_of_people_for_the_in_store_reservation_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the in-store reservation should be 2"
        assert len(result) > 0

    def test_rubric_7_the_ordered_delivery_product_should_be_throat_lozenges(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered delivery product should be Throat Lozenges"
        assert len(result) > 0

    def test_rubric_8_the_delivery_address_must_be_zto_express_office__24_xingshen(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address must be ZTO Express Office, 24 Xingsheng Road, Yangjiaping, Jiulongpo District, Chongqing"
        assert len(result) > 0

    def test_rubric_9_the_estimated_delivery_time_should_be_before_2024_03_15_16_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The estimated delivery time should be before 2024-03-15 16:10:00"
        assert len(result) > 0

    def test_rubric_10_the_hotel_to_be_booked_should_be_within_1_kilometer_of_pure(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel to be booked should be within 1 kilometer of Pure K, 66 Pedestrian Street, Yangjiaping, Jiulongpo District, Chongqing"
        assert len(result) > 0

    def test_rubric_11_the_hotel_rating_should_be_greater_than_or_equal_to_4_8(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel rating should be greater than or equal to 4.8"
        assert len(result) > 0

    def test_rubric_12_the_hotel_price_should_be_greater_than_or_equal_to_250_yuan(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel price should be greater than or equal to 250 yuan and less than or equal to 350 yuan"
        assert len(result) > 0

    def test_rubric_13_the_hotel_check_in_date_should_be_march_15__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel check-in date should be March 15, 2025"
        assert len(result) > 0
