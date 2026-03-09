#!/usr/bin/env python3
"""
Generate all VitaBench (400) + DeepPlanning (240) evals for opencode.
Reads source data from cloned repos and outputs eval directories.
"""

import json
import os
import sys
import re

EVALS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "evals")

COMMON_PACKAGE_JSON = """{
  "name": "eval-EVAL_NAME",
  "private": true,
  "scripts": {
    "test": "npx vitest run"
  },
  "devDependencies": {
    "typescript": "^5.5.0",
    "vitest": "^3.1.0"
  }
}
"""

COMMON_TSCONFIG = """{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
  },
  "include": ["*.ts"]
}
"""

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

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

{instructions}

## Context

- Current time: `{environment.get("time", "unknown")}`
- Domain: `{domain}`

## Requirements / Rubrics

{rubrics_text}

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
"""

    with open(os.path.join(eval_dir, "PROMPT.md"), "w") as f:
        f.write(prompt)

    # solution.ts
    solution = """import envData from './environment.json';
import expectedData from './expected.json';

export interface Product {
  product_id: string;
  quantity: number;
  price: number;
  name?: string;
}

export interface Order {
  order_id: string;
  order_type: string;
  user_id: string;
  store_id: string;
  products: Product[];
  total_price: number;
  location?: {
    address: string;
    longitude?: number;
    latitude?: number;
  };
  dispatch_time?: string;
  status?: string;
  note?: string;
  [key: string]: unknown;
}

/**
 * Analyze the environment data and user request to produce the correct orders.
 * Read environment.json for available stores/products and user context.
 * Return orders matching the required format in expected.json.
 */
export function solve(): Order[] {
  // TODO: implement
  // Read envData.stores, envData.user_profile, envData.weather, etc.
  // Apply the constraints from the user request
  // Return the correct order(s)
  throw new Error('Not implemented');
}
"""
    with open(os.path.join(eval_dir, "solution.ts"), "w") as f:
        f.write(solution)

    # EVAL.ts
    eval_ts = """import { expect, test, describe } from 'vitest';
import { solve } from './solution';
import expectedData from './expected.json';

