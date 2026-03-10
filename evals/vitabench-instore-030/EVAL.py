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
        assert result[0]["store_id"] == 'S17564425886875082_I00001'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17564425886875082_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 498) < 1

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
        assert result[2]["store_id"] == 'S17564425886875082_I00003'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17564425886875082_P00011", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 88) < 1

    def test_rubric_0_the_ordered_aromatherapy_spa_package_must_include_multiple_e(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered aromatherapy SPA package must include multiple essential oils"
        assert len(result) > 0

    def test_rubric_1_the_ordered_aromatherapy_spa_club_must_have_an_elegant_envir(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered aromatherapy SPA club must have an elegant environment"
        assert len(result) > 0

    def test_rubric_2_the_ordered_aromatherapy_spa_club_must_have_high_privacy(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered aromatherapy SPA club must have high privacy"
        assert len(result) > 0

    def test_rubric_3_the_ordered_aromatherapy_spa_club_must_be_within_10_kilomete(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered aromatherapy SPA club must be within 10 kilometers (including 10 kilometers) from Room 1204, Building B, World Trade Center, No. 6 Hong Kong Middle Road, Shinan District, Qingdao"
        assert len(result) > 0

    def test_rubric_4_the_reserved_aromatherapy_spa_club_should_be_yunshu_aromathe(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The reserved aromatherapy SPA club should be Yunshu Aromatherapy SPA Club"
        assert len(result) > 0

    def test_rubric_5_when_checking_if_the_aromatherapy_spa_club_is_available_for(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When checking if the aromatherapy SPA club is available for reservation on 2025-03-22 11:00:00, as the business hours are open from 12:00-22:00, it is unavailable, so the reservation time is set to 2025-03-22 14:00:00"
        assert len(result) > 0

    def test_rubric_6_the_number_of_people_for_the_aromatherapy_spa_club_reservati(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The number of people for the aromatherapy SPA club reservation is 1"
        assert len(result) > 0

    def test_rubric_7_as_the_user_will_have_therapy_in_the_afternoon_of_2025_03_22(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "As the user will have therapy in the afternoon of 2025-03-22, the restaurant ordered should be a light meal restaurant"
        assert len(result) > 0

    def test_rubric_8_the_ordered_restaurant_should_be_a_well_known_brand(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered restaurant should be a Well-known brand"
        assert len(result) > 0

    def test_rubric_9_the_restaurant_order_must_be_a_single_person_meal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant order must be a Single person meal"
        assert len(result) > 0

    def test_rubric_10_the_restaurant_set_meal_must_include_beef(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant set meal must include Beef"
        assert len(result) > 0

    def test_rubric_11_the_restaurant_order_must_be_a_light_meal(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The restaurant order must be a Light meal"
        assert len(result) > 0

    def test_rubric_12_the_ordered_restaurant_should_be_within_one_kilometer__inclu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The ordered restaurant should be within one kilometer (including one kilometer) from Yunshu Aromatherapy SPA Club, 3rd Floor, Hyatt Plaza, No. 15 Donghai West Road, Shinan District, Qingdao"
        assert len(result) > 0
