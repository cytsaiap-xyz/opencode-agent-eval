# DeepPlanning Shopping Task Level 2 #22

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting my gear ready for the new season and need to order a few things for myself. First, I'm looking for a popular item that's suitable for spring or autumn. It needs to be well-liked, so it must have more than 400 five-star ratings and over 90 four-star ratings. I also want to ensure it’s available, with a stock quantity of more than 100. Next, I'm looking for something for women from the brand Converse that can get to me in less than 3 days. I’m only interested in top-rated products with an average score over 4.5 and a stock quantity of more than 300. I also need an item in size XS with an average score greater than 4.5 and more than 800 total reviews, and it absolutely must have a transport time of less than 2 days. Finally, I'm looking for the red 'Speedcross Trail Running Shoes' from Salomon, with an average score over 4.5 and more than 1200 total reviews. Please help me find options that fall within a budget of 3234 to 3265.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
