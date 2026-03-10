import json
import os

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "restaurants.json")) as _f:
    restaurant_data = json.load(_f)


def get_all_restaurants() -> list[dict]:
    """
    Load all restaurants from the JSON data.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def filter_restaurants(criteria: dict) -> list[dict]:
    """
    Filter restaurants based on multiple criteria.
    All specified criteria must be satisfied (AND logic).
    Return results sorted by rating (highest first), then by distance (closest first) for ties.

    criteria keys (all optional):
        cuisines (list[str]): restaurant's cuisine must be in this list
        min_rating (float): minimum rating (inclusive)
        max_price_per_person (float): maximum avg price per person (inclusive)
        required_dietary_options (list[str]): restaurant must support ALL listed options
        max_delivery_time (int): maximum delivery time in minutes (inclusive)
        require_dine_in (bool): must have dine-in option
        require_chain (bool): must be a chain restaurant
        max_distance (float): maximum distance in km (inclusive)
        open_at (str): time "HH:MM" - restaurant must be open at this time
        open_on_day (str): lowercase day name - restaurant must NOT be closed on this day
        exclude_cuisines (list[str]): restaurant's cuisine must NOT be in this list
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def find_best_available(
    time: str,
    day_of_week: str,
    budget_per_person: float,
    max_delivery_minutes: int | None = None,
    top_n: int | None = None,
) -> list[dict]:
    """
    Given a time (HH:MM, 24hr), day of week (lowercase), and a budget per person,
    find the top N restaurants that are:
     - open at that time and on that day
     - within budget
     - can deliver within max_delivery_minutes (if specified)
    Sorted by rating (highest first).
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def find_meal_pairs(
    day_of_week: str,
    lunch_time: str,
    dinner_time: str,
    total_budget: float,
) -> list[tuple[dict, dict]]:
    """
    Find pairs of restaurants suitable for "lunch + dinner" on a given day.
    Lunch: must be open at lunch_time, dinner: must be open at dinner_time.
    Both must be open on the specified day.
    They must be different cuisines (no same cuisine for both meals).
    Total combined avg_price_per_person must not exceed total_budget.
    Return list of (lunch_restaurant, dinner_restaurant) tuples,
    sorted by combined rating (highest first).
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")
