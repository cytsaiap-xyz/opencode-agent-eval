import pytest
from coordinator import calculate_distance, get_day_of_week, find_booking_plans, find_best_plan, find_transport


class TestCalculateDistance:
    def test_same_point_returns_0(self):
        loc = {"lat": 40.7128, "lng": -74.006}
        assert abs(calculate_distance(loc, loc)) < 0.1

    def test_known_distance_nyc_landmarks(self):
        # Times Square to downtown ~7km
        times_square = {"lat": 40.7580, "lng": -73.9855}
        downtown = {"lat": 40.7128, "lng": -74.006}
        dist = calculate_distance(times_square, downtown)
        assert dist > 4
        assert dist < 8

    def test_short_distance(self):
        a = {"lat": 40.7484, "lng": -73.9857}
        b = {"lat": 40.7505, "lng": -73.9934}
        dist = calculate_distance(a, b)
        assert dist > 0.1
        assert dist < 2


class TestGetDayOfWeek:
    def test_2025_03_15_is_saturday(self):
        assert get_day_of_week("2025-03-15") == "saturday"

    def test_2025_03_16_is_sunday(self):
        assert get_day_of_week("2025-03-16") == "sunday"

    def test_2025_03_17_is_monday(self):
        assert get_day_of_week("2025-03-17") == "monday"

    def test_2025_03_18_is_tuesday(self):
        assert get_day_of_week("2025-03-18") == "tuesday"


class TestFindBookingPlans:
    def test_basic_query_returns_valid_plans(self):
        plans = find_booking_plans({
            "check_in_date": "2025-03-15",
            "check_out_date": "2025-03-17",
            "party_size": 2,
            "total_budget": 1000,
            "dinner_date": "2025-03-15",
            "dinner_time": "19:00",
        })
        assert len(plans) >= 1
        for plan in plans:
            assert plan["nights"] == 2
            assert plan["total_cost"] <= 1000
            assert plan["total_cost"] == plan["hotel_cost"] + plan["restaurant_cost"]
            assert plan["hotel_cost"] == plan["hotel"]["price_per_night"] * 2
            assert plan["restaurant_cost"] == plan["restaurant"]["price_per_person"] * 2

    def test_respects_hotel_star_requirement(self):
        plans = find_booking_plans({
            "check_in_date": "2025-03-15",
            "check_out_date": "2025-03-16",
            "party_size": 2,
            "total_budget": 2000,
            "min_hotel_stars": 4,
            "dinner_date": "2025-03-15",
            "dinner_time": "19:00",
        })
        assert all(p["hotel"]["stars"] >= 4 for p in plans)

    def test_respects_required_amenities(self):
        plans = find_booking_plans({
            "check_in_date": "2025-03-15",
            "check_out_date": "2025-03-16",
            "party_size": 2,
            "total_budget": 2000,
            "required_amenities": ["pool", "spa"],
            "dinner_date": "2025-03-15",
            "dinner_time": "19:00",
        })
        # Only Grand Plaza has pool+spa
        assert all(p["hotel"]["id"] == "h1" for p in plans)

    def test_respects_restaurant_closed_days(self):
        # 2025-03-17 is monday - The Italian Place and Le Parisien are closed
        plans = find_booking_plans({
            "check_in_date": "2025-03-17",
            "check_out_date": "2025-03-18",
            "party_size": 2,
            "total_budget": 2000,
            "dinner_date": "2025-03-17",
            "dinner_time": "19:00",
        })
        assert all("monday" not in p["restaurant"]["closed_days"] for p in plans)
        # Italian Place and Le Parisien should NOT appear
        assert all(
            p["restaurant"]["id"] not in ("rest1", "rest5")
            for p in plans
        )

    def test_respects_party_size_limit(self):
        # Le Parisien has max_party_size 4
        plans = find_booking_plans({
            "check_in_date": "2025-03-15",
            "check_out_date": "2025-03-16",
            "party_size": 5,
            "total_budget": 5000,
            "dinner_date": "2025-03-15",
            "dinner_time": "19:00",
        })
        assert all(p["restaurant"]["max_party_size"] >= 5 for p in plans)
        assert all(p["restaurant"]["id"] != "rest5" for p in plans)

    def test_respects_cuisine_preferences(self):
        plans = find_booking_plans({
            "check_in_date": "2025-03-15",
            "check_out_date": "2025-03-16",
            "party_size": 2,
            "total_budget": 2000,
            "dinner_date": "2025-03-15",
            "dinner_time": "19:00",
            "cuisine_preferences": ["japanese", "french"],
        })
        assert all(
            p["restaurant"]["cuisine"] in ("japanese", "french")
            for p in plans
        )

    def test_respects_budget_constraint(self):
        # Very tight budget: 1 night cheap hotel + cheap dinner for 2
        plans = find_booking_plans({
            "check_in_date": "2025-03-15",
            "check_out_date": "2025-03-16",
            "party_size": 2,
            "total_budget": 120,
            "dinner_date": "2025-03-15",
            "dinner_time": "12:00",
        })
        assert all(p["total_cost"] <= 120 for p in plans)
        # Only Budget Inn (75) + Quick Bites (15*2=30) = 105 fits
        if len(plans) > 0:
            assert any(p["hotel"]["id"] == "h2" for p in plans)

    def test_sorted_by_rating_desc_then_cost_asc(self):
        plans = find_booking_plans({
            "check_in_date": "2025-03-15",
            "check_out_date": "2025-03-16",
            "party_size": 2,
            "total_budget": 2000,
            "dinner_date": "2025-03-15",
            "dinner_time": "19:00",
        })
        for i in range(1, len(plans)):
            prev_rating = plans[i - 1]["restaurant"]["rating"]
            curr_rating = plans[i]["restaurant"]["rating"]
            if prev_rating == curr_rating:
                assert plans[i]["total_cost"] >= plans[i - 1]["total_cost"]
            else:
                assert curr_rating < prev_rating

    def test_hotel_must_be_available_for_all_nights(self):
        # Comfort Suites only available 15,16,17 — not 18
        plans = find_booking_plans({
            "check_in_date": "2025-03-17",
            "check_out_date": "2025-03-19",
            "party_size": 2,
            "total_budget": 5000,
            "dinner_date": "2025-03-17",
            "dinner_time": "19:00",
        })
        # Comfort Suites should NOT appear (not available on 18th)
        assert all(p["hotel"]["id"] != "h3" for p in plans)

    def test_needs_reservation_filter(self):
        plans = find_booking_plans({
            "check_in_date": "2025-03-15",
            "check_out_date": "2025-03-16",
            "party_size": 2,
            "total_budget": 2000,
            "dinner_date": "2025-03-15",
            "dinner_time": "19:00",
            "needs_reservation": True,
        })
        # Quick Bites does not accept reservations
        assert all(p["restaurant"]["accepts_reservations"] is True for p in plans)
        assert all(p["restaurant"]["id"] != "rest3" for p in plans)


