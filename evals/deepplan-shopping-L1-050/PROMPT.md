# DeepPlanning Shopping Task Level 1 #50

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing some shopping to update my wardrobe for the year. First, I'm looking for a popular item for men from The North Face; specifically, it needs to have more than 350 five-star ratings. I also need a very reliable all-seasons product for men, so I'm only interested in something with fewer than 5 one-star reviews. To round things out for the milder weather, I'm searching for an item suitable for spring and autumn. For this one, I want to ensure high quality, so it must have an average score greater than 4.5 and also have fewer than 5 one-star reviews.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
