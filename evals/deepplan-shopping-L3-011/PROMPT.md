# DeepPlanning Shopping Task Level 3 #11

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm planning to revamp my style and need to get a few key items that can arrive quickly. First, I'm looking for a highly successful product with exceptional quality - it needs to have more than 1800 total sales, absolutely zero 1-star reviews, and monthly sales exceeding 150 units to ensure it's both popular and reliable. Next, I want something from the Vans brand that's well-reviewed, specifically with more than 1300 total sales, fewer than 5 one-star reviews, and over 80 four-star reviews to guarantee good quality. Finally, I need a purple item that I can get immediately - it must have 1-day transport time and more than 40 units in stock so I know it's available for quick delivery. These three items together will help me achieve the fresh look I'm going for.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
