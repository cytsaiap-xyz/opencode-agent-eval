# DeepPlanning Shopping Task Level 2 #25

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting into a new outdoor hobby and need to order some gear. First, I urgently need Trail Shoes with a transport time of less than 2 days. They must be highly rated, with an average score over 4.5, more than 150 four-star ratings, and fewer than 10 one-star ratings. To go with them, I want a specific item that's Yellow. It should be popular and in-stock, so I'm looking for something with over 650 five-star ratings and a stock quantity of more than 180. Lastly, I need another piece of equipment that is well-regarded, with an average score greater than 4.5, more than 30 three-star reviews, and fewer than 10 two-star reviews. Please help me find options that fall within a budget of 1985 to 2369.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
