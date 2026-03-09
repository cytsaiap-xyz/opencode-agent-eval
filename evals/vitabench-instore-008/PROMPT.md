# VitaBench Task: Instore #8

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Tomorrow afternoon, you plan to take your cat out and want to find a pet-friendly café to enjoy an Afternoon Tea set that includes mini cakes and beverages. However, you don't like Tiramisu or fruit coffee. You realize it's been a while since you gave your cat a bath, so you decide to find a pet shop within 1km of the café to purchase a bathing package that includes Paw Hair Trimming and Loose Hair Removal services, and book an appointment for around 4 PM, which would be perfect timing after leaving the café. While your cat is being groomed, you plan to grab a meal. You'd like something spicy but without garlic as you find the smell too strong, preferably a set menu that includes Sour Plum Juice. The restaurant should be within 1km of the pet shop; if you can't find a suitable place, you'll skip the meal.

## Context

- Current time: `2025-06-16 14:23:00`
- Domain: `instore`

## Requirements / Rubrics

- The coffee shop merchant must be Pet-Friendly
- The coffee shop order set must include mini cake and beverage
- The coffee shop order set must not include Tiramisu
- The beverage in the coffee shop order set cannot be fruit coffee
- The pet shop must be within 1km of the coffee shop (Meow Café, Room 102, Building B, Triumph Plaza, at the Intersection of Wangcheng Avenue and Triumph East Road, Xigong District, Luoyang)
- The pet shop order package must be a bathing service
- The pet shop order package must include Paw Hair Trimming and Loose Hair Removal services
- The pet shop bathing service must be booked around 16:00 on 2025-06-17
- The booked pet shop merchant should be Cute Pet Paradise
- Must look for restaurants within 1km of the pet shop, and the restaurant set menu must provide spicy food, cannot contain garlic, must include Sour Plum Juice. The result was none, so no restaurant order is needed

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
