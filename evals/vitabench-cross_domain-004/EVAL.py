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
        assert result[0]["store_id"] == 'S17550802129832489_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802129832489_P00002", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 149.9) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802129832489_S00003'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802129832489_P00015", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 16.8) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550802129832489_F00008'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802129832489_P00045", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 580) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550802129832489_I00012'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17550802129832489_P00066", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 288) < 1

    def test_rubric_0_the_dumbbells_in_the_order_should_be_suitable_for_beginners(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dumbbells in the order should be suitable for beginners"
        assert len(result) > 0

    def test_rubric_1_the_delivery_address_for_the_dumbbells_order_is_room_502__un(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the dumbbells order is Room 502, Unit 1, Building 3, Rongcheng Youjun, Yanjiadi Urban Village Reconstruction Project (420 meters walk from Exit B of Yanjiadi Metro Station), Xishan District, Kunming City, Yunnan Province"
        assert len(result) > 0

    def test_rubric_2_to_ensure_check_in_at_11_pm__a_flight_arriving_two_and_a_hal(self):
        # Structural check - the answer must contain orders that satisfy:
        # "To ensure check-in at 11 PM, a flight arriving two and a half hours earlier should be chosen, with the ordered flight\'s arrival time being before 8:30 PM on June 5, 2025"
        assert len(result) > 0

    def test_rubric_3_the_price_of_the_ordered_flight_should_not_exceed_600(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price of the ordered flight should not exceed 600"
        assert len(result) > 0

    def test_rubric_4_the_ordered_flight_is_from_wuxi_to_kunming(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered flight is from Wuxi to Kunming"
        assert len(result) > 0

    def test_rubric_5_the_welcome_gift_order_should_include_items_with_kunming_spe(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The welcome gift order should include items with Kunming specialty"
        assert len(result) > 0

    def test_rubric_6_the_price_of_the_welcome_gift_should_not_exceed_20_yuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price of the welcome gift should not exceed 20 yuan"
        assert len(result) > 0

    def test_rubric_7_the_delivery_time_for_the_welcome_gift_should_be_the_morning(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery time for the welcome gift should be the morning of June 5, 2025"
        assert len(result) > 0

    def test_rubric_8_the_delivery_address_for_the_welcome_gift_is_tutu_guitu_bout(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the welcome gift is Tutu Guitu Boutique Homestay, No. 114 Baicao Village, Guanyinshan Community, Biji Street Office, Xishan District, Kunming City, Yunnan Province"
        assert len(result) > 0

    def test_rubric_9_the_restaurant_ordered_should_be_beautifully_decorated(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The restaurant ordered should be beautifully decorated"
        assert len(result) > 0

    def test_rubric_10_the_ordered_restaurant_should_have_a_rating_of_4_0_or_above(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered restaurant should have a rating of 4.0 or above"
        assert len(result) > 0

    def test_rubric_11_the_dishes_in_the_restaurant_set_meal_order_should_not_be_to(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dishes in the restaurant set meal order should not be too spicy"
        assert len(result) > 0

    def test_rubric_12_the_set_meal_in_the_restaurant_order_should_include_beverage(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The set meal in the restaurant order should include beverages"
        assert len(result) > 0

    def test_rubric_13_the_dishes_in_the_restaurant_set_meal_order_should_avoid_hig(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The dishes in the restaurant set meal order should avoid high-purine foods such as Seafood Master"
        assert len(result) > 0
