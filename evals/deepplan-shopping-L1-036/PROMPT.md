# DeepPlanning Shopping Task Level 1 #36

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting geared up for some serious training and need to order several specific items. First, I’m looking for a pair of 'Trail Running Shoes' from Arc'teryx in Gold. I need them quickly, so transport time has to be less than 2 days, and they must have fewer than 15 three-star reviews. Next, I need two specific size 36 items from Li-Ning: a 'Blizzard Runner' with over 1200 in total sales and less than 10 one-star reviews, and an all-seasons 'Shadow Walker' with over 1200 total reviews and a transport time under 2 days. Finally, I need two things from Under Armour. One is a Camel colored product with over 950 total reviews, fewer than 10 two-star reviews, and a transport time of less than 2 days. The other is Light Grey with an average score above 4.5 and more than 700 five-star ratings.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
