# VitaBench Task: Cross Domain #96

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You received a last-minute notice that you need to host a foreign client tomorrow, so you need to quickly arrange the itinerary. The client wants to experience traditional Chinese culture, and you plan to find a tea house with rich cultural heritage, preferably with on-site tea ceremony performances and various famous tea tasting services. The tea sets sold at the tea house are quite expensive, so you want to order one online for around 500 yuan. The tea set should be as exquisite as possible and needs to be delivered to your home quickly so you can inspect it first. If it's not presentable, you'll buy one at the tea house instead. Also, you need to check what packages the tea house offers for in-depth tea culture experiences, with a budget of around 200 yuan per person, and make a reservation for 2 PM, but you don't need to purchase the package yet.

## Context

- Current time: `2024-05-18 10:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The tea house ordered should have profound cultural heritage
- The tea house ordered should provide on-site tea master performance services
- The tea house ordered should provide various famous tea tasting services
- The package ordered at the tea house should include in-depth tea culture experience
- The per person budget for the tea house package should be around 200 yuan
- The reservation time for the tea house should be May 19, 2024 at 14:00
- The number of people for the reservation should be 2
- The price of the tea set ordered should be around 500 yuan
- The tea set ordered should be exquisite
- The expected delivery time for the tea set order should be before May 18, 2024 at 11:00
- The delivery address for the tea set order should be Room 1201, Building B, Hengji Garden near Hisense Plaza, 158 South Street, Zhifu District, Yantai, Shandong Province

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
