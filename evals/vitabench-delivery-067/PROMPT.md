# VitaBench Task: Delivery #67

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

It's rainy today and the weather is getting cooler. You want to eat something warming for lunch with a fragrant flavor. You remember Xiaohui Snack House that you ordered from before, and that bowl of Korean grilled beef mixed rice tasted pretty good. If they don't have mixed rice available, any rice dish with some spiciness would be acceptable. You also need to order an affordable spicy hot pot single meal for your colleague, who can handle spicy food very well - regular spicy level doesn't impress her at all.

## Context

- Current time: `2024-10-18 10:49:12`
- Domain: `delivery`

## Requirements / Rubrics

- Deliver user's personal meal order (Korean grilled beef rice bowl or spicy rice dish) to Linyi Urban Construction Group Co., Ltd., 180 meters northwest of the intersection of Xi'an Road and Baimahe Road, Lanshan District, Linyi City, Shandong Province
- The delivery time for user's personal meal should be around 2024-10-18 12:00:00
- User's personal meal should be ordered from Xiaohui Snack House
- The spiciness level of user's personal meal should be Mildly Spicy
- Deliver colleague's meal order (affordable spicy hot pot single meal) to Linyi Urban Construction Group Co., Ltd., 180 meters northwest of the intersection of Xi'an Road and Baimahe Road, Lanshan District, Linyi City, Shandong Province
- The delivery time for colleague's meal should be between 2024-10-18 10:49:12 and 2024-10-18 12:49:12
- The spiciness level of colleague's meal should be Extra Spicy

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
