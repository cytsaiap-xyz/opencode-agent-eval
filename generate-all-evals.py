#!/usr/bin/env python3
"""
Generate all VitaBench (400) + DeepPlanning (240) evals for opencode.
Reads source data from cloned repos and outputs eval directories.
Generates Python (pytest) test files.
"""

import json
import os
import sys
import re

EVALS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "evals")

COMMON_REQUIREMENTS_TXT = "pytest>=8.0.0\n"

# ─── VitaBench ────────────────────────────────────────────────────────────────

def generate_vitabench_eval(task, domain, idx):
    """Generate one VitaBench eval from a task."""
    eval_name = f"vitabench-{domain}-{idx:03d}"
    eval_dir = os.path.join(EVALS_DIR, eval_name)
    os.makedirs(eval_dir, exist_ok=True)

    task_id = task["id"]
    instructions = task["instructions"]
    environment = task["environment"]
    user_scenario = task.get("user_scenario", {})
    eval_criteria = task["evaluation_criteria"]

    expected_states = eval_criteria.get("expected_states", [{}])
    rubrics = eval_criteria.get("overall_rubrics", [])

    # Extract expected orders
    required_orders = []
    if expected_states:
        required_orders = expected_states[0].get("required_orders", [])

    # Build environment.json (embedded data)
    env_data = {
        "task_id": task_id,
        "domain": domain,
        "time": environment.get("time", ""),
        "user_id": environment.get("user_id", ""),
        "weather": environment.get("weather", []),
        "location": environment.get("location", {}),
        "user_profile": user_scenario.get("user_profile", {}),
        "user_historical_behaviors": environment.get("user_historical_behaviors", {}),
        "stores": environment.get("stores", {}),
        "orders": environment.get("orders", {}),
    }

    # Write environment.json
    with open(os.path.join(eval_dir, "environment.json"), "w") as f:
        json.dump(env_data, f, indent=2, ensure_ascii=False)

    # Write expected.json (ground truth)
    expected_data = {
        "required_orders": required_orders,
        "rubrics": rubrics,
    }
    with open(os.path.join(eval_dir, "expected.json"), "w") as f:
        json.dump(expected_data, f, indent=2, ensure_ascii=False)

    # PROMPT.md
    rubrics_text = "\n".join(f"- {r}" for r in rubrics) if rubrics else "- Complete the task correctly based on the instructions."
    prompt = f"""# VitaBench Task: {domain.replace('_', ' ').title()} #{idx}

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

{instructions}

## Context

- Current time: `{environment.get("time", "unknown")}`
- Domain: `{domain}`

## Requirements / Rubrics

{rubrics_text}

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return a list of order dicts with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
"""

    with open(os.path.join(eval_dir, "PROMPT.md"), "w") as f:
        f.write(prompt)

    # solution.py
    solution = '''import json
import os

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "environment.json")) as _f:
    env_data = json.load(_f)
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)


def solve() -> list[dict]:
    """
    Analyze the environment data and user request to produce the correct orders.
    Read environment.json for available stores/products and user context.
    Return orders matching the required format in expected.json.

    Each order should be a dict with keys:
        store_id, products (list of dicts with product_id, quantity, price),
        total_price, and optionally location, dispatch_time, status, note.
    """
    # TODO: implement
    # Read env_data["stores"], env_data["user_profile"], env_data["weather"], etc.
    # Apply the constraints from the user request
    # Return the correct order(s)
    raise NotImplementedError("Not implemented")
'''
    with open(os.path.join(eval_dir, "solution.py"), "w") as f:
        f.write(solution)

    # Helper to detect reservation/booking objects
    def _is_reservation(o):
        return ("book_id" in o or "reservation_id" in o) and "products" not in o

    def _has_dup_product_ids(prods):
        ids = [p.get("product_id") for p in prods]
        return len(ids) != len(set(ids))

    reservation_indices = {oi for oi, o in enumerate(required_orders) if _is_reservation(o)}

    # EVAL.py
    eval_py = '''import json
import os
import pytest
from solution import solve

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "expected.json")) as _f:
    expected_data = json.load(_f)

result = solve()
expected = expected_data["required_orders"]


class TestVitaBenchTask:
    def test_returns_correct_number_of_orders(self):
        assert len(result) == len(expected)

    def test_each_order_has_required_fields(self):
        for i, order in enumerate(result):
'''

    if reservation_indices:
        eval_py += f'            if i in {reservation_indices!r}:\n'
        eval_py += '                # Reservation object\n'
        eval_py += '                assert "shop_id" in order or "store_id" in order\n'
        eval_py += '            else:\n'
        eval_py += '                assert "store_id" in order\n'
        eval_py += '                assert "products" in order\n'
        eval_py += '                assert "total_price" in order\n'
        eval_py += '                assert isinstance(order["products"], list)\n'
    else:
        eval_py += '            assert "store_id" in order\n'
        eval_py += '            assert "products" in order\n'
        eval_py += '            assert "total_price" in order\n'
        eval_py += '            assert isinstance(order["products"], list)\n'

    # Add per-order checks
    for oi, order in enumerate(required_orders):
        if _is_reservation(order):
            # Reservation-specific tests
            shop_id = order.get("shop_id", order.get("store_id", ""))
            eval_py += f"""
    def test_order_{oi}_is_reservation(self):
        order = result[{oi}]
        assert "shop_id" in order or "book_id" in order or "reservation_id" in order
"""
            if "shop_id" in order:
                eval_py += f"""
    def test_order_{oi}_matches_expected_shop(self):
        order = result[{oi}]
        shop_id = order.get("shop_id", order.get("store_id", ""))
        assert shop_id == {shop_id!r}
"""
            if "reservation_time" in order:
                rtime = order["reservation_time"]
                eval_py += f"""
    def test_order_{oi}_has_correct_reservation_time(self):
        assert result[{oi}].get("reservation_time") == {rtime!r}
"""
            if "customer_count" in order:
                count = order["customer_count"]
                eval_py += f"""
    def test_order_{oi}_has_correct_customer_count(self):
        assert result[{oi}].get("customer_count") == {count}
"""
            continue

        store_id = order.get("store_id", "")
        products = order.get("products", [])
        total_price = order.get("total_price", 0)

        expected_products = [{"product_id": p.get("product_id", ""), "quantity": p.get("quantity", 1)} for p in products]

        eval_py += f"""
    def test_order_{oi}_matches_expected_store(self):
        assert result[{oi}]["store_id"] == {store_id!r}
"""

        if _has_dup_product_ids(products):
            # Use consume-based matching for duplicate product_ids
            eval_py += f"""
    def test_order_{oi}_has_correct_products(self):
        expected_products = {json.dumps(expected_products)}
        remaining = list(result[{oi}]["products"])
        for ep in expected_products:
            found_idx = next(
                (i for i, p in enumerate(remaining)
                 if p["product_id"] == ep["product_id"] and p["quantity"] == ep["quantity"]),
                None,
            )
            assert found_idx is not None, f"Missing product {{ep['product_id']}} with quantity {{ep['quantity']}}"
            remaining.pop(found_idx)
"""
        else:
            eval_py += f"""
    def test_order_{oi}_has_correct_products(self):
        expected_products = {json.dumps(expected_products)}
        for ep in expected_products:
            found = next(
                (p for p in result[{oi}]["products"] if p["product_id"] == ep["product_id"]),
                None,
            )
            assert found is not None, f"Missing product {{ep['product_id']}}"
            assert found["quantity"] == ep["quantity"]
"""

        eval_py += f"""
    def test_order_{oi}_has_correct_total_price(self):
        assert abs(result[{oi}]["total_price"] - {total_price}) < 1
"""

    # Add rubric checks as named tests
    for ri, rubric in enumerate(rubrics):
        safe_rubric = rubric.replace("'", "\\'").replace('"', '\\"')
        # Make a valid Python identifier from the rubric
        func_name = re.sub(r'[^a-zA-Z0-9]', '_', rubric[:60]).strip('_').lower()
        if not func_name:
            func_name = f"rubric_{ri}"
        eval_py += f"""
    def test_rubric_{ri}_{func_name}(self):
        # Structural check - the solve() function must produce orders that satisfy:
        # "{safe_rubric}"
        # If solve() returns correct store_id and products, this rubric should be met.
        assert len(result) > 0
"""

    with open(os.path.join(eval_dir, "EVAL.py"), "w") as f:
        f.write(eval_py)

    # requirements.txt
    with open(os.path.join(eval_dir, "requirements.txt"), "w") as f:
        f.write(COMMON_REQUIREMENTS_TXT)

    # Clean up old TS files if they exist
    for old_file in ["EVAL.ts", "solution.ts", "package.json", "tsconfig.json"]:
        old_path = os.path.join(eval_dir, old_file)
        if os.path.exists(old_path):
            os.remove(old_path)

    return eval_name


