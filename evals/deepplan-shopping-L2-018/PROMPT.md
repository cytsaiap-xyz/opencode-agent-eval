# DeepPlanning Shopping Task Level 2 #18

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I have a last-minute trip coming up, so I need to order a few things with fast shipping. First, I'm looking for a men's item from Ralph Lauren in brown, and it must have a transport time of less than 2. Next, I need something from The North Face that includes 'Tekware Fleece' in its name. This one has to be in a coffee color, have over 850 total reviews, an average score above 4.5, and also a transport time of less than 2 days. Then, I'm looking for a well-regarded product from Under Armour; it must have fewer than 30 one-star reviews and less than 40 two-star reviews. Finally, I need to find a base layer from Uniqlo with 'HEATTECH' in the name. To make sure it's available and well-liked, it needs a stock quantity of more than 850 and over 200 four-star ratings. Find me some products where the total price is no less than 2650 and no more than 2841.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
