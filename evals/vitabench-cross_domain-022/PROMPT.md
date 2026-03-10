# VitaBench Task: Cross Domain #22

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You have to work overtime today, but you've already booked movie tickets for 8 o'clock, so you need to quickly finish your work, grab some takeout food at the office, and rush to the movie. You want to order chicken soup rice without carrots, not exceeding 25 yuan, and it must be delivered before 7:20 PM. After the movie, your friend wants to find a KTV to continue having fun, so you need to check if there's a KTV near the cinema with good sound equipment and book a small room for three hours. However, you need to go on a business trip to Huai'an tomorrow, so you should check train tickets first and buy one departing in the morning with the shortest travel time. If the train departs before 10 AM, you won't be able to go to KTV, to avoid being tired tomorrow. In that case, you should order two milk teas to the cinema as an apology to your friend. If the train departs after 10 AM, stick to the original plan.

## Context

- Current time: `2024-12-17 18:45:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The takeout food ordered must be chicken soup rice
- The takeout food ordered must not contain carrots
- The price of the takeout food should not exceed 25 yuan
- The takeout order must be delivered before 2024-12-17 19:20
- The delivery address should be 5th Floor, Building D, Changzhou Software Park, 9 Taihu East Road, Xinbei District, Changzhou, Jiangsu Province
- The KTV to be booked should be located within 3km of Changzhou Wanda Cinema, 4th Floor, Wanda Plaza, 123 Yanling West Road, Zhonglou District, Changzhou, Jiangsu Province
- The KTV must have good sound equipment
- The KTV package service duration should be 3 hours
- The KTV package specification should be Small Room
- The train ticket to be booked should be for a departure on December 18, 2025
- The train ticket must be for a morning departure
- Need to check for the shortest morning journey from Changzhou to Huai'an, with the search result showing train G7681 taking 1 hour 15 minutes (10:05-11:20) as the shortest, and need to book this one

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
