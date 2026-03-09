# VitaBench Task: Delivery #4

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You just received a notice for a 7 PM meeting, and the noodles you ordered will be cold and mushy if left until after the meeting; if that restaurant has Hot and Sour fried rice, cancel and reorder that instead. It's so hot today and we still have to work overtime, also check if this restaurant has any refreshing desserts, just make sure they don't contain caffeine.

## Context

- Current time: `2024-08-19 17:47:12`
- Domain: `delivery`

## Requirements / Rubrics

- Successfully cancel the Tom Yum Soup Noodles order with id 10716001O01 from HUHU Thai (Roosevelt Branch), the order status should be changed to cancelled
- The delivery address for the new order should be 5th Floor, Building 3, Dalian Software Park, Shahekou District, Dalian, Liaoning Province
- The estimated delivery time for the new order should be around 2024-08-19 18:30
- The new order should include Hot and Sour items such as Tom Yum Fried Rice from HUHU Thai (Roosevelt Branch)
- The new order should include refreshing caffeine-free desserts such as Coconut Sago Pudding

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
