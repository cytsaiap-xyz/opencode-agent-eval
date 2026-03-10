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

    def test_constraint_flight_cheapest_airline_direct_outbound_flight(self):
        assert plan["outbound_transport"]["number"] == 'G59098'

    def test_constraint_hotel_cheapest_star_correct_hotel(self):
        assert plan["hotel"]["name"] == "Ji Hotel Beijing Asian Games Village Bird's Nest"

    def test_constraint_hotel_cheapest_star_correct_star_rating(self):
        assert plan["hotel"]["star"] == 3

    def test_constraint_restaurant_must_eat_named_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert 'Yue She Restaurant (T+MALL Branch)' in meal_names

    def test_constraint_attraction_type_highest_rated_satisfied(self):
        assert 'attraction_type_highest_rated' in plan["constraint_results"]
