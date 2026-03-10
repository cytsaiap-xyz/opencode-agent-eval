# DeepPlanning Shopping Task Level 1 #49

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing some quick online shopping to refresh my wardrobe. First, I'm looking for an all-seasons item for women; to ensure I'm seeing a balanced set of opinions, I want something with more than 35 three-star ratings. Since I need a couple of things urgently, I'm also searching for a product in size XL that is readily available with a stock quantity of more than 150 and has a transport time of less than 2. Finally, I'm on the hunt for a very specific white item with 'Princetown Leather' in its name. This also needs to arrive in less than 2, and since I'm looking for proven quality, it must have over 600 five-star ratings and fewer than 20 three-star ratings.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
