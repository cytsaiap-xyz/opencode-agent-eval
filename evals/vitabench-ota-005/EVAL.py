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
        assert result[0]["store_id"] == 'S17557505561351487_T00011'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505561351487_P00071", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 158) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505561351487_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505561351487_P00001", "quantity": 1}, {"product_id": "S17557505561351487_P00003", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 1596) < 1

    def test_rubric_0_train_departure_date_should_be_august_20__2027(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Train departure date should be August 20, 2027"
        assert len(result) > 0

    def test_rubric_1_tickets_for_trains_from_jinhua_to_xiapu_around_12_00_on_augu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Tickets for trains from Jinhua to Xiapu around 12:00 on August 20, 2027 are sold out, the train number of the ticket should be D3216"
        assert len(result) > 0

    def test_rubric_2_train_ticket_should_be_for_a_train_from_jinhua_to_xiapu(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Train ticket should be for a train from Jinhua to Xiapu"
        assert len(result) > 0

    def test_rubric_3_the_number_of_train_tickets_should_be_1(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The number of train tickets should be 1"
        assert len(result) > 0

    def test_rubric_4_homestay_price_should_be_between_500_and_1000_yuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Homestay price should be between 500 and 1000 yuan"
        assert len(result) > 0

    def test_rubric_5_homestay_should_provide_breakfast(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Homestay should provide breakfast"
        assert len(result) > 0

    def test_rubric_6_homestay_s_breakfast_should_be_local_specialty_cuisine(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Homestay\'s breakfast should be local specialty cuisine"
        assert len(result) > 0

    def test_rubric_7_homestay_should_provide_shuttle_service(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Homestay should provide shuttle service"
        assert len(result) > 0

    def test_rubric_8_the_room_type_ordered_for_the_homestay_should_be_sea_view_ro(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The room type ordered for the homestay should be Sea View Room"
        assert len(result) > 0

    def test_rubric_9_homestay_order_should_include_rooms_for_two_nights__on_augus(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Homestay order should include rooms for two nights, on August 20, 2027 and August 21, 2027 respectively"
        assert len(result) > 0

    def test_rubric_10_the_weather_in_jinhua_on_august_21__2027_will_be_showers__so(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The weather in Jinhua on August 21, 2027 will be showers, so train tickets from Jinhua to Xiapu for August 21, 2027 should not be purchased"
        assert len(result) > 0
