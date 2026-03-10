# DeepPlanning Shopping Task Level 3 #5

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm putting together a complete outdoor adventure outfit and need to find three specific items online. First, I'm looking for a Women's Rho Hybrid Zip Neck Top that's proven popular with customers - it needs to have more than 25 four-star reviews and total sales volume exceeding 4000 to ensure it's a reliable choice. Next, I need an all-seasons item that has solid customer feedback, specifically one with exactly 50 three-star ratings and more than 3000 total reviews, which shows it's been thoroughly tested by many buyers. Finally, I'm searching for Women's Omni-Shield Adventure Trek Pants targeted specifically for women, and I need the exact item that has 18 four-star ratings and 689 total sales volume - these specific numbers help me identify the right product variant I've been researching.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
