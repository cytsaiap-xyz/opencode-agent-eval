# DeepPlanning Shopping Task Level 3 #13

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm planning a weekend getaway and need to pick up a few essentials. First, I'm looking for something from Bosideng that's perfect for Spring/Autumn weather, specifically an item with Chukka Boots in the name. Then, I need a product that can arrive super quickly—transport time must be just 1 day—and it should have exactly 35 three-star reviews. Next, I want to get something with 'Palm Sketch' in the name that's popular and well-stocked, so it needs more than 90 units in stock and over 120 total reviews. Finally, I'm after a highly-rated item from The North Face with an average rating above 4.5 and more than 450 five-star reviews to ensure top quality.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
