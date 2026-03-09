# VitaBench Task: Ota #47

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You'll finish your last exam on the 17th, and that will be the end of this semester. Before going home, you and your roommate plan to spend two days in Weihai, and you're planning to leave the day after your exam. You want to check what EMU (Electric Multiple Unit) or High-speed rail trains are available that day. After discussion, you decide to take the train that leaves relatively early but is cheaper. In order to sit together, you plan to buy tickets for both of you. You're not very familiar with Weihai and want to know what attractions are worth visiting. You want to go to the seaside, but just walking around would be boring, so you'd prefer to find a fun water activity. You can each buy your own tickets for this activity, which you plan to do on your second day in Weihai. Your remaining allowance isn't much, so you'd prefer the cheapest option for this activity.

## Context

- Current time: `2024-06-15 14:30:00`
- Domain: `ota`

## Requirements / Rubrics

- Train departure date should be June 18, 2024
- Train tickets should be for the train from Jinan to Weihai
- Train number should be G6966
- Number of train tickets should be 2
- The ordered attraction ticket should be the cheapest one (Banana boat experience ticket)
- Attraction ticket use date should be June 19, 2024
- Number of attraction tickets should be 1

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
