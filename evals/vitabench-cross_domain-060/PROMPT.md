# VitaBench Task: Cross Domain #60

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your company has suddenly notified you about a business trip, requiring you to be at work in Huiyang tomorrow, but travel reimbursement only covers second class seats or hard seats, which makes you feel like your whole body will fall apart from sitting. You want to check the location of Huiyang train station in advance, and see if there are any massage shops nearby where you can stay overnight. Your company is not far from Xiamen North Station, and you plan to ride your electric bicycle there directly after finishing work at 6 PM. You'll probably enter the station around 7 PM, and need to allow an additional 10 minutes for queuing time. For the massage, you want to buy a full-body package, enjoying at least one and a half hours of massage. To ensure your travel experience, you also want to buy a U-shaped pillow to take to your company. Your reimbursement limit is 500 yuan, so after booking the massage and train ticket, you want to see which U-shaped pillow you can afford with the remaining budget, choosing the most expensive one within your budget range.

## Context

- Current time: `2025-04-07 17:45:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The purchased train ticket is from Xiamen North Station to Huiyang Station
- Considering arrival at the station at 7:00 and allowing 10 minutes for queuing, the departure time of the purchased train ticket should be later than 19:10:00
- The purchased train ticket should be a Second class seat or Hard seat
- The departure date of the purchased train ticket is April 7, 2025
- The reimbursement limit is 500, and the cost of the massage package should be less than or equal to 500 minus the cost of the train ticket
- According to the query, the location of Huiyang Railway Station is obtained, and the massage package provider should be within 3km of Huiyang Railway Station
- The massage package should be for full body
- The massage package time should be more than 1.5 hours
- The massage service provider should offer Overnight service
- The reimbursement limit is 500, and the cost of the U-shaped pillow should be less than or equal to 500 minus the cost of the train ticket and minus the cost of the massage package
- The U-shaped pillow should be the most expensive one within the available budget
- The delivery address for the U-shaped pillow should be Xiamen Hemei World Business Center, No. 618 Chengyi Middle Road, Jimei District, Xiamen, Fujian Province
- The estimated delivery time for the U-shaped pillow should be before 18:30:00 on 2025-04-07

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
