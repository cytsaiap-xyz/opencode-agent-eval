# DeepPlanning Shopping Task Level 1 #29

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm overhauling my footwear collection for the whole year and have some specific items I need to buy. First, I'm looking for the Men's Urban Pulse Runner Shoes from Adidas, suitable for all seasons. As I want a popular and well-regarded product, it must have more than 1600 five-star reviews and less than 100 three-star reviews, plus a transport time of less than 2. Next, for transitional weather, I need a product from Timberland that is suitable for Spring/Autumn and has a name containing 'Chukka Boot'; it must have more than 800 total reviews. Lastly, for the colder months, I'm searching for a men's product with 'Winter Hiking Boots' in the name. I need it in size 41, with a stock quantity of more than 100 and a transport time of less than 5.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
