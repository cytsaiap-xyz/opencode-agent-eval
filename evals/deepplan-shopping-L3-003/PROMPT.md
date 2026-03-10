# DeepPlanning Shopping Task Level 3 #3

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm putting together a complete wardrobe update and need to order several items. First, I'm looking for a product called Women's All-Season Performance Cargo Pants in Khaki, designed for women, with fewer than 10 one-star reviews to ensure quality. Next, I need something called Women's Summer Breeze Mesh Sneakers that's proven popular, with more than 400 five-star reviews and monthly sales exceeding 300 units. Then, I'm after an item named Women's Sherpa-Lined Corduroy Trucker Jacket for women, and it's important that it has over 800 total reviews and can arrive in less than 2 days since I need it quickly. Finally, I'm searching for a winter product with "Snowbelle" in the name that has exceptional quality—specifically a rating above 4.8 stars, total sales over 2000, and stock quantity greater than 100 to ensure availability.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
