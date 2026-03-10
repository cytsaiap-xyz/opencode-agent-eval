# DeepPlanning Shopping Task Level 1 #48

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a major wardrobe upgrade and need to find several specific items. First, I'm looking for a popular Gucci Silk Blouse in size M; it has to have a monthly sales volume of more than 40, and since I need it soon, the transport time must be less than 2. To go with that, I want another highly-rated item from Gucci with more than 400 five-star reviews, fewer than 10 three-star reviews, less than one two-star review, and also a transport time of less than 2 days. Next, I'm searching for two pieces from Levi's. One must have excellent ratings, with more than 700 five-star ratings and less than 10 two-star ratings. The other Levi's item needs to be Camel colored and have fewer than 5 one-star reviews. Finally, for the colder months, I'm looking for a Wool Turtleneck for Winter in size M, and it must have less than one two-star review.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
