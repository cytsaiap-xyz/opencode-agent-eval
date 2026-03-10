# DeepPlanning Shopping Task Level 3 #20

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm planning a complete outdoor gear refresh and need to order several specific items. First, I'm looking for a brown product that has exactly 4 two-star ratings. Next, I need something with VECTIV in its name, targeted for men, with an average rating above 4.5, stock quantity over 100, and fewer than 25 two-star reviews. Then, I want the Men's Tech Performance Long-Sleeve Top, but only if it has a precise 4.8 rating, can arrive in just 1 day, and has exactly 10 two-star reviews. Finally, I'm searching for an item with Tech Fleece in its name, suitable for Spring/Autumn seasons, with an average rating exceeding 4.8, fewer than 20 one-star reviews, and fewer than 70 three-star reviews.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
