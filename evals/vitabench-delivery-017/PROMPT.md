# VitaBench Task: Delivery #17

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You're working overtime at the company on Saturday morning and really want a cup of milk tea to improve your mood, preferably gardenia-flavored. You need to pick it up before you leave work at 12 o'clock. At noon, you want to order some iced mango sticky rice. After eating, you plan to go shopping with your best friend. You've agreed to meet at 3 o'clock, and you've calculated that if you can eat at 2 o'clock, the timing should work out well.

## Context

- Current time: `2025-09-13 10:41:22`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the Milk Tea order should be Wanda Plaza, No. 130 Ma'anshan Road, Baohe District, Hefei, Anhui Province (Hefei Baohe Branch)
- The expected delivery time for the Milk Tea order should be before 12:00 on September 13, 2025
- The ordered Milk Tea should be Gardenia flavored
- The delivery address for the Mango Sticky Rice should be Triumphal Arch Phase I, Intersection of Jiahe Road and Qianshan Road, Shushan District, Hefei, Anhui Province
- The expected delivery time for the noon Mango Sticky Rice order should be before 14:00 on September 13, 2025
- The Mango Sticky Rice should be iced

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
