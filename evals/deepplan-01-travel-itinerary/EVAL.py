import json
import os
import pytest

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "answer.json")) as _f:
    answer = json.load(_f)


class TestDayOfWeek:
    def test_returns_correct_days(self):
        days = answer["day_of_week"]
        assert days["2025-03-15"] == "saturday"
        assert days["2025-03-17"] == "monday"
        assert days["2025-03-19"] == "wednesday"


class TestTimeCalculations:
    def test_add_minutes(self):
        calc = answer["time_calculations"]
        assert calc["09:00+90"] == "10:30"
        assert calc["09:00+60"] == "10:00"
        assert calc["23:00+30"] == "23:30"
        assert calc["09:45+30"] == "10:15"
        assert calc["14:30+0"] == "14:30"


class TestTravelTimeEstimates:
    def test_correct_estimates(self):
        estimates = answer["travel_time_estimates"]
        assert estimates[0]["minutes"] == 5
        assert estimates[1]["minutes"] == 10
        assert estimates[2]["minutes"] == 20


class TestItinerary1Day:
    def test_valid_1day_itinerary(self):
        it = answer["itinerary_1day"]
        assert it is not None
        assert len(it["days"]) == 1
        assert it["total_cost"] <= 500
        assert it["total_attractions"] >= 1
        assert it["hotel"] is not None


class TestItinerary2Day:
    def test_valid_2day_itinerary(self):
        it = answer["itinerary_2day"]
        assert it is not None
        assert len(it["days"]) == 2
        assert it["total_cost"] <= 800
        assert it["total_attractions"] >= 2


class TestItineraryMustVisit:
    def test_includes_required_attractions(self):
        it = answer["itinerary_must_visit"]
        assert it is not None
        all_names = [
            item["name"]
            for day in it["days"]
            for item in day["items"]
            if item["type"] == "attraction"
        ]
        assert "History Museum" in all_names
        assert "Botanical Garden" in all_names


class TestItinerary4Star:
    def test_hotel_stars(self):
        it = answer["itinerary_4star_hotel"]
        assert it is not None
        assert it["hotel"]["stars"] >= 4


class TestItineraryImpossible:
    def test_returns_null(self):
        assert answer["itinerary_impossible"] is None


class TestItineraryLowBudget:
    def test_returns_null_or_minimal(self):
        it = answer["itinerary_low_budget"]
        if it is not None:
            assert it["total_cost"] <= 50


class TestItineraryNoduplicates:
    def test_no_duplicate_attractions(self):
        it = answer["itinerary_2day"]
        if it is not None:
            attraction_names = [
                item["name"]
                for day in it["days"]
                for item in day["items"]
                if item["type"] == "attraction"
            ]
            assert len(set(attraction_names)) == len(attraction_names)

    def test_each_day_has_meals(self):
        it = answer["itinerary_2day"]
        if it is not None:
            for day in it["days"]:
                meals = [item for item in day["items"] if item["type"] == "meal"]
                assert len(meals) >= 2
