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
        assert result[0]["store_id"] == 'S25539361674255185_S67204'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S71751813192280767_P89342", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 25.0) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S18967463504826989_S43153'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S33950920453484028_P40840", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 35.8) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S30488026926582488_S65342'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S53536420214175419_P36001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 23.8) < 1

    def test_rubric_0_the_user_s_own_lunch_order_delivery_address_should_be_the_wo(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The user\'s own lunch order delivery address should be the work address at No. 398 Feicui Road, Shushan District, Hefei, Anhui Province, National Hefei Economic and Technological Development Zone"
        assert len(result) > 0

    def test_rubric_1_the_user_s_bean_curd_skin_with_stir_fried_meat_rice_bowl_ord(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The user\'s Bean Curd Skin with Stir-fried Meat Rice Bowl order should be scheduled for delivery around 12:00 on March 20, 2024, ensuring it can be finished before the mechanical maintenance work starts at 13:15"
        assert len(result) > 0

    def test_rubric_2_the_daughter_s_lunch_order_delivery_address_should_be_the_ho(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The daughter\'s lunch order delivery address should be the home address at Baowen Garden, Changhuai Street, Yaohai District, Hefei, Anhui Province"
        assert len(result) > 0

    def test_rubric_3_the_daughter_s_couple_s_lung_slices_set_meal_order_should_be(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The daughter\'s Couple\'s Lung Slices set meal order should be scheduled for delivery around 12:00 on March 20, 2024"
        assert len(result) > 0

    def test_rubric_4_the_daughter_s_couple_s_lung_slices_set_meal_order_should_sp(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The daughter\'s Couple\'s Lung Slices set meal order should specify a preference for no cilantro"
        assert len(result) > 0

    def test_rubric_5_the_daughter_s_lunch_order_should_include_beef_ingredients(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The daughter\'s lunch order should include Beef ingredients, in accordance with her dietary preferences"
        assert len(result) > 0

    def test_rubric_6_the_son_s_lunch_order_delivery_address_should_be_the_home_ad(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The son\'s lunch order delivery address should be the home address at Baowen Garden, Changhuai Street, Yaohai District, Hefei, Anhui Province"
        assert len(result) > 0

    def test_rubric_7_the_son_s_longjiang_pork_knuckle_rice_order_should_be_schedu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The son\'s Longjiang Pork Knuckle Rice order should be scheduled for delivery around 12:00 on March 20, 2024"
        assert len(result) > 0

    def test_rubric_8_the_son_s_longjiang_pork_knuckle_rice_order_should_specify_t(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The son\'s Longjiang Pork Knuckle Rice order should specify the large portion size to meet his increased appetite during his growth period"
        assert len(result) > 0
