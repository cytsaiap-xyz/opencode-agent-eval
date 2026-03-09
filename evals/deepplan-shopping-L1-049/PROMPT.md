# DeepPlanning Shopping Task Level 1 #49

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing some quick online shopping to refresh my wardrobe. First, I'm looking for an all-seasons item for women; to ensure I'm seeing a balanced set of opinions, I want something with more than 35 three-star ratings. Since I need a couple of things urgently, I'm also searching for a product in size XL that is readily available with a stock quantity of more than 150 and has a transport time of less than 2. Finally, I'm on the hunt for a very specific white item with 'Princetown Leather' in its name. This also needs to arrive in less than 2, and since I'm looking for proven quality, it must have over 600 five-star ratings and fewer than 20 three-star ratings.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
