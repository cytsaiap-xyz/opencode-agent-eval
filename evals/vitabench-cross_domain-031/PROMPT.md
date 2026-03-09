# VitaBench Task: Cross Domain #31

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

This Saturday is your cousin's engagement ceremony, and you need to attend on behalf of the groom's side. The engagement ceremony will be held in Shenyang, and you want to arrive early to help with preparations, so you need to check train tickets and buy the earliest one arriving on Saturday morning—any seat will do. You also want to get your hair done, so you want to search for suitable hair salons near the Shenyang high-speed rail station. You want to book a Vintage Updo Wash and Blow Dry Package, scheduled about two hours after your train arrives in Shenyang, so you won't be rushed. The engagement banquet will be held at a five-star hotel. Your cousin originally prepared expensive diamond rings, but it would be a shame if they got scratched or lost in the crowd. You want to see if you can order a beautiful pair of Couple Rings for delivery, Simulated Moissanite would be fine—they'll look good for the occasion, and you won't feel bad if they get damaged. The rings need to be delivered to your home today.

## Context

- Current time: `2025-05-27 17:23:45`
- Domain: `cross_domain`

## Requirements / Rubrics

- The query for Saturday is for 2025-05-31, so the train ticket order date should be May 31, 2025
- The ordered train ticket must have a seat, not Standing Room Only
- The ordered train should be the earliest one arriving in Shenyang among the available options
- The train number in the train ticket order should be G8012
- The ordered ring must be Couple Rings
- The ordered ring must be made of Simulated Moissanite material, not Real Diamond material products
- The ordered ring must have Same-day Delivery
- The delivery address for the ring should be Room 803, Unit 2, Jinshi International Apartment, 553 Zhongshan Road, Heishijiao Street, Shahekou District, Dalian
- The ordered hair salon must be located within 2.5km of Shenyang High-speed Rail Station
- The ordered hair salon package must include Vintage Updo
- The ordered hair salon package must be a Wash and Blow Dry Package
- The appointed hair salon should be Fashion Hair Art
- The hair salon appointment time must be scheduled after 10:26 on May 31

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
