import json
import os

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "task-data.json")) as _f:
    task_data = json.load(_f)


def plan_trip() -> dict:
    """
    Read the task data and produce a trip plan that satisfies all hard constraints.
    The hard_constraints in task-data.json contain the expected answers.
    Your plan must match these constraints exactly.

    Return a dict with keys:
        origin, destination, days, people_number,
        outbound_transport (dict with type, number, departure, arrival, seat_class),
        inbound_transport (same structure),
        hotel (dict with name, star, price_per_night, nights, rooms, services),
        meals (list of dicts with restaurant_name, cuisine, near_attraction, special_requirement),
        attractions (list of dicts with name, type, ticket_price),
        total_budget (number),
        constraint_results (dict mapping constraint name to value).
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")
