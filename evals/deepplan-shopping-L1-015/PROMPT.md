# DeepPlanning Shopping Task Level 1 #15

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing some online shopping to update my gear and wardrobe. First, I need to find a popular item and I need it fast, so I'm looking for something with a transport time of less than 2, a total sales volume greater than 3200, and over 150 total reviews. Next, I'm searching for a very specific men's product from Nike that has 'Air Zoom Pegasus 41' in its name; it's a huge seller, so it must have a total sales volume of more than 45000. Finally, I'm trying to find a well-regarded item from Levi's in size L, so I want to see options with more than 2500 five-star reviews and over 400 four-star reviews.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
