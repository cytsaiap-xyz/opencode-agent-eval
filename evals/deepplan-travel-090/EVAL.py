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

    def test_constraint_flight_cheapest_direct_outbound_flight(self):
        assert plan["outbound_transport"]["number"] == 'MF8414'

    def test_constraint_hotel_newest_decoration_correct_hotel(self):
        assert plan["hotel"]["name"] == 'Ji Hotel Xiamen Zhongshan Road Botanical Garden Hotel'

    def test_constraint_attraction_all_of_type_satisfied(self):
        assert 'attraction_all_of_type' in plan["constraint_results"]

    def test_constraint_attraction_type_highest_rated_satisfied(self):
        assert 'attraction_type_highest_rated' in plan["constraint_results"]
