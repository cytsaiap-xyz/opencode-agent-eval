# DeepPlanning Shopping Task Level 3 #9

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm planning a weekend hiking trip and need to pick up some essential gear with next-day delivery. First, I'm looking for a New Balance product with "Tech Fleece Jogger" in the name that has fewer than 10 one-star reviews, arrives within 1 day, and has total sales over 6000 to ensure it's reliable. Next, I need something called "Performance Tech Training Bottoms" in Black, with exactly 45 three-star ratings, more than 5000 total sales, and same-day delivery available. Finally, I want to get an item with "Men's Titan Pass Convertible Hiking Pants" in the name that's suitable for all seasons. It must have more than 100 four-star reviews, fewer than 15 two-star reviews, and can be delivered within 1 day so I have everything ready before I leave.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
