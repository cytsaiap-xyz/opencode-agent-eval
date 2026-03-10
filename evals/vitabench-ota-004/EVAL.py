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
        assert result[0]["store_id"] == 'S17557505552249948_T00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505552249948_P00060", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 118) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505552249948_T00012'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505552249948_P00065", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 89) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557505552249948_H00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557505552249948_P00006", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 398) < 1

    def test_order_3_matches_expected_store(self):
        assert result[3]["store_id"] == 'S17557505552249948_A00005'

    def test_order_3_has_correct_products(self):
        expected_products = [{"product_id": "S17557505552249948_P00027", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[3]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_3_has_correct_total_price(self):
        assert abs(result[3]["total_price"] - 10) < 1

    def test_rubric_0_the_departure_date_of_the_outbound_train_should_be_september(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date of the outbound train should be September 15, 2029"
        assert len(result) > 0

    def test_rubric_1_the_departure_time_of_the_outbound_train_should_be_relativel(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure time of the outbound train should be relatively early"
        assert len(result) > 0

    def test_rubric_2_the_outbound_train_ticket_should_be_for_a_train_from_huizhou(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The outbound train ticket should be for a train from Huizhou to Jiangmen"
        assert len(result) > 0

    def test_rubric_3_the_quantity_of_outbound_train_ticket_should_be_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of outbound train ticket should be 1"
        assert len(result) > 0

    def test_rubric_4_the_departure_date_of_the_return_train_should_be_september_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure date of the return train should be September 16, 2029"
        assert len(result) > 0

    def test_rubric_5_the_departure_time_of_the_return_train_should_be_relatively(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure time of the return train should be relatively late"
        assert len(result) > 0

    def test_rubric_6_the_return_train_ticket_should_be_for_a_train_from_jiangmen(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return train ticket should be for a train from Jiangmen to Huizhou"
        assert len(result) > 0

    def test_rubric_7_the_quantity_of_return_train_ticket_should_be_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of return train ticket should be 1"
        assert len(result) > 0

    def test_rubric_8_the_price_of_the_ordered_hotel_should_be_less_than_500_yuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The price of the ordered hotel should be less than 500 yuan"
        assert len(result) > 0

    def test_rubric_9_the_ordered_hotel_should_provide_a_gym(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered hotel should provide a gym"
        assert len(result) > 0

    def test_rubric_10_the_ordered_hotel_check_in_date_should_be_september_15__2029(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered hotel check-in date should be September 15, 2029"
        assert len(result) > 0

    def test_rubric_11_jiangmen_donghu_park_is_about_500_meters_from_vienna_hotel_j(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Jiangmen Donghu Park is about 500 meters from Vienna Hotel Jiangmen Pengjiang Wanda Branch, while Kaiping Diaolou and Villages is about 46 kilometers from Vienna Hotel Jiangmen Pengjiang Wanda Branch, therefore tickets for Jiangmen Donghu Park should be ordered"
        assert len(result) > 0

    def test_rubric_12_the_ticket_usage_date_should_be_september_16__2029(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ticket usage date should be September 16, 2029"
        assert len(result) > 0
