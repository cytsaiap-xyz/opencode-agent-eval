# DeepPlanning Shopping Task Level 3 #8

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm preparing for the winter basketball season and need to get my gear sorted out. First, I need the Men's All-Weather Traction Winter Basketball Shoes in size 41, and I'm looking specifically for the listing that has exactly 178 units in stock. To complement those, I'm searching for a black item that's proven popular—it must have monthly sales exceeding 300, total sales over 2500, and more than 140 four-star reviews. Next, I want to add the Men's ColdGear Infrared® Insulated Long Sleeve Top from Under Armour to my cart; I'm looking for the version with exactly 10 four-star ratings and 0 one-star ratings. Finally, I need a winter-suitable product that can arrive within 1 day, and it should have a strong rating profile with exactly 385 five-star reviews and 16 two-star reviews.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
