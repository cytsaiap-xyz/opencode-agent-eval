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
        assert result[0]["store_id"] == 'S17550802130322823_I00014'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802130322823_P00073", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 1680) < 1

    def test_order_1_is_reservation(self):
        # This order is a reservation/booking, not a standard order
        order = result[1]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order

    def test_order_1_matches_expected_shop(self):
        order = result[1]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == 'S17550802130322823_I00014'

    def test_order_1_has_correct_reservation_time(self):
        assert result[1].get("reservation_time") == '2025-06-28 14:00:00'

    def test_order_1_has_correct_customer_count(self):
        assert result[1].get("customer_count") == 20

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802130322823_S00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802130322823_P00001 ", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 698) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550802130322823_T00007'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17550802130322823_P00036", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 600) < 1

    def test_rubric_0_the_recommended_tea_house_should_be_located_near_nanning_mix(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The recommended tea house should be located near Nanning Mixc Mall, specifically within Nanning Mixc Mall or within 3km of it"
        assert len(result) > 0

    def test_rubric_1_the_recommended_tea_house_should_have_a_large_private_room_t(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The recommended tea house should have a large private room that can accommodate at least 20 people"
        assert len(result) > 0

    def test_rubric_2_the_recommended_tea_house_set_should_be_suitable_for_20_peop(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The recommended tea house set should be suitable for 20 people"
        assert len(result) > 0

    def test_rubric_3_the_recommended_tea_house_set_should_include_tea(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The recommended tea house set should include tea"
        assert len(result) > 0

    def test_rubric_4_the_tea_house_reservation_should_be_for_tea_tasting_house(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tea house reservation should be for Tea Tasting House"
        assert len(result) > 0

    def test_rubric_5_the_tea_house_reservation_date_should_be_june_28__2025_at_2p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tea house reservation date should be June 28, 2025 at 2pm"
        assert len(result) > 0

    def test_rubric_6_the_tea_house_reservation_should_be_for_20_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The tea house reservation should be for 20 people"
        assert len(result) > 0

    def test_rubric_7_the_delivery_product_should_be_a_multi_layer_cake(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery product should be a multi-layer cake"
        assert len(result) > 0

    def test_rubric_8_the_ordered_cake_should_serve_20_people(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered cake should serve 20 people"
        assert len(result) > 0

    def test_rubric_9_the_ordered_cake_style_must_be_dignified_and_cozy(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered cake style must be dignified and cozy"
        assert len(result) > 0

    def test_rubric_10_the_ordered_cake_style_cannot_be_longevity_peach_style(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered cake style cannot be longevity peach style"
        assert len(result) > 0

    def test_rubric_11_the_ordered_cake_cannot_be_internet_celebrity_style(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered cake cannot be internet celebrity style"
        assert len(result) > 0

    def test_rubric_12_the_cake_delivery_time_should_be_june_28__2025_between_3_4pm(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The cake delivery time should be June 28, 2025 between 3-4pm"
        assert len(result) > 0

    def test_rubric_13_the_cake_delivery_location_should_be_tea_tasting_house__no_1(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The cake delivery location should be Tea Tasting House, No.140 Minzu Avenue, Qingxiu District, Nanning City, Guangxi Zhuang Autonomous Region"
        assert len(result) > 0

    def test_rubric_14_the_total_budget_is_3000_yuan__the_train_ticket_budget_canno(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The total budget is 3000 yuan, the train ticket budget cannot exceed 3000 minus the cost of the tea house order minus the cost of the cake order, therefore the ordered train tickets should be business class seat"
        assert len(result) > 0

    def test_rubric_15_the_train_ticket_order_date_should_be_the_morning_of_june_29(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train ticket order date should be the morning of June 29, 2025"
        assert len(result) > 0

    def test_rubric_16_the_quantity_of_train_tickets_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The quantity of train tickets should be 2"
        assert len(result) > 0
