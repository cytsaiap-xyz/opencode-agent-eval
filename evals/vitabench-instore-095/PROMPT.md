# VitaBench Task: Instore #95

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You had another argument with your wife today and want to find a place to relax, but it can't be too far away in case your wife needs you to return home quickly. You plan to check if there are any gyms within 1km of your home with ratings above 4.5, to work out and sweat to relieve your frustration. You only want to buy a self-training single session card package for venue access, the cheaper the better. If you can't find a suitable gym, then you'll look for an e-sports internet cafe to play games, just buying a 2-hour package voucher. The internet cafe must have a non-smoking area, as the last place you went had too much smoke that irritated your eyes. Today you don't plan to go home for dinner; after relaxing, you want to find a BBQ restaurant, also close to home, and buy a single person package that includes beer. Today you want to treat yourself a bit better, and can spend about 20 yuan more than you usually do on Sichuan food.

## Context

- Current time: `2024-06-27 18:45:00`
- Domain: `instore`

## Requirements / Rubrics

- Need to check if there are suitable fitness centers within 1km (inclusive) of Room 1203, Building A, Jianye Kaixuan Plaza, 59 Huayuan Road, Jinshui District, Zhengzhou. The result is yes, so the ordered merchant should be a fitness center
- The ordered fitness center should have a rating of 4.5 or above
- The product ordered from the fitness center should be a venue free training package
- The product ordered from the fitness center should be a single session card package
- The product ordered from the fitness center should be the cheapest among the qualifying packages
- The ordered restaurant should be a BBQ restaurant
- The ordered restaurant should be within 1km (inclusive) of Room 1203, Building A, Jianye Kaixuan Plaza, 59 Huayuan Road, Jinshui District, Zhengzhou
- The product ordered from the restaurant should be a single person package
- The package ordered from the restaurant should include beer
- Need to check historical behavior to find the user's usual spending on Sichuan cuisine, which is 125 yuan. The user indicates they can spend about 20 yuan more than their usual Sichuan cuisine spending, so the package price ordered from the restaurant should be around 145 yuan

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
