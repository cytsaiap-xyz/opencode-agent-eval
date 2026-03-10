# DeepPlanning Shopping Task Level 3 #7

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm planning a complete outfit upgrade and need to order a few specific items online. First, I'm looking for a product with "Trail Performance Long-Sleeve" in its name that has an average rating above 4.5 and a stock quantity over 100 to ensure availability. Next, I need something that's clearly popular and well-reviewed, with more than 100 five-star reviews, over 140 total reviews, more than 20 four-star reviews, and fewer than 5 three-star reviews to show consistent quality. Finally, I'm searching for a women's item in size XL that has "Ruffle" in the product name and more than 5 three-star reviews in its rating distribution, as I want something with a decent amount of feedback to gauge fit and style accurately.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
