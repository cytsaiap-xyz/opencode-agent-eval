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

    def test_constraint_train_cheapest_train_type_outbound_train(self):
        assert plan["outbound_transport"]["number"] == 'G2644'

    def test_constraint_hotel_star_highest_rated_correct_hotel(self):
        assert plan["hotel"]["name"] == 'Nanjing Central Hotel'

    def test_constraint_hotel_star_highest_rated_correct_star_rating(self):
        assert plan["hotel"]["star"] == 5

    def test_constraint_restaurant_specific_cuisine_nearby_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert 'Xiang · All-Day Dining Restaurant' in meal_names

    def test_constraint_attraction_type_highest_rated_satisfied(self):
        assert 'attraction_type_highest_rated' in plan["constraint_results"]
