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
        assert result[0]["store_id"] == 'S43240302180045417_S14076'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S19159328161115696_P29699", "quantity": 4}, {"product_id": "S39067932885983771_P89154", "quantity": 1}, {"product_id": "S18928897898954556_P47912", "quantity": 4}, {"product_id": "S23960545841735513_P82884", "quantity": 1}, {"product_id": "S14445001259369926_P29929", "quantity": 1}, {"product_id": "S28863166591108673_P17688", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 252.6) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S68441396243055633_S66153'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S11705981851273565_P59996", "quantity": 1}, {"product_id": "S20734804318993088_P33304", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 21) < 1

    def test_rubric_0_the_birthday_dinner_order_must_be_from_yao_palace(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The birthday dinner order must be from Yao Palace"
        assert len(result) > 0

    def test_rubric_1_the_birthday_dinner_order_needs_to_include_4_dishes__4_servi(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The birthday dinner order needs to include 4 dishes, 4 servings of soup, and 4 servings of rice, with at least one non-spicy dish"
        assert len(result) > 0

    def test_rubric_2_the_delivery_address_for_the_birthday_dinner_order_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the birthday dinner order should be Building 3, Unit 1, Taoyuan Residential Complex, No. 51 Taoyuan Road, Qingxiu District, Nanning City, Guangxi Zhuang Autonomous Region"
        assert len(result) > 0

    def test_rubric_3_the_estimated_delivery_time_for_the_birthday_dinner_order_sh(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the birthday dinner order should be before 18:45 on September 25, 2025"
        assert len(result) > 0

    def test_rubric_4_the_mother_s_special_request_order_must_be_from_tianfuxiang(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The mother\'s special request order must be from Tianfuxiang Fresh Ingredients Laoyou Main Branch (the store where the user previously ordered E-Fu noodles)"
        assert len(result) > 0

    def test_rubric_5_the_mother_s_special_request_order_should_include_one_servin(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The mother\'s special request order should include one serving each of Fresh Soup Pork Offal Rice Noodles and Sweet Potato Dessert Soup"
        assert len(result) > 0

    def test_rubric_6_the_delivery_address_for_the_mother_s_special_request_order(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the mother\'s special request order should be Building 3, Unit 1, Taoyuan Residential Complex, No. 51 Taoyuan Road, Qingxiu District, Nanning City, Guangxi Zhuang Autonomous Region"
        assert len(result) > 0

    def test_rubric_7_the_estimated_delivery_time_for_the_mother_s_special_request(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The estimated delivery time for the mother\'s special request order should be before 18:45 on September 25, 2025"
        assert len(result) > 0
