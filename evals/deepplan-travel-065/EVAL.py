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

    def test_constraint_flight_arrival_time_range_inbound_flight(self):
        assert plan["inbound_transport"]["number"] == '3U2239'

    def test_constraint_hotel_star_service_required_correct_hotel(self):
        assert plan["hotel"]["name"] == 'Hangzhou Xiaoshan Airport Duoya Hotel'

    def test_constraint_hotel_star_service_required_correct_star_rating(self):
        assert plan["hotel"]["star"] == 4

    def test_constraint_hotel_star_service_required_required_service(self):
        assert 'Robot Service' in plan["hotel"]["services"]

    def test_constraint_attraction_must_visit_named_satisfied(self):
        assert 'attraction_must_visit_named' in plan["constraint_results"]

    def test_constraint_restaurant_closest_to_attraction_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert 'Hangzhou Xinxin Hotel · 1913 Restaurant' in meal_names
