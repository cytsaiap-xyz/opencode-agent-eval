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

    def test_constraint_train_latest_arrival_direct_inbound_train(self):
        assert plan["inbound_transport"]["number"] == 'G2465'

    def test_constraint_hotel_star_service_required_correct_hotel(self):
        assert plan["hotel"]["name"] == 'Qiuguo Hotel Express (Beijing Beiqijia Wendu Water City Branch)'

    def test_constraint_hotel_star_service_required_correct_star_rating(self):
        assert plan["hotel"]["star"] == 3

    def test_constraint_hotel_star_service_required_required_service(self):
        assert 'Free Parking' in plan["hotel"]["services"]

    def test_constraint_restaurant_cheapest_nearby_attraction_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert 'Beijing Academy of Social Sciences Restaurant' in meal_names

    def test_constraint_attraction_top_rated_must_visit_satisfied(self):
        assert 'attraction_top_rated_must_visit' in plan["constraint_results"]
