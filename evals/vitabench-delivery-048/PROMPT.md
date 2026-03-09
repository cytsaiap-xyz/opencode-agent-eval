# VitaBench Task: Delivery #48

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You didn't have time for lunch, so now you want to quickly order some meat buckwheat cold noodles to your office, but be careful to avoid high-purine foods (such as organ meats/seafood which you cannot eat). You also want your clients who are visiting Shanxi for the first time to experience local specialties, so you plan to order three cups of the distinctive local Cola for them to try, also delivered to your office, which you'll bring to them later at the dinner gathering at 8pm. Additionally, since you can't go home for dinner, you also plan to order clay pot soup for your wife and daughter at home to help boost their health.

## Context

- Current time: `2025-09-26 17:57:41`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the Shanxi Specialty drink order prepared for the client should be International Trade Building, 69 Fuxi Street, Xinghualing District, Taiyuan, Shanxi Province
- The delivery time for the Shanxi Specialty drink order prepared for the client should be before 2025-09-26 20:00:00, for use during the evening dinner party
- The Shanxi Specialty drink prepared for the client should be innovative vinegar drink products with local Shanxi characteristics, such as Shanxi Aged Vinegar Cola
- The delivery address for the clay pot soup order prepared for family should be Longcheng Shangdu, 800 meters east of Wucheng Intersection (No.11 Bus Terminal), Xiaodian District, Taiyuan, Shanxi Province
- The delivery time for the clay pot soup order prepared for family should be between 2025-09-26 17:57:41 and 2025-09-26 19:57:41
- The clay pot soup items prepared for family should have nourishing effects, suitable for the wife and daughter's health
- The clay pot soup order prepared for family should have a total of 2 portions, one each for the wife and daughter
- The delivery address for the personal lunch buckwheat cold noodles order should be International Trade Building, 69 Fuxi Street, Xinghualing District, Taiyuan, Shanxi Province
- The delivery time for the personal lunch buckwheat cold noodles order should be between 2025-09-26 17:57:41 and 2025-09-26 19:57:41
- The personal lunch buckwheat cold noodles should contain meat to meet non-vegetarian requirements
- The personal lunch buckwheat cold noodles should not contain high-purine ingredients such as organ meats or seafood soup

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
