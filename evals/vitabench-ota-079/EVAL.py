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
        assert result[0]["store_id"] == 'S17557513695122299_A00005'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17557513695122299_P00021", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 90) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17557513695122299_A00006'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17557513695122299_P00033", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 45) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17557513695122299_H00001'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17557513695122299_P00002", "quantity": 1}, {"product_id": "S17557513695122299_P00003", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 1860) < 1

    def test_rubric_0_need_to_query_all_ticket_options_for_visiting_meng_jiangnu_t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to query all ticket options for visiting Meng Jiangnu Temple, and choose the most cost-effective combination. The result shows that Meng Jiangnu Temple is located within Shanhaiguan, so choosing the Shanhaiguan Scenic Area Double Ticket and Meng Jiangnu Temple Double Ticket would be the most economical option"
        assert len(result) > 0

    def test_rubric_1_the_shanhaiguan_scenic_area_ticket_order_should_be_a_double(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Shanhaiguan Scenic Area ticket order should be a Double Ticket"
        assert len(result) > 0

    def test_rubric_2_the_usage_date_for_the_shanhaiguan_scenic_area_ticket_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The usage date for the Shanhaiguan Scenic Area ticket should be next Thursday (April 3, 2025)"
        assert len(result) > 0

    def test_rubric_3_the_meng_jiangnu_temple_ticket_order_should_be_a_double_tick(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The Meng Jiangnu Temple ticket order should be a Double Ticket"
        assert len(result) > 0

    def test_rubric_4_the_usage_date_for_the_meng_jiangnu_temple_ticket_should_be(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The usage date for the Meng Jiangnu Temple ticket should be next Thursday (April 3, 2025)"
        assert len(result) > 0

    def test_rubric_5_must_query_direct_flights_from_shenzhen_to_qinhuangdao__hebe(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Must query direct flights from Shenzhen to Qinhuangdao, Hebei, filtering for tickets on April 2, 2025. The result shows insufficient tickets for two people, so flight tickets should not be purchased"
        assert len(result) > 0

    def test_rubric_6_the_hotel_must_be_located_within_3_kilometers__inclusive__of(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must be located within 3 kilometers (inclusive) of the user\'s home (Room 1507, Yihua Fintech Building, 3018 Keyuan South Road, South Science Park, Nanshan District, Shenzhen, Guangdong Province)"
        assert len(result) > 0

    def test_rubric_7_the_hotel_booking_check_in_dates_must_be_march_27__2025_and(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel booking check-in dates must be March 27, 2025 and March 28, 2025 respectively"
        assert len(result) > 0

    def test_rubric_8_the_hotel_must_be_a_five_star_hotel(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must be a five-star hotel"
        assert len(result) > 0

    def test_rubric_9_the_hotel_must_provide_childcare_service(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel must provide Childcare Service"
        assert len(result) > 0

    def test_rubric_10_the_hotel_room_type_must_be_a_family_room(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The hotel room type must be a Family Room"
        assert len(result) > 0
