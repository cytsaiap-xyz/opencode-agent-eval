# VitaBench Task: Delivery #15

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Tomorrow is your mother's 65th birthday, and you plan to order five Chinese dishes for home delivery as dinner. Your family usually starts dinner at 7:00 PM, but today everyone will come home early, probably half an hour earlier. Your mother is from Sichuan, and you want to treat her with some hometown dishes tonight, although you normally prefer Light-Flavored food. You also need to order a Dairy Cream cake - your family members aren't particularly fond of sweets, so a cake sized for about two people would be sufficient, also to be delivered to your home.

## Context

- Current time: `2025-11-27 18:04:41`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for Chinese cuisine dishes ordered for mother's birthday dinner should be Greentown Haitang Garden, No.1766 Bayi South Street, Wucheng District, Jinhua City, Zhejiang Province
- The estimated delivery time for the Chinese cuisine order should be before 18:30 on November 28, 2025
- The Chinese cuisine dishes selected for mother's birthday dinner should include both Light-Flavored dishes and authentic spicy Sichuan Cuisine
- The five Chinese cuisine dishes selected for mother's birthday dinner should all be different, not ordering two portions of the same dish
- The delivery address for the birthday cake order should be Greentown Haitang Garden, No.1766 Bayi South Street, Wucheng District, Jinhua City, Zhejiang Province
- The estimated delivery time for the birthday cake order should be before 18:30 on November 28, 2025
- The ordered Dairy Cream birthday cake should be sized for approximately two people, around 4-inch

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
