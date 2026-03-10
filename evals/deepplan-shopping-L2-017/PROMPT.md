# DeepPlanning Shopping Task Level 2 #17

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm updating my wardrobe and need to get a few pieces quickly for the new season. First, I'm looking for a long-sleeve top that's suitable for spring/autumn. It needs to have a stock quantity of more than 200 and a transport time of less than 2 days. To go with it, I need something in a size 40 that can also arrive in under 2 days; it must be a popular item with more than 1200 total reviews and at least 150 four-star reviews. I'm also searching for some culottes from Ralph Lauren in a size L that have more than 250 five-star ratings. Finally, I need a basic white item for women with an average score greater than 4.5 that can be delivered in less than 4 days. I'm looking for something that costs somewhere in the range of 14886 to 14957.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
