# VitaBench Task: Cross Domain #70

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You are organizing a two-day, one-night team-building activity for your department of 20 people on the weekend before Qingming Festival. The plan is to visit a farmhouse resort with facilities for team-building activities and various outdoor activities. You also want to prepare prizes for the winners of these activities. Since there's not enough time for shipping, you're considering ordering prizes via food delivery services instead. For the prizes: One first prize, two second prizes, and three third prizes (each tier should have identical items). Your budget is around 1,200 yuan—spend at least 1,000 yuan so that the gifts don't feel too cheap. If suitable options are available, arrange for them to be delivered directly to the farmhouse by Saturday around noon at 12:00 PM. As for the farmhouse package: Look for an all-inclusive team-building package that covers dinner and various activity options within a budget of about 200 yuan per person; accommodation should be included as well. Plan on booking twin rooms with two beds each since there are 11 girls and 9 boys in your group. If sufficient rooms are available at this point, go ahead and book everything now.

## Context

- Current time: `2024-03-29 10:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The ordered farmhouse resort must have team building facilities
- The ordered farmhouse resort needs to provide outdoor game facilities
- The ordered farmhouse resort supports team-building activities for 20 people
- The team building package in the farmhouse resort order must include dinner
- The team building package in the farmhouse resort order must include activity items sufficient for 20 people
- The total price of farmhouse resort order (accommodation included) should be about 200 yuan per person
- The ordered farmhouse resort needs to provide accommodation services
- All room types in the accommodation order must be twin rooms
- Boys and girls need to be accommodated separately, 11 girls in 6 rooms, 9 boys in 5 rooms, the accommodation order requires a total of 11 rooms
- Need to check the date of Qingming Festival, which is April 4th, and the weekend before Qingming is March 30-31, 2024, so the check-in date for the accommodation order is 2024-03-30
- The ordered products must be suitable as team-building prizes
- The team-building prize order must include three different products
- The quantity of  team-building prize order must be 6
- The team building prize order must include 1 relatively expensive item as the first prize
- The team-building prize order must include 2 identical items with a lower price than the first prize as second prizes
- The team-building prize order must include 3 identical items with a lower price than the second prize as third prizes
- The total budget for the team-building prize order is about 1200 yuan, with a minimum expenditure of 1000 yuan
- The delivery time for the team building prize order should be between 2024-03-30 11:00-13:00
- The delivery address for the team building prize order should be Green Wonderland Farmhouse Resort 3km North of the Intersection of Beihai Road and Xiashan Road, Fangzi District, Weifang, Shandong Province

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
