# DeepPlanning Shopping Task Level 3 #3

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm putting together a complete wardrobe update and need to order several items. First, I'm looking for a product called Women's All-Season Performance Cargo Pants in Khaki, designed for women, with fewer than 10 one-star reviews to ensure quality. Next, I need something called Women's Summer Breeze Mesh Sneakers that's proven popular, with more than 400 five-star reviews and monthly sales exceeding 300 units. Then, I'm after an item named Women's Sherpa-Lined Corduroy Trucker Jacket for women, and it's important that it has over 800 total reviews and can arrive in less than 2 days since I need it quickly. Finally, I'm searching for a winter product with "Snowbelle" in the name that has exceptional quality—specifically a rating above 4.8 stars, total sales over 2000, and stock quantity greater than 100 to ensure availability.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
