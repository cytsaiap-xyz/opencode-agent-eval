# VitaBench Task: Cross Domain #4

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Your online girlfriend plans to come from Wuxi to Kunming to meet you in person next Thursday during the Dragon Boat Festival. You plan to order a set of dumbbells for delivery to start working out now, and you need ones suitable for beginners. She has booked Tutu Guitu Boutique Homestay near Dianchi Lake, with the latest check-in time being 11 PM. It takes about two and a half hours to get from the airport to the homestay, so you need to book a flight with an appropriate arrival time, but your budget for the ticket is only 600 yuan. You want to prepare a Kunming-specialty welcome gift for her, to be delivered to her homestay on Friday morning, but the price cannot exceed 20 yuan. After work on Friday, you want to take her out for dinner at a high-quality restaurant with nice decor. You should note that your girlfriend cannot handle spicy food very well, and you want to purchase a package that includes beverages. You yourself cannot eat foods high in purine.

## Context

- Current time: `2025-05-21 20:15:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The dumbbells in the order should be suitable for beginners
- The delivery address for the dumbbells order is Room 502, Unit 1, Building 3, Rongcheng Youjun, Yanjiadi Urban Village Reconstruction Project (420 meters walk from Exit B of Yanjiadi Metro Station), Xishan District, Kunming City, Yunnan Province
- To ensure check-in at 11 PM, a flight arriving two and a half hours earlier should be chosen, with the ordered flight's arrival time being before 8:30 PM on June 5, 2025
- The price of the ordered flight should not exceed 600
- The ordered flight is from Wuxi to Kunming
- The welcome gift order should include items with Kunming specialty
- The price of the welcome gift should not exceed 20 yuan
- The delivery time for the welcome gift should be the morning of June 5, 2025
- The delivery address for the welcome gift is Tutu Guitu Boutique Homestay, No. 114 Baicao Village, Guanyinshan Community, Biji Street Office, Xishan District, Kunming City, Yunnan Province
- The restaurant ordered should be beautifully decorated
- The ordered restaurant should have a rating of 4.0 or above
- The dishes in the restaurant set meal order should not be too spicy
- The set meal in the restaurant order should include beverages
- The dishes in the restaurant set meal order should avoid high-purine foods such as Seafood Master

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
