# DeepPlanning Shopping Task Level 1 #43

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a big wardrobe refresh and need everything delivered quickly, so for all these items, the transport time must be less than 2. First, I'm looking for a specific pair of 'Men's Vaughn Canvas Sneaker' for Spring/Autumn, which must have an average score over 4.5 and fewer than 15 three-star reviews. For the colder weather, I also need a men's product from Anta that's suitable for Winter and has 'Thermal Fleece Pullover' in its name. Then, I’m searching for something from Adidas in light grey and size 44, with an average rating of more than 4.5. To finish my order, I want to find a popular item from Nike that has a stock quantity of more than 800 and fewer than 10 one-star reviews.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
