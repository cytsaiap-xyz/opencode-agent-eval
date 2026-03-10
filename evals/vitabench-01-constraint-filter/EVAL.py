import json
import os
import pytest

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "answer.json")) as _f:
    answer = json.load(_f)


class TestGetAllRestaurants:
    def test_returns_all_15_restaurants(self):
        all_r = answer["all_restaurants"]
        assert len(all_r) == 15
        assert "id" in all_r[0]
        assert "name" in all_r[0]
        assert "cuisine" in all_r[0]


class TestFilterByCuisine:
    def test_chinese_restaurants(self):
        result = answer["chinese_restaurants"]
        assert len(result) == 2
        assert all(r["cuisine"] == "chinese" for r in result)


class TestFilterByRating:
    def test_high_rated(self):
        result = answer["high_rated"]
        assert len(result) >= 5
        assert all(r["rating"] >= 4.5 for r in result)
        for i in range(1, len(result)):
            assert result[i]["rating"] <= result[i - 1]["rating"]


class TestFilterByDietary:
    def test_vegetarian_and_vegan(self):
        result = answer["vegetarian_and_vegan"]
        assert len(result) >= 3


class TestFilterByPrice:
    def test_budget_friendly(self):
        result = answer["budget_friendly"]
        assert all(r["avg_price_per_person"] <= 15 for r in result)
        assert len(result) >= 4


class TestFilterByDineIn:
    def test_dine_in_only(self):
        result = answer["dine_in_only"]
        assert not any(r["id"] == "r003" for r in result)
        assert not any(r["id"] == "r009" for r in result)


class TestFilterByOpenTime:
    def test_open_early(self):
        result = answer["open_early"]
        assert any(r["id"] == "r004" for r in result)


class TestFilterByOpenDay:
    def test_open_on_monday(self):
        result = answer["open_on_monday"]
        assert not any(r["id"] == "r001" for r in result)


class TestExcludeCuisines:
    def test_exclude_american_italian(self):
        result = answer["exclude_american_italian"]
        assert all(r["cuisine"] not in ("american", "italian") for r in result)


class TestCombinedFilter:
    def test_combined_filter(self):
        result = answer["combined_filter"]
        assert len(result) >= 1
        for r in result:
            assert r["distance_km"] <= 3
            assert r["avg_price_per_person"] <= 20


class TestBestAvailable:
    def test_thursday_lunch(self):
        result = answer["best_available_thursday_lunch"]
        assert len(result) >= 5
        assert all(r["avg_price_per_person"] <= 30 for r in result)

    def test_friday_fast_delivery(self):
        result = answer["best_available_friday_fast_delivery"]
        assert all(r["delivery_time_minutes"] <= 30 for r in result)


class TestMealPairs:
    def test_meal_pairs_friday(self):
        pairs = answer["meal_pairs_friday"]
        assert len(pairs) >= 1
        for pair in pairs:
            lunch, dinner = pair[0], pair[1]
            assert lunch["cuisine"] != dinner["cuisine"]
            assert lunch["avg_price_per_person"] + dinner["avg_price_per_person"] <= 60

    def test_pairs_sorted_by_combined_rating_desc(self):
        pairs = answer["meal_pairs_friday"]
        for i in range(1, len(pairs)):
            prev_rating = pairs[i - 1][0]["rating"] + pairs[i - 1][1]["rating"]
            curr_rating = pairs[i][0]["rating"] + pairs[i][1]["rating"]
            assert curr_rating <= prev_rating
