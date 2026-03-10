# DeepPlanning Shopping Task Level 3 #10

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm putting together a new workout wardrobe and need to order several items online. First, I'm looking for the Li-Ning Women's Cool-Dry Training Top specifically, and I want to make sure it has exactly 25 two-star rating counts and 350 four-star rating counts to match my quality expectations. Next, I need something from Peacebird in size 39 that can arrive within 3 days since I need it quickly, and it's important that it has fewer than 15 one-star reviews to ensure good quality. Finally, I want to add an all-seasons item to my order that's well-stocked and popular - it needs to have more than 200 units in stock and over 400 total reviews so I know it's a reliable choice that won't go out of stock soon.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
