# VitaBench Task: Delivery #90

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Tonight, you and your sister and brother-in-law will celebrate your mother's birthday, planning to start dinner at 6:45. You want to order four dishes from Yao Palace, with soup and rice for each person, but need to be mindful that your brother-in-law cannot eat spicy food. Yesterday, your mother mentioned she wanted to eat Fresh Soup Pork Offal Rice Noodles and Sweet Potato Dessert Soup, so you plan to order one of each for her from the same place where you previously ordered E-Fu noodles.

## Context

- Current time: `2025-09-25 16:02:49`
- Domain: `delivery`

## Requirements / Rubrics

- The birthday dinner order must be from Yao Palace
- The birthday dinner order needs to include 4 dishes, 4 servings of soup, and 4 servings of rice, with at least one non-spicy dish
- The delivery address for the birthday dinner order should be Building 3, Unit 1, Taoyuan Residential Complex, No. 51 Taoyuan Road, Qingxiu District, Nanning City, Guangxi Zhuang Autonomous Region
- The estimated delivery time for the birthday dinner order should be before 18:45 on September 25, 2025
- The mother's special request order must be from Tianfuxiang Fresh Ingredients Laoyou Main Branch (the store where the user previously ordered E-Fu noodles)
- The mother's special request order should include one serving each of Fresh Soup Pork Offal Rice Noodles and Sweet Potato Dessert Soup
- The delivery address for the mother's special request order should be Building 3, Unit 1, Taoyuan Residential Complex, No. 51 Taoyuan Road, Qingxiu District, Nanning City, Guangxi Zhuang Autonomous Region
- The estimated delivery time for the mother's special request order should be before 18:45 on September 25, 2025

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
