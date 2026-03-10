# DeepPlanning Shopping Task Level 3 #4

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm planning a weekend outdoor adventure and need to grab a few essentials quickly. First, I'm looking for All-Terrain Cargo Trousers in Camel color with a 2-day transport time and total sales volume exceeding 2800 units. To go with that, I need a size 44 item that has exactly 4 three-star ratings and just 1 one-star rating. Next, I want something with Himalayan in the name that's really popular—it must have more than 350 five-star reviews, monthly sales over 200, and arrive in less than 3 days. Finally, I need a Chuck Taylor Patch Crewneck Sweatshirt with an average rating above 4.5, more than 50 four-star reviews, and transport time under 3 days to complete my outfit.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
