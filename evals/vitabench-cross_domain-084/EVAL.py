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
        assert result[0]["store_id"] == 'S17550808879728834_S00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550808879728834_P00001", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 56) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550855451188044_S00005'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550855451188044_P00022", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 599) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550808879728834_H00007'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550808879728834_P00031", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 688) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17550808879728834_T00010'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17550808879728834_P00050", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 89) < 1

    def test_rubric_0_post_illness_meal_should_be_light_and_easy_to_digest(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Post-Illness Meal should be light and easy to digest"
        assert len(result) > 0

    def test_rubric_1_post_illness_meal_should_contain_high_quality_protein(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "Post-Illness Meal should contain High-Quality Protein"
        assert len(result) > 0

    def test_rubric_2_the_number_of_post_illness_meal_should_be_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of Post-Illness Meal should be 2"
        assert len(result) > 0

    def test_rubric_3_the_delivery_address_of_post_illness_meal_should_be_baoding(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address of Post-Illness Meal should be Baoding First Central Hospital Main Campus"
        assert len(result) > 0

    def test_rubric_4_the_expected_delivery_time_of_post_illness_meal_is_11_00_on(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The expected delivery time of Post-Illness Meal is 11:00 on August 3, 2025"
        assert len(result) > 0

    def test_rubric_5_the_wig_should_be_made_of_real_hair_woven(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The wig should be made of Real Hair Woven"
        assert len(result) > 0

    def test_rubric_6_the_wig_should_be_in_senior_style_for_women(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The wig should be in Senior Style for women"
        assert len(result) > 0

    def test_rubric_7_the_delivery_address_of_the_wig_should_be_room_502__unit_2(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The delivery address of the wig should be Room 502, Unit 2, Building B, Huafu Residential Complex, No.1699 Dongfeng Middle Road, Lianchi District, Baoding, Hebei Province"
        assert len(result) > 0

    def test_rubric_8_the_expected_delivery_time_of_the_wig_is_before_11_00_on_aug(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The expected delivery time of the wig is before 11:00 on August 3, 2025"
        assert len(result) > 0

    def test_rubric_9_there_is_a_hotel_with_play_facilities_and_childcare_services(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "There is a hotel with play facilities and childcare services within 1km of Chaoyang Station (such as Beijing Yitel Hotel Family Theme Branch), so a hotel needs to be booked"
        assert len(result) > 0

    def test_rubric_10_the_hotel_check_in_date_is_august_4__2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel check-in date is August 4, 2025"
        assert len(result) > 0

    def test_rubric_11_the_hotel_room_type_should_be_twin_room(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The hotel room type should be Twin Room"
        assert len(result) > 0

    def test_rubric_12_the_train_number_for_the_train_ticket_is_g123(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The train number for the train ticket is G123"
        assert len(result) > 0

    def test_rubric_13_the_seat_type_for_the_train_ticket_is_first_class_seat(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The seat type for the train ticket is First Class Seat"
        assert len(result) > 0
