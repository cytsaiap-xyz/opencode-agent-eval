# VitaBench Task: Cross Domain #40

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You're staying at your parents' house tonight. Since you rarely visit home, you plan to treat your parents, brother and sister-in-law to a meal. You've already reserved a restaurant for tonight and want to check your order again to confirm the reservation time. You previously ordered some pastries for your parents, but just realized you should get something for your brother and sister-in-law too. You need to place another order quickly and have it delivered directly to the restaurant, ideally arriving when you get there. The main purpose of your visit this week is to discuss with your parents about your trip to Zhuhai from next Saturday to the following Saturday. You want to check flight tickets, preferably for flights that are neither too early nor too late. Due to work commitments, you need to return to Guiyang two days early. If it's within your budget of 2,000 yuan, you want to book your round-trip tickets now, looking for the cheapest options available.

## Context

- Current time: `2024-08-02 13:34:08`
- Domain: `cross_domain`

## Requirements / Rubrics

- Restaurant reservation time is August 2, 2024 at 7:00 PM
- The ordered item in the delivery order is Rye Walnut Pastry Gift Box from Yue Xiang Lou
- The delivery address for the takeout order is Yue Xiang Lou, 88 Zhonghua North Road, Yunyan District, Guiyang, Guizhou Province
- The estimated delivery time for the takeout order is August 2, 2024 at 7:00 PM
- The flight order should include round-trip flights
- The departure flight date is August 10, 2024
- The return flight date is August 15, 2024
- The departure flight in the ticket order should be CZ3707
- The return flight in the ticket order should be CZ3708
- The total price of the flight order should be less than 2000 yuan

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
