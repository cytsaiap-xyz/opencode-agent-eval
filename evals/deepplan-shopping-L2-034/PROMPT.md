# DeepPlanning Shopping Task Level 2 #34

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting all my gear sorted out for the cold weather. First, I'm looking for a specific women's winter item from Arc'teryx in a purple color, size XL. For layering, I also need a women's Down Vest that has an average score greater than 4.5 and less than 5 one-star reviews. To go with that, I want a very popular Thermal Base Layer from Patagonia in dark green with a total sales volume of more than 4000. I also need to find a specific Bosideng item, the 'Women's Essential Thermal Mock Neck Top', making sure it has over 180 in stock, a transport time less than 4 days, and fewer than 15 two-star reviews. Then, I need something grey that can ship fast, in under 2 days, with an average score above 4.5 and more than 1200 total reviews. Finally, I'll get one more thing from Bosideng: a highly-rated, all-seasons product with more than 650 five-star reviews and fewer than 15 two-star reviews. Find me some products where the total price is no less than 4112 and no more than 4339.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
