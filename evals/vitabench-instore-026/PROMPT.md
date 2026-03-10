# VitaBench Task: Instore #26

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You're looking for a bar to meet up with two friends. Initially, you considered going to your regular bar, but then you realized you're getting a bit tired of the same drinks and want to try a new place. You need a bar that allows smoking and has live singing. Ideally, there should be a night market nearby where you can grab some late-night snacks after drinks. You need to book both the bar package and seat in advance. For the package, you'd like a cocktail set with snacks. Since you can't eat high-purine foods, seafood is off-limits for you. Once you've made your selection, place your order, pay, and plan to arrive the bar at 9:00 PM. Additionally, your son wants to visit a children's playground. You'd like to check if there are any playgrounds suitable for 5-year-olds near your home, and purchase a parent-child ticket for your wife and son that allows entry at 7:00 PM, preferably inside a mall, so they can shop around before playing.

## Context

- Current time: `2025-03-15 17:30:00`
- Domain: `instore`

## Requirements / Rubrics

- Need to query user's frequently visited bars, the result is b216 (Lianfa Premium Store), the ordered bar cannot be b216 (Lianfa Premium Store)
- The ordered bar must have a smoking area or allow indoor smoking
- The ordered bar must have live singing performances
- The distance between the bar and the night market should be within 800 meters (including 800 meters)
- The bar set order should include snacks
- The bar set order should be a cocktail set
- The bar set order cannot contain food with high purine ingredients
- The reserved bar should be Blue Note Bar
- The reservation time for the bar is 2025-03-15 21:00:00
- The number of people for the bar reservation is 3
- The children's playground should be inside a mall
- The ticket ordered for the children's playground should be suitable for a 5-year-old child
- The children's playground should be no more than 1000 meters (including 1000 meters) from Room 1204, Building A, Sunshine 100 City Plaza, 166 Minzu Avenue, Qingxiu District, Nanning, Guangxi
- The ticket ordered for the children's playground should be a parent-child package
- The ticket ordered for the children's playground should allow entry at 19:00

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
