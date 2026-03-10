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

    def test_constraint_train_departure_time_range_outbound_train(self):
        assert plan["outbound_transport"]["number"] == 'G7713'

    def test_constraint_hotel_star_service_required_correct_hotel(self):
        assert plan["hotel"]["name"] == 'Home Inn Neo - Shaoxing Passenger Transport Center Lu Xun Native Place'

    def test_constraint_hotel_star_service_required_correct_star_rating(self):
        assert plan["hotel"]["star"] == 2

    def test_constraint_hotel_star_service_required_required_service(self):
        assert 'TV Casting' in plan["hotel"]["services"]

    def test_constraint_attraction_all_free_attractions_satisfied(self):
        assert 'attraction_all_free_attractions' in plan["constraint_results"]

    def test_constraint_attraction_all_of_type_satisfied(self):
        assert 'attraction_all_of_type' in plan["constraint_results"]
