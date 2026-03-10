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
        assert plan["inbound_transport"]["number"] == 'FM9221'

    def test_constraint_hotel_price_range_correct_hotel(self):
        assert plan["hotel"]["name"] == 'Renaissance Shanghai Zhongshan Park Hotel'

    def test_constraint_attraction_type_highest_rated_satisfied(self):
        assert 'attraction_type_highest_rated' in plan["constraint_results"]

    def test_constraint_attraction_must_visit_named_satisfied(self):
        assert 'attraction_must_visit_named' in plan["constraint_results"]
