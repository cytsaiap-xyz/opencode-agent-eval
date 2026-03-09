# VitaBench Task: Cross Domain #99

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

As the event planner for your club's hanfu activity in Wuzhen on the 30th of this month, you need to make some arrangements in advance. You plan to visit Wuzhen West Scenic Area at 2 PM on the day of the event for a boat tour experience, so you need to purchase tickets. However, 4 members are afraid of water, so you'll need to arrange other activities within the scenic area for them. At 6 PM, you plan to have dinner at a restaurant with a Classical Ambiance. The restaurant should preferably be near the scenic area for easy walking access. With a total of 12 members, you need to check if there are suitable banquet set meals and reserve seats in advance. Also, two core members need to fly in from Beijing that day to participate, so you need to help them find suitable flights. Since Wuzhen doesn't have an airport, you plan to arrange for them to fly to Hangzhou. It takes about an hour and a half by taxi from Hangzhou to Wuzhen, so the departure time should be early enough to avoid being late, but not too early (like 5 or 6 AM) to ensure they get enough rest. If the flight time is suitable, you'll make the reservation first. Economy Class can be reimbursed later, and don't forget to book the tickets for the scenic area.

## Context

- Current time: `2024-06-24 15:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The boat tour ticket should be used between 14:00-18:00
- The boat tour ticket order should include 8 tickets
- The boat tour ticket order date should be June 30, 2024
- Other experience activities not involving water activities should be within Wuzhen West Scenic Area
- Other experience activity tickets not involving water activities should be used between 14:00-18:00
- The order for other experience activity tickets not involving water activities should include 4 tickets
- The order date for other experience activity tickets not involving water activities should be June 30, 2024
- The reserved restaurant should be no more than 800 meters from Wuzhen West Scenic Area
- The reserved restaurant should have a Classical Ambiance
- The reserved restaurant should have banquet set meals that can accommodate 12 people
- The restaurant reservation time should be 18:00 on June 30, 2024
- The reservation order should be for 12 people
- The departure date of the flight order should be June 30, 2024
- The take-off time of the flight should be at or after 07:00
- To ensure members can arrive from Hangzhou Airport to Wuzhen for the 14:00 activity on the same day, considering it takes one and a half hours from Hangzhou to Wuzhen, the flight in the ticket order should arrive in Hangzhou at or before 12:30
- The seat type in the flight ticket order should be Economy Class

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
