# VitaBench Task: Delivery #40

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You'll be filming until 12 o'clock noon, and need to continue again at 2 PM. During the break when you go home to rest, you want to order a hand-shaken lemon tea from the nearest shop to quench your thirst. You specifically request their Signature Hand-shaken Lemon Tea with slightly less sweetness than standard, and leave a note asking for the ugliest duck toy (you plan to give it to your best friend later). You also want to order salmon sashimi as a treat for yourself, emphasizing that you won't accept it unless it's Fresh-cut Today.

## Context

- Current time: `2025-10-10 10:50:19`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the hand-shaken lemon tea order should be Jinqiu Residential Area, No. 368 Furong South Road, Tianxin District, Changsha, Hunan Province (180 meters from Railway Institute Metro Station Exit 2)
- The estimated delivery time for the hand-shaken lemon tea order should be between 2025-10-10 12:00:00 and 2025-10-10 14:00:00
- The hand-shaken lemon tea order should choose the merchant closest to the user: LINLEE Hand-shaken Lemon Tea (Forestry University Branch)
- The hand-shaken lemon tea order should select the Signature Hand-shaken Lemon Tea product
- The sweetness level for the Signature Hand-shaken Lemon Tea should be 5/10 sugar (slightly less than standard sweetness)
- The hand-shaken lemon tea order needs a note requesting the ugliest duck
- The delivery address for the salmon sashimi order should be Jinqiu Residential Area, No. 368 Furong South Road, Tianxin District, Changsha, Hunan Province (180 meters from Railway Institute Metro Station Exit 2)
- The estimated delivery time for the salmon sashimi order should be between 2025-10-10 12:00:00 and 2025-10-10 14:00:00
- The salmon sashimi order should select products labeled as Fresh-cut Today

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
