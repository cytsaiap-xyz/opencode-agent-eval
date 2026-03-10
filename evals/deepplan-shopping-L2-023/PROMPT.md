# DeepPlanning Shopping Task Level 2 #23

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a big wardrobe refresh and need a few things. First, I'm looking for a popular item from Columbia that has a total sales volume of more than 1900 and fewer than 5 one-star reviews; since I'm in a bit of a rush, the transport time must be less than 3 days. For the colder weather, I need a yellow winter item from Levi's, and to ensure its quality, it must have more than 50 four-star reviews and fewer than 5 one-star reviews. While I'm at it, I'll also get an all-seasons product from Levi's that has 'Heritage Court' in its name, but I need this one very quickly so the transport time has to be less than 2 days. Lastly, I need something from New Balance for women that has a stock quantity greater than 100, over 140 five-star reviews, and less than 10 two-star reviews. My budget is between 2248 and 2254.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
