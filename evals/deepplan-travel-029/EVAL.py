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

    def test_constraint_train_cheapest_direct_inbound_train(self):
        assert plan["inbound_transport"]["number"] == 'D3103'

    def test_constraint_hotel_cheapest_brand_correct_hotel(self):
        assert plan["hotel"]["name"] == 'Suzhou Kunshan Hilton Garden Inn'

    def test_constraint_restaurant_specific_tag_nearby_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert 'Huixianglou Halal Restaurant' in meal_names

    def test_constraint_restaurant_highest_rated_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert 'Pingjiang Peach Blossom Land (Pingjiang No. 2 Branch)' in meal_names
