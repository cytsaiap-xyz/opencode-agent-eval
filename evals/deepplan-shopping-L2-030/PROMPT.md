# DeepPlanning Shopping Task Level 2 #30

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting ready for an intense training trip and need to order some gear. First, I'm looking for something from the brand Vans in a size 38; I want to make sure it’s a good product, so it must have fewer than 30 two-star reviews. To go with that, I need a new 'Training Top'. It has to be highly rated, with an average score over 4.5, more than 40 four-star reviews, and a stock quantity of more than 100. Since the trip is soon, I need two other items with a transport time of less than two days. I’m looking for a size XL item from Arc'teryx with 'Alpine' in its name and more than 20 four-star reviews. Lastly, I also need a Ralph Lauren product, also in size XL with that fast shipping, but this one must have fewer than 20 three-star ratings. I'm looking for something that costs somewhere in the range of 3546 to 3561.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
