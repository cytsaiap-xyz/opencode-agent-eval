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

    def test_constraint_train_earliest_departure_direct_outbound_train(self):
        assert plan["outbound_transport"]["number"] == 'C7698'

    def test_constraint_hotel_cheapest_star_correct_hotel(self):
        assert plan["hotel"]["name"] == 'Guangzhou Xiangxue International Hotel Apartment (Baoneng Performing Arts Center Branch)'

    def test_constraint_hotel_cheapest_star_correct_star_rating(self):
        assert plan["hotel"]["star"] == 5

    def test_constraint_restaurant_cheapest_nearby_attraction_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert 'Jingbao Restaurant · Established 1994' in meal_names

    def test_constraint_restaurant_must_eat_named_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert 'Zhou Zhi Ji Tea Restaurant (Guangren Road Branch)' in meal_names
