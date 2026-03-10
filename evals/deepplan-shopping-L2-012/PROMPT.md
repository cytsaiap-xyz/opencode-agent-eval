# DeepPlanning Shopping Task Level 2 #12

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing some online shopping to refresh my wardrobe with a few specific items. First, I'm looking for something pink from the brand Levi's, and I want to ensure it’s well-liked, so it must have fewer than 15 two-star reviews and less than 40 three-star reviews. Next, I need a popular item in size 37 that I can get very quickly, so the transport time must be less than 2. It also needs to have a monthly sales volume over 400, more than 300 total reviews, and fewer than 10 two-star reviews. Lastly, I’m searching for a coffee-colored product from Anta that has an average score greater than 4.5 and more than 80 four-star reviews. Find me some products where the total price is no less than 1086 and no more than 1332.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
