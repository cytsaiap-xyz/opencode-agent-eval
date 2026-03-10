import json
import os

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "city-data.json")) as _f:
    city_data = json.load(_f)


def get_day_of_week(date_str: str) -> str:
    """
    Get the day of week (lowercase) for a date string "YYYY-MM-DD".
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def add_minutes(time: str, minutes: int) -> str:
    """
    Add minutes to a time string "HH:MM" and return new "HH:MM".
    e.g., add_minutes("09:00", 90) => "10:30"
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def fits_in_time_window(start_time: str, end_time: str, open_time: str, close_time: str) -> bool:
    """
    Check if a time range [start_time, end_time] fits within [open_time, close_time].
    All times in "HH:MM" format.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def estimate_travel_time(from_loc: dict, to_loc: dict) -> int:
    """
    Estimate travel time in minutes between two locations.
    Use simple distance-based heuristic:
    - < 0.5km apart: 5 minutes
    - 0.5-2km: 10 minutes
    - 2-5km: 20 minutes
    - >5km: 35 minutes

    Distance is Euclidean on lat/lng * 111 (approximate km per degree).
    from_loc and to_loc are dicts with 'lat' and 'lng' keys.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def generate_itinerary(request: dict) -> dict | None:
    """
    Generate a valid itinerary for the given request.

    request keys:
        start_date (str "YYYY-MM-DD"), num_days (int), budget (number),
        must_visit (optional list of attraction IDs),
        preferred_meal_budget (optional number),
        min_hotel_stars (optional int),
        start_time_each_day (optional str, default "08:00"),
        end_time_each_day (optional str, default "21:00").

    Rules:
    - Pick a hotel that fits the budget and star requirement.
    - Each day should have: breakfast (around start time), attractions,
      lunch (12:00-14:00), more attractions, dinner (18:00-20:00).
    - Attractions must be open on that day (check closed_days using date)
      and visited within operating hours.
    - Include travel time between locations.
    - Must include all must_visit attractions.
    - Don't visit the same attraction twice.
    - Stay within budget (hotel * nights + all meals + all entry fees).
    - Each day's schedule must not go past end_time_each_day.

    Return the best itinerary dict (most attractions visited within constraints):
        hotel (dict with id, name, stars, price_per_night, rating, location),
        days (list of dicts with day, date, items (list of item dicts), day_cost),
        total_cost (number),
        total_attractions (int).

    Each item dict has: start_time, end_time, type ('attraction'|'meal'|'travel'|'hotel'),
        name, cost.

    Return None if must_visit constraints cannot be satisfied.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def validate_itinerary(itinerary: dict, request: dict) -> dict:
    """
    Validate that an itinerary satisfies all constraints:
    - No time overlaps within a day
    - All items within start_time/end_time bounds
    - Attractions visited during their open hours on correct day
    - Must-visit attractions are included
    - Total cost within budget
    - No duplicate attractions

    Return {"valid": True, "errors": []} or {"valid": False, "errors": [...]}
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")
