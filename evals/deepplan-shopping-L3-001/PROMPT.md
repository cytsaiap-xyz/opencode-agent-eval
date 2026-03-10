# DeepPlanning Shopping Task Level 3 #1

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm preparing for a weekend getaway and need to order several items with fast delivery. First, I need a highly-rated product that can arrive quickly—it must have an average rating above 4.5, more than 250 five-star reviews, fewer than 5 one-star reviews, and a transport time under 2 days. Next, I'm looking for Canvas Low-Top Sneakers in size 39 that are well-stocked, with inventory over 200 units to ensure availability. Then, I need something in size XL that's extremely popular and can get here even faster—it should have more than 300 five-star reviews, total sales exceeding 3000, and delivery within just 1 day. Finally, I want to grab Heritage Leather Ankle Boots that are proven bestsellers, with monthly sales over 350 and more than 600 total reviews to confirm they're a solid choice.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
