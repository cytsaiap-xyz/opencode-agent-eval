# DeepPlanning Shopping Task Level 1 #22

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting gear for a last-minute trip, so I need everything with a transport time of less than 2 days. First, I need some 'Thermal Padded Trousers' and I'm looking for a pair with fewer than 15 two-star reviews and less than 40 three-star reviews. To go with them, I need some women's 'Leather Boots' from Levi's. For layering, I'm looking for a 'Canyonlands Half-Zip' suitable for Spring/Autumn that's well-liked, with more than 550 total reviews and over 450 five-star ratings. I also need a blue item from Patagonia in size 40 that has fewer than 10 one-star reviews. Lastly, I'm getting two things from Bosideng: a 'Lurex Long-Sleeve Top' in size L with an average score over 4.5 and more than 1000 total reviews, and another beige item from them that also has an average score greater than 4.5.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
