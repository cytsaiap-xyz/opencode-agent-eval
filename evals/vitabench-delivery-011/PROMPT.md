# VitaBench Task: Delivery #11

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

I've been in meetings all morning and I'm starving. I must eat by 12 o'clock. I want Yuxiang Shredded Pork, and it must come with rice. I also need an extra pair of chopsticks. I'd like to cancel the iced coffee I just ordered and switch to a different shop for a latte to help me stay alert. My stomach hasn't been feeling well lately, and I'm concerned that something too cold might irritate my digestive system, so I prefer one with a strong coconut flavor. I plan to drink the coffee after my lunch break, so delivery around 2 o'clock would be perfect.

## Context

- Current time: `2025-08-08 11:01:36`
- Domain: `delivery`

## Requirements / Rubrics

- Successfully cancel the user's iced coffee order from Night of No Mistake · Coffee in Morning, Wine at Night, the order with id 20715002T01 should be changed to cancelled status
- The delivery address for the Yuxiang Shredded Pork lunch order should be Tsinghua Science Park, 101 University Road, Tangjia Bay, Xiangzhou District, Zhuhai City, Guangdong Province
- The estimated delivery time for the Yuxiang Shredded Pork lunch order should be on or before 2025-08-08 12:00:00
- The Yuxiang Shredded Pork lunch order should include a note requesting an extra set of cutlery to ensure an additional pair of chopsticks is available
- The delivery address for the new latte order should be Tsinghua Science Park, 101 University Road, Tangjia Bay, Xiangzhou District, Zhuhai City, Guangdong Province
- The estimated delivery time for the replacement latte order should be around 2025-08-08 14:00:00
- When selecting a replacement latte, avoid Night of No Mistake · Coffee in Morning, Wine at Night and choose another coffee shop
- When selecting a replacement latte, choose a product that Contains coconut milk to satisfy the requirement for a strong coconut flavor
- When selecting a replacement latte, choose a hot drink temperature to avoid cold drinks irritating the digestive system

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
