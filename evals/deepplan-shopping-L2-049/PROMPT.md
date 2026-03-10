# DeepPlanning Shopping Task Level 2 #49

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm refreshing my wardrobe for the season and need a few specific things delivered quickly. First, I'm looking for a men's 'Denim Trucker Jacket' suitable for spring/autumn. It needs to be well-regarded, with more than 850 total reviews, and crucially, have a transport time of less than 2 days. To go with it, I'm searching for a dark green item for the same spring/autumn season, but I only want high-quality options, so it must have fewer than 10 one-star reviews. Lastly, I need to find something in navy blue. It has to be a popular choice with more than 1000 total reviews, be readily available with a stock quantity of over 800, and also have a transport time under 2. Find me some products where the total price is no less than 1702 and no more than 2073.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
