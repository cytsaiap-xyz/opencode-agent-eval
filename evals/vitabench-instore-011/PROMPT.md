# VitaBench Task: Instore #11

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your wife will take your child back to her hometown tomorrow, and you'll be home alone. You want to go to a bathhouse to relax. This time, you don't plan to go to the bathhouse you visited before; instead, you want to try a high-end one that offers full-body massage and cupping therapy to see how it differs from your previous experience. You want to purchase a package that includes sauna and massage, and you're willing to spend 100-200 yuan more than your usual budget. You also want to check if there are any highly-rated Japanese restaurants near the bathhouse. You'd like to eat some Sashimi, preferably a set menu that includes a Sashimi Platter. If the total cost of the bathhouse and meal doesn't exceed 600 yuan, you want to use the remaining money to book a Billiards package for as many hours as you can afford. If the remaining money isn't enough for booking, that's fine.

## Context

- Current time: `2024-04-13 15:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The merchant ordered in the bathhouse order cannot be the 'Northeastern Bathhouse' that the user has visited before
- The item ordered in the bathhouse order must include full body massage
- The item ordered in the bathhouse order must include Cupping Therapy
- The merchant ordered in the bathhouse order must be high-end
- The rating of the merchant ordered in the Japanese restaurant order should be 4.2 or above
- The item ordered in the Japanese restaurant order is a meal for one person
- The item ordered in the Japanese restaurant order includes Sashimi Platter
- The merchant ordered in the Japanese restaurant order should be within 3km of Crown Sauna Club, No. 268, Xueshi Road, Yuelu District, Changsha
- If the total cost of the bathhouse order and Japanese cuisine order does not exceed 600 yuan, then purchase a billiards package
- The total cost of the billiards package order plus the bathhouse order and Japanese cuisine order cannot exceed 600 yuan

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
