# DeepPlanning Shopping Task Level 1 #12

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I have a last-minute event this weekend and need to get an outfit together quickly. First, I'm looking for a highly-rated product that can arrive in under 2 days. To ensure quality, it must have more than 1800 total reviews, with over 250 four-star reviews, but fewer than 50 three-star and less than 10 one-star reviews. To go with that, I need something very specific in Olive Green, size 38. Since I can't try it on, I want a popular item with a total sales volume over 4500, more than 1800 total reviews, and at least 300 four-star reviews. Lastly, I'm looking for a popular item from the brand Converse that has an average score greater than 4.5, a monthly sales volume of over 800, and fewer than 10 one-star reviews.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
