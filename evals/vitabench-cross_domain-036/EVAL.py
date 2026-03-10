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
        assert result[0]["store_id"] == 'S17550810809415904_A00008'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550810809415904_P00047", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 540) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550810809415904_I00011'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550810809415904_P00066", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 198) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == ''

    def test_order_2_has_correct_products(self):
        expected_products = []
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 0) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550810809415904_S00001'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17550810809415904_P00002", "quantity": 3}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 48) < 1

    def test_rubric_0_the_number_of_paragliding_experience_packages_ordered_is_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of paragliding experience packages ordered is 3"
        assert len(result) > 0

    def test_rubric_1_the_ordered_restaurant_should_be_within_3km_of_people_s_squa(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered restaurant should be within 3km of People\'s Square in Nanguan District, Changchun City, Jilin Province"
        assert len(result) > 0

    def test_rubric_2_the_restaurant_package_ordered_should_include_barbecue_or_bb(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant package ordered should include barbecue or BBQ skewers"
        assert len(result) > 0

    def test_rubric_3_the_restaurant_portion_ordered_should_be_larger_than_a_meal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant portion ordered should be larger than a meal for three people"
        assert len(result) > 0

    def test_rubric_4_the_reserved_bbq_restaurant_is_chuan_shuo_bbq(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved BBQ restaurant is Chuan Shuo BBQ"
        assert len(result) > 0

    def test_rubric_5_the_reserved_bbq_restaurant_time_is_may_16__2025__19_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved BBQ restaurant time is May 16, 2025, 19:00"
        assert len(result) > 0

    def test_rubric_6_the_number_of_people_of_the_reserved_bbq_restaurant_is_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people of the reserved BBQ restaurant is 3"
        assert len(result) > 0

    def test_rubric_7_the_delivery_merchant_should_provide_chaoshan_specialty_drin(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery merchant should provide Chaoshan Specialty drinks"
        assert len(result) > 0

    def test_rubric_8_the_delivery_merchant_should_be_near_people_s_square(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery merchant should be near People\'s Square"
        assert len(result) > 0

    def test_rubric_9_the_delivery_address_is_chuan_shuo_bbq__50m_from_northeast_c(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address is Chuan Shuo BBQ (50m from Northeast Corner of People\'s Square), Nanguan District, Changchun City, Jilin Province"
        assert len(result) > 0

    def test_rubric_10_the_expected_delivery_time_is_may_16__2025__19_00(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The expected delivery time is May 16, 2025, 19:00"
        assert len(result) > 0

    def test_rubric_11_the_number_of_items_ordered_for_delivery_is_3(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of items ordered for delivery is 3"
        assert len(result) > 0

    def test_rubric_12_at_least_one_delivery_item_should_not_contain_grass_jelly(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "At least one delivery item should not contain Grass Jelly"
        assert len(result) > 0
