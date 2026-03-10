# DeepPlanning Shopping Task Level 3 #9

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm planning a weekend hiking trip and need to pick up some essential gear with next-day delivery. First, I'm looking for a New Balance product with "Tech Fleece Jogger" in the name that has fewer than 10 one-star reviews, arrives within 1 day, and has total sales over 6000 to ensure it's reliable. Next, I need something called "Performance Tech Training Bottoms" in Black, with exactly 45 three-star ratings, more than 5000 total sales, and same-day delivery available. Finally, I want to get an item with "Men's Titan Pass Convertible Hiking Pants" in the name that's suitable for all seasons. It must have more than 100 four-star reviews, fewer than 15 two-star reviews, and can be delivered within 1 day so I have everything ready before I leave.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
