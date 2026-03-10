# VitaBench Task: Delivery #58

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

After finishing your weekly meeting at 6:00 PM today, you plan to continue working overtime and want to order crab roe mixed noodles for dinner, specifically the kind with both shrimp and lobster. Considering your wife will also be working late tonight and needs to accompany your child for an online class at 7:30 PM, you intend to order pumpkin and duck for your family. You prefer the pumpkin to be stir-fried with eggs rather than simply steamed. For the duck, you want it braised with Sichuan peppercorns, and half a duck would be sufficient as a whole one might be too much. You also want to order sauced glutinous rice as the staple food from a restaurant that offers dine-in service. To accommodate your child's taste preferences, you need to note that "no green onions and cilantro" for glutinous rice order.

## Context

- Current time: `2025-11-14 17:25:37`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for personal dinner order of crab roe noodles should be Building B, Modern Mansion, No. 288 Zhongxing Middle Road, Yuecheng District, Shaoxing City, Zhejiang Province
- The delivery time for personal dinner crab roe noodles order should be around 2025-11-14 18:00:00
- When choosing crab roe noodles for personal dinner, avoid very spicy flavors, choose mildly spicy or non-spicy options
- The delivery address for family dinner should be Longzhu Phase 2, 80 meters south of the intersection of Chaoyang Road and Jinghu Road, Yuecheng District, Shaoxing City, Zhejiang Province
- The delivery time for family dinner order should be before 2025-11-14 19:30:00
- When choosing pumpkin and duck dishes for family, select restaurants that support dine-in service
- The pumpkin dish in the family dinner order should be stir-fried with eggs rather than just steamed
- The duck dish in the family dinner order should be braised with Sichuan peppercorns and be a half portion
- The delivery address for family glutinous rice staple food order should be Longzhu Phase 2, 80 meters south of the intersection of Chaoyang Road and Jinghu Road, Yuecheng District, Shaoxing City, Zhejiang Province
- The delivery time for family glutinous rice staple food order should be before 2025-11-14 19:30:00
- When choosing glutinous rice staple food for family, select restaurants that provide dine-in service
- The family glutinous rice staple food order needs a note of 'no green onions and cilantro' to accommodate children's taste preferences

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
