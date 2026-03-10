# VitaBench Task: Instore #29

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You're experiencing severe menstrual cramps this period, and your colleague mentioned that moxibustion could help relieve it, so you want to try it after finishing work at 7 PM. You plan to find a professional Chinese Medicine Health Preservation center, preferably one with high ratings, a single treatment under 150 yuan, and a nice environment to purchase a Menstrual Regulation Therapy package. After placing your order, you need to make an appointment, estimating that you can arrive within an hour after work. By the way, your colleague has been giving you rides to work lately, and to show your gratitude, you want to find a Thai restaurant near your company with an average price of 100-150 yuan per person to treat her to a meal on the weekend. You want to order a set meal that includes both signature dishes and drinks, and after payment, book a table for 6 PM on Sunday evening.

## Context

- Current time: `2024-12-19 18:45:00`
- Domain: `instore`

## Requirements / Rubrics

- The moxibustion order merchant must be a Traditional Chinese Medicine Health Center
- The moxibustion order merchant rating must be 4.0 stars or above
- The moxibustion order package price must be less than or equal to 150 yuan
- The moxibustion order merchant environment must be nice
- The moxibustion order package must be suitable for menstrual regulation therapy
- The moxibustion appointment needs to be scheduled for 8:00 PM (2024-12-19 20:00)
- The appointed moxibustion order merchant should be Kang Ning TCM Health Center
- The Thai restaurant must be within 3000m of the company (Room 1506, Building B, Building Economy Industrial Park, No. 27 Business Inner Ring Road, Zhengdong New District, Zhengzhou)
- The Thai cuisine order package should have an average cost per person between 100-150 yuan, meaning a total price between 200 and 300 yuan (inclusive)
- The Thai cuisine order package should include signature dishes and drinks
- The Thai cuisine order package should be enough for two people
- The Thai cuisine table reservation needs to be scheduled for Sunday at 6:00 PM (2024-12-22 18:00)
- The Thai cuisine table reservation needs to be for 2 people
- The reserved Thai restaurant should be Thai Enjoy Thai Restaurant

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
