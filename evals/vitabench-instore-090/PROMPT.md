# VitaBench Task: Instore #90

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You're planning to meet with your good friend at that Starbucks near your home that you frequently visit tomorrow afternoon to discuss some matters. You're thinking of inviting both families to have dinner together nearby afterward. To accommodate your friend's pregnant wife, you plan to look for a Chinese restaurant specializing in nourishing and stomach-warming soups. You hope to find a Listed Restaurant with a rating above 4.6. Once confirmed, you'll order a Set Menu for Four with nourishing chicken soup that has beauty-enhancing effects, since your child is young and won't eat much. You remember you still have unused vouchers for that massage place downstairs, so you plan to take everyone for a Foot Therapy after dinner. But when your friend mentions his wife's condition isn't suitable for that, you decide to abandon this plan and intend to refund the voucher you bought earlier. Instead, you'll look for a beverage shop inside a shopping mall within 1km of the restaurant, where everyone can enjoy some tea and chat together. If they offer a set package for 4-5 people, you'll buy one directly; if not, you'll make a reservation for 8 o'clock and order individually when you arrive.

## Context

- Current time: `2025-11-19 15:57:21`
- Domain: `instore`

## Requirements / Rubrics

- The restaurant should be within 5000m (inclusive) of Starbucks Coffee on the first floor of Hangyang International Shopping Center, 156 Minzu Avenue, Qingxiu District, Nanning
- The restaurant ordered from should specialize in nourishing and stomach-warming soups
- The restaurant ordered from should be a Listed Restaurant
- The restaurant's rating should be 4.6 or above
- The restaurant order should be a Set Menu for Four
- The restaurant order should have nourishing effects
- The restaurant order should have Beauty Nourishing effects
- The restaurant order should contain chicken soup
- The restaurant order should be suitable for pregnant women
- The foot therapy package order status should be cancelled
- The beverage shop should be within 1000m (inclusive) of Nuanxin Soup Pot on the 4th floor of Hangyang International Shopping Center, 135 Minzu Avenue, Qingxiu District, Nanning
- The beverage shop should be Inside Shopping Mall
- The beverage shop should sell Tea Beverage
- The beverage shop should provide a dine-in environment
- You should check if the qualifying beverage shop has set menus for 4-5 people, and since the result is negative, you should make a reservation at the beverage shop for 202025-11-20 20:00:00
- The beverage shop reservation should be for 5 people

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
