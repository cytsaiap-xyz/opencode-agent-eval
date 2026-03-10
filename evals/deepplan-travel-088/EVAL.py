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

    def test_constraint_train_seat_class_outbound_train(self):
        assert plan["outbound_transport"]["number"] == 'T122'

    def test_constraint_train_seat_class_inbound_train(self):
        assert plan["inbound_transport"]["number"] == 'G1714'

    def test_constraint_hotel_highest_rated_correct_hotel(self):
        assert plan["hotel"]["name"] == 'Zhengzhou Hanfeng Business Hotel'

    def test_constraint_restaurant_specific_tag_nearby_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert 'Harbor Restaurant' in meal_names

    def test_constraint_attraction_all_of_type_satisfied(self):
        assert 'attraction_all_of_type' in plan["constraint_results"]
