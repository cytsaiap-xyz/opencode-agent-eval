# DeepPlanning Shopping Task Level 2 #2

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting gear for a last-minute trip, so I need everything with a transport time of less than 2 days. First, I'm looking for a size L item from Salomon with 'Winter Trail' in its name. To go with that, I'll also need another Salomon product, specifically in light blue. Next, I need something from Nike in brown, and I want to ensure it's high quality, so it must have fewer than 15 two-star reviews. I'm also searching for a men's item in black, size L, and to make sure it's available, it needs to have a stock quantity over 80. Lastly, I'm trying to find a popular Khaki item with 'Performance Chinos' in the name that has a total sales volume of more than 3200. I'm looking for something that costs somewhere in the range of 3828 to 4214.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
