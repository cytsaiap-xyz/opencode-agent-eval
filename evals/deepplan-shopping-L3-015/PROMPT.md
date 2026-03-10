# DeepPlanning Shopping Task Level 3 #15

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm updating my wardrobe with some essentials and need to place an order for a few specific items. First, I'm looking for a product with 'Men's Classic Pique Polo Shirt' in the name that's really popular and well-reviewed—it needs to have monthly sales over 520 and an average rating above 4.7. Next, I need something from Zara in Olive Green, size 42, with monthly sales exceeding 150 to ensure it's a solid choice. Finally, I'm after an item targeted for men in size 42 that has proven popularity with total sales over 450, so I know it's a reliable pick. These three pieces should round out what I need perfectly.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
