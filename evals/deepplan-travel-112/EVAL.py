import json
import os
import pytest
from solution import plan_trip

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "task-data.json")) as _f:
    task_data = json.load(_f)

plan = plan_trip()
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

    def test_constraint_flight_earliest_departure_direct_outbound_flight(self):
        assert plan["outbound_transport"]["number"] == 'MU2531'

    def test_constraint_hotel_newest_decoration_correct_hotel(self):
        assert plan["hotel"]["name"] == 'Jinjiang Inn (Hangzhou West Lake Cultural Square Metro Station Hotel)'

    def test_constraint_restaurant_specific_tag_nearby_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert 'Pizza Marzano Italian Restaurant (West Lake Cultural Plaza Branch)' in meal_names

    def test_constraint_restaurant_must_eat_named_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert 'Feng Yue Oriental Cuisine' in meal_names
