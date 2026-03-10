import json
import os
import pytest

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "answer.json")) as _f:
    answer = json.load(_f)


class TestDistanceCalculation:
    def test_same_point_returns_near_zero(self):
        assert abs(answer["distance_same_point"]["distance_km"]) < 0.1

    def test_nyc_landmarks_distance(self):
        dist = answer["distance_nyc_landmarks"]["distance_km"]
        assert dist > 4
        assert dist < 8


class TestDayOfWeek:
    def test_correct_days(self):
        days = answer["day_of_week_checks"]["days"]
        assert days["2025-03-15"] == "saturday"
        assert days["2025-03-16"] == "sunday"
        assert days["2025-03-17"] == "monday"
        assert days["2025-03-18"] == "tuesday"


class TestBookingPlans:
    def test_basic_plans_valid(self):
        plans = answer["booking_plans_basic"]
        assert len(plans) >= 1
        for plan in plans:
            assert plan["nights"] == 2
            assert plan["total_cost"] <= 1000
            assert plan["total_cost"] == plan["hotel_cost"] + plan["restaurant_cost"]

    def test_4star_hotel_requirement(self):
        plans = answer["booking_plans_4star"]
        assert all(p["hotel"].get("stars", p["hotel"].get("star", 0)) >= 4 for p in plans)

    def test_pool_spa_requirement(self):
        plans = answer["booking_plans_pool_spa"]
        assert all(p["hotel"]["id"] == "h1" for p in plans)

    def test_monday_excludes_closed_restaurants(self):
        plans = answer["booking_plans_monday"]
        assert all(
            p["restaurant"]["id"] not in ("rest1", "rest5")
            for p in plans
        )

    def test_large_party_excludes_small_restaurants(self):
        plans = answer["booking_plans_large_party"]
        assert all(p["restaurant"]["id"] != "rest5" for p in plans)

    def test_tight_budget(self):
        plans = answer["booking_plans_tight_budget"]
        assert all(p["total_cost"] <= 120 for p in plans)
        if len(plans) > 0:
            assert any(p["hotel"]["id"] == "h2" for p in plans)

    def test_sorted_by_rating_then_cost(self):
        plans = answer["booking_plans_basic"]
        for i in range(1, len(plans)):
            prev_rating = plans[i - 1]["restaurant"]["rating"]
            curr_rating = plans[i]["restaurant"]["rating"]
            if prev_rating == curr_rating:
                assert plans[i]["total_cost"] >= plans[i - 1]["total_cost"]
            else:
                assert curr_rating < prev_rating


class TestBestPlan:
    def test_returns_best_plan(self):
        plan = answer["best_plan"]
        assert plan is not None
        assert plan["restaurant"]["rating"] == 4.9

    def test_no_plan_possible(self):
        result = answer["no_plan_possible"]
        assert result is None or result == [] or result == {}


class TestTransport:
    def test_finds_transport(self):
        transport = answer["transport_hotel_to_restaurant"]
        assert transport is not None
        assert transport["id"]
