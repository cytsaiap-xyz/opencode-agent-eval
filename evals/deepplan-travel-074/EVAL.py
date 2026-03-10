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

    def test_constraint_train_cheapest_train_type_outbound_train(self):
        assert plan["outbound_transport"]["number"] == 'G710'

    def test_constraint_hotel_cheapest_star_correct_hotel(self):
        assert plan["hotel"]["name"] == 'Home Inn Selected - Dalian Kuiying Building Labor Park Branch'

    def test_constraint_hotel_cheapest_star_correct_star_rating(self):
        assert plan["hotel"]["star"] == 3

    def test_constraint_restaurant_cheapest_nearby_attraction_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert 'Eat Well 15 Yuan Self-Service Fast Food Restaurant' in meal_names

    def test_constraint_restaurant_highest_rated_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert 'Hang Xiaodian Dim Sum & Scallion Oil Noodles (Parkland Store)' in meal_names
