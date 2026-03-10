# DeepPlanning Shopping Task Level 1 #30

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting ready for a last-minute hiking trip and need to order some gear. First, I need a pair of Waterproof Trail Hiking Shoes in Olive Green, size 38. Since I need them to be reliable, I'm looking for a pair with an average rating score over 4.5 and less than 5 one-star reviews. My trip is very soon, so the transport time must be less than 2. Next, I need a pair of women's Hiking Trousers in Camel that are highly rated, specifically with more than 400 five-star ratings and over 90 four-star ratings. To complete the outfit, I'm looking for a Silver Lightweight Baselayer that can also be delivered in less than 2 days. I want to be sure it's a good product, so it must have more than 150 total reviews but fewer than 10 three-star reviews.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
