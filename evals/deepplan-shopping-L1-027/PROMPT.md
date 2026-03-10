# DeepPlanning Shopping Task Level 1 #27

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing some last-minute online shopping for an upcoming trip and need everything to arrive quickly. First, I'm looking for a camel-colored item suitable for Spring/Autumn with an average score over 4.5 and a transport time of less than 5 days. Next, I need a very specific light grey product with 'HOVR Phantom 3' in its name. It must be in stock with a quantity over 150, have fewer than 5 two-star reviews, and arrive in under 2 days. I also want a popular pink item with a monthly sales volume over 800 and more than 100 four-star reviews, shipped within 5 days. From The North Face, I need an olive green product that sells well—over 700 monthly—has more than 100 four-star reviews, and can get here in less than 2 days. From New Balance, I'm looking for an item in size M with over 800 in stock, also with a transport time under 2 days. Finally, I need a brown item with a total sales volume over 9000, more than 850 total reviews but fewer than 30 three-star reviews, arriving within 5 days.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
