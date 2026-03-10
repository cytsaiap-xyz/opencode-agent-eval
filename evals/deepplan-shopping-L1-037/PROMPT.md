# DeepPlanning Shopping Task Level 1 #37

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I've decided to go on a last-minute hiking trip, so I need to get some gear delivered very quickly. First, I'm looking for a general women's item that I can get soon, so it needs a transport time of less than 5 days and must have less than 5 two-star reviews. For the hike itself, I'm searching for a specific 'Active Logo Training Top' that's popular and well-regarded, so it must have a total sales volume over 20,000 and an average rating score greater than 4.5, with transport time under 2 days. To go with that, I need some orange 'Hiking Bottoms' for women with more than 60 four-star reviews, also arriving in less than 2 days. Finally, I’m looking for an olive green item from Patagonia with a total sales volume over 4500 and an average rating above 4.5, which also needs a transport time of less than 2 days.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
