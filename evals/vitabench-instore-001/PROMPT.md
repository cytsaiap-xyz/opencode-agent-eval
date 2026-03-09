# VitaBench Task: Instore #1

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You feel like you're getting older and your body shape is changing a bit. You want to regain your youthful appearance and are looking for a fully equipped gym with a swimming pool that's close to home. You hope the facility offers single experience vouchers for swimming classes and body shaping classes so you can try them out tomorrow. Before purchasing, you want to check tomorrow's weather - if it's sunny, you'll try the swimming class; if it's overcast, you'll try the body shaping class. After buying the single experience voucher, you scheduled for 10 AM tomorrow. However, you suddenly remember that you need to take your wife and child out for lunch tomorrow, so you need to change your fitness time to 5:30 PM.

## Context

- Current time: `2025-11-06 14:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The gym should be Fully Equipped
- The gym should be within 5000m range of Room 502, Unit 1, Building 3, Longcheng Shangdu, 136 Qinxian North Street, Xiaodian District, Taiyuan City
- The gym should provide Swimming Pool
- The gym should provide Swimming Class Single Experience Voucher and Body Shaping Class Single Experience Voucher
- The weather in Taiyuan on 2025-11-07 will be overcast, Body Shaping class should be ordered
- The gym reservation should be made at Kangti Swimming Fitness Club
- The gym reservation time should be 2025-11-07 17:30:00
- The number of people for the gym reservation should be 1

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