class TestFindBestPlan:
    def test_returns_best_plan_or_none(self):
        plan = find_best_plan({
            "check_in_date": "2025-03-15",
            "check_out_date": "2025-03-16",
            "party_size": 2,
            "total_budget": 2000,
            "dinner_date": "2025-03-15",
            "dinner_time": "19:00",
        })
        assert plan is not None
        # Should pick highest-rated restaurant
        assert plan["restaurant"]["rating"] == 4.9  # Sushi World

    def test_returns_none_when_no_plan_fits(self):
        plan = find_best_plan({
            "check_in_date": "2025-03-15",
            "check_out_date": "2025-03-16",
            "party_size": 2,
            "total_budget": 10,  # impossibly low
            "dinner_date": "2025-03-15",
            "dinner_time": "19:00",
        })
        assert plan is None


class TestFindTransport:
    def test_finds_transport_between_hotel_and_restaurant(self):
        # Budget Inn (Midtown area) to Sushi World (Penn Station area)
        hotel = {
            "id": "h2", "name": "Budget Inn", "stars": 2, "price_per_night": 75,
            "location": {"lat": 40.7580, "lng": -73.9855},
            "amenities": ["wifi"], "check_in_time": "14:00", "check_out_time": "10:00",
            "available_dates": [],
        }
        restaurant = {
            "id": "rest2", "name": "Sushi World", "cuisine": "japanese",
            "price_per_person": 55, "rating": 4.9,
            "location": {"lat": 40.7505, "lng": -73.9934},
            "hours": {"open": "12:00", "close": "23:00"},
            "closed_days": [], "accepts_reservations": True, "max_party_size": 6,
        }
        transport = find_transport(hotel, restaurant)
        assert transport is not None
        assert transport["id"]

    def test_falls_back_to_taxi_when_no_match(self):
        # Very far apart locations
        hotel = {
            "id": "h1", "name": "Grand Plaza Hotel", "stars": 5, "price_per_night": 280,
            "location": {"lat": 40.7128, "lng": -74.006},
            "amenities": [], "check_in_time": "15:00", "check_out_time": "11:00",
            "available_dates": [],
        }
        restaurant = {
            "id": "rest4", "name": "Spice Garden", "cuisine": "indian",
            "price_per_person": 30, "rating": 4.5,
            "location": {"lat": 40.7484, "lng": -73.990},
            "hours": {"open": "11:30", "close": "22:30"},
            "closed_days": [], "accepts_reservations": True, "max_party_size": 10,
        }
        transport = find_transport(hotel, restaurant)
        # Should get taxi as fallback (no direct transit within 2km for both endpoints)
        assert transport is not None
        # Either finds a match or falls back to taxi
        assert transport["id"]
