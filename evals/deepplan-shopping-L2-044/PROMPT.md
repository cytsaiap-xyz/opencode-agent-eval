# DeepPlanning Shopping Task Level 2 #44

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm refreshing my wardrobe for various activities and need to find a few specific items. First, I'm looking for the 'Men's Classic 574 Core Sneakers' from the brand New Balance for Men, and I only want to see ones with more than 350 four-star reviews and less than 20 two-star reviews. I also need some black 'Hiking Shoes' delivered quickly, so the transport time must be less than 3. For casual use, I need some men's 'Canvas Sneakers' with over 1300 total reviews and fewer than 100 three-star reviews. To go with them, I need a 'Training Top' from Li-Ning with over 1100 total reviews and less than 15 two-star reviews. Lastly, I'm looking for a popular item with total sales over 12,000, a score above 4.5, fewer than 50 three-star reviews, and a transport time under 10 days. Find me some products where the total price is no less than 2590 and no more than 2681.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
