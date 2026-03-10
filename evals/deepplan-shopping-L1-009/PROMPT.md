# DeepPlanning Shopping Task Level 1 #9

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a wardrobe refresh and need a few specific items. First, I'm looking for a popular summer product in Khaki, size M. To ensure it's a trending item, it must have a monthly sales volume of more than 1500, and I'll need it to arrive in less than 5 days. Next, I want a couple of things from the brand Anta. I need a highly-rated item from them suitable for Spring/Autumn, with an average score greater than 4.5. I also need an all-seasons product from Anta in black. This one is more urgent, so the transport time must be less than 2 days, and it should have more than 950 total reviews so I know it's a solid choice.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
