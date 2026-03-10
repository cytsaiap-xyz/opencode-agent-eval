import json
import os

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "services.json")) as _f:
    services_data = json.load(_f)


def calculate_distance(a: dict, b: dict) -> float:
    """
    Calculate the distance in km between two locations using the Haversine formula.
    a and b are dicts with 'lat' and 'lng' keys.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def get_day_of_week(date_str: str) -> str:
    """
    Get the day of week (lowercase) for a given date string "YYYY-MM-DD".
    e.g., "2025-03-15" -> "saturday"
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def find_booking_plans(request: dict) -> list[dict]:
    """
    Find all valid booking plans that satisfy the request constraints.

    request keys:
        check_in_date (str), check_out_date (str), party_size (int),
        total_budget (float), required_amenities (optional list[str]),
        min_hotel_stars (optional int), dinner_date (str), dinner_time (str),
        cuisine_preferences (optional list[str]), needs_reservation (optional bool).

    A valid plan must satisfy:
    - Hotel is available for ALL nights (check_in_date to check_out_date, not including checkout day)
    - Hotel has all required_amenities
    - Hotel stars >= min_hotel_stars (if specified)
    - Restaurant is open on the dinner date's day of week
    - Restaurant is open at the dinner time
    - Restaurant can accommodate the party size
    - If needs_reservation is True, restaurant must accept reservations
    - If cuisine_preferences specified, restaurant cuisine must be in the list
    - Total cost (hotel nights * price_per_night + restaurant price_per_person * party_size) <= total_budget

    Return list of plan dicts sorted by: restaurant rating descending, then total cost ascending.
    Each plan dict has: hotel, restaurant, total_cost, hotel_cost, restaurant_cost, nights.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def find_best_plan(request: dict) -> dict | None:
    """
    Find the best booking plan (highest restaurant rating, lowest cost as tiebreaker).
    Returns None if no valid plan exists.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def find_transport(hotel: dict, restaurant: dict) -> dict:
    """
    Given a hotel and restaurant, find the best transport option to get from
    the hotel to the restaurant. "Best" = cheapest that gets you there.
    If no direct transport, return the taxi option (id "t4") as fallback.

    Matching is done by proximity: a transport's from_location must be within
    2km of the hotel location, and to_location within 2km of the restaurant location.

    Return a transport dict with: id, type, from_name, to_name, departure_time,
        arrival_time, price, from_location, to_location.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")
