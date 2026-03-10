import json
import os
import pytest

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "task-data.json")) as _f:
    task_data = json.load(_f)
with open(os.path.join(_dir, "answer.json")) as _f:
    plan = json.load(_f)

constraints = task_data["hard_constraints"]
meta = task_data["meta_info"]


class TestDeepPlanningTravelTask:
    def test_plan_has_correct_origin_and_destination(self):
        assert plan["origin"]
        assert plan["destination"]

    def test_plan_has_correct_number_of_days(self):
        assert plan["days"] == meta["days"]

    def test_plan_has_correct_number_of_travelers(self):
        assert plan["people_number"] == meta["people_number"]

    def test_constraint_flight_cheapest_manufacturer_direct_outbound_flight(self):
        assert plan["outbound_transport"]["number"] == 'CZ6217'

    def test_constraint_hotel_star_highest_rated_correct_hotel(self):
        assert plan["hotel"]["name"] == 'Orange Hotel Beijing South Railway Station'

    def test_constraint_hotel_star_highest_rated_correct_star_rating(self):
        assert plan["hotel"]["star"] == 3

    def test_constraint_restaurant_must_eat_named_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert 'Pebbles Courtyard Mexican Restaurant' in meal_names

    def test_constraint_restaurant_specific_tag_nearby_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert 'Chengdu Beijing Office Restaurant (Shudu Hotel Branch)' in meal_names
