# VitaBench Task: Cross Domain #18

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

After the mid-year report, your wife got promoted, and you want to organize a celebration dinner for her at a Michelin restaurant in Xi'an, which should provide the highest per capita Michelin set meal. Check the set menus, avoid foods high in purine (like offal or seafood soup) and alcohol. You hope to have a romantic and private dining environment. If you can't book for Friday evening, Thursday is also fine. You want to choose a set menu with auspicious meaning and place the order now. You also want to buy her the latest iPhone with 1TB storage. You hope to have it delivered to the restaurant as a surprise for her. If white one is not in stock, blue is also acceptable. Your wife has always wanted to see an art exhibition, so you want to check the current exhibition theme at the Xi'an Art Museum. If it's related to modern art, you'd like to book two tickets, but both of you are only available on weekday evenings and weekends.

## Context

- Current time: `2025-07-17 10:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The restaurant ordered must be a Michelin restaurant
- Need to check the highest per capita Michelin set meal, the result is from Nebula, so the ordered set meal must be from Nebula
- The ordered restaurant must provide a romantic and private dining environment
- The set meal in the restaurant order must have auspicious meaning
- The restaurant order set meal must avoid high purine foods (such as offal/seafood soup), and must avoid foods or drinks containing alcohol
- The ordered phone must be the latest iPhone model
- The ordered phone must have 1TB of storage
- The phone should be in stock
- The phone should be blue
- The delivery address for the phone order must be Nebula, 100 Nanguan Street, Beilin District, Xi'an, Shaanxi Province
- The delivery time for the phone order must be the evening of July 18, 2025
- Must check the theme of Xi'an Art Museum's current exhibition, the result is that there are modern art related exhibitions
- The number of tickets in the art museum order must be 2
- Check the opening hours of Xi'an Art Museum, the result shows that it's open until 17:00, so the date of the art museum ticket must be on a weekend
- The restaurant reservation time must be Friday evening (2025-07-18)
- The reserved restaurant must be Nebula

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
