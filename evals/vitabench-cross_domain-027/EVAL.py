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
        assert result[0]["store_id"] == 'S17550802104222125_S00002'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550802104222125_P00010", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 36.5) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550802104222125_I00012'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550802104222125_P00073", "quantity": 1}, {"product_id": "S17550802104222125_P00072", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 83) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550148868318956_T00010'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550802104222125_P00073", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 182) < 1

    def test_rubric_0_the_ordered_takeout_food_must_be_light_meal(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered takeout food must be light meal"
        assert len(result) > 0

    def test_rubric_1_the_ordered_takeout_food_must_include_meat__and_cannot_be_po(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered takeout food must include meat, and cannot be pork or beef"
        assert len(result) > 0

    def test_rubric_2_the_ordered_takeout_food_must_include_vegetables(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered takeout food must include vegetables"
        assert len(result) > 0

    def test_rubric_3_the_ordered_takeout_food_must_include_fruit(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered takeout food must include fruit"
        assert len(result) > 0

    def test_rubric_4_the_ordered_takeout_food_should_be_refreshing(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered takeout food should be refreshing"
        assert len(result) > 0

    def test_rubric_5_the_ordered_takeout_food_cannot_contain_high_purine_foods__s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered takeout food cannot contain high-purine foods (such as offal, seafood soup, shrimp, etc.)"
        assert len(result) > 0

    def test_rubric_6_the_ordered_takeout_food_cannot_contain_caffeine__such_as_co(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The ordered takeout food cannot contain caffeine (such as coffee, matcha, etc.)"
        assert len(result) > 0

    def test_rubric_7_the_delivery_address_for_the_takeout_order_should_be_south_a(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the takeout order should be South Area, East Garden Community, Garden Front Street, Pingcheng District, Datong, Shanxi Province"
        assert len(result) > 0

    def test_rubric_8_the_takeout_order_delivery_time_should_be_around_13_00(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The takeout order delivery time should be around 13:00"
        assert len(result) > 0

    def test_rubric_9_the_book_bar_ordered_should_be_less_than_2_5km_from_south_ar(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The book bar ordered should be less than 2.5km from South Area, East Garden Community, Garden Front Street, Pingcheng District, Datong, Shanxi Province"
        assert len(result) > 0

    def test_rubric_10_the_book_bar_ordered_should_have_a_quiet_environment(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The book bar ordered should have a quiet environment"
        assert len(result) > 0

    def test_rubric_11_the_book_bar_ordered_must_provide_tea_drink_service(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The book bar ordered must provide tea drink service"
        assert len(result) > 0

    def test_rubric_12_the_book_bar_set_ordered_should_include_tea__and_it_cannot_b(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The book bar set ordered should include tea, and it cannot be black tea"
        assert len(result) > 0

    def test_rubric_13_the_book_bar_set_ordered_should_include_private_reading_spac(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The book bar set ordered should include private reading space"
        assert len(result) > 0

    def test_rubric_14_the_departure_station_of_the_train_ordered_should_be_datong(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The departure station of the train ordered should be Datong Station"
        assert len(result) > 0

    def test_rubric_15_the_arrival_station_of_the_train_ordered_should_be_yuncheng(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The arrival station of the train ordered should be Yuncheng Station"
        assert len(result) > 0

    def test_rubric_16_the_train_ordered_must_depart_around_3_pm_on_june_4__2025__s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ordered must depart around 3 PM on June 4, 2025 [specifically, the train departure time should be between 2:45 and 3:15]"
        assert len(result) > 0

    def test_rubric_17_the_train_ticket_in_the_order_should_be_first_class_seat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket in the order should be First-class seat"
        assert len(result) > 0

    def test_rubric_18_the_train_number_in_the_ticket_order_should_be_g1208(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train number in the ticket order should be G1208"
        assert len(result) > 0
