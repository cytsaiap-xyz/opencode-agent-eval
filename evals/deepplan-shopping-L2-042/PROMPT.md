# DeepPlanning Shopping Task Level 2 #42

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a quick wardrobe update and need to order a few things that can get here fast. First, I'm looking for an item from the brand Anta. It's important that it's well-reviewed, so I want it to have an average score greater than 4.5 and more than 850 total reviews, and it must have a transport time of less than 2. Next, I need a popular product from Adidas with a monthly sales volume over 1800. I'm particular about quality, so it needs an average score above 4.5, with fewer than 25 one-star reviews and less than 80 three-star reviews. Finally, I'm searching for something specific from Vans; it must be the color Gold, have a total sales volume over 3400, more than 500 total reviews, and also a transport time of less than 2. Find me some products where the total price is no less than 1876 and no more than 2560.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
