# DeepPlanning Shopping Task Level 3 #17

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm putting together a seasonal wardrobe update and need to order several items online. First, I'm looking for something with "Tech Top" in the name that's perfect for spring and autumn weather. It needs to be well-reviewed with more than 800 total reviews and fewer than 30 three-star ratings to ensure quality. Next, I need an item in size 44 that's proven popular with over 100 monthly sales, more than 40 four-star reviews, and fewer than 3 one-star reviews. Then, I want another spring/autumn suitable product that can arrive quickly with transport time under 3 days, has over 100 monthly sales, and maintains excellent quality with fewer than 5 one-star ratings. Finally, I'm adding a summer item to round out my collection - it must be well-established with more than 900 total reviews to ensure it's a reliable choice for the warmer season ahead.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
