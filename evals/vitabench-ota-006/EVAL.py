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
        assert result[0]["store_id"] == 'S17557505469225855_T00012'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557505469225855_P00062", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 65) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557505469225855_H00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557505469225855_P00001", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 238) < 1

    def test_rubric_0_train_tickets_must_be_for_departures_at_or_after_10_am(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Train tickets must be for departures at or after 10 AM"
        assert len(result) > 0

    def test_rubric_1_train_tickets_should_be_dated_for_sunday__may_18__2025(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Train tickets should be dated for Sunday, May 18, 2025"
        assert len(result) > 0

    def test_rubric_2_the_return_train_ticket_must_be_the_shortest_duration_option(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The return train ticket must be the shortest duration option available, which is G1571 (15:42-16:28, 46 minutes duration)"
        assert len(result) > 0

    def test_rubric_3_since_the_return_train_departs_after_3_pm__such_as_g1571_at(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Since the return train departs after 3 PM (such as G1571 at 15:42), the guesthouse must allow late check-out until 2 PM"
        assert len(result) > 0

    def test_rubric_4_the_guesthouse_should_be_within_2km_of_yinxu_ruins__xiaotun(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The guesthouse should be within 2km of Yinxu Ruins, Xiaotun Village, Yindu District, Anyang, Henan Province"
        assert len(result) > 0

    def test_rubric_5_the_guesthouse_decoration_style_must_be_retro_style(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The guesthouse decoration style must be Retro style"
        assert len(result) > 0

    def test_rubric_6_the_total_price_of_the_guesthouse_booking_must_be_less_than(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The total price of the guesthouse booking must be less than or equal to 250 yuan"
        assert len(result) > 0

    def test_rubric_7_the_guesthouse_booking_must_be_for_saturday_night__may_17__2(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The guesthouse booking must be for Saturday night (May 17, 2025)"
        assert len(result) > 0

    def test_rubric_8_information_about_historical_sites_related_to_feng_shen__god(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Information about historical sites related to Feng Shen (Gods Canonization) in Anyang should be searched, with the result being Youli City (where King Wen of Zhou was imprisoned, and the birthplace of \'I Ching\')"
        assert len(result) > 0
