# DeepPlanning Shopping Task Level 1 #5

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm gearing up for a winter trip and need to order some things quickly. First, I'm looking for a pair of Arc'teryx Insulated Softshell Pants suitable for winter that are highly rated, with more than 350 five-star ratings. To go with them, I need a dark green item in size XL that has an average score greater than 4.5 from over 600 total reviews and can arrive with a transport time of less than 3 days. I also want a yellow item, also in size XL, with fewer than 10 one-star reviews and a transport time of less than 3. Finally, I need one last well-reviewed product with more than 100 four-star reviews, over 25 three-star reviews, but fewer than 10 one-star reviews. Critically, this also must have a transport time of less than 3 so everything arrives before I leave.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
