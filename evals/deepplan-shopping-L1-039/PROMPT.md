# DeepPlanning Shopping Task Level 1 #39

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting ready for a winter trip and need to order everything to arrive quickly. First, I'm looking for a specific winter item from Arc'teryx in Wine Red and size 40, and it must have a transport time of less than 2 days. To go with that, I need a blue product from the brand Columbia. I want to make sure it's popular, so it needs more than 180 five-star ratings and also has to ship in under 2 days. Lastly, I'm searching for some winter-specific 'Winter Hiking Shoes' from Columbia that are targeted for women and have a total review count of more than 300.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
