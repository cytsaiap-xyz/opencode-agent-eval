import pytest
from planner import (
    get_day_of_week, add_minutes, fits_in_time_window, estimate_travel_time,
    generate_itinerary, validate_itinerary,
)


class TestGetDayOfWeek:
    def test_returns_correct_days(self):
        assert get_day_of_week('2025-03-15') == 'saturday'
        assert get_day_of_week('2025-03-17') == 'monday'
        assert get_day_of_week('2025-03-19') == 'wednesday'


class TestAddMinutes:
    def test_basic_addition(self):
        assert add_minutes('09:00', 90) == '10:30'
        assert add_minutes('09:00', 60) == '10:00'
        assert add_minutes('23:00', 30) == '23:30'

    def test_zero_minutes(self):
        assert add_minutes('14:30', 0) == '14:30'

    def test_crosses_hour_boundary(self):
        assert add_minutes('09:45', 30) == '10:15'


class TestFitsInTimeWindow:
    def test_fits_within_window(self):
        assert fits_in_time_window('10:00', '12:00', '09:00', '17:00') is True

    def test_does_not_fit_starts_too_early(self):
        assert fits_in_time_window('08:00', '10:00', '09:00', '17:00') is False

    def test_does_not_fit_ends_too_late(self):
        assert fits_in_time_window('16:00', '18:00', '09:00', '17:00') is False

    def test_exact_boundary_is_ok(self):
        assert fits_in_time_window('09:00', '17:00', '09:00', '17:00') is True


class TestEstimateTravelTime:
    def test_very_close_locations(self):
        a = {"lat": 34.0, "lng": -117.37}
        b = {"lat": 34.001, "lng": -117.371}
        assert estimate_travel_time(a, b) == 5

    def test_medium_distance(self):
        a = {"lat": 34.0, "lng": -117.37}
        b = {"lat": 34.01, "lng": -117.38}
        # ~1.5km apart -> 10 min
        assert estimate_travel_time(a, b) == 10

    def test_far_distance(self):
        a = {"lat": 34.0, "lng": -117.37}
        b = {"lat": 34.04, "lng": -117.35}
        # ~4.7km -> 20 min
        assert estimate_travel_time(a, b) == 20


class TestGenerateItinerary:
    def test_generates_valid_1_day_itinerary(self):
        itinerary = generate_itinerary({
            "start_date": "2025-03-15",  # saturday
            "num_days": 1,
            "budget": 500,
        })
        assert itinerary is not None

        assert len(itinerary["days"]) == 1
        assert itinerary["total_cost"] <= 500
        assert itinerary["total_attractions"] >= 1
        assert itinerary["hotel"] is not None

    def test_generates_valid_2_day_itinerary(self):
        itinerary = generate_itinerary({
            "start_date": "2025-03-15",
            "num_days": 2,
            "budget": 800,
        })
        assert itinerary is not None

        assert len(itinerary["days"]) == 2
        assert itinerary["total_cost"] <= 800
        assert itinerary["total_attractions"] >= 2

    def test_respects_must_visit_attractions(self):
        itinerary = generate_itinerary({
            "start_date": "2025-03-15",
            "num_days": 2,
            "budget": 1000,
            "must_visit": ["a1", "a2"],  # History Museum, Botanical Garden
        })
        assert itinerary is not None

        all_attraction_names = [
            item["name"]
            for day in itinerary["days"]
            for item in day["items"]
            if item["type"] == "attraction"
        ]
        assert "History Museum" in all_attraction_names
        assert "Botanical Garden" in all_attraction_names

    def test_respects_hotel_star_requirement(self):
        itinerary = generate_itinerary({
            "start_date": "2025-03-15",
            "num_days": 1,
            "budget": 1000,
            "min_hotel_stars": 4,
        })
        assert itinerary is not None
        assert itinerary["hotel"]["stars"] >= 4

    def test_returns_none_when_must_visit_not_possible_due_to_closed_days(self):
        # Science Center closed Mon+Tue, try single day on Monday
        itinerary = generate_itinerary({
            "start_date": "2025-03-17",  # monday
            "num_days": 1,
            "budget": 1000,
            "must_visit": ["a5"],  # Science Center
        })
        assert itinerary is None

    def test_budget_too_low_returns_none_or_very_minimal_plan(self):
        itinerary = generate_itinerary({
            "start_date": "2025-03-15",
            "num_days": 2,
            "budget": 50,  # can't even afford 1 night + meals
        })
        # Should either be None or extremely minimal
        if itinerary is not None:
            assert itinerary["total_cost"] <= 50

    def test_each_day_has_meals(self):
        itinerary = generate_itinerary({
            "start_date": "2025-03-15",
            "num_days": 2,
            "budget": 1000,
        })
        assert itinerary is not None

        for day in itinerary["days"]:
            meals = [item for item in day["items"] if item["type"] == "meal"]
            # At least breakfast and one other meal
            assert len(meals) >= 2

    def test_no_duplicate_attractions_across_days(self):
        itinerary = generate_itinerary({
            "start_date": "2025-03-15",
            "num_days": 2,
            "budget": 1000,
        })
        assert itinerary is not None

        attraction_names = [
            item["name"]
            for day in itinerary["days"]
            for item in day["items"]
            if item["type"] == "attraction"
        ]
        assert len(set(attraction_names)) == len(attraction_names)


class TestValidateItinerary:
    def test_validates_a_correct_itinerary(self):
        itinerary = generate_itinerary({
            "start_date": "2025-03-15",
            "num_days": 1,
            "budget": 500,
        })
        assert itinerary is not None

        result = validate_itinerary(itinerary, {
            "start_date": "2025-03-15",
            "num_days": 1,
            "budget": 500,
        })
        assert result["valid"] is True
        assert len(result["errors"]) == 0

    def test_detects_budget_violation(self):
        itinerary = generate_itinerary({
            "start_date": "2025-03-15",
            "num_days": 2,
            "budget": 1000,
        })
        assert itinerary is not None

        # Validate against a tighter budget
        result = validate_itinerary(itinerary, {
            "start_date": "2025-03-15",
            "num_days": 2,
            "budget": 10,
        })
        assert result["valid"] is False
        assert len(result["errors"]) > 0

    def test_detects_missing_must_visit(self):
        itinerary = generate_itinerary({
            "start_date": "2025-03-15",
            "num_days": 1,
            "budget": 500,
        })
        assert itinerary is not None

        # Validate with a must-visit that may not be in the itinerary
        result = validate_itinerary(itinerary, {
            "start_date": "2025-03-15",
            "num_days": 1,
            "budget": 500,
            "must_visit": ["a5", "a6", "a1", "a2", "a3"],  # very unlikely all fit in 1 day
        })
        # Either valid (if all fit) or has errors
        if not result["valid"]:
            assert any("must" in e.lower() for e in result["errors"])
