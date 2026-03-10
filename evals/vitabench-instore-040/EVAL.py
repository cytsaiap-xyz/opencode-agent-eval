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
        assert result[0]["store_id"] == 'S17564424748542977_I00002'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564424748542977_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 168) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == ''

    def test_order_1_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 0) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17564424748542977_I00004'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564424748542977_P00016", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 42) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17564424748542977_I00006'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17564424748542977_P00025", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 68) < 1

    def test_rubric_0_the_hair_salon_should_be_within_500_meters_of_room_801__8th(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hair salon should be within 500 meters of Room 801, 8th Floor, Shaoxing Chamber of Commerce Building, 365 Victory East Road, Yuecheng District, Shaoxing, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_1_the_hair_salon_s_rating_should_be_4_0_or_above(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hair salon\'s rating should be 4.0 or above"
        assert len(result) > 0

    def test_rubric_2_the_ordered_service_at_the_hair_salon_should_include_essenti(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered service at the hair salon should include Essential Oil Treatment"
        assert len(result) > 0

    def test_rubric_3_the_ordered_service_at_the_hair_salon_should_include_styling(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered service at the hair salon should include Styling service"
        assert len(result) > 0

    def test_rubric_4_the_essential_oil_brand_used_in_the_essential_oil_treatment(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The essential oil brand used in the Essential Oil Treatment service must be Kérastase or Schwarzkopf"
        assert len(result) > 0

    def test_rubric_5_the_price_of_the_ordered_service_at_the_hair_salon_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of the ordered service at the hair salon should be 200 yuan or less"
        assert len(result) > 0

    def test_rubric_6_the_ordered_service_at_the_hair_salon_should_be_available_fo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered service at the hair salon should be available for use on May 8, 2025, at 12:10"
        assert len(result) > 0

    def test_rubric_7_the_appointment_time_at_the_hair_salon_should_be_may_8__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The appointment time at the hair salon should be May 8, 2025, at 12:10"
        assert len(result) > 0

    def test_rubric_8_the_appointment_at_the_hair_salon_should_be_for_1_person(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The appointment at the hair salon should be for 1 person"
        assert len(result) > 0

    def test_rubric_9_the_appointed_hair_salon_should_be_hair_story(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The appointed hair salon should be Hair Story"
        assert len(result) > 0

    def test_rubric_10_the_dine_in_restaurant_should_be_within_1_kilometer_of_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dine-in restaurant should be within 1 kilometer of Room 801, 8th Floor, Shaoxing Chamber of Commerce Building, 365 Victory East Road, Yuecheng District, Shaoxing, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_11_the_ordered_food_at_the_restaurant_should_be_a_single_person(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered food at the restaurant should be a single person meal"
        assert len(result) > 0

    def test_rubric_12_the_ordered_food_at_the_restaurant_should_not_contain_high_p(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered food at the restaurant should not contain high purine ingredients"
        assert len(result) > 0

    def test_rubric_13_the_ordered_food_at_the_restaurant_should_not_be_spicy(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered food at the restaurant should not be spicy"
        assert len(result) > 0

    def test_rubric_14_the_fruit_store_should_be_within_500_meters_of_room_801__8th(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The fruit store should be within 500 meters of Room 801, 8th Floor, Shaoxing Chamber of Commerce Building, 365 Victory East Road, Yuecheng District, Shaoxing, Zhejiang Province"
        assert len(result) > 0

    def test_rubric_15_the_ordered_items_from_the_fruit_store_should_include_at_lea(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered items from the fruit store should include at least 5 types of fruits"
        assert len(result) > 0

    def test_rubric_16_the_price_of_the_ordered_items_from_the_fruit_store_should_n(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The price of the ordered items from the fruit store should not exceed 100 yuan"
        assert len(result) > 0
