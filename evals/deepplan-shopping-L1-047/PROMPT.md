# DeepPlanning Shopping Task Level 1 #47

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a big wardrobe refresh for different seasons and occasions. First, for a summer event, I'm looking for a popular silver item from Zara with a monthly sales volume over 900, and since I need it soon, the transport time must be less than 5 days. Next, I need a staple piece for women from Uniqlo in a coffee color; I want something well-vetted, so it must have more than 1800 total reviews. I'm also searching for a best-selling item from The North Face that has a total sales volume of over 2800 and an excellent average rating above 4.5. Finally, to prepare for winter, I need something in beige that is highly rated, specifically with fewer than 5 one-star reviews but more than 40 four-star reviews.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
