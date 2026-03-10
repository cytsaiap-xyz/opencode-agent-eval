# DeepPlanning Shopping Task Level 1 #32

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing some urgent online shopping to update my wardrobe and need everything to arrive quickly. First, I'm looking for a popular item from Levi's that has a monthly sales volume of more than 450. Since I'm in a hurry, the transport time must be less than 2 days. To go with that, I also need something from Nike in a size 42 that's suitable for all seasons. It must be well-regarded, with more than 800 four-star ratings, and also needs to have a transport time of less than 2 days. Finally, I'm searching for a silver item in size XXL. I want to make sure it's available and has been a steady seller, so it must have a stock quantity of over 100 and a total sales volume of more than 550.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
