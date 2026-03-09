# VitaBench Task: Cross Domain #7

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You've been under a lot of stress at work recently and want to find a place to thoroughly relax your body and mind. Tonight you'd like to order takeout to rest at home, and you want organic healthy vegetarian cuisine, but you don't eat broccoli, and the restaurant must be a Dine-in Restaurant, with delivery around 7:30 pm. Your doctor says you can't eat High Purine foods or anything Contains Caffeine, so please be mindful of that. Tomorrow you want to experience traditional Wellness culture at a steam bath center, looking for a High-end Club that has various steam rooms and Professional Massage services. You also want to buy a Soothing Mask to create a perfect relaxing atmosphere. You want to see what Wellness Package the bath center offers that's suitable for Deep Relaxation, and purchase one. Ideally, it should include multiple therapy options such as Steam Bath, Massage, and Foot Massage. If the package already includes a Face Mask then that's fine, otherwise you want to bring the mask to the bath center. A friend has also invited you to a hot spring resort in Wuyi Mountain, but you don't want to travel too much and would prefer to relax locally first. You can go to the station to see your friend off, so an afternoon appointment at the bath center would be more suitable.

## Context

- Current time: `2025-03-27 18:15:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The food delivery order must be organic healthy vegetarian cuisine
- The food delivery restaurant must offer dine-in service
- The food delivery ingredients cannot contain broccoli
- The food delivery order cannot include high purine foods (such as organ meats/seafood soup/Matsutake Mushroom Soup/Kelp and Mushroom Soup, etc.)
- The food delivery order cannot contain caffeine
- The food delivery order arrival time should be around 7:30 on March 27, 2025 [i.e., the estimated delivery time is within the 7:15-7:45 interval]
- The food delivery address is Room 1205, Building 3, Lead SHOW Plaza, Quanxiu Road, Donghai Street, Fengze District, Quanzhou, Fujian Province
- Must search for and provide information about high-end bath and steam bath centers
- The bath establishment ordered must provide steam bath rooms and professional massage services
- The bath package ordered should include multiple therapy services such as steam bath, massage, and foot massage
- The bath package needs to include face masks
- The bath center appointment time must be in the afternoon

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