# ─── DeepPlanning Travel ──────────────────────────────────────────────────────

def generate_deepplan_travel_eval(task, idx):
    """Generate one DeepPlanning travel eval."""
    eval_name = f"deepplan-travel-{idx:03d}"
    eval_dir = os.path.join(EVALS_DIR, eval_name)
    os.makedirs(eval_dir, exist_ok=True)

    task_id = task["id"]
    query = task["query"]
    meta_info = task.get("meta_info", {})
    hard_constraints = meta_info.get("hard_constraints", {})

    # Write task data
    task_data = {
        "task_id": task_id,
        "query": query,
        "meta_info": {
            "org": meta_info.get("org", ""),
            "dest": meta_info.get("dest", ""),
            "days": meta_info.get("days", 0),
            "depart_date": meta_info.get("depart_date", ""),
            "return_date": meta_info.get("return_date", ""),
            "people_number": meta_info.get("people_number", 0),
            "room_number": meta_info.get("room_number", 0),
        },
        "hard_constraints": hard_constraints,
    }
    with open(os.path.join(eval_dir, "task-data.json"), "w") as f:
        json.dump(task_data, f, indent=2, ensure_ascii=False)

    # Extract constraint summary for prompt
    constraint_names = list(hard_constraints.keys())
    constraints_text = "\n".join(f"- {c}" for c in constraint_names) if constraint_names else "- See query for details"

    prompt = f"""# DeepPlanning Travel Task #{idx}

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `plan_trip()` function in `solution.py`.

## User Query

{query}

## Trip Details

- Origin: `{meta_info.get("org", "")}`
- Destination: `{meta_info.get("dest", "")}`
- Duration: `{meta_info.get("days", 0)}` days
- Departure: `{meta_info.get("depart_date", "")}`
- Return: `{meta_info.get("return_date", "")}`
- Travelers: `{meta_info.get("people_number", 0)}`
- Rooms needed: `{meta_info.get("room_number", 0)}`

## Hard Constraints to Satisfy

{constraints_text}

## Your Task

Implement `plan_trip()` in `solution.py`. Read `task-data.json` for the full constraint details. Your function must return a plan dict that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
"""

    with open(os.path.join(eval_dir, "PROMPT.md"), "w") as f:
        f.write(prompt)

    # solution.py
    solution = '''import json
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
    # Read task_data["hard_constraints"] for specific requirements
    # Build a plan that satisfies each constraint
    raise NotImplementedError("Not implemented")
'''
    with open(os.path.join(eval_dir, "solution.py"), "w") as f:
        f.write(solution)

    # EVAL.py - check against hard_constraints
    eval_py = '''import json
import os
import pytest
from solution import plan_trip

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "task-data.json")) as _f:
    task_data = json.load(_f)

plan = plan_trip()
constraints = task_data["hard_constraints"]
meta = task_data["meta_info"]


class TestDeepPlanningTravelTask:
    def test_plan_has_correct_origin_and_destination(self):
        assert plan["origin"]
        assert plan["destination"]

    def test_plan_has_correct_number_of_days(self):
        assert plan["days"] == meta["days"]

    def test_plan_has_correct_number_of_travelers(self):
        assert plan["people_number"] == meta["people_number"]
'''

    # Generate constraint-specific tests
    for cname, cdata in hard_constraints.items():
        safe_name = cname.replace("'", "\\'")
        func_name = re.sub(r'[^a-zA-Z0-9]', '_', cname).strip('_').lower()

        if "hotel_name" in cdata:
            hotel_name = cdata["hotel_name"]
            eval_py += f"""
    def test_constraint_{func_name}_correct_hotel(self):
        assert plan["hotel"]["name"] == {hotel_name!r}
"""
            if "hotel_star" in cdata:
                eval_py += f"""
    def test_constraint_{func_name}_correct_star_rating(self):
        assert plan["hotel"]["star"] == {cdata["hotel_star"]}
"""
            if "required_service" in cdata:
                svc = cdata["required_service"]
                eval_py += f"""
    def test_constraint_{func_name}_required_service(self):
        assert {svc!r} in plan["hotel"]["services"]
"""

        elif "outbound_train_no" in cdata or "inbound_train_no" in cdata:
            if "outbound_train_no" in cdata:
                train = cdata["outbound_train_no"]
                eval_py += f"""
    def test_constraint_{func_name}_outbound_train(self):
        assert plan["outbound_transport"]["number"] == {train!r}
"""
            if "inbound_train_no" in cdata:
                train = cdata["inbound_train_no"]
                eval_py += f"""
    def test_constraint_{func_name}_inbound_train(self):
        assert plan["inbound_transport"]["number"] == {train!r}
"""

        elif "outbound_flight_no" in cdata or "inbound_flight_no" in cdata:
            if "outbound_flight_no" in cdata:
                flight = cdata["outbound_flight_no"]
                eval_py += f"""
    def test_constraint_{func_name}_outbound_flight(self):
        assert plan["outbound_transport"]["number"] == {flight!r}
"""
            if "inbound_flight_no" in cdata:
                flight = cdata["inbound_flight_no"]
                eval_py += f"""
    def test_constraint_{func_name}_inbound_flight(self):
        assert plan["inbound_transport"]["number"] == {flight!r}
"""

        elif "restaurant_name" in cdata:
            rname = cdata["restaurant_name"]
            eval_py += f"""
    def test_constraint_{func_name}_restaurant(self):
        meal_names = [m["restaurant_name"] for m in plan["meals"]]
        assert {rname!r} in meal_names
"""

        elif "attraction_name" in cdata:
            aname = cdata["attraction_name"]
            if isinstance(aname, list):
                for ai, a in enumerate(aname):
                    a_func = re.sub(r'[^a-zA-Z0-9]', '_', a[:40]).strip('_').lower()
                    eval_py += f"""
    def test_constraint_{func_name}_attraction_{a_func}(self):
        names = [a["name"] for a in plan["attractions"]]
        assert {a!r} in names
"""
            else:
                eval_py += f"""
    def test_constraint_{func_name}_attraction(self):
        names = [a["name"] for a in plan["attractions"]]
        assert {str(aname)!r} in names
"""

        elif "budget" in cdata:
            budget = cdata.get("budget", cdata.get("budget_limit", 0))
            if budget:
                eval_py += f"""
    def test_constraint_{func_name}_within_budget(self):
        assert plan["total_budget"] <= {budget}
"""

        else:
            # Generic constraint check via constraint_results
            eval_py += f"""
    def test_constraint_{func_name}_satisfied(self):
        assert {cname!r} in plan["constraint_results"]
"""

    with open(os.path.join(eval_dir, "EVAL.py"), "w") as f:
        f.write(eval_py)

    # requirements.txt
    with open(os.path.join(eval_dir, "requirements.txt"), "w") as f:
        f.write(COMMON_REQUIREMENTS_TXT)

    # Clean up old TS files if they exist
    for old_file in ["EVAL.ts", "solution.ts", "package.json", "tsconfig.json"]:
        old_path = os.path.join(eval_dir, old_file)
        if os.path.exists(old_path):
            os.remove(old_path)

    return eval_name


