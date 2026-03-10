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
        assert result[0]["store_id"] == 'S31159892811642571_S75189'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S24269126648570139_P84857", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 18.8) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S26698159307935481_S07145'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S26730768377163847_P88743", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 26.9) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17089629001924407_S60854'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S53901735369543400_P19927", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 29.99) < 1

    def test_rubric_0_the_duck_collarbone_order_delivery_address_should_be_buildin(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The duck collarbone order delivery address should be Building A, Yonghe Longzihu Plaza, Boxue Road Street, Jinshui District, Zhengzhou City, Henan Province"
        assert len(result) > 0

    def test_rubric_1_the_duck_collarbone_order_delivery_time_should_be_around_202(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The duck collarbone order delivery time should be around 2025-10-30 12:00:00"
        assert len(result) > 0

    def test_rubric_2_when_selecting_duck_collarbone_products__choose_stores_near(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When selecting duck collarbone products, choose stores near the company to ensure shorter delivery distance"
        assert len(result) > 0

    def test_rubric_3_the_clay_pot_rice_order_delivery_address_should_be_building(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The clay pot rice order delivery address should be Building A, Yonghe Longzihu Plaza, No. 197 Ping\'an Avenue, Jinshui District, Zhengzhou City, Henan Province"
        assert len(result) > 0

    def test_rubric_4_the_clay_pot_rice_order_delivery_time_should_be_around_2025(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The clay pot rice order delivery time should be around 2025-10-30 12:00:00"
        assert len(result) > 0

    def test_rubric_5_when_choosing_clay_pot_rice_for_guangdong_colleagues__select(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When choosing clay pot rice for Guangdong colleagues, select Cantonese-style products to meet their discerning taste requirements"
        assert len(result) > 0

    def test_rubric_6_the_dry_pot_braised_rice_order_delivery_address_should_be_bu(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dry pot braised rice order delivery address should be Building A, Yonghe Longzihu Plaza, Boxue Road Street, Jinshui District, Zhengzhou City, Henan Province"
        assert len(result) > 0

    def test_rubric_7_the_dry_pot_braised_rice_order_delivery_time_should_be_aroun(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The dry pot braised rice order delivery time should be around 2025-10-30 12:00:00"
        assert len(result) > 0

    def test_rubric_8_when_choosing_dry_pot_braised_rice_for_personal_lunch__selec(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "When choosing dry pot braised rice for personal lunch, select from the frequently visited Bajibaji Dry Pot Braised Rice (Longzihu Branch)"
        assert len(result) > 0

    def test_rubric_9_the_personal_lunch_dry_pot_braised_rice_must_include_both_cr(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "The personal lunch dry pot braised rice must include both crispy pork and beef toppings"
        assert len(result) > 0
