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

    def test_constraint_train_latest_arrival_direct_inbound_train(self):
        assert plan["inbound_transport"]["number"] == 'G3423'

    def test_constraint_hotel_price_range_correct_hotel(self):
        assert plan["hotel"]["name"] == 'Vienna International Hotel (5.0 Edition Chengdu Chunxi Road Taikoo Li Branch)'

    def test_constraint_restaurant_closest_to_attraction_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert 'Zi Fei (Kuanzhai Alley Scenic Area Branch)' in meal_names

    def test_constraint_restaurant_highest_rated_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert 'Yi Dian Wei Restaurant (Great Wall Garden Branch)' in meal_names
