# DeepPlanning Shopping Task Level 1 #10

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I have a last-minute event to attend and need to get a few things delivered quickly. First, I'm looking for a product from Zara in Navy Blue that has a transport time of less than 2. Next, I need something from the brand Bosideng that's suitable for Spring/Autumn weather. To ensure it's a popular choice, I want it to have a monthly sales volume of more than 1800 and over 550 four-star ratings, and it also must have a transport time of less than 2 days. While I'm looking at that brand, I'm also searching for another highly-rated Bosideng item with more than 700 five-star ratings, over 100 four-star ratings, and more than 850 total reviews, which must also have a transport time of less than 2.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
