# VitaBench Task: Instore #43

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

With the Dragon Boat Festival coming tomorrow, you want to take your elementary school daughter and wife to experience the traditional craft of making zongzi. You plan to find a DIY workshop with over 5 years of traditional handicraft experience and select a parent-child activity package for 2 adults and 1 child. After deciding on the package, you're concerned that there might be too many people during the holiday, so you need to place the order immediately and book for 9 AM on Saturday. No, wait, your wife has other plans in the morning, so you can only change the time to 2 PM. This way, after finishing the handicraft activity, your family can have dinner out in the evening. Your child mentioned wanting seafood, so you're planning to go to the seafood restaurant you visited last time to see if they have any Festival exclusive package. If they do, you'll buy one; if not, ordering the same package you had last time would also be fine.

## Context

- Current time: `2025-05-30 15:20:00`
- Domain: `instore`

## Requirements / Rubrics

- The DIY handicraft workshop to be ordered should have more than 5 years of traditional handicraft making experience
- The ordered product from DIY handicraft workshop should include zongzi making activity
- The ordered product from DIY handicraft workshop should be a family package for 2 adults and 1 child
- The DIY handicraft workshop appointment time should be 2025-05-31 14:00:00
- The DIY handicraft workshop reservation should be for 3 people
- The DIY handicraft workshop merchant should be Zongqing Handcraft Workshop
- After checking user's historical behavior, the restaurant to order from should be Qingdao Fishing Port Seafood Restaurant
- After checking the set meals of Qingdao Fishing Port Seafood Restaurant, the results include Dragon Boat Festival exclusive package, therefore the seafood restaurant order should be for the Dragon Boat Festival exclusive package

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
