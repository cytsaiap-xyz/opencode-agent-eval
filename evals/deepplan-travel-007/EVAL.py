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

    def test_constraint_train_seat_class_outbound_train(self):
        assert plan["outbound_transport"]["number"] == 'G3210'

    def test_constraint_train_seat_class_inbound_train(self):
        assert plan["inbound_transport"]["number"] == 'D1637'

    def test_constraint_hotel_cheapest_star_correct_hotel(self):
        assert plan["hotel"]["name"] == 'Jinjiang Inn Hotel (Taiyuan Wanda Plaza Longtan Park Branch)'

    def test_constraint_hotel_cheapest_star_correct_star_rating(self):
        assert plan["hotel"]["star"] == 2

    def test_constraint_attraction_top_rated_must_visit_satisfied(self):
        assert 'attraction_top_rated_must_visit' in plan["constraint_results"]

    def test_constraint_restaurant_specific_tag_nearby_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert 'Little Splash Skewer' in meal_names
