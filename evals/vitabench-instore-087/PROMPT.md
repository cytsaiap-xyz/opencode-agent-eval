# VitaBench Task: Instore #87

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Tomorrow is your child's 5th birthday, and you want to arrange a birthday party for him, inviting relatives to bring their children to celebrate. You hope to find an elegant cartoon-themed family restaurant that provides birthday celebration services, not more than 3km from home, and once decided, you'll book a table for 8 people at 12 noon. After lunch, if there's an indoor children's amusement center within 1km of the restaurant that offers birthday activity packages, you'll go there directly and buy 1 birthday voucher and 2 standard Children's Amusement Vouchers, so the 3 children will have something to do while the parents can sit in the Waiting Area and take photos. If not, you'll find a bakery within 10km of the restaurant, with a rating of at least 4.5, where you can DIY Cake, and book for the same time. The children will surely be happy and feel accomplished eating the cake they made themselves.

## Context

- Current time: `2026-06-12 12:15:00`
- Domain: `instore`

## Requirements / Rubrics

- The reserved restaurant must have an elegant environment
- The reserved restaurant must have a cartoon theme
- The reserved restaurant must be a family restaurant
- The reserved restaurant must provide birthday celebration service
- The reserved restaurant must be within 3 kilometers (inclusive) of Room 501, Unit 3, Building 12, Sea View Garden, 28 Victory Road, Zhifu District, Yantai
- The restaurant reservation must be for 8 people
- The restaurant reservation time must be 2026-06-13 12:00:00
- The ordered children's amusement center must be within 1 kilometer (inclusive) of Children's Dream Fantasy Theme Restaurant, 3rd Floor, Sunshine Department Store, 156 Victory Road, Zhifu District, Yantai
- The ordered amusement center must have birthday amusement vouchers
- The order must include 1 birthday amusement voucher
- The ordered amusement center must have standard amusement vouchers
- The order must include 2 standard amusement vouchers
- The birthday amusement vouchers and standard amusement vouchers must be from the same store

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
