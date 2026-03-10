# VitaBench Task: Instore #18

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

The gradient manicure I got last time looked terrible. I still have an unused manicure package coupon that I bought, and you're planning to get a refund for it. This time my sister said she'll accompany me, so I'm planning to find a manicure salon that ranks high on the bestseller list. It shouldn't be more expensive than the gradient manicure package I bought before. This time I want to buy an Internet Celebrity Exquisite Manicure Package. Don't worry about my sister's manicure; she won't get one and will just wait for me. By the way, tomorrow is the Mid-Autumn Festival, so the salon will definitely be crowded. I need to place the order and pay now, then make an appointment for 10 AM tomorrow. Also, I haven't had hair removal for a long time. I want to see where the nearest Hair Gobbler Chain store is to this manicure salon. I want to buy two Ice Point Hair Removal Experience Packages at this store - my sister can get one too. Let's schedule the hair removal appointment three hours after the manicure appointment.

## Context

- Current time: `2024-09-16 18:45:00`
- Domain: `instore`

## Requirements / Rubrics

- The order status for Gradient Color Manicure Package should be cancelled
- The nail salon should be a store on the top seller list
- The ordered item at the nail salon should be Internet Celebrity Exquisite Manicure Package
- Based on order history, the last Gradient Color Manicure cost 118 yuan, so the Internet Celebrity Exquisite Manicure Package ordered at the nail salon should not exceed 118 yuan (including 118 yuan)
- The quantity of items ordered at the nail salon should be 1
- The nail salon appointment should be at Fingertip Art Manicure
- The nail salon appointment time should be 2024-09-17 10:00:00
- The number of people for the nail salon appointment should be 1
- The selected Hair Gobbler Chain location should be the closest to Meishang Nail Art, 3rd Floor, Wanda Plaza, 66 Yuhua West Road, Qiaoxi District, Shijiazhuang
- The item ordered at Hair Gobbler Chain should be Ice Point
- The item ordered at Hair Gobbler Chain should be Hair Removal
- The quantity of items ordered at Hair Gobbler Chain should be 2
- The Hair Gobbler Chain appointment should be at Hair Gobbler Hair Removal Chain (Wanda Plaza Branch)
- The Hair Gobbler Chain appointment time should be 3 hours later than the nail salon, which should be 2024-09-17 11:00:00
- The number of people for the Hair Gobbler Chain appointment should be 2

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
