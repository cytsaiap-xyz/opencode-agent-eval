# VitaBench Task: Instore #35

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Since the weather will be nice tomorrow, you plan to meet up with three girlfriends at a place that offers outdoor BBQ to relax. It's your turn to treat everyone, and you want to find a place with a spacious lawn and canopy setup. For the set menu, you want one that includes BBQ ingredients and provides BBQ tools, which would be much more convenient. However, the ingredients must not contain pork, as one of your friends is Muslim and strictly avoids it. Of course, the location shouldn't be too far - if you can't find a suitable place within 20 kilometers from your home, a countryside farmhouse restaurant serving Earth Pot Chicken would be an alternative, as long as they offer a 4-Person Meal. Whichever option you choose, you plan to make a reservation for 11 AM tomorrow. You've agreed with your friends to return home by 4 PM because you promised your child that you would take them to a family park to play on the trampoline that afternoon, and you're planning to buy the Family Package from the same place as last time. However, you need to see how much the BBQ will cost - if it exceeds 450, you'll just buy a Child Ticket for your kid and stand beside them taking photos.

## Context

- Current time: `2024-01-05 20:15:00`
- Domain: `instore`

## Requirements / Rubrics

- Should check if there are outdoor BBQ restaurants within 20km of Room 502, Unit 1, Building 3, Zilang Mansion, 128 Gongnong Road, Chongchuan District, Nantong, Jiangsu Province (including 20km). The result is yes, so the merchant for the in-store dining order should be an outdoor BBQ restaurant
- The ordered outdoor BBQ restaurant should have spacious lawn and canopy facilities
- The set menu ordered at the outdoor BBQ restaurant should provide BBQ ingredients and BBQ tools
- The BBQ ingredients provided in the outdoor BBQ restaurant's ordered set menu should not include pork
- The outdoor BBQ restaurant order should be for one 4-person meal, not four individual sets
- The reserved outdoor BBQ restaurant should be Prairie Canopy BBQ Camp
- The outdoor BBQ restaurant reservation time should be 2024-01-06 11:00:00
- The number of people for the outdoor BBQ restaurant reservation is 4
- Need to check user behavior history to find previously visited family parks, with the result being Wonder Family Park; the ordered family park should be Wonder Family Park
- Need to check the BBQ order price, with the result being not more than 450 yuan; the family park order should be for a Family Package (1 Adult & 1 Child)

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
