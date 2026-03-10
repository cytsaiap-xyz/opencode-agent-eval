# DeepPlanning Shopping Task Level 1 #34

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting some new gear for my spring and autumn activities. First, I’m looking for a product from the Salomon brand in Green, and I want to ensure it's well-liked by checking that it has fewer than 10 two-star reviews. To go with that, I need another Salomon item, specifically in Olive Green, suitable for Spring/Autumn, with 'X-Adventure Trail Running' in the name and a transport time of less than 2 days. I also need to find a product with 'Phoenix Fleece' in the name that can arrive quickly, so it must have a transport time of less than 2 days, over 600 five-star reviews, and a stock quantity greater than 200. Next, I need a highly-rated item in Grey with more than 1100 total reviews, fewer than 35 three-star reviews, and less than 10 one-star reviews. Finally, I'm looking for a popular size S item with a monthly sales volume over 950 that also has a transport time of less than 2 days.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