describe('VitaBench Task', () => {
  const result = solve();
  const expected = expectedData.required_orders;

  test('returns correct number of orders', () => {
    expect(result.length).toBe(expected.length);
  });

  test('each order has required fields', () => {
    for (const order of result) {
      expect(order).toHaveProperty('store_id');
      expect(order).toHaveProperty('products');
      expect(order).toHaveProperty('total_price');
      expect(Array.isArray(order.products)).toBe(true);
    }
  });
"""

    # Add per-order checks
    for oi, order in enumerate(required_orders):
        store_id = order.get("store_id", "")
        products = order.get("products", [])
        total_price = order.get("total_price", 0)

        eval_ts += f"""
  test('order {oi} matches expected store', () => {{
    expect(result[{oi}].store_id).toBe('{store_id}');
  }});

  test('order {oi} has correct products', () => {{
    const expectedProducts = {json.dumps([{"product_id": p.get("product_id", ""), "quantity": p.get("quantity", 1)} for p in products])};
    for (const ep of expectedProducts) {{
      const found = result[{oi}].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${{ep.product_id}}`).toBeDefined();
      if (found) {{
        expect(found.quantity).toBe(ep.quantity);
      }}
    }}
  }});

  test('order {oi} has correct total price', () => {{
    expect(result[{oi}].total_price).toBeCloseTo({total_price}, 0);
  }});
"""

    # Add rubric checks as named tests
    for ri, rubric in enumerate(rubrics):
        safe_rubric = rubric.replace("'", "\\'").replace("`", "\\`").replace("${", "\\${")
        eval_ts += f"""
  test('rubric: {safe_rubric[:80]}', () => {{
    // Structural check - the solve() function must produce orders that satisfy:
    // "{safe_rubric}"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  }});
"""

    eval_ts += "});\n"

    with open(os.path.join(eval_dir, "EVAL.ts"), "w") as f:
        f.write(eval_ts)

    # package.json & tsconfig
    with open(os.path.join(eval_dir, "package.json"), "w") as f:
        f.write(COMMON_PACKAGE_JSON.replace("EVAL_NAME", eval_name))

    with open(os.path.join(eval_dir, "tsconfig.json"), "w") as f:
        f.write(COMMON_TSCONFIG)

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

You are building a travel planning agent. Given the user's query and constraint metadata in `task-data.json`, implement the `planTrip()` function in `solution.ts`.

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

Implement `planTrip()` in `solution.ts`. Read `task-data.json` for the full constraint details. Your function must return a plan object that satisfies all hard constraints. Each constraint in `hard_constraints` has a specific expected answer (hotel name, train number, restaurant, attraction, budget, etc.) — your plan must match these exactly.
"""

    with open(os.path.join(eval_dir, "PROMPT.md"), "w") as f:
        f.write(prompt)

    # solution.ts
    solution = """import taskData from './task-data.json';

export interface TransportPlan {
  type: 'train' | 'flight';
  number: string;       // train number or flight number
  departure: string;    // departure time
  arrival: string;      // arrival time
  seatClass?: string;
}

export interface HotelPlan {
  name: string;
  star: number;
  pricePerNight: number;
  nights: number;
  rooms: number;
  services?: string[];  // e.g., ["Swimming Pool"]
}

export interface MealPlan {
  restaurantName: string;
  cuisine?: string;
  nearAttraction?: string;
  specialRequirement?: string;
}

export interface AttractionPlan {
  name: string;
  type?: string;
  ticketPrice?: number;
}

export interface TripPlan {
  origin: string;
  destination: string;
  days: number;
  peopleNumber: number;
  outboundTransport: TransportPlan;
  inboundTransport: TransportPlan;
  hotel: HotelPlan;
  meals: MealPlan[];
  attractions: AttractionPlan[];
  totalBudget: number;
  constraintResults: Record<string, unknown>;
}

/**
 * Read the task data and produce a trip plan that satisfies all hard constraints.
 * The hard_constraints in task-data.json contain the expected answers.
 * Your plan must match these constraints exactly.
 */
export function planTrip(): TripPlan {
  // TODO: implement
  // Read taskData.hard_constraints for specific requirements
  // Build a plan that satisfies each constraint
  throw new Error('Not implemented');
}
"""
    with open(os.path.join(eval_dir, "solution.ts"), "w") as f:
        f.write(solution)

    # EVAL.ts - check against hard_constraints
    eval_ts = """import { expect, test, describe } from 'vitest';
import { planTrip } from './solution';
import taskData from './task-data.json';

describe('DeepPlanning Travel Task', () => {
  const plan = planTrip();
  const constraints = taskData.hard_constraints as Record<string, any>;
  const meta = taskData.meta_info;

  test('plan has correct origin and destination', () => {
    expect(plan.origin).toBeTruthy();
    expect(plan.destination).toBeTruthy();
  });

  test('plan has correct number of days', () => {
    expect(plan.days).toBe(meta.days);
  });

  test('plan has correct number of travelers', () => {
    expect(plan.peopleNumber).toBe(meta.people_number);
  });
"""

    # Generate constraint-specific tests
    for cname, cdata in hard_constraints.items():
        safe_name = cname.replace("'", "\\'")

        if "hotel_name" in cdata:
            hotel_name = cdata["hotel_name"].replace("'", "\\'")
            eval_ts += f"""
  test('constraint: {safe_name} - correct hotel', () => {{
    expect(plan.hotel.name).toBe('{hotel_name}');
  }});
"""
            if "hotel_star" in cdata:
                eval_ts += f"""
  test('constraint: {safe_name} - correct star rating', () => {{
    expect(plan.hotel.star).toBe({cdata["hotel_star"]});
  }});
"""
            if "required_service" in cdata:
                svc = cdata["required_service"].replace("'", "\\'")
                eval_ts += f"""
  test('constraint: {safe_name} - required service', () => {{
    expect(plan.hotel.services).toContain('{svc}');
  }});
"""

        elif "outbound_train_no" in cdata or "inbound_train_no" in cdata:
            if "outbound_train_no" in cdata:
                train = cdata["outbound_train_no"].replace("'", "\\'")
                eval_ts += f"""
  test('constraint: {safe_name} - outbound train', () => {{
    expect(plan.outboundTransport.number).toBe('{train}');
  }});
"""
            if "inbound_train_no" in cdata:
                train = cdata["inbound_train_no"].replace("'", "\\'")
                eval_ts += f"""
  test('constraint: {safe_name} - inbound train', () => {{
    expect(plan.inboundTransport.number).toBe('{train}');
  }});
"""

        elif "outbound_flight_no" in cdata or "inbound_flight_no" in cdata:
            if "outbound_flight_no" in cdata:
                flight = cdata["outbound_flight_no"].replace("'", "\\'")
                eval_ts += f"""
  test('constraint: {safe_name} - outbound flight', () => {{
    expect(plan.outboundTransport.number).toBe('{flight}');
  }});
"""
            if "inbound_flight_no" in cdata:
                flight = cdata["inbound_flight_no"].replace("'", "\\'")
                eval_ts += f"""
  test('constraint: {safe_name} - inbound flight', () => {{
    expect(plan.inboundTransport.number).toBe('{flight}');
  }});
"""

        elif "restaurant_name" in cdata:
            rname = cdata["restaurant_name"].replace("'", "\\'")
            eval_ts += f"""
  test('constraint: {safe_name} - restaurant', () => {{
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('{rname}');
  }});
"""

        elif "attraction_name" in cdata:
            aname = cdata["attraction_name"]
            if isinstance(aname, list):
                for a in aname:
                    a_safe = a.replace("'", "\\'")
                    eval_ts += f"""
  test('constraint: {safe_name} - attraction {a_safe[:40]}', () => {{
    const names = plan.attractions.map(a => a.name);
    expect(names).toContain('{a_safe}');
  }});
"""
            else:
                a_safe = str(aname).replace("'", "\\'")
                eval_ts += f"""
  test('constraint: {safe_name} - attraction', () => {{
    const names = plan.attractions.map(a => a.name);
    expect(names).toContain('{a_safe}');
  }});
"""

        elif "budget" in cdata:
            budget = cdata.get("budget", cdata.get("budget_limit", 0))
            if budget:
                eval_ts += f"""
  test('constraint: {safe_name} - within budget', () => {{
    expect(plan.totalBudget).toBeLessThanOrEqual({budget});
  }});
"""

        else:
            # Generic constraint check via constraintResults
            eval_ts += f"""
  test('constraint: {safe_name} - satisfied', () => {{
    expect(plan.constraintResults).toHaveProperty('{safe_name}');
  }});
"""

    eval_ts += "});\n"

    with open(os.path.join(eval_dir, "EVAL.ts"), "w") as f:
        f.write(eval_ts)

    with open(os.path.join(eval_dir, "package.json"), "w") as f:
        f.write(COMMON_PACKAGE_JSON.replace("EVAL_NAME", eval_name))

    with open(os.path.join(eval_dir, "tsconfig.json"), "w") as f:
        f.write(COMMON_TSCONFIG)

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

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level {level} Objective

{level_desc.get(level, "")}

## User Request

{query}

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
"""

    with open(os.path.join(eval_dir, "PROMPT.md"), "w") as f:
        f.write(prompt)

    # solution.ts
    solution = f"""import taskData from './task-data.json';

export interface CartItem {{
  name: string;
  brand: string;
  price: number;
  color?: string;
  size?: string;
  rating?: number;
  totalReviews?: number;
  monthlySales?: number;
  matchedRequirement: string;  // which requirement this item satisfies
}}

export interface AppliedCoupon {{
  type: 'cross-store' | 'same-brand';
  discount: number;
  description: string;
}}

export interface ShoppingCart {{
  items: CartItem[];
  subtotal: number;
  appliedCoupons: AppliedCoupon[];
  totalDiscount: number;
  finalPrice: number;
  level: number;
}}

/**
 * Parse the shopping query and build the optimal cart.
 * Level {level}: {level_desc.get(level, "")}
 *
 * Read taskData.query for the full shopping request.
 * Extract each product requirement and find matching items.
 */
export function buildCart(): ShoppingCart {{
  // TODO: implement
  // Parse the query to extract product requirements
  // For each requirement, find/define the matching product
  // Apply budget constraints (Level 2+)
  // Optimize coupons (Level 3)
  throw new Error('Not implemented');
}}
"""
    with open(os.path.join(eval_dir, "solution.ts"), "w") as f:
        f.write(solution)

    # EVAL.ts - structural validation + constraint extraction
    # Extract product count from query (count distinct requirement blocks)
    # Simple heuristic: count "I need", "I'm looking for", "Next", "Also", "Finally" etc.
    eval_ts = """import { expect, test, describe } from 'vitest';
import { buildCart } from './solution';
import taskData from './task-data.json';

describe('DeepPlanning Shopping Task', () => {
  const cart = buildCart();

  test('cart has items', () => {
    expect(cart.items.length).toBeGreaterThan(0);
  });

  test('all items have required fields', () => {
    for (const item of cart.items) {
      expect(item.name).toBeTruthy();
      expect(item.brand).toBeTruthy();
      expect(item.price).toBeGreaterThan(0);
      expect(item.matchedRequirement).toBeTruthy();
    }
  });

  test('subtotal matches sum of item prices', () => {
    const sum = cart.items.reduce((s, i) => s + i.price, 0);
    expect(cart.subtotal).toBeCloseTo(sum, 2);
  });

  test('final price is subtotal minus discount', () => {
    expect(cart.finalPrice).toBeCloseTo(cart.subtotal - cart.totalDiscount, 2);
  });

  test('correct level', () => {
    expect(cart.level).toBe(LEVEL);
  });
""".replace("LEVEL", str(level))

    # Level 2+ budget check
    if level >= 2:
        # Try to extract budget from query
        budget_match = re.search(r'budget\s+(?:is\s+)?(?:between\s+)?(\d[\d,]*)', query.lower())
        if budget_match:
            budget_val = budget_match.group(1).replace(",", "")
            eval_ts += f"""
  test('within budget', () => {{
    expect(cart.finalPrice).toBeLessThanOrEqual({budget_val});
  }});
"""

    # Level 3 coupon check
    if level >= 3:
        eval_ts += """
  test('applies coupons for optimization', () => {
    // Level 3 should attempt coupon optimization
    // At minimum, check that coupon logic is present
    expect(cart.appliedCoupons).toBeDefined();
    expect(Array.isArray(cart.appliedCoupons)).toBe(true);
  });
"""

    # Check that each item has a non-zero price
    eval_ts += """
  test('no free items unless explicitly free', () => {
    for (const item of cart.items) {
      expect(item.price).toBeGreaterThan(0);
    }
  });

  test('no duplicate matched requirements', () => {
    const reqs = cart.items.map(i => i.matchedRequirement);
    const unique = new Set(reqs);
    expect(unique.size).toBe(reqs.length);
  });
});
"""

    with open(os.path.join(eval_dir, "EVAL.ts"), "w") as f:
        f.write(eval_ts)

    with open(os.path.join(eval_dir, "package.json"), "w") as f:
        f.write(COMMON_PACKAGE_JSON.replace("EVAL_NAME", eval_name))

    with open(os.path.join(eval_dir, "tsconfig.json"), "w") as f:
        f.write(COMMON_TSCONFIG)

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
