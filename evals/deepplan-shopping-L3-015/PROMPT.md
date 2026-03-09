# DeepPlanning Shopping Task Level 3 #15

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm updating my wardrobe with some essentials and need to place an order for a few specific items. First, I'm looking for a product with 'Men's Classic Pique Polo Shirt' in the name that's really popular and well-reviewed—it needs to have monthly sales over 520 and an average rating above 4.7. Next, I need something from Zara in Olive Green, size 42, with monthly sales exceeding 150 to ensure it's a solid choice. Finally, I'm after an item targeted for men in size 42 that has proven popularity with total sales over 450, so I know it's a reliable pick. These three pieces should round out what I need perfectly.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
