# VitaBench Task: Instore #33

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Yesterday, you and your boyfriend bought a shoulder and neck massage package. You were planning to experience it today, but your boyfriend's aunt had an emergency and needed to drop off her daughter for you to look after for the day. You had no choice but to cancel. After discussing, you two decided to take your niece to experience flower arrangement, so you want to buy a package that teaches basic flower arrangement skills, preferably at a store with a spacious environment. You plan to first check if there are any three-person packages available; if not, you'll buy individual packages. You suddenly remembered that you had previously purchased a private kitchen cuisine couple package. You want to confirm the distance between the private kitchen restaurant and the flower arrangement store. If it's over 5 kilometers, you'll refund the package and find a highly-rated Southeast Asian restaurant within 5 kilometers to buy a three-person meal. If it's less than 5 kilometers, you'll check if the private kitchen has suitable three-person meals. If they do, you'll refund the couple package and order a three-person meal instead, but note that you have dietary restrictions and cannot eat food that is too oily or spicy. If they don't have suitable options, that's fine - you can just order additional dishes when you get to the restaurant.

## Context

- Current time: `2024-08-04 10:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The status of the shoulder and neck massage package order should be cancelled
- The flower arrangement order should teach basic flower arrangement skills
- The environment of the flower shop should be spacious
- Should check if there is a three-person package in the flower shop where the order was placed, and the result is yes; the flower arrangement order should be a Three-person Basic Flower Arrangement Experience Package
- Should check the distance between the private kitchen restaurant (4th Floor, Hang Lung Plaza, 188 Quancheng Road, Lixia District, Jinan (Yan's Private Kitchen · Century-old Lu Cuisine)) and the flower shop (4th Floor, Hang Lung Plaza, 188 Quancheng Road, Lixia District, Jinan (Yan's Private Kitchen · Century-old Lu Cuisine)) in the order history, and the result is not more than 5 kilometers; also, the private kitchen restaurant has options for three-person meals, so the private kitchen Couple Package order status should be cancelled
- The three-person meal order should belong to Yan's Private Kitchen · Century-old Lu Cuisine
- The three-person meal package should not contain dishes with heavy oil and spice
- The item in the three-person meal order should be one three-person meal, not three individual meals

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
