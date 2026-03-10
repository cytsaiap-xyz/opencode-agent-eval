# DeepPlanning Shopping Task Level 1 #23

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a major wardrobe overhaul and need to pick up a few things for every season. First, for summer, I'm looking for a popular item from Levi's that has a stock quantity greater than 200 and a total sales volume of more than 5000. Next, for the colder months, I need some black Down Pants suitable for winter; they should be a popular choice with a total sales volume over 3500. To round things out, I'm searching for a versatile all-seasons product. It must be highly rated, with an average score over 4.5 and more than 3000 total reviews. Since I need it quickly, the transport time has to be less than 2 days, and it should have a stock quantity of more than 800.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
