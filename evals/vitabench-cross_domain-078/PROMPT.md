# VitaBench Task: Cross Domain #78

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Your motorcycle club is planning an epic self-driving journey across the Duku Highway, and with 13 people in your group, everyone has assigned you to find a suitable restaurant for the mobilization meeting before departure, preferably one that provides a parking lot with 20 or more spaces. The meeting is scheduled for 6 PM the day after tomorrow, and you want to purchase a voucher first to see if there are packages under 120 yuan per person that include main course but absolutely no alcohol. Also, you need to make a reservation in advance. You've heard that there's a Live Performance Theater at the Duku Highway, and your group wants to experience it, so check if there are tickets available for the 26th, and if so, book them in advance, making sure to figure out the most economical way to purchase them. There are many magnificent scenic spots along the Duku Highway, and you also want to buy the recently popular Pocket 3 to take commemorative photos for your motorcycle team. Check if delivery is available, and make sure it's from a well-known chain shop to avoid counterfeit products. Delivery by 3 PM today would be fine, as your gym owner can teach you how to use it, giving you time to practice before the trip.

## Context

- Current time: `2024-08-21 13:03:17`
- Domain: `cross_domain`

## Requirements / Rubrics

- The restaurant's parking lot needs to provide 20 or more parking spaces
- The ordered items from the restaurant should be suitable for 13 people
- The price of ordered items from the restaurant should be less than 1560 yuan
- The ordered items from the restaurant should include main course
- The ordered items from the restaurant cannot contain alcohol
- The reserved restaurant is Yunnan Image Restaurant (Dianchi Road Branch)
- The restaurant reservation time is August 23, 2024, 18:00
- The number of people for the restaurant reservation is 13
- The usage date of the ordered item from the live performance theater is August 26, 2024
- The ordered item from the live performance theater is a group ticket (valid for up to 15 people)
- The ordered delivery item is Pocket 3
- The ordered delivery item should come from a well-known chain shop
- The delivery address for the takeout order is 15th Floor, Yunnan Image Business Center, 448 Youth Road, Wuhua District, Kunming, Yunnan Province
- The estimated delivery time for the takeout order is August 21, 2024, 15:00

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
