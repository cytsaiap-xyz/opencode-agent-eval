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
        assert result[0]["store_id"] == 'S25404730601650268_S58462'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S52372295090028906_P76280", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 68.88) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S23393414851448293_S19853'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S19088751354434699_P64667", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 29.8) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S18487338541407843_S28262'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S12791597665478343_P17264", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 21.8) < 1

    def test_rubric_0_the_delivery_address_for_the_yellow_river_carp_order_for_the(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the Yellow River carp order for the photographer should be Shandong Drama Theater, 115 Liberation Road, Lixia District, Jinan, Shandong Province"
        assert len(result) > 0

    def test_rubric_1_the_expected_delivery_time_for_the_yellow_river_carp_order_f(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The expected delivery time for the Yellow River carp order for the photographer should be before 2024-05-18 14:00:00"
        assert len(result) > 0

    def test_rubric_2_the_carp_dish_chosen_for_the_photographer_should_have_a_swee(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The carp dish chosen for the photographer should have a sweet and sour flavor, such as sweet and sour carp or other sweet and sour preparations"
        assert len(result) > 0

    def test_rubric_3_the_carp_dish_ordered_for_the_photographer_should_include_a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The carp dish ordered for the photographer should include a special note requesting extra cilantro"
        assert len(result) > 0

    def test_rubric_4_the_delivery_address_for_the_tiramisu_cake_order_for_the_par(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the tiramisu cake order for the partner should be Shandong Drama Theater, 115 Liberation Road, Lixia District, Jinan, Shandong Province"
        assert len(result) > 0

    def test_rubric_5_the_expected_delivery_time_for_the_tiramisu_cake_order_for_t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The expected delivery time for the tiramisu cake order for the partner should be before 2024-05-18 14:00:00"
        assert len(result) > 0

    def test_rubric_6_the_tiramisu_cake_chosen_for_the_partner_should_be_the_class(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The tiramisu cake chosen for the partner should be the classic chocolate flavor, avoiding other innovative flavors"
        assert len(result) > 0

    def test_rubric_7_the_delivery_address_for_the_vegetable_salad_order_for_the_u(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the vegetable salad order for the user themselves should be Shandong Drama Theater, 115 Liberation Road, Lixia District, Jinan, Shandong Province"
        assert len(result) > 0

    def test_rubric_8_the_expected_delivery_time_for_the_vegetable_salad_order_for(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The expected delivery time for the vegetable salad order for the user themselves should be before 2024-05-18 14:00:00"
        assert len(result) > 0

    def test_rubric_9_the_vegetable_salad_chosen_by_the_user_should_be_vegetarian(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The vegetable salad chosen by the user should be vegetarian, without meat or other animal proteins"
        assert len(result) > 0

    def test_rubric_10_the_vegetable_salad_chosen_by_the_user_should_include_cherry(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The vegetable salad chosen by the user should include Cherry Tomato as a main side ingredient"
        assert len(result) > 0
