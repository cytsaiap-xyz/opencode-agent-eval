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
        assert result[0]["store_id"] == 'S17550807132085573_I00010'

    def test_order_0_has_correct_products(self):
        expected_products = [{"product_id": "S17550807132085573_P00056", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[0]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_0_has_correct_total_price(self):
        assert abs(result[0]["total_price"] - 5580) < 1

    def test_order_1_matches_expected_store(self):
        assert result[1]["store_id"] == 'S17550807132085573_S00001'

    def test_order_1_has_correct_products(self):
        expected_products = [{"product_id": "S17550807132085573_P00001", "quantity": 1}, {"product_id": "S17550807132085573_P00002", "quantity": 1}, {"product_id": "S17550807132085573_P00003", "quantity": 2}]
        for ep in expected_products:
            found = next(
                (p for p in result[1]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_1_has_correct_total_price(self):
        assert abs(result[1]["total_price"] - 636) < 1

    def test_order_2_matches_expected_store(self):
        assert result[2]["store_id"] == 'S17550807132085573_T00007'

    def test_order_2_has_correct_products(self):
        expected_products = [{"product_id": "S17550807132085573_P00036", "quantity": 1}]
        for ep in expected_products:
            found = next(
                (p for p in result[2]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {ep['product_id']}"
            assert found["quantity"] == ep["quantity"]

    def test_order_2_has_correct_total_price(self):
        assert abs(result[2]["total_price"] - 65) < 1

    def test_rubric_0_the_weight_loss_boot_camp_ordered_should_be_located_in_shiji(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The weight loss boot camp ordered should be located in Shijiazhuang"
        assert len(result) > 0

    def test_rubric_1_the_boot_camp_ordered_should_be_a_closed_training_mode(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The boot camp ordered should be a closed training mode"
        assert len(result) > 0

    def test_rubric_2_the_boot_camp_package_ordered_must_include_professional_coac(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The boot camp package ordered must include Professional Coaching Guidance"
        assert len(result) > 0

    def test_rubric_3_the_boot_camp_package_ordered_should_be_suitable_for_people(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The boot camp package ordered should be suitable for people with large-scale weight loss needs"
        assert len(result) > 0

    def test_rubric_4_the_boot_camp_package_ordered_should_be_suitable_for_beginne(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The boot camp package ordered should be suitable for beginners"
        assert len(result) > 0

    def test_rubric_5_the_boot_camp_package_ordered_must_include_fitness_test_serv(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The boot camp package ordered must include Fitness Test service"
        assert len(result) > 0

    def test_rubric_6_the_boot_camp_package_ordered_must_include_nutritional_advic(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The boot camp package ordered must include Nutritional Advice service"
        assert len(result) > 0

    def test_rubric_7_the_duration_of_the_boot_camp_package_should_be_one_month(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The duration of the boot camp package should be one month"
        assert len(result) > 0

    def test_rubric_8_the_delivery_address_for_the_food_delivery_order_should_be_r(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The delivery address for the food delivery order should be Room 502, Building 3, Jinxin Community, 198 Dongfeng West Road, Lianchi District, Baoding, Hebei Province"
        assert len(result) > 0

    def test_rubric_9_the_food_delivery_order_should_include_whey_protein(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food delivery order should include Whey Protein"
        assert len(result) > 0

    def test_rubric_10_the_food_delivery_order_should_include_bcaa_amino_acid(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food delivery order should include BCAA amino acid"
        assert len(result) > 0

    def test_rubric_11_the_food_delivery_order_should_include_post_workout_recovery(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The food delivery order should include Post-workout Recovery Drink"
        assert len(result) > 0

    def test_rubric_12_the_quantity_of_bcaa_amino_acid_in_the_food_delivery_order_s(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of BCAA amino acid in the food delivery order should be 1 tub"
        assert len(result) > 0

    def test_rubric_13_the_specification_of_the_post_workout_recovery_drink_should(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The specification of the Post-workout Recovery Drink should be by the pack"
        assert len(result) > 0

    def test_rubric_14_the_quantity_of_post_workout_recovery_drink_in_the_food_deli(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The quantity of Post-workout Recovery Drink in the food delivery order should be 2"
        assert len(result) > 0

    def test_rubric_15_the_three_products_in_the_food_delivery_order_should_come_fr(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The three products in the food delivery order should come from the same store"
        assert len(result) > 0

    def test_rubric_16_need_to_check_the_order_history_for_the_past_week__the_resul(self):
        # Structural check - the answer must contain orders that satisfy:
        # "Need to check the order history for the past week, the result shows ordered food delivery 3 times, not exceeding 5 times, so should book a train ticket for January 13, 2025"
        assert len(result) > 0

    def test_rubric_17_the_train_ticket_in_the_order_should_be_second_class_seat(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train ticket in the order should be Second Class Seat"
        assert len(result) > 0

    def test_rubric_18_the_train_in_the_order_should_be_the_earliest_departure_of_t(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train in the order should be the earliest departure of the day"
        assert len(result) > 0

    def test_rubric_19_the_train_in_the_order_should_be_from_baoding_to_shijiazhuan(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train in the order should be from Baoding to Shijiazhuang"
        assert len(result) > 0

    def test_rubric_20_the_train_in_the_order_should_be_high_speed_rail(self):
        # Structural check - the answer must contain orders that satisfy:
        # "The train in the order should be High-speed Rail"
        assert len(result) > 0
