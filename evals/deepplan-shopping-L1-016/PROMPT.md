# DeepPlanning Shopping Task Level 1 #16

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting some gear for an upcoming trip with varied activities, and I need everything to arrive quickly. First, I'm looking for an all-seasons product from the brand Salomon that is well-liked, so it must have more than 800 five-star ratings and a transport time of less than 2. I also need something in dark green; to ensure it's available, it needs a stock quantity over 150 and a transport time under 3. For the hiking portion, I'm searching for some 'Trail Shoes' from Patagonia suitable for Spring/Autumn with more than 700 five-star ratings. Lastly, for warmer weather, I need some 'Chino Shorts' for summer. I'm picky about quality, so they must have fewer than 15 three-star reviews and a transport time of less than 2 days.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