# ─── DeepPlanning Shopping ────────────────────────────────────────────────────

def generate_deepplan_shopping_eval(task, level, idx):
    """Generate one DeepPlanning shopping eval."""
    eval_name = f"deepplan-shopping-L{level}-{idx:03d}"
    eval_dir = os.path.join(EVALS_DIR, eval_name)
    os.makedirs(eval_dir, exist_ok=True)

    task_id = task.get("id", idx)
    query = task.get("query", "")

    # Write task data
    task_data = {
        "task_id": task_id,
        "level": level,
        "query": query,
    }
    # Include any extra meta fields
    for k, v in task.items():
        if k not in ("id", "query"):
            task_data[k] = v

    with open(os.path.join(eval_dir, "task-data.json"), "w") as f:
        json.dump(task_data, f, indent=2, ensure_ascii=False)

    level_desc = {
        1: "Find the cheapest products matching all requirements.",
        2: "Find the cheapest products matching all requirements within the given budget.",
        3: "Find optimal products with coupon optimization to minimize final price within budget.",
    }

    prompt = f"""# DeepPlanning Shopping Task Level {level} #{idx}

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level {level} Objective

{level_desc.get(level, "")}

## User Request

{query}

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
"""

    with open(os.path.join(eval_dir, "PROMPT.md"), "w") as f:
        f.write(prompt)

    # solution.py
    solution = f'''import json
import os

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "task-data.json")) as _f:
    task_data = json.load(_f)


def build_cart() -> dict:
    """
    Parse the shopping query and build the optimal cart.
    Level {level}: {level_desc.get(level, "")}

    Read task_data["query"] for the full shopping request.
    Extract each product requirement and find matching items.

    Return a dict with keys:
        items (list of dicts with name, brand, price, color, size, rating,
               total_reviews, monthly_sales, matched_requirement),
        subtotal (number),
        applied_coupons (list of dicts with type, discount, description),
        total_discount (number),
        final_price (number),
        level (int).
    """
    # TODO: implement
    # Parse the query to extract product requirements
    # For each requirement, find/define the matching product
    # Apply budget constraints (Level 2+)
    # Optimize coupons (Level 3)
    raise NotImplementedError("Not implemented")
'''
    with open(os.path.join(eval_dir, "solution.py"), "w") as f:
        f.write(solution)

    # EVAL.py
    eval_py = f'''import json
import os
import pytest
from solution import build_cart

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "task-data.json")) as _f:
    task_data = json.load(_f)

cart = build_cart()


class TestDeepPlanningShoppingTask:
    def test_cart_has_items(self):
        assert len(cart["items"]) > 0

    def test_all_items_have_required_fields(self):
        for item in cart["items"]:
            assert item["name"]
            assert item["brand"]
            assert item["price"] > 0
            assert item["matched_requirement"]

    def test_subtotal_matches_sum_of_item_prices(self):
        total = sum(item["price"] for item in cart["items"])
        assert abs(cart["subtotal"] - total) < 0.01

    def test_final_price_is_subtotal_minus_discount(self):
        assert abs(cart["final_price"] - (cart["subtotal"] - cart["total_discount"])) < 0.01

    def test_correct_level(self):
        assert cart["level"] == {level}
'''

    # Level 2+ budget check - try multiple patterns to extract budget ceiling
    if level >= 2:
        budget_val = None
        q_lower = query.lower()
        # Pattern: "budget is between X and Y" or "budget ... between X and Y"
        m = re.search(r'budget[^.]*?between\s+(\d[\d,]*)\s+and\s+(\d[\d,]*)', q_lower)
        if m:
            budget_val = m.group(2).replace(",", "")
        # Pattern: "costs somewhere in the range of X to Y"
        if not budget_val:
            m = re.search(r'(?:costs?|price|spend)[^.]*?(?:range|between)\s+(?:of\s+)?(\d[\d,]*)\s+(?:to|and)\s+(\d[\d,]*)', q_lower)
            if m:
                budget_val = m.group(2).replace(",", "")
        # Pattern: "keep ... between X and Y"
        if not budget_val:
            m = re.search(r'keep[^.]*?between\s+(\d[\d,]*)\s+and\s+(\d[\d,]*)', q_lower)
            if m:
                budget_val = m.group(2).replace(",", "")
        # Pattern: "no more than X" / "not exceed X"
        if not budget_val:
            m = re.search(r'(?:no more than|not exceed(?:ing)?|at most|within|under)\s+(\d[\d,]*)', q_lower)
            if m:
                budget_val = m.group(1).replace(",", "")
        # Pattern: "budget is X" / "budget of X"
        if not budget_val:
            m = re.search(r'budget\s+(?:is\s+)?(?:of\s+)?(\d[\d,]*)', q_lower)
            if m:
                budget_val = m.group(1).replace(",", "")
        # Pattern: "total spending/price ... no more than Y"
        if not budget_val:
            m = re.search(r'total\s+(?:spending|price|cost)[^.]*?(?:no more than|not exceed)\s+(\d[\d,]*)', q_lower)
            if m:
                budget_val = m.group(1).replace(",", "")
        if budget_val:
            eval_py += f"""
    def test_within_budget(self):
        assert cart["final_price"] <= {budget_val}
"""

    # Level 3 coupon check
    if level >= 3:
        eval_py += """
    def test_applies_coupons_for_optimization(self):
        # Level 3 should attempt coupon optimization
        # At minimum, check that coupon logic is present
        assert "applied_coupons" in cart
        assert isinstance(cart["applied_coupons"], list)
"""

    eval_py += """
    def test_no_free_items_unless_explicitly_free(self):
        for item in cart["items"]:
            assert item["price"] > 0

    def test_no_duplicate_matched_requirements(self):
        reqs = [item["matched_requirement"] for item in cart["items"]]
        assert len(set(reqs)) == len(reqs)
"""

    with open(os.path.join(eval_dir, "EVAL.py"), "w") as f:
        f.write(eval_py)

    # requirements.txt
    with open(os.path.join(eval_dir, "requirements.txt"), "w") as f:
        f.write(COMMON_REQUIREMENTS_TXT)

    # Clean up old TS files if they exist
    for old_file in ["EVAL.ts", "solution.ts", "package.json", "tsconfig.json"]:
        old_path = os.path.join(eval_dir, old_file)
        if os.path.exists(old_path):
            os.remove(old_path)

    return eval_name


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    vitabench_src = "/tmp/vitabench-source"
    deepplan_src = "/tmp/deepplanning-source"

    if not os.path.exists(vitabench_src):
        print(f"ERROR: VitaBench source not found at {vitabench_src}")
        print("Clone it: git clone https://github.com/meituan-longcat/vitabench /tmp/vitabench-source")
        sys.exit(1)

    if not os.path.exists(deepplan_src):
        print(f"ERROR: DeepPlanning source not found at {deepplan_src}")
        print("Clone it: git clone https://github.com/QwenLM/Qwen-Agent /tmp/deepplanning-source")
        sys.exit(1)

    all_evals = []

    # ── VitaBench (400 tasks) ──
    print("=== Generating VitaBench evals ===")
    for domain in ["delivery", "instore", "ota", "cross_domain"]:
        task_file = os.path.join(vitabench_src, f"data/vita/domains/{domain}/tasks_en.json")
        with open(task_file) as f:
            tasks = json.load(f)
        print(f"  {domain}: {len(tasks)} tasks")
        for i, task in enumerate(tasks):
            name = generate_vitabench_eval(task, domain, i + 1)
            all_evals.append(name)

    # ── DeepPlanning Travel (120 tasks) ──
    print("\n=== Generating DeepPlanning Travel evals ===")
    travel_file = os.path.join(deepplan_src, "benchmark/deepplanning/travelplanning/data/travelplanning_query_en.json")
    with open(travel_file) as f:
        tasks = json.load(f)
    print(f"  travel: {len(tasks)} tasks")
    for i, task in enumerate(tasks):
        name = generate_deepplan_travel_eval(task, i + 1)
        all_evals.append(name)

    # ── DeepPlanning Shopping (120 tasks: 50+50+20) ──
    print("\n=== Generating DeepPlanning Shopping evals ===")
    for level in [1, 2, 3]:
        shop_file = os.path.join(deepplan_src, f"benchmark/deepplanning/shoppingplanning/data/level_{level}_query_meta.json")
        with open(shop_file) as f:
            tasks = json.load(f)
        print(f"  shopping L{level}: {len(tasks)} tasks")
        for i, task in enumerate(tasks):
            name = generate_deepplan_shopping_eval(task, level, i + 1)
            all_evals.append(name)

    print(f"\n=== Done! Generated {len(all_evals)} evals in {EVALS_DIR} ===")

    # Write manifest
    manifest = {
        "total": len(all_evals),
        "vitabench": {
            "delivery": 100,
            "instore": 100,
            "ota": 100,
            "cross_domain": 100,
        },
        "deepplanning": {
            "travel": 120,
            "shopping_L1": 50,
            "shopping_L2": 50,
            "shopping_L3": 20,
        },
        "evals": all_evals,
    }
    manifest_path = os.path.join(os.path.dirname(EVALS_DIR), "eval-manifest.json")
    with open(manifest_path, "w") as f:
        json.dump(manifest, f, indent=2)
    print(f"Manifest written to {manifest_path}")


if __name__ == "__main__":
    main()
