# VitaBench Task: Instore #62

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Since the last time you experienced DIY crafting, you've fallen in love with the feeling. This time you want to DIY an aromatherapy candle to add a special touch to your life. You want to purchase a single person experience package, and the candle must be available in the relief dried flower style, with teacher guidance during the process. Once you've chosen the package, place the order. Since no one will be home tomorrow, you plan to leave your dog at a pet shop for the morning. You want to find a shop within 3 kilometers of the DIY workshop, so you can pick up your dog after finishing your craft project. If you find a suitable shop, book it for 9 AM tomorrow; if not, let the dog stay at home alone for the day. Since you don't have any plans for tomorrow afternoon, you're thinking about purchasing a package for a private lesson at the gym you visited last time, so the trainer can guide you through some exercises.

## Context

- Current time: `2025-04-30 14:23:00`
- Domain: `instore`

## Requirements / Rubrics

- The order for the DIY store should be an aromatherapy candle DIY package
- The order for the DIY store should be a single person package
- The order for the DIY store should include DIY relief dried flower style candles
- The order for the DIY store should include teaching guidance
- Should search whether there are pet stores providing pet care services within 3000m (including 3000m) of Creative Workshop (Wanda Plaza Store), 3rd Floor, Building A, Wanda Plaza, 1266 Fenghe Middle Avenue, Honggutan New District, Nanchang. The result is yes, so a pet store should be booked
- The number of people for the pet store reservation should be 1
- The reservation time for the pet store should be 2025-05-01 09:00:00
- Should check the user's behavior history. The gym the user visited last time was Super Fitness (Greenland Store), so the gym order should be for Super Fitness (Greenland Store)
- The gym order should be for a private lesson package

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
