import pytest
from filter import get_all_restaurants, filter_restaurants, find_best_available, find_meal_pairs


class TestGetAllRestaurants:
    def test_returns_all_15_restaurants(self):
        all_r = get_all_restaurants()
        assert len(all_r) == 15
        assert "id" in all_r[0]
        assert "name" in all_r[0]
        assert "cuisine" in all_r[0]


class TestFilterRestaurants:
    def test_filter_by_cuisine(self):
        result = filter_restaurants({"cuisines": ["chinese"]})
        assert len(result) == 2
        assert all(r["cuisine"] == "chinese" for r in result)

    def test_filter_by_minimum_rating(self):
        result = filter_restaurants({"min_rating": 4.5})
        assert len(result) >= 5
        assert all(r["rating"] >= 4.5 for r in result)
        # Should be sorted by rating desc
        for i in range(1, len(result)):
            assert result[i]["rating"] <= result[i - 1]["rating"]

    def test_filter_by_dietary_options_must_support_all(self):
        result = filter_restaurants({"required_dietary_options": ["vegetarian", "vegan"]})
        assert len(result) >= 3
        assert all(
            "vegetarian" in r["dietary_options"] and "vegan" in r["dietary_options"]
            for r in result
        )

    def test_filter_by_max_price_per_person(self):
        result = filter_restaurants({"max_price_per_person": 15})
        assert all(r["avg_price_per_person"] <= 15 for r in result)
        assert len(result) >= 4

    def test_filter_by_dine_in_requirement(self):
        result = filter_restaurants({"require_dine_in": True})
        assert all(r["has_dine_in"] is True for r in result)
        # r003 (Sushi Express) and r009 (Pizza Planet) have no dine-in
        assert not any(r["id"] == "r003" for r in result)
        assert not any(r["id"] == "r009" for r in result)

    def test_filter_by_open_time(self):
        result = filter_restaurants({"open_at": "08:30"})
        # Only Green Garden opens at 08:00 and Burger Palace at 09:00
        # At 08:30, only Green Garden is open
        assert any(r["id"] == "r004" for r in result)
        assert all(r["business_hours"]["open"] <= "08:30" for r in result)

    def test_filter_by_open_on_day(self):
        result = filter_restaurants({"open_on_day": "monday"})
        # Golden Dragon, Seoul Kitchen, Le Petit Bistro, Ocean Blue closed on monday
        assert all("monday" not in r["closed_days"] for r in result)

    def test_exclude_cuisines(self):
        result = filter_restaurants({"exclude_cuisines": ["american", "italian"]})
        assert all(r["cuisine"] not in ("american", "italian") for r in result)

    def test_combined_multi_constraint_filter(self):
        # Vegetarian, within 3km, under $20/person, open on wednesday
        result = filter_restaurants({
            "required_dietary_options": ["vegetarian"],
            "max_distance": 3,
            "max_price_per_person": 20,
            "open_on_day": "wednesday",
        })
        assert all(
            "vegetarian" in r["dietary_options"]
            and r["distance_km"] <= 3
            and r["avg_price_per_person"] <= 20
            and "wednesday" not in r["closed_days"]
            for r in result
        )
        assert len(result) >= 1

    def test_no_criteria_returns_all_sorted_by_rating(self):
        result = filter_restaurants({})
        assert len(result) == 15
        assert result[0]["rating"] == 4.9  # Le Petit Bistro

    def test_distance_tiebreaker_for_same_rating(self):
        # r001 (Golden Dragon) and r013 (Mediterranean Delight) both have 4.5 rating
        result = filter_restaurants({"min_rating": 4.5})
        idx1 = next((i for i, r in enumerate(result) if r["id"] == "r001"), -1)
        idx13 = next((i for i, r in enumerate(result) if r["id"] == "r013"), -1)
        # Golden Dragon (1.2km) should come before Mediterranean Delight (2.5km)
        if idx1 != -1 and idx13 != -1:
            assert idx1 < idx13


class TestFindBestAvailable:
    def test_finds_restaurants_open_at_lunch_on_thursday(self):
        result = find_best_available("12:30", "thursday", 30)
        assert len(result) >= 5
        assert all(r["avg_price_per_person"] <= 30 for r in result)
        # All should be open at 12:30 and not closed on thursday
        assert all("thursday" not in r["closed_days"] for r in result)

    def test_respects_max_delivery_minutes(self):
        result = find_best_available("12:00", "friday", 50, max_delivery_minutes=30)
        assert all(r["delivery_time_minutes"] <= 30 for r in result)

    def test_limits_to_top_n(self):
        result = find_best_available("12:00", "friday", 100, top_n=3)
        assert len(result) == 3

    def test_sorted_by_rating_desc(self):
        result = find_best_available("12:00", "friday", 100)
        for i in range(1, len(result)):
            assert result[i]["rating"] <= result[i - 1]["rating"]


class TestFindMealPairs:
    def test_finds_valid_meal_pairs_on_friday(self):
        pairs = find_meal_pairs("friday", "12:00", "19:00", 60)
        assert len(pairs) >= 1
        for lunch, dinner in pairs:
            # Different cuisines
            assert lunch["cuisine"] != dinner["cuisine"]
            # Both open on friday
            assert "friday" not in lunch["closed_days"]
            assert "friday" not in dinner["closed_days"]
            # Within budget
            assert lunch["avg_price_per_person"] + dinner["avg_price_per_person"] <= 60

    def test_pairs_sorted_by_combined_rating_desc(self):
        pairs = find_meal_pairs("friday", "12:00", "19:00", 100)
        for i in range(1, len(pairs)):
            prev_rating = pairs[i - 1][0]["rating"] + pairs[i - 1][1]["rating"]
            curr_rating = pairs[i][0]["rating"] + pairs[i][1]["rating"]
            assert curr_rating <= prev_rating

    def test_tight_budget_limits_results(self):
        pairs = find_meal_pairs("friday", "12:00", "19:00", 25)
        # Very tight budget - only cheap restaurants
        for lunch, dinner in pairs:
            assert lunch["avg_price_per_person"] + dinner["avg_price_per_person"] <= 25

    def test_lunch_and_dinner_restaurants_must_be_open_at_correct_times(self):
        pairs = find_meal_pairs("thursday", "12:00", "20:00", 100)
        for lunch, dinner in pairs:
            assert lunch["business_hours"]["open"] <= "12:00"
            assert lunch["business_hours"]["close"] > "12:00"
            assert dinner["business_hours"]["open"] <= "20:00"
            assert dinner["business_hours"]["close"] > "20:00"
