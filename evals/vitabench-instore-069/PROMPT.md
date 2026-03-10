# VitaBench Task: Instore #69

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You are planning to go for beauty treatment with your mother on Women's Day. She has never had such treatments before, so you hope the beauty salon offers a consultation session with a licensed professional doctor. Your mother has melasma and wrinkles on her face, and you haven't had any lifting and firming treatments for your face in a long time. Therefore, you plan to purchase holiday special packages for these two treatments at the same salon and experience them together with your mother. You have booked an appointment for 2 p.m. on the 8th. After the treatments, it will likely be close to dinner time, so you plan to take your mother to a Cantonese restaurant you frequently visit. You previously purchased a voucher for a set menu for two at this restaurant. For the holiday, you want to check if they have any Women's Day Special set menu for two. If they do, you will buy the special set menu and return the previous voucher; if not, you'll just make do with what you have.

## Context

- Current time: `2025-03-06 18:45:00`
- Domain: `instore`

## Requirements / Rubrics

- The beauty salon should provide face-to-face consultation service
- The receptionist and doctor of the beauty salon should hold professional qualification certificates
- The beauty salon order should include a facial spot removal and anti-wrinkle package with a quantity of 1
- The beauty salon order should include a facial lifting and firming package with a quantity of 1
- The facial spot removal and anti-wrinkle package and facial lifting and firming package should be from the same merchant
- All beauty salon ordered items should be holiday special packages
- The reserved beauty salon should be Xinyan Medical Aesthetics Center (Qingxiu Mixc Branch)
- The beauty salon appointment time should be 2025-03-08 14:00
- The number of people for the beauty salon appointment should be 2
- User history should be checked, and since the user previously frequented Tang Palace Cantonese Restaurant (Qingxiu Mixc Branch), the Cantonese restaurant order should be from Tang Palace Cantonese Restaurant (Qingxiu Mixc Branch)
- The Cantonese restaurant should be checked for Women's Day special set menu for two, and since it is available, the Cantonese restaurant order should be Women's Day Special Cantonese Premium Set for Two
- The order status for Business Set Menu A for Two should be cancelled

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
